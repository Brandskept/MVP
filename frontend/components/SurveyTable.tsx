import Link from 'next/link';
import { useEffect, useState } from 'react';

interface Survey {
  id: number;
  question: string;
}

export default function SurveyTable() {
  const [surveys, setSurveys] = useState<Survey[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('/api/polls')
      .then((res) => res.json())
      .then((data) => setSurveys(data))
      .catch(() => setSurveys([]))
      .finally(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <div className="space-y-2">
        {Array.from({ length: 3 }).map((_, i) => (
          <div key={i} className="h-8 rounded bg-gray-200 animate-pulse" />
        ))}
      </div>
    );
  }

  if (surveys.length === 0) {
    return (
      <div className="py-8 text-center">
        <p className="mb-4 text-gray-600">No surveys yet.</p>
        <Link href="/admin/create-poll" className="font-medium text-blue-600 underline">
          + Create Survey
        </Link>
      </div>
    );
  }

  return (
    <table className="min-w-full border text-left">
      <thead>
        <tr>
          <th className="border px-4 py-2">Question</th>
        </tr>
      </thead>
      <tbody>
        {surveys.map((s) => (
          <tr key={s.id}>
            <td className="border px-4 py-2">
              <Link href={`/campaign/${s.id}`} className="text-blue-600 underline">
                {s.question}
              </Link>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
