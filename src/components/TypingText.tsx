import { useEffect, useState } from "react";
import { useReducedMotion } from "@/hooks/useReducedMotion";

interface TypingTextProps {
  text: string;
  speed?: number;
  delay?: number;
  className?: string;
  cursorClassName?: string;
}

const TypingText = ({ text, speed = 60, delay = 0, className = "", cursorClassName = "" }: TypingTextProps) => {
  const [reduced] = useReducedMotion();
  const [displayed, setDisplayed] = useState(reduced ? text : "");
  const [done, setDone] = useState(reduced);

  useEffect(() => {
    if (reduced) {
      setDisplayed(text);
      setDone(true);
      return;
    }
    setDisplayed("");
    setDone(false);
    let i = 0;
    let interval: ReturnType<typeof setInterval>;
    const startTimer = setTimeout(() => {
      interval = setInterval(() => {
        i++;
        setDisplayed(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(interval);
          setDone(true);
        }
      }, speed);
    }, delay);
    return () => {
      clearTimeout(startTimer);
      if (interval) clearInterval(interval);
    };
  }, [text, speed, delay, reduced]);

  return (
    <span className={className}>
      {displayed}
      {!reduced && (
        <span
          className={`inline-block w-[2px] h-[0.9em] align-middle ml-1 bg-primary ${done ? "animate-pulse-glow" : ""} ${cursorClassName}`}
        />
      )}
    </span>
  );
};

export default TypingText;
