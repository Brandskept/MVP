import React from 'react';

export type Survey = {
  id: number;
  title: string;
  responses: number;
  status: string;
  modified: string;
  lastResponse: string;
};

const sampleSurveys: Survey[] = [
  {
    id: 1,
    title: 'Customer Satisfaction',
    responses: 120,
    status: 'active',
    modified: '2024-05-01',
    lastResponse: '2024-05-07',
  },
  {
    id: 2,
    title: 'Market Research',
    responses: 80,
    status: 'closed',
    modified: '2024-04-25',
    lastResponse: '2024-04-28',
  },
  {
    id: 3,
    title: 'Product Feedback',
    responses: 45,
    status: 'active',
    modified: '2024-05-05',
    lastResponse: '2024-05-06',
  },
  {
    id: 4,
    title: 'Employee Engagement',
    responses: 200,
    status: 'closed',
    modified: '2024-04-10',
    lastResponse: '2024-04-17',
  },
  {
    id: 5,
    title: 'Website Usability',
    responses: 60,
    status: 'active',
    modified: '2024-05-03',
    lastResponse: '2024-05-07',
  },
];

export function useSurveys() {
  const [surveys] = React.useState<Survey[]>(sampleSurveys);
  return surveys;
}

export default function SurveyTable() {
  const surveys = useSurveys();

  return (
    <div className="overflow-x-auto">
      <table className="min-w-full divide-y divide-gray-300">
        <thead>
          <tr className="bg-gray-50">
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Title</th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Responses</th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Status</th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Modified</th>
            <th className="px-4 py-2 text-left text-sm font-semibold text-gray-700">Last Response</th>
          </tr>
        </thead>
        <tbody className="divide-y divide-gray-200">
          {surveys.map((s) => (
            <tr key={s.id} className="odd:bg-white even:bg-gray-50 hover:bg-gray-100">
              <td className="px-4 py-2 whitespace-nowrap">{s.title}</td>
              <td className="px-4 py-2 whitespace-nowrap">{s.responses}</td>
              <td className="px-4 py-2 whitespace-nowrap">{s.status}</td>
              <td className="px-4 py-2 whitespace-nowrap">{s.modified}</td>
              <td className="px-4 py-2 whitespace-nowrap">{s.lastResponse}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
