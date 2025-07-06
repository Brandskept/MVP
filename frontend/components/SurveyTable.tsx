 6mpkgq-codex/add-skeleton-loader-and-empty-state-message-to-surveytable
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

'use client';
import React from 'react';
import Link from 'next/link';

export type Poll = {
  id: number;
  question: string;
};

export default function SurveyTable() {
  const [surveys, setSurveys] = React.useState<Poll[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    fetch('/api/polls')
      .then((res) => res.json())
      .then((data) => setSurveys(data))
      .catch(() => {})
      .finally(() => setLoading(false));
  }, []);

  return (
    <div className="overflow-x-auto">
      {loading ? (
        <div className="p-4 text-sm text-gray-500 animate-pulse">Loading...</div>
      ) : surveys.length === 0 ? (
        <div className="p-4 text-center text-sm text-gray-700">
          No surveys found.{' '}
          <Link href="/admin/create-poll" className="text-blue-600 underline">
            + Create Survey
          </Link>
        </div>
      ) : (
        <table className="min-w-full divide-y divide-gray-300">
          <thead>
            <tr className="bg-gray-50">
              <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">
                Question
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {surveys.map((s) => (
              <tr key={s.id} className="odd:bg-white even:bg-gray-50 hover:bg-gray-100">
                <td className="px-4 py-2 whitespace-nowrap">
                  <Link href={`/campaign/${s.id}`} className="text-blue-600 hover:underline">
                    {s.question}
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
 main
  );
}
