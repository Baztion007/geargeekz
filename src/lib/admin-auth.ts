'use client';

import { create } from 'zustand';

const ADMIN_PASSWORD = 'gearscope2026';
const SESSION_KEY = 'gs_admin_session';
const SESSION_DURATION = 4 * 60 * 60 * 1000; // 4 hours

interface AdminSession {
  authenticated: boolean;
  expiresAt: number;
}

interface AdminAuthState {
  isAuthenticated: boolean;
  isChecking: boolean;
  login: (password: string) => boolean;
  logout: () => void;
  checkSession: () => void;
}

function getStoredSession(): AdminSession | null {
  if (typeof window === 'undefined') return null;
  try {
    const raw = localStorage.getItem(SESSION_KEY);
    if (!raw) return null;
    const session: AdminSession = JSON.parse(raw);
    if (session.authenticated && session.expiresAt > Date.now()) {
      return session;
    }
    localStorage.removeItem(SESSION_KEY);
    return null;
  } catch {
    return null;
  }
}

function setStoredSession(session: AdminSession) {
  if (typeof window === 'undefined') return;
  try {
    localStorage.setItem(SESSION_KEY, JSON.stringify(session));
  } catch {
    // ignore
  }
}

export const useAdminAuth = create<AdminAuthState>((set) => ({
  isAuthenticated: false,
  isChecking: true,

  login: (password: string) => {
    if (password === ADMIN_PASSWORD) {
      const session: AdminSession = {
        authenticated: true,
        expiresAt: Date.now() + SESSION_DURATION,
      };
      setStoredSession(session);
      set({ isAuthenticated: true });
      return true;
    }
    return false;
  },

  logout: () => {
    if (typeof window !== 'undefined') {
      localStorage.removeItem(SESSION_KEY);
    }
    set({ isAuthenticated: false });
  },

  checkSession: () => {
    const session = getStoredSession();
    set({ isAuthenticated: !!session?.authenticated, isChecking: false });
  },
}));
