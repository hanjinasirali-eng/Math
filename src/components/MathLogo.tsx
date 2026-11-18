import React from 'react';
import { ChapterId } from '../types/math';

export const MathLogo: React.FC<{ className?: string }> = ({
  className = 'w-8 h-8',
}) => (
  <svg
    viewBox="0 0 40 40"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
    aria-hidden="true"
  >
    <rect
      x="2"
      y="2"
      width="36"
      height="36"
      rx="9"
      className="fill-blue-600 dark:fill-blue-500"
    />
    <path
      d="M11 13H21L15 20L21 27H11"
      stroke="white"
      strokeWidth="2.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M25 14V26M29.5 14V26M23.5 17H31"
      stroke="white"
      strokeWidth="2.1"
      strokeLinecap="round"
    />
  </svg>
);

export const ChapterGlyph: React.FC<{
  chapterId: ChapterId;
  className?: string;
}> = ({ chapterId, className = 'w-6 h-6' }) => {
  switch (chapterId) {
    case 'numbers':
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          aria-hidden="true"
        >
          <path d="M4 6h16" />
          <path d="M7 10h10" />
          <path d="M5 17l4-4 4 4" />
          <path d="M15 13h4v6" />
        </svg>
      );
    case 'algebra':
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          aria-hidden="true"
        >
          <path d="M5 7l6 10" />
          <path d="M11 7L5 17" />
          <path d="M14 12h6" />
          <path d="M14 16h6" />
          <path d="M17 6a2 2 0 1 1 2 2c-1 1-2 1.5-2 2.5h2.5" />
        </svg>
      );
    case 'measurement':
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          aria-hidden="true"
        >
          <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9L12 3z" />
          <path d="M12 12l8-4.5" />
          <path d="M12 12v9" />
          <path d="M12 12L4 7.5" />
        </svg>
      );
    case 'geometry':
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          aria-hidden="true"
        >
          <polygon points="12 4 3 20 21 20 12 4" />
          <path d="M12 4v16" />
          <path d="M12 16h4v4" />
        </svg>
      );
    case 'statistics':
      return (
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.9"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={className}
          aria-hidden="true"
        >
          <path d="M4 20h16" />
          <rect x="6" y="12" width="3" height="8" rx="0.5" />
          <rect x="11" y="7" width="3" height="13" rx="0.5" />
          <rect x="16" y="4" width="3" height="16" rx="0.5" />
        </svg>
      );
  }
};
