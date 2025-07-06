'use client';
import { useState } from 'react';

export interface QuestionTabsProps {
  onChange?: (tabKey: string) => void;
}

const tabs = [
  { key: 'options', label: 'Options' },
  { key: 'repeat', label: 'Repeat' },
  { key: 'logic', label: 'Logic' },
  { key: 'assignment', label: 'Assignment' },
  { key: 'feedback', label: 'Feedback' },
  { key: 'messages', label: 'Messages' },
];

export default function QuestionTabs({ onChange }: QuestionTabsProps) {
  const [active, setActive] = useState(tabs[0].key);

  function handleClick(key: string) {
    setActive(key);
    onChange?.(key);
  }

  return (
    <div role="tablist" className="flex space-x-4 border-b">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          role="tab"
          aria-selected={active === tab.key}
          onClick={() => handleClick(tab.key)}
          className={`px-4 py-2 -mb-px border-b-2 text-sm font-medium focus:outline-none ${active === tab.key ? 'border-blue-500 text-blue-600' : 'border-transparent text-gray-600 hover:text-gray-800'}`}
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
