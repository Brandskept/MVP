'use client';
import Link from 'next/link';

export interface DesignHeaderProps {
  surveyTitle: string;
}

const steps = ['Design', 'Share', 'Integrate', 'Responses', 'Analytics'];

export default function DesignHeader({ surveyTitle }: DesignHeaderProps) {
  return (
    <header className="border-b bg-white px-4 py-3">
      <div className="mx-auto flex max-w-screen-xl items-center justify-between">
        <div className="flex items-center space-x-6">
          <Link href="#" className="whitespace-nowrap text-sm text-blue-600 hover:underline">
            ← My Teamspace / {surveyTitle}
          </Link>
          <ol className="flex space-x-4 text-sm">
            {steps.map((label, index) => (
              <li
                key={label}
                aria-current={index === 0 ? 'step' : undefined}
                className={index === 0 ? 'font-medium text-blue-600' : 'text-gray-500'}
              >
                {index + 1}. {label}
              </li>
            ))}
          </ol>
        </div>
        <div className="flex items-center space-x-4">
          <span className="text-sm text-gray-500">
            Draft Saved <span aria-hidden="true">✔</span>
          </span>
          <button
            type="button"
            aria-label="Preview"
            className="p-2 text-gray-500 hover:text-gray-700 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="h-5 w-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.458 12C3.732 7.943 7.523 5 12 5s8.268 2.943 9.542 7c-1.274 4.057-5.065 7-9.542 7s-8.268-2.943-9.542-7z"
              />
              <circle cx="12" cy="12" r="3" />
            </svg>
          </button>
          <button className="rounded bg-blue-600 px-4 py-2 text-sm text-white hover:bg-blue-700">
            Publish
          </button>
          <button className="text-sm text-blue-600 hover:underline">View plans</button>
        </div>
      </div>
    </header>
  );
}
