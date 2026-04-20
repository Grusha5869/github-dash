'use client';

import { useThemeStore } from '@/stores/themeStore';

export default function ThemeBtn() {
  const { isDark, toggleTheme } = useThemeStore();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 transition absolute top-3 right-3"
      aria-label="Переключить тему"
    >
      {isDark ? '🌞' : '🌙'}
    </button>
  );
}