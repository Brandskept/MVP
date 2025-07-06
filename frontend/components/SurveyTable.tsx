import React from 'react';

export default function SurveyTable() {
  return (
    <table className="min-w-full border text-left">
      <thead>
        <tr>
          <th className="border p-2">Survey</th>
          <th className="border p-2">Status</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="border p-2">Sample Survey</td>
          <td className="border p-2">Active</td>
        </tr>
      </tbody>
    </table>
  );
}
