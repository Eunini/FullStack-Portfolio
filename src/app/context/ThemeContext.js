"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';

const ThemeContext = createContext(undefined);

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

export const ThemeProvider = ({ children }) => {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isClient, setIsClient] = useState(false);

  // Only run on client side
  useEffect(() => {
    setIsClient(true);
    // Check for saved theme preference or default to dark mode
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme) {
      setIsDarkMode(savedTheme === 'dark');
    }
  }, []);

  // Apply theme to document
  useEffect(() => {
    if (!isClient) return;
    
    localStorage.setItem('theme', isDarkMode ? 'dark' : 'light');
    document.documentElement.classList.toggle('dark', isDarkMode);
  }, [isDarkMode, isClient]);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
  };

  const theme = {
    isDarkMode,
    toggleTheme,
    isClient,
    colors: {
      primary: isDarkMode ? '#3B82F6' : '#2563EB',
      background: isDarkMode ? '#0F172A' : '#FFFFFF',
      surface: isDarkMode ? '#1E293B' : '#F8FAFC',
      text: {
        primary: isDarkMode ? '#FFFFFF' : '#0F172A',
        secondary: isDarkMode ? '#94A3B8' : '#64748B',
        accent: isDarkMode ? '#60A5FA' : '#3B82F6',
      },
      border: isDarkMode ? '#334155' : '#E2E8F0',
    }
  };

  return (
    <ThemeContext.Provider value={theme}>
      {children}
    </ThemeContext.Provider>
  );
};
