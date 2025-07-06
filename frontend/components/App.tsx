import React from 'react';
import Sidebar from './Sidebar';
import Header from './Header';
import SearchBar from './SearchBar';
import ViewToggle from './ViewToggle';
import SurveyTable from './SurveyTable';

export default function App() {
  return (
    <div className="grid min-h-screen grid-cols-[250px_1fr] grid-rows-[auto_1fr]">
      <div className="row-span-2 border-r">
        <Sidebar />
      </div>
      <Header />
      <main className="p-4 overflow-auto">
        <div className="flex items-center justify-between mb-4">
          <SearchBar />
          <ViewToggle />
        </div>
        <SurveyTable />
      </main>
    </div>
  );
}
