const express = require('express');
const app = express();
app.use(express.json());

const polls = [];
const users = {}; // userId -> {points: Number}
let nextId = 1;

// Create a new poll (A/B test)
app.post('/api/admin/polls', (req, res) => {
  const { question, optionA, optionB } = req.body;
  if (!question || !optionA || !optionB) {
    return res.status(400).json({ error: 'Missing fields' });
  }
  const poll = {
    id: nextId++,
    question,
    options: [optionA, optionB],
    votes: { A: 0, B: 0 },
  };
  polls.push(poll);
  res.json(poll);
});

// List all polls
app.get('/api/polls', (req, res) => {
  res.json(polls);
});

// Get a single poll
app.get('/api/polls/:id', (req, res) => {
  const poll = polls.find(p => p.id === Number(req.params.id));
  if (!poll) return res.status(404).json({ error: 'Poll not found' });
  res.json(poll);
});

// Vote on a poll
app.post('/api/polls/:id/vote', (req, res) => {
  const poll = polls.find(p => p.id === Number(req.params.id));
  if (!poll) return res.status(404).json({ error: 'Poll not found' });
  const { userId, option } = req.body;
  if (!userId || !['A', 'B'].includes(option)) {
    return res.status(400).json({ error: 'Invalid vote' });
  }
  poll.votes[option]++;
  const user = users[userId] || { points: 0 };
  user.points += 10;
  users[userId] = user;
  res.json({ success: true, points: user.points });
});

// Get user points and simple rewards
app.get('/api/users/:userId', (req, res) => {
  const user = users[req.params.userId] || { points: 0 };
  const rewards = user.points >= 100 ? ['Gold reward'] : [];
  res.json({ points: user.points, rewards });
});

if (!module.parent) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => console.log(`Server running on port ${port}`));
}

module.exports = app;
