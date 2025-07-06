'use client';
import React, { useState } from 'react';

export default function OptionSetsEditor() {
  const [showMore, setShowMore] = useState(false);

  const toggle = () => setShowMore((v) => !v);

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-2">
        <label className="text-sm font-medium" htmlFor="option-set">
          Select Option
        </label>
        <select id="option-set" className="rounded border px-2 py-1 text-sm">
          <option value="set1">Set 1</option>
          <option value="set2">Set 2</option>
        </select>
        <button
          type="button"
          className="ml-auto rounded border px-2 py-1 text-sm hover:bg-gray-50 focus:outline-none focus:ring"
        >
          ✨ Generate Options
        </button>
      </div>

      <div className="grid gap-2">
        {[1, 2].map((n) => (
          <div key={n} className="grid grid-cols-[auto_1fr_auto_auto] items-center gap-2">
            <span className="text-sm font-medium">{`Option ${n}`}</span>
            <input
              type="text"
              placeholder="Option"
              className="w-full rounded border px-2 py-1 text-sm"
            />
            <button
              type="button"
              aria-label="Upload image"
              className="text-gray-500 hover:text-gray-700 focus:outline-none"
            >
              📷
            </button>
            <button
              type="button"
              aria-label="Delete option"
              className="text-gray-500 hover:text-red-600 focus:outline-none"
            >
              &times;
            </button>
          </div>
        ))}
      </div>

      <div className="flex flex-wrap gap-2">
        <button type="button" className="rounded border px-3 py-1 text-sm hover:bg-gray-50 focus:outline-none">
          Add Option
        </button>
        <button type="button" className="rounded border px-3 py-1 text-sm hover:bg-gray-50 focus:outline-none">
          Add "Other" Option
        </button>
        <button type="button" className="rounded border px-3 py-1 text-sm hover:bg-gray-50 focus:outline-none">
          Add Bulk Choice
        </button>
        <button type="button" className="rounded border px-3 py-1 text-sm hover:bg-gray-50 focus:outline-none">
          Assign Weight/Score
        </button>
      </div>

      <button
        type="button"
        onClick={toggle}
        className="text-sm text-blue-600 hover:underline focus:outline-none"
      >
        {showMore ? 'Show Less ▴' : 'Show More ▾'}
      </button>

      {showMore && (
        <div className="rounded border p-4 text-sm text-gray-700">Extra settings go here.</div>
      )}
    </div>
  );
}
