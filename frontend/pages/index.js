import { useEffect, useState } from 'react';

export default function Home() {
  const [polls, setPolls] = useState([]);

  useEffect(() => {
    fetch('/api/polls')
      .then(res => res.json())
      .then(setPolls)
      .catch(() => {});
  }, []);

  return (
    <div>
      <h1>Active Campaigns</h1>
      <ul>
        {polls.map(p => (
          <li key={p.id}>
            <a href={`/campaign/${p.id}`}>{p.question}</a>
          </li>
        ))}
      </ul>
      <a href="/admin/create-poll">Create a Poll</a>
    </div>
  );
}
