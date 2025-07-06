'use client';
import React, { useEffect, useRef } from 'react';

export interface CreateSurveyModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSelect: (mode: 'scratch' | 'template') => void;
}

function useKeyPress(key: string, handler: () => void) {
  useEffect(() => {
    function listener(e: KeyboardEvent) {
      if (e.key === key) {
        handler();
      }
    }
    window.addEventListener('keydown', listener);
    return () => window.removeEventListener('keydown', listener);
  }, [key, handler]);
}

export default function CreateSurveyModal({ isOpen, onClose, onSelect }: CreateSurveyModalProps) {
  const dialogRef = useRef<HTMLDivElement>(null);

  useKeyPress('Escape', () => {
    if (isOpen) onClose();
  });

  useEffect(() => {
    if (!isOpen) return;
    const focusable = dialogRef.current?.querySelectorAll<HTMLElement>(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable?.[0];
    first?.focus();

    function trap(e: KeyboardEvent) {
      if (e.key !== 'Tab' || !focusable || focusable.length === 0) return;
      const firstEl = focusable[0];
      const lastEl = focusable[focusable.length - 1];
      if (e.shiftKey) {
        if (document.activeElement === firstEl) {
          e.preventDefault();
          lastEl.focus();
        }
      } else {
        if (document.activeElement === lastEl) {
          e.preventDefault();
          firstEl.focus();
        }
      }
    }
    document.addEventListener('keydown', trap);
    return () => document.removeEventListener('keydown', trap);
  }, [isOpen]);

  if (!isOpen) return null;

  function handleBackdropClick(e: React.MouseEvent<HTMLDivElement>) {
    if (e.target === e.currentTarget) {
      onClose();
    }
  }

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50"
      role="dialog"
      aria-modal="true"
      onClick={handleBackdropClick}
    >
      <div
        ref={dialogRef}
        className="relative w-full max-w-md rounded-2xl bg-white p-6 shadow-xl"
      >
        <button
          aria-label="Close"
          className="absolute right-4 top-4 text-2xl leading-none text-gray-500 hover:text-gray-700 focus:outline-none"
          onClick={onClose}
        >
          &times;
        </button>
        <h2 className="mb-6 text-center text-lg font-semibold">
          How would you like to create your survey?
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          <button
            className="flex flex-col items-center rounded-2xl bg-gray-50 p-4 shadow hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={() => onSelect('scratch')}
          >
            <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-blue-100 text-blue-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <span className="font-medium">Create from scratch</span>
            <span className="text-sm text-gray-500 text-center">
              Jump right in and build something beautiful
            </span>
          </button>
          <button
            className="flex flex-col items-center rounded-2xl bg-gray-50 p-4 shadow hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={() => onSelect('template')}
          >
            <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-full bg-green-100 text-green-600">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="2"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 10h16M4 14h8m-8 4h8" />
              </svg>
            </div>
            <span className="font-medium">Create from template</span>
            <span className="text-sm text-gray-500 text-center">
              Pick a premade template and customize it
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}
