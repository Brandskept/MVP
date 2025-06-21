import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Campaign() {
  const router = useRouter();
  const { id } = router.query;
  const [poll, setPoll] = useState(null);
  const [option, setOption] = useState('A');
  const [message, setMessage] = useState('');

  useEffect(() => {
    if (!id) return;
    fetch(`/api/polls/${id}`)
      .then(res => res.json())
      .then(setPoll)
      .catch(() => {});
  }, [id]);

  const vote = async () => {
    const res = await fetch(`/api/polls/${id}/vote`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ userId: 'demo-user', option })
    });
    const data = await res.json();
    setMessage(`Thank you! You have ${data.points} points.`);
  };

  if (!poll) return <p>Loading...</p>;

  return (
    <div>
      <h1>{poll.question}</h1>
      <label>
        <input type="radio" checked={option==='A'} onChange={()=>setOption('A')} /> {poll.options[0]}
      </label>
      <label>
        <input type="radio" checked={option==='B'} onChange={()=>setOption('B')} /> {poll.options[1]}
      </label>
      <button onClick={vote}>Vote</button>
      {message && <p>{message}</p>}
    </div>
  );
}
