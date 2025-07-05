import { useEffect, useRef, useState } from "react";

export default function SearchBar() {
  const [query, setQuery] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    function handleShortcut(e: KeyboardEvent) {
      if ((e.ctrlKey || e.metaKey) && e.key === "/") {
        e.preventDefault();
        inputRef.current?.focus();
      }
    }
    window.addEventListener("keydown", handleShortcut);
    return () => window.removeEventListener("keydown", handleShortcut);
  }, []);

  function clear() {
    setQuery("");
    inputRef.current?.focus();
  }

  return (
    <div className="relative w-full max-w-md">
      <span className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
        >
          <circle cx="11" cy="11" r="8" />
          <line x1="21" y1="21" x2="16.65" y2="16.65" />
        </svg>
      </span>
      <input
        ref={inputRef}
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search (Ctrl + /)"
        className="w-full rounded border py-2 pl-9 pr-9"
      />
      {query && (
        <button
          type="button"
          aria-label="Clear"
          onClick={clear}
          className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      )}
      {!query && (
        <span className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-xs text-gray-400">
          Ctrl + /
        </span>
      )}
    </div>
  );
}
