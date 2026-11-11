"use client";

import { useSyncExternalStore } from "react";
import { Moon, Sun } from "lucide-react";
import { MotionConfig } from "motion/react";
import type { ReactNode } from "react";

const storageKey = "theme";
const themeEvent = "theme-change";
let sessionTheme: "dark" | "light" | null = null;

function savedTheme() {
  try {
    const value = localStorage.getItem(storageKey);
    return value === "dark" || value === "light" ? value : null;
  } catch {
    return null;
  }
}

function applyTheme(dark: boolean) {
  document.documentElement.classList.toggle("dark", dark);
  window.dispatchEvent(new Event(themeEvent));
}

function subscribe(onChange: () => void) {
  const media = window.matchMedia("(prefers-color-scheme: dark)");
  const sync = () => applyTheme((sessionTheme ?? savedTheme() ?? (media.matches ? "dark" : "light")) === "dark");
  const storage = (event: StorageEvent) => {
    if (event.key === storageKey || event.key === null) {
      sessionTheme = null;
      sync();
    }
  };
  window.addEventListener(themeEvent, onChange);
  window.addEventListener("storage", storage);
  media.addEventListener("change", sync);
  sync();
  return () => {
    window.removeEventListener(themeEvent, onChange);
    window.removeEventListener("storage", storage);
    media.removeEventListener("change", sync);
  };
}

function getSnapshot() {
  return document.documentElement.classList.contains("dark");
}

function getServerSnapshot() {
  return null;
}

export function useTheme() {
  const dark = useSyncExternalStore(subscribe, getSnapshot, getServerSnapshot);
  const toggle = () => {
    const next = !getSnapshot();
    sessionTheme = next ? "dark" : "light";
    try {
      localStorage.setItem(storageKey, next ? "dark" : "light");
    } catch {}
    applyTheme(next);
  };
  return { dark, toggle };
}

export function ThemeMotion({ children }: { children: ReactNode }) {
  return <MotionConfig reducedMotion="user">{children}</MotionConfig>;
}

export default function ThemeToggle({ floating = false }: { floating?: boolean }) {
  const { dark, toggle } = useTheme();
  const label = dark === null ? "Toggle color theme" : `Switch to ${dark ? "light" : "dark"} mode`;

  return (
    <button
      type="button"
      onClick={toggle}
      aria-label={label}
      title={label}
      className={`${floating ? "fixed right-[max(1.5rem,env(safe-area-inset-right))] top-5 z-50" : "mb-2.5 shrink-0"} flex h-11 w-11 cursor-pointer items-center justify-center rounded-2xl border border-white/70 bg-white/55 text-[#3565a0] shadow-sm backdrop-blur-xl transition-colors hover:bg-white focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#3565a0] dark:border-[#38516f] dark:bg-[#1b304d] dark:text-[#a8c4e8] dark:hover:bg-[#294564] dark:focus-visible:outline-[#a8c4e8] motion-reduce:transition-none`}
    >
      <Moon aria-hidden="true" className="h-5 w-5 dark:hidden" strokeWidth={1.8} />
      <Sun aria-hidden="true" className="hidden h-5 w-5 dark:block" strokeWidth={1.8} />
    </button>
  );
}
