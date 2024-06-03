'use client';

import { useEffect, useState } from 'react';
import { CiLight } from "react-icons/ci";
import { MdDarkMode } from "react-icons/md";

const ThemeToggle = () => {
  const [theme, setTheme] = useState<string | null>('light');

  useEffect(() => {
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setTheme(savedTheme);
      document.documentElement.classList.add(savedTheme);
    } else {
      setTheme('light'); 
      document.documentElement.classList.add('light');
    }
  }, []);

  const toggleTheme = () => {
    if (theme === 'dark') {
      document.documentElement.classList.remove('dark');
      document.documentElement.classList.add('light');
      setTheme('light');
      localStorage.setItem('theme', 'light');
    } else {
      document.documentElement.classList.remove('light');
      document.documentElement.classList.add('dark');
      setTheme('dark');
      localStorage.setItem('theme', 'dark');
    }
  };

  return (
    <div className="rounded-s-full bg-primary text-white dark:bg-secondary dark:text-black absolute right-0 top-4" title='Change Theme'>
      <button
        onClick={toggleTheme}
        className="px-6 py-3 text-2xl rounded-s-full bg-primary text-white dark:bg-secondary dark:text-black absolute right-0 top-4"
      >
        {theme === 'dark' ? <CiLight /> : <MdDarkMode />}
      </button>
    </div>
  );
};

export default ThemeToggle;
