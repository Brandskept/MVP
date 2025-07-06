'use client';
import React from 'react';

export default function BuilderSidebar() {
  return (
    <aside className="flex h-full w-64 flex-col border-r bg-white">
      {/* Toggle */}
      <div className="flex border-b">
        <button className="flex-1 px-4 py-2 text-sm font-medium text-blue-600 border-b-2 border-blue-600">Builder</button>
        <button className="flex-1 px-4 py-2 text-sm font-medium text-gray-600 hover:bg-gray-50">Settings</button>
      </div>
      {/* Add Welcome Screen */}
      <div className="p-4 border-b">
        <button className="w-full rounded bg-blue-600 px-3 py-2 text-sm text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
          + Add Welcome Screen
        </button>
      </div>
      {/* Scrollable list */}
      <div className="flex-1 overflow-y-auto p-4 space-y-2">
        <div className="rounded border border-blue-500 bg-blue-50 px-3 py-2 text-sm font-medium">Welcome Screen</div>
        <label className="flex items-center space-x-2 rounded border px-3 py-2 text-sm hover:bg-gray-50">
          <input type="radio" checked readOnly className="form-radio text-blue-600" />
          <span>1. …</span>
        </label>
        <div className="rounded border px-3 py-2 text-sm hover:bg-gray-50">Submit Screen</div>
      </div>
      {/* Add Question Buttons */}
      <div className="space-y-2 border-t p-4">
        <button className="w-full rounded bg-blue-600 px-3 py-2 text-sm text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
          + Add Question
        </button>
        <button className="w-full rounded border border-blue-600 px-3 py-2 text-sm text-blue-600 hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-blue-500">
          ✨ Add with AI
        </button>
      </div>
      {/* Thank You Screen */}
      <div className="space-y-2 border-t p-4">
        <button className="w-full rounded bg-blue-600 px-3 py-2 text-sm text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500">
          + Add Thank You Screen
        </button>
        <div className="rounded border px-3 py-2 text-sm hover:bg-gray-50">
          Thank you for your time!
        </div>
      </div>
    </aside>
  );
}
