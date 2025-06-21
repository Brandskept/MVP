import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Points() {
  const router = useRouter();
  const { id } = router.query;
  const [data, setData] = useState(null);

  useEffect(() => {
    if (!id) return;
    fetch(`/api/users/${id}`)
      .then(res => res.json())
      .then(setData)
      .catch(() => {});
  }, [id]);

  if (!data) return <p>Loading...</p>;

  return (
    <div>
      <h1>User Points</h1>
      <p>Points: {data.points}</p>
      {data.rewards && data.rewards.length > 0 && (
        <ul>
          {data.rewards.map(r => (<li key={r}>{r}</li>))}
        </ul>
      )}
    </div>
  );
}
