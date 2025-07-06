'use client';
import SearchBar from '../components/SearchBar';
import { SurveyTable } from '../components';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-4">
      <h1 className="text-2xl font-bold">Welcome to the Next.js app!</h1>
      <SearchBar />
      <SurveyTable />
    </main>
  );
}
