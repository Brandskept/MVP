import React from 'react';
 dosu3m-codex/compose-app.tsx-layout-with-components

export default function ViewToggle() {
  return (
    <div className="flex space-x-2">
      <button className="border px-3 py-1 rounded">Grid</button>
      <button className="border px-3 py-1 rounded">List</button>
    </div>
  );
}

import FilterDropdown from './FilterDropdown';

export type ViewMode = 'list' | 'grid';

export interface ViewToggleProps {
  viewMode: ViewMode;
  onChange: (mode: ViewMode) => void;
}

export const ViewToggle: React.FC<ViewToggleProps> = ({ viewMode, onChange }) => {
  return (
    <div className="flex items-center gap-2">
      <button
        aria-label="List view"
        className={`p-2 border rounded ${viewMode === 'list' ? 'bg-gray-200' : ''}`}
        onClick={() => onChange('list')}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
        </svg>
      </button>
      <button
        aria-label="Grid view"
        className={`p-2 border rounded ${viewMode === 'grid' ? 'bg-gray-200' : ''}`}
        onClick={() => onChange('grid')}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path d="M3 3h6v6H3V3zm8 0h6v6h-6V3zM3 11h6v6H3v-6zm8 6v-6h6v6h-6z" />
        </svg>
      </button>
      <FilterDropdown label="All" />
    </div>
  );
};

export default ViewToggle;
 main
