'use client';
import React from 'react';

export default function QuestionConfig() {
  return (
    <div className="space-y-4 rounded border p-4">
      <div className="flex items-center gap-2">
        <label htmlFor="questionType" className="text-sm font-medium">
          Question type
        </label>
        <select
          id="questionType"
          className="rounded border px-2 py-1 text-sm"
          defaultValue="Choose Single"
        >
          <option>Choose Single</option>
          <option>Multiple Choice</option>
          <option>Text</option>
        </select>
        <button
          type="button"
          aria-label="Swap question type"
          className="ml-1 rounded border p-2"
        >
          ↔️
        </button>
      </div>

      <textarea
        className="h-32 w-full rounded border p-2"
        placeholder="Question"
      />
      <p className="text-xs text-gray-500">Tip: Use @ or Recall…</p>

      <div className="flex gap-2 text-sm">
        <button type="button" className="text-blue-600 underline">
          Rephrase
        </button>
        <button type="button" className="text-blue-600 underline">
          Recall
        </button>
      </div>

      <div className="flex gap-4 text-sm">
        <a href="#" className="text-blue-600 underline">
          + Add Question Description
        </a>
        <a href="#" className="text-blue-600 underline">
          + Add Media
        </a>
      </div>

      <div className="flex items-center">
        <label className="flex items-center gap-2 text-sm">
          <input type="checkbox" className="h-4 w-4 rounded border-gray-300" />
          Required
        </label>
        <button
          type="button"
          className="ml-auto rounded border bg-blue-600 px-3 py-1 text-white"
        >
          ✨ Add AI follow-up
        </button>
      </div>
    </div>
  );
}
