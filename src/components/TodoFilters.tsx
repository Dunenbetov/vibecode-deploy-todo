"use client";

import { useLayoutEffect, useRef, useState } from "react";
import type { TodoFilter } from "@/types/todo";

interface TodoFiltersProps {
  filter: TodoFilter;
  onChange: (filter: TodoFilter) => void;
}

const filters: { value: TodoFilter; label: string }[] = [
  { value: "all", label: "Все" },
  { value: "active", label: "Активные" },
  { value: "completed", label: "Готовые" },
];

export function TodoFilters({ filter, onChange }: TodoFiltersProps) {
  const trackRef = useRef<HTMLDivElement>(null);
  const buttonRefs = useRef<Array<HTMLButtonElement | null>>([]);
  const [indicator, setIndicator] = useState({ width: 0, left: 0 });

  const activeIndex = filters.findIndex((item) => item.value === filter);

  useLayoutEffect(() => {
    const activeButton = buttonRefs.current[activeIndex];
    const track = trackRef.current;

    if (!activeButton || !track) return;

    const trackRect = track.getBoundingClientRect();
    const buttonRect = activeButton.getBoundingClientRect();

    setIndicator({
      width: buttonRect.width,
      left: buttonRect.left - trackRect.left,
    });
  }, [activeIndex, filter]);

  return (
    <div className="relative z-10 border-t border-[var(--rim)] px-5 py-4 sm:px-7">
      <div ref={trackRef} className="segment-track">
        <span
          aria-hidden="true"
          className="segment-indicator"
          style={{
            width: indicator.width,
            transform: `translateX(${indicator.left}px)`,
          }}
        />
        {filters.map((item, index) => (
          <button
            key={item.value}
            ref={(element) => {
              buttonRefs.current[index] = element;
            }}
            type="button"
            onClick={() => onChange(item.value)}
            className={`relative z-10 min-w-[4.5rem] flex-1 rounded-full px-3.5 py-2 text-[13px] font-semibold transition-colors duration-180 ${
              filter === item.value
                ? "text-[var(--ink)]"
                : "text-[var(--muted)] hover:text-[var(--ink)]"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>
    </div>
  );
}
