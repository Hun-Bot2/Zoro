"use client";

import {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";

const STORAGE_KEY = "zoro-auth-session";

export type AuthUser = {
  name: string;
  email: string;
  company: string;
  plan: string;
  createdAt: string;
};

type AuthInput = {
  email: string;
  name?: string;
  company?: string;
};

type AuthContextValue = {
  user: AuthUser | null;
  isReady: boolean;
  login: (input: AuthInput) => AuthUser;
  signup: (input: AuthInput) => AuthUser;
  logout: () => void;
};

const AuthContext = createContext<AuthContextValue | null>(null);

function titleCase(value: string) {
  return value
    .split(/[._-\s]+/)
    .filter(Boolean)
    .map((part) => part.charAt(0).toUpperCase() + part.slice(1))
    .join(" ");
}

function createUser(input: AuthInput): AuthUser {
  const emailName = input.email.split("@")[0] ?? "Zoro User";
  const name = input.name?.trim() || titleCase(emailName) || "Zoro User";

  return {
    name,
    email: input.email.trim().toLowerCase(),
    company: input.company?.trim() || "Zoro Demo Co.",
    plan: "Scale",
    createdAt: new Date().toISOString(),
  };
}

export function AuthProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    try {
      const stored = window.localStorage.getItem(STORAGE_KEY);
      setUser(stored ? (JSON.parse(stored) as AuthUser) : null);
    } catch {
      setUser(null);
    } finally {
      setIsReady(true);
    }
  }, []);

  const value = useMemo<AuthContextValue>(() => {
    function persist(nextUser: AuthUser) {
      window.localStorage.setItem(STORAGE_KEY, JSON.stringify(nextUser));
      setUser(nextUser);
      return nextUser;
    }

    return {
      user,
      isReady,
      login(input) {
        return persist(createUser(input));
      },
      signup(input) {
        return persist(createUser(input));
      },
      logout() {
        window.localStorage.removeItem(STORAGE_KEY);
        setUser(null);
      },
    };
  }, [isReady, user]);

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error("useAuth must be used inside AuthProvider");
  }

  return context;
}
