'use client';
import React, { useState } from 'react';

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
  const [active, setActive] = useState('options');

  function handleClick(key: string) {
    setActive(key);
    onChange?.(key);
  }

  return (
    <div role="tablist" className="flex border-b text-sm">
      {tabs.map((tab) => (
        <button
          key={tab.key}
          role="tab"
          aria-selected={active === tab.key}
          className={`mr-4 whitespace-nowrap border-b-2 px-2 py-1 font-medium focus:outline-none ${
            active === tab.key
              ? 'border-blue-600 text-blue-600'
              : 'border-transparent text-gray-600 hover:text-gray-800'
          }`}
          onClick={() => handleClick(tab.key)}
          type="button"
        >
          {tab.label}
        </button>
      ))}
    </div>
  );
}
