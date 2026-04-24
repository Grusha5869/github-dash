'use client';

import { useThemeStore } from '@/stores/themeStore';

export default function ThemeBtn() {
  const { isDark, toggleTheme } = useThemeStore();

  return (
    <button
      onClick={toggleTheme}
      className="p-2 rounded-full bg-(--bg-secondary) w-15 h-10 hover:bg-(--bg-secondary-hover) transition-(--transition-default) cursor-pointer font-roboto-flex"
      aria-label="Переключить тему"
    >
      {isDark ? '🌞' : '🌙'}
    </button>
  );
}