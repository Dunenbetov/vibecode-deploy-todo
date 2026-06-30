"use client";

import { FormEvent, useState } from "react";

interface TodoInputProps {
  onAdd: (text: string) => boolean;
}

export function TodoInput({ onAdd }: TodoInputProps) {
  const [value, setValue] = useState("");

  const handleSubmit = (event: FormEvent) => {
    event.preventDefault();
    if (onAdd(value)) setValue("");
  };

  return (
    <form onSubmit={handleSubmit} className="relative">
      <label htmlFor="todo-input" className="sr-only">
        Новая задача
      </label>
      <input
        id="todo-input"
        type="text"
        value={value}
        onChange={(event) => setValue(event.target.value)}
        placeholder="Новая задача"
        autoComplete="off"
        className="w-full rounded-[18px] border border-transparent bg-transparent py-3.5 pl-4 pr-[7.5rem] text-base text-[var(--ink)] outline-none transition-all duration-200 placeholder:text-[var(--muted)] focus:border-[var(--rim-strong)] focus:ring-2 focus:ring-[var(--accent-ring)]"
      />
      <button
        type="submit"
        disabled={!value.trim()}
        className="glass-accent-btn absolute right-1.5 top-1/2 -translate-y-1/2 rounded-[14px] px-4 py-2 text-[13px] font-semibold text-white disabled:cursor-not-allowed"
      >
        Добавить
      </button>
    </form>
  );
}
