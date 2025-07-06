 dosu3m-codex/compose-app.tsx-layout-with-components
import React from 'react';

export default function Sidebar() {
  return (
    <aside className="p-4 bg-gray-100 h-full">Sidebar</aside>

"use client";
import { useState } from 'react';
import Link from 'next/link';

interface SidebarProps {
  currentTeam: string;
}

export default function Sidebar({ currentTeam }: SidebarProps) {
  const [showTeams, setShowTeams] = useState(false);
  const [showGlobal, setShowGlobal] = useState(false);

  return (
    <aside className="w-64 h-screen overflow-y-auto border-r border-gray-200 bg-white">
      <div className="p-4 border-b border-gray-200">
        <button
          className="flex items-center justify-between w-full text-left font-semibold hover:bg-gray-100 p-2 rounded"
          onClick={() => setShowTeams(!showTeams)}
          aria-expanded={showTeams}
          aria-controls="teams-menu"
        >
          <span>{currentTeam}</span>
          <span className="ml-auto flex items-center space-x-1">
            <svg
              className="w-4 h-4 transform transition-transform" 
              style={{ transform: showTeams ? 'rotate(180deg)' : undefined }}
              fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </span>
        </button>
        {showTeams && (
          <div id="teams-menu" className="mt-2 space-y-1" role="menu">
            <button className="w-full text-left p-2 hover:bg-gray-100 rounded">Team 1</button>
            <button className="w-full text-left p-2 hover:bg-gray-100 rounded">Team 2</button>
            <button className="w-full text-left p-2 hover:bg-gray-100 rounded flex items-center">
              <span className="mr-1">Add Team</span>
              <span className="text-xl leading-none">+</span>
            </button>
          </div>
        )}
      </div>

      <nav className="p-4 space-y-1">
        <Link href="#" className="block p-2 rounded hover:bg-gray-100">Team Items</Link>
        <Link href="#" className="block p-2 rounded hover:bg-gray-100">Team Templates</Link>
        <Link href="#" className="block p-2 rounded hover:bg-gray-100">Trash</Link>
        <Link href="#" className="block p-2 rounded hover:bg-gray-100">AI Data Analysis</Link>
        <Link href="#" className="block p-2 rounded hover:bg-gray-100">Audience Panel</Link>
        <Link href="#" className="block p-2 rounded hover:bg-gray-100">Settings</Link>
      </nav>

      <div className="border-t border-gray-200">
        <button
          className="flex items-center justify-between w-full p-4 font-semibold hover:bg-gray-100"
          onClick={() => setShowGlobal(!showGlobal)}
          aria-expanded={showGlobal}
          aria-controls="global-menu"
        >
          Global
          <svg
            className="w-4 h-4 transform transition-transform" 
            style={{ transform: showGlobal ? 'rotate(180deg)' : undefined }}
            fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true"
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
          </svg>
        </button>
        {showGlobal && (
          <nav id="global-menu" className="px-4 pb-4 space-y-1" role="menu">
            <Link href="#" className="block p-2 rounded hover:bg-gray-100">Academy</Link>
            <Link href="#" className="block p-2 rounded hover:bg-gray-100">Recruit Audience</Link>
            <Link href="#" className="block p-2 rounded hover:bg-gray-100">My Account</Link>
            <Link href="#" className="block p-2 rounded hover:bg-gray-100">Settings</Link>
            <Link href="#" className="block p-2 rounded hover:bg-gray-100">Pricing & Plans</Link>
            <Link href="#" className="block p-2 rounded hover:bg-gray-100">Request a Design</Link>
            <Link href="#" className="block p-2 rounded hover:bg-gray-100">Help Center</Link>
          </nav>
        )}
      </div>
    </aside>
 main
  );
}
