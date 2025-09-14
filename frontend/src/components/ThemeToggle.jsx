import React from 'react';
import { useState } from 'react';

export default function ThemeToggle() {
  const [dark, setDark] = useState(false);

  return (
    <button onClick={() => setDark(!dark)} className="px-3 py-1 rounded-lg bg-gray-200 dark:bg-gray-800 text-gray-800 dark:text-gray-200">
      {dark ? '🌙 Dark' : '☀️ Light'}
    </button>
  );
}