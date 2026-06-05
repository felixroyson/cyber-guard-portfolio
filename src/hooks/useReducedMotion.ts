import { useEffect, useState } from "react";

const KEY = "reduced-motion";
const EVENT = "reduced-motion-change";

export function getReducedMotion(): boolean {
  if (typeof window === "undefined") return false;
  const stored = localStorage.getItem(KEY);
  if (stored === "1") return true;
  if (stored === "0") return false;
  return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
}

export function setReducedMotion(v: boolean) {
  localStorage.setItem(KEY, v ? "1" : "0");
  document.documentElement.classList.toggle("reduce-motion", v);
  window.dispatchEvent(new Event(EVENT));
}

export function useReducedMotion() {
  const [reduced, setReduced] = useState<boolean>(() => getReducedMotion());

  useEffect(() => {
    const apply = () => {
      const v = getReducedMotion();
      setReduced(v);
      document.documentElement.classList.toggle("reduce-motion", v);
    };
    apply();
    const mq = window.matchMedia("(prefers-reduced-motion: reduce)");
    mq.addEventListener("change", apply);
    window.addEventListener(EVENT, apply);
    return () => {
      mq.removeEventListener("change", apply);
      window.removeEventListener(EVENT, apply);
    };
  }, []);

  return [reduced, (v: boolean) => setReducedMotion(v)] as const;
}
