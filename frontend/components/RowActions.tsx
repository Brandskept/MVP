import React from 'react';

export default function RowActions() {
  return (
    <div className="flex gap-2">
      <button aria-label="Edit" onClick={() => {}} type="button">✏️</button>
      <button aria-label="Preview" onClick={() => {}} type="button">👁️</button>
      <button aria-label="Duplicate" onClick={() => {}} type="button">📄</button>
      <button aria-label="Analytics" onClick={() => {}} type="button">📊</button>
      <button aria-label="Labels" onClick={() => {}} type="button">🏷️</button>
      <button aria-label="Favorite" onClick={() => {}} type="button">⭐</button>
      <button aria-label="More" onClick={() => {}} type="button">⋯</button>
    </div>
  );
}
