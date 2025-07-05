'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white border-b">
      <div className="mx-auto max-w-screen-xl px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center">
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              className="md:hidden mr-2 p-2 text-gray-500 focus:outline-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 5.25h16.5M3.75 12h16.5m-16.5 6.75h16.5"
                />
              </svg>
            </button>
            <Link href="/" className="text-lg font-semibold">
              BrandSkept
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            <span className="text-sm bg-gray-100 text-gray-800 px-2 py-1 rounded-full">
              0/10 Responses
            </span>
            <button className="px-3 py-2 rounded-md bg-gray-200 text-gray-800 text-sm">
              Upgrade
            </button>
            <button className="px-3 py-2 rounded-md border text-gray-800 text-sm">
              Book a demo
            </button>
            <button className="px-3 py-2 rounded-md bg-blue-600 text-white text-sm">
              + Create Survey
            </button>
          </div>
          <div className="relative ml-3">
            <button
              onClick={() => setMenuOpen(!menuOpen)}
              className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-300 focus:outline-none"
            >
              <span className="sr-only">Open user menu</span>
              <span className="text-sm font-medium text-gray-700">U</span>
            </button>
            {menuOpen && (
              <div className="absolute right-0 z-10 mt-2 w-40 origin-top-right rounded-md bg-white shadow-md">
                <Link
                  href="/profile"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Profile
                </Link>
                <Link
                  href="/logout"
                  className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                >
                  Logout
                </Link>
              </div>
            )}
          </div>
        </div>
        {mobileOpen && (
          <div className="md:hidden space-y-2 pb-4">
            <span className="block text-sm bg-gray-100 text-gray-800 px-2 py-1 rounded-full w-max">
              0/10 Responses
            </span>
            <button className="w-full px-3 py-2 rounded-md bg-gray-200 text-gray-800 text-sm">
              Upgrade
            </button>
            <button className="w-full px-3 py-2 rounded-md border text-gray-800 text-sm">
              Book a demo
            </button>
            <button className="w-full px-3 py-2 rounded-md bg-blue-600 text-white text-sm">
              + Create Survey
            </button>
          </div>
        )}
      </div>
    </header>
  );
}
