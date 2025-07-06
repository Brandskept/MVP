'use client';
import React from 'react';

export interface PreviewPanelProps {
  view: 'preview' | 'logic';
  onTabChange?: (view: 'preview' | 'logic') => void;
}

export default function PreviewPanel({ view, onTabChange }: PreviewPanelProps) {
  const tabClasses = (active: boolean) =>
    `flex-1 border-b-2 px-3 py-2 text-sm font-medium focus:outline-none ${
      active
        ? 'border-blue-600 text-blue-600'
        : 'border-transparent text-gray-600 hover:text-gray-800'
    }`;

  return (
    <div className="rounded border bg-white shadow">
      <div className="flex border-b">
        <button
          type="button"
          className={tabClasses(view === 'preview')}
          aria-selected={view === 'preview'}
          onClick={() => onTabChange?.('preview')}
        >
          Question Preview
        </button>
        <button
          type="button"
          className={tabClasses(view === 'logic')}
          aria-selected={view === 'logic'}
          onClick={() => onTabChange?.('logic')}
        >
          Logic Map
        </button>
      </div>
      <div className="p-4 text-sm">
        {view === 'preview' ? (
          <div className="space-y-4">
            <p className="font-medium">Sample Question?</p>
            <div className="space-y-2 pl-4">
              <input type="radio" disabled className="form-radio" />
              <br />
              <input type="radio" disabled className="form-radio" />
            </div>
            <button
              type="button"
              className="rounded bg-blue-600 px-4 py-2 text-white hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
        ) : (
          <div className="text-gray-500">Logic map goes here.</div>
        )}
      </div>
    </div>
  );
}
