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
        placeholder="Что нужно сделать?"
        autoComplete="off"
        className="w-full rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-5 py-4 pr-28 text-base text-[var(--ink)] shadow-[var(--shadow-soft)] outline-none transition-all duration-200 placeholder:text-[var(--muted)] focus:border-[var(--accent)] focus:ring-4 focus:ring-[var(--accent-ring)]"
      />
      <button
        type="submit"
        disabled={!value.trim()}
        className="absolute right-2 top-1/2 -translate-y-1/2 rounded-xl bg-[var(--accent)] px-4 py-2 text-sm font-semibold text-white transition-all duration-200 hover:bg-[var(--accent-hover)] disabled:cursor-not-allowed disabled:opacity-40"
      >
        Добавить
      </button>
    </form>
  );
}
