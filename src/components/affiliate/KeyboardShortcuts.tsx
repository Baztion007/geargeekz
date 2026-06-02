'use client';

import React, { useState, useEffect, useCallback } from 'react';
import { useRouterStore } from '@/lib/router';
import {
  Keyboard,
  Search,
  Home,
  Compass,
  TrendingUp,
  X,
} from 'lucide-react';

interface ShortcutItem {
  keys: string[];
  description: string;
  action: () => void;
  icon: React.ReactNode;
}

export function KeyboardShortcuts() {
  const [showDialog, setShowDialog] = useState(false);
  const goHome = useRouterStore((s) => s.goHome);
  const goToGuides = useRouterStore((s) => s.goToGuides);
  const goToTrending = useRouterStore((s) => s.goToTrending);
  const goToSearch = useRouterStore((s) => s.goToSearch);

  const shortcuts: ShortcutItem[] = [
    {
      keys: ['/', 'Ctrl+K'],
      description: 'Focus search',
      action: () => {
        const searchInput = document.querySelector<HTMLInputElement>(
          'input[placeholder*="Search"]'
        );
        if (searchInput) {
          searchInput.focus();
          searchInput.select();
        } else {
          goToSearch('');
        }
      },
      icon: <Search className="w-4 h-4" />,
    },
    {
      keys: ['Esc'],
      description: 'Close modals / quick view',
      action: () => {
        // Close any open dialog/modal
        const closeButton = document.querySelector<HTMLButtonElement>(
          '[data-state="open"] button[data-radix-collection-item], dialog[open] button, [role="dialog"] button[aria-label="Close"]'
        );
        if (closeButton) {
          closeButton.click();
        }
        setShowDialog(false);
      },
      icon: <X className="w-4 h-4" />,
    },
    {
      keys: ['H'],
      description: 'Go home',
      action: goHome,
      icon: <Home className="w-4 h-4" />,
    },
    {
      keys: ['G'],
      description: 'Go to guides',
      action: goToGuides,
      icon: <Compass className="w-4 h-4" />,
    },
    {
      keys: ['T'],
      description: 'Go to trending',
      action: goToTrending,
      icon: <TrendingUp className="w-4 h-4" />,
    },
    {
      keys: ['?'],
      description: 'Show keyboard shortcuts',
      action: () => setShowDialog(true),
      icon: <Keyboard className="w-4 h-4" />,
    },
  ];

  const handleKeyDown = useCallback(
    (e: KeyboardEvent) => {
      // Don't trigger shortcuts when typing in input/textarea
      const target = e.target as HTMLElement;
      if (
        target.tagName === 'INPUT' ||
        target.tagName === 'TEXTAREA' ||
        target.tagName === 'SELECT' ||
        target.isContentEditable
      ) {
        // Only allow Escape in input fields
        if (e.key === 'Escape') {
          target.blur();
          setShowDialog(false);
        }
        return;
      }

      // Ctrl+K or Cmd+K for search
      if ((e.ctrlKey || e.metaKey) && e.key === 'k') {
        e.preventDefault();
        const searchInput = document.querySelector<HTMLInputElement>(
          'input[placeholder*="Search"]'
        );
        if (searchInput) {
          searchInput.focus();
          searchInput.select();
        } else {
          goToSearch('');
        }
        return;
      }

      // / for search
      if (e.key === '/') {
        e.preventDefault();
        const searchInput = document.querySelector<HTMLInputElement>(
          'input[placeholder*="Search"]'
        );
        if (searchInput) {
          searchInput.focus();
          searchInput.select();
        } else {
          goToSearch('');
        }
        return;
      }

      // Escape
      if (e.key === 'Escape') {
        // Close any open dialog/modal
        const closeButton = document.querySelector<HTMLButtonElement>(
          '[data-state="open"] button[data-radix-collection-item], dialog[open] button, [role="dialog"] button[aria-label="Close"]'
        );
        if (closeButton) {
          closeButton.click();
        }
        setShowDialog(false);
        return;
      }

      // ? for help
      if (e.key === '?') {
        e.preventDefault();
        setShowDialog((prev) => !prev);
        return;
      }

      // H for home
      if (e.key === 'h' || e.key === 'H') {
        e.preventDefault();
        goHome();
        return;
      }

      // G for guides
      if (e.key === 'g' || e.key === 'G') {
        e.preventDefault();
        goToGuides();
        return;
      }

      // T for trending
      if (e.key === 't' || e.key === 'T') {
        e.preventDefault();
        goToTrending();
        return;
      }
    },
    [goHome, goToGuides, goToTrending, goToSearch]
  );

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);

  return (
    <>
      {/* Floating ? button */}
      <button
        onClick={() => setShowDialog(true)}
        className="fixed bottom-6 left-6 z-40 w-10 h-10 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 shadow-lg hover:shadow-xl hover:border-amber-400 dark:hover:border-amber-500 transition-all flex items-center justify-center text-gray-500 dark:text-gray-400 hover:text-amber-600 dark:hover:text-amber-400"
        aria-label="Keyboard shortcuts"
        title="Keyboard shortcuts (?)"
      >
        <Keyboard className="w-4 h-4" />
      </button>

      {/* Shortcuts dialog */}
      {showDialog && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setShowDialog(false)}
          />

          {/* Dialog */}
          <div className="relative bg-white dark:bg-gray-800 rounded-2xl shadow-2xl border border-gray-200 dark:border-gray-700 w-full max-w-md mx-4 overflow-hidden">
            {/* Header */}
            <div className="flex items-center justify-between p-4 border-b border-gray-200 dark:border-gray-700">
              <div className="flex items-center gap-2">
                <Keyboard className="w-5 h-5 text-amber-500" />
                <h2 className="font-bold text-gray-900 dark:text-white">
                  Keyboard Shortcuts
                </h2>
              </div>
              <button
                onClick={() => setShowDialog(false)}
                className="w-8 h-8 rounded-lg flex items-center justify-center text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {/* Shortcuts list */}
            <div className="p-4 space-y-1 max-h-80 overflow-y-auto">
              {shortcuts.map((shortcut, idx) => (
                <div
                  key={idx}
                  className="flex items-center justify-between py-2.5 px-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-gray-500 dark:text-gray-400">
                      {shortcut.icon}
                    </span>
                    <span className="text-sm text-gray-700 dark:text-gray-300">
                      {shortcut.description}
                    </span>
                  </div>
                  <div className="flex items-center gap-1">
                    {shortcut.keys.map((key, keyIdx) => (
                      <React.Fragment key={keyIdx}>
                        {keyIdx > 0 && (
                          <span className="text-[10px] text-gray-400 mx-0.5">
                            or
                          </span>
                        )}
                        <kbd className="px-2 py-1 text-xs font-mono bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-300 rounded border border-gray-200 dark:border-gray-600 min-w-[28px] text-center">
                          {key}
                        </kbd>
                      </React.Fragment>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Footer */}
            <div className="p-3 border-t border-gray-200 dark:border-gray-700 bg-gray-50 dark:bg-gray-800/50">
              <p className="text-[11px] text-gray-400 dark:text-gray-500 text-center">
                Press <kbd className="px-1 py-0.5 text-[10px] font-mono bg-gray-200 dark:bg-gray-700 rounded">?</kbd> anytime to toggle this dialog
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
