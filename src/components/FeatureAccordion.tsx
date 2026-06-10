import { useCallback, useEffect, useId, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Sparkles } from "lucide-react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

export type FeatureItem = {
  title: string;
  content: React.ReactNode;
};

interface Props {
  id: string;
  items: FeatureItem[];
  allowMultiple?: boolean;
  defaultOpen?: number[];
  label?: string;
  showIcon?: boolean;
  variant?: "card" | "inline";
}

const STORAGE_PREFIX = "fa:";
const URL_PARAM = "fa";
const URL_EVENT = "fa-url-change";

const readStored = (id: string): number[] | null => {
  if (typeof window === "undefined") return null;
  try {
    const raw = sessionStorage.getItem(STORAGE_PREFIX + id);
    if (!raw) return null;
    const parsed = JSON.parse(raw);
    return Array.isArray(parsed) ? parsed.filter((n) => typeof n === "number") : null;
  } catch {
    return null;
  }
};

// URL encoding: ?fa=id1:0,2|id2:1
const parseUrl = (): Record<string, number[]> => {
  if (typeof window === "undefined") return {};
  const params = new URLSearchParams(window.location.search);
  const raw = params.get(URL_PARAM);
  if (!raw) return {};
  const map: Record<string, number[]> = {};
  raw.split("|").forEach((seg) => {
    const [k, v] = seg.split(":");
    if (!k) return;
    map[k] = (v ?? "")
      .split(",")
      .map((n) => parseInt(n, 10))
      .filter((n) => !Number.isNaN(n));
  });
  return map;
};

const writeUrl = (id: string, indices: number[]) => {
  if (typeof window === "undefined") return;
  const params = new URLSearchParams(window.location.search);
  const current = parseUrl();
  if (indices.length === 0) {
    delete current[id];
  } else {
    current[id] = indices;
  }
  const encoded = Object.entries(current)
    .map(([k, v]) => `${k}:${v.join(",")}`)
    .join("|");
  if (encoded) {
    params.set(URL_PARAM, encoded);
  } else {
    params.delete(URL_PARAM);
  }
  const newUrl = `${window.location.pathname}${
    params.toString() ? "?" + params.toString() : ""
  }${window.location.hash}`;
  window.history.replaceState(null, "", newUrl);
  window.dispatchEvent(new Event(URL_EVENT));
};

const FeatureAccordion = ({
  id,
  items,
  allowMultiple = false,
  defaultOpen = [],
  label = "Key Features",
  showIcon = true,
  variant = "inline",
}: Props) => {
  const [reduced] = useReducedMotion();
  const reactId = useId();
  const [open, setOpen] = useState<number[]>(() => {
    const fromUrl = parseUrl()[id];
    if (fromUrl) return fromUrl;
    return readStored(id) ?? defaultOpen;
  });

  // Sync to sessionStorage + URL
  useEffect(() => {
    try {
      sessionStorage.setItem(STORAGE_PREFIX + id, JSON.stringify(open));
    } catch {
      /* noop */
    }
    writeUrl(id, open);
  }, [id, open]);

  // Listen to external URL changes (back/forward, share-link load)
  useEffect(() => {
    const sync = () => {
      const fromUrl = parseUrl()[id];
      if (fromUrl) {
        setOpen((cur) =>
          cur.length === fromUrl.length && cur.every((v, i) => v === fromUrl[i])
            ? cur
            : fromUrl
        );
      }
    };
    window.addEventListener("popstate", sync);
    window.addEventListener(URL_EVENT, sync);
    return () => {
      window.removeEventListener("popstate", sync);
      window.removeEventListener(URL_EVENT, sync);
    };
  }, [id]);

  const toggle = useCallback(
    (i: number) => {
      setOpen((cur) => {
        const has = cur.includes(i);
        if (allowMultiple) {
          return has ? cur.filter((n) => n !== i) : [...cur, i];
        }
        return has ? [] : [i];
      });
    },
    [allowMultiple]
  );

  const spring = reduced
    ? { duration: 0 }
    : { type: "spring" as const, stiffness: 260, damping: 30, mass: 0.9 };
  const heightTransition = reduced
    ? { duration: 0.0001 }
    : { type: "spring" as const, stiffness: 220, damping: 28, mass: 0.9 };

  if (variant === "card") {
    return (
      <div className="space-y-3" role="region" aria-label={label}>
        {items.map((f, i) => {
          const isOpen = open.includes(i);
          const panelId = `${reactId}-panel-${i}`;
          const btnId = `${reactId}-btn-${i}`;
          return (
            <motion.div
              key={f.title}
              layout={!reduced}
              transition={spring}
              className="glass-card overflow-hidden"
            >
              <button
                id={btnId}
                onClick={() => toggle(i)}
                aria-expanded={isOpen}
                aria-controls={panelId}
                className="w-full flex items-center justify-between p-4 md:p-5 text-left hover:bg-primary/5 transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60"
              >
                <span className="font-semibold text-foreground text-sm md:text-base">{f.title}</span>
                <motion.span
                  animate={{ rotate: isOpen ? 180 : 0 }}
                  transition={spring}
                  className="shrink-0"
                  aria-hidden="true"
                >
                  <ChevronDown className="w-4 h-4 text-primary" />
                </motion.span>
              </button>
              <AnimatePresence initial={false}>
                {isOpen && (
                  <motion.div
                    key="c"
                    id={panelId}
                    role="region"
                    aria-labelledby={btnId}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{
                      height: heightTransition,
                      opacity: { duration: reduced ? 0 : 0.2 },
                    }}
                    className="overflow-hidden text-sm text-muted-foreground"
                  >
                    <div className="px-4 md:px-5 pb-4 md:pb-5">{f.content}</div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    );
  }

  // inline variant – single collapsible block (used on project cards)
  const isOpen = open.includes(0);
  const panelId = `${reactId}-inline-panel`;
  const btnId = `${reactId}-inline-btn`;
  return (
    <motion.div layout={!reduced} className="border-t border-primary/10 pt-3">
      <button
        id={btnId}
        onClick={() => toggle(0)}
        aria-expanded={isOpen}
        aria-controls={panelId}
        className="w-full flex items-center justify-between text-left text-xs font-mono uppercase tracking-wider text-primary/90 hover:text-primary transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-primary/60 rounded"
      >
        <span className="flex items-center gap-1.5">
          {showIcon && <Sparkles className="w-3.5 h-3.5" aria-hidden="true" />}
          {label}
        </span>
        <motion.span animate={{ rotate: isOpen ? 180 : 0 }} transition={spring} aria-hidden="true">
          <ChevronDown className="w-4 h-4" />
        </motion.span>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.ul
            key="features"
            id={panelId}
            role="region"
            aria-labelledby={btnId}
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{
              height: heightTransition,
              opacity: { duration: reduced ? 0 : 0.22 },
            }}
            className="overflow-hidden text-sm text-foreground/90"
          >
            <div className="pt-3 space-y-2">
              {items.map((f, idx) => (
                <motion.li
                  key={typeof f.title === "string" ? f.title : idx}
                  initial={reduced ? false : { opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: reduced ? 0 : 0.04 + idx * 0.04 }}
                  className="flex items-start gap-2"
                >
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-primary shrink-0" aria-hidden="true" />
                  <span>{f.title}</span>
                </motion.li>
              ))}
            </div>
          </motion.ul>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default FeatureAccordion;
