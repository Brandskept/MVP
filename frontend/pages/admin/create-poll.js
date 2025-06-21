import { useState } from 'react';

export default function CreatePoll() {
  const [question, setQuestion] = useState('');
  const [optionA, setOptionA] = useState('');
  const [optionB, setOptionB] = useState('');
  const [createdId, setCreatedId] = useState(null);

  const submit = async e => {
    e.preventDefault();
    const res = await fetch('/api/admin/polls', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ question, optionA, optionB })
    });
    const data = await res.json();
    if (data.id) setCreatedId(data.id);
  };

  return (
    <div>
      <h1>Create Poll / A-B Test</h1>
      <form onSubmit={submit}>
        <input value={question} onChange={e => setQuestion(e.target.value)} placeholder="Question" />
        <input value={optionA} onChange={e => setOptionA(e.target.value)} placeholder="Option A" />
        <input value={optionB} onChange={e => setOptionB(e.target.value)} placeholder="Option B" />
        <button type="submit">Create</button>
      </form>
      {createdId && <p>Created poll #{createdId}</p>}
    </div>
  );
}
