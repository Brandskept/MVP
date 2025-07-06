'use client';
import React, { useState } from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import SearchBar from './SearchBar';
import ViewToggle from './ViewToggle';
import SurveyTable from './SurveyTable';
import CreateSurveyModal from './CreateSurveyModal';

export default function App() {
  const [modalOpen, setModalOpen] = useState(false);

  return (
    <div className="grid min-h-screen grid-cols-[250px_1fr] grid-rows-[auto_1fr]">
      <div className="row-span-2 border-r">
        <Sidebar />
      </div>
      <Header />
      <main className="overflow-auto p-4">
        <div className="mb-4 flex items-center justify-between gap-2">
          <SearchBar />
          <ViewToggle />
          <button
            className="rounded bg-blue-600 px-3 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onClick={() => setModalOpen(true)}
          >
            + Create Survey
          </button>
        </div>
        <SurveyTable />
      </main>
      <CreateSurveyModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
        onSelect={(mode) => {
          console.log('create mode:', mode);
          setModalOpen(false);
        }}
      />
    </div>
  );
}
