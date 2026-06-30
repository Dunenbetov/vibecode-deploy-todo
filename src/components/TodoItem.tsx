"use client";

import { KeyboardEvent, useEffect, useRef, useState } from "react";
import type { Todo } from "@/types/todo";

interface TodoItemProps {
  todo: Todo;
  onToggle: (id: string) => void;
  onEdit: (id: string, text: string) => boolean;
  onDelete: (id: string) => void;
}

export function TodoItem({ todo, onToggle, onEdit, onDelete }: TodoItemProps) {
  const [isEditing, setIsEditing] = useState(false);
  const [draft, setDraft] = useState(todo.text);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isEditing) inputRef.current?.focus();
  }, [isEditing]);

  const saveEdit = () => {
    if (onEdit(todo.id, draft)) setIsEditing(false);
    else onDelete(todo.id);
  };

  const cancelEdit = () => {
    setDraft(todo.text);
    setIsEditing(false);
  };

  const handleKeyDown = (event: KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter") saveEdit();
    if (event.key === "Escape") cancelEdit();
  };

  return (
    <li
      className={`todo-item group flex items-start gap-3 rounded-2xl border border-[var(--border)] bg-[var(--surface)] px-4 py-3.5 shadow-[var(--shadow-soft)] transition-all duration-200 hover:border-[var(--accent-muted)] ${
        todo.completed ? "opacity-75" : ""
      }`}
    >
      <button
        type="button"
        onClick={() => onToggle(todo.id)}
        aria-label={todo.completed ? "Отметить как активную" : "Отметить как выполненную"}
        className={`mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border-2 transition-all duration-200 ${
          todo.completed
            ? "border-[var(--accent)] bg-[var(--accent)] text-white"
            : "border-[var(--border-strong)] hover:border-[var(--accent)]"
        }`}
      >
        {todo.completed && (
          <svg aria-hidden="true" className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
          </svg>
        )}
      </button>

      <div className="min-w-0 flex-1">
        {isEditing ? (
          <input
            ref={inputRef}
            value={draft}
            onChange={(event) => setDraft(event.target.value)}
            onBlur={saveEdit}
            onKeyDown={handleKeyDown}
            className="w-full rounded-lg border border-[var(--accent-muted)] bg-[var(--surface-muted)] px-2 py-1 text-[var(--ink)] outline-none focus:ring-2 focus:ring-[var(--accent-ring)]"
          />
        ) : (
          <button
            type="button"
            onDoubleClick={() => setIsEditing(true)}
            className={`w-full text-left text-base leading-relaxed transition-colors ${
              todo.completed
                ? "text-[var(--muted)] line-through"
                : "text-[var(--ink)]"
            }`}
          >
            {todo.text}
          </button>
        )}
        <p className="mt-1 text-xs text-[var(--muted)]">
          {new Date(todo.createdAt).toLocaleDateString("ru-RU", {
            day: "numeric",
            month: "short",
            hour: "2-digit",
            minute: "2-digit",
          })}
        </p>
      </div>

      <div className="flex shrink-0 gap-1 opacity-0 transition-opacity duration-200 group-hover:opacity-100 group-focus-within:opacity-100">
        {!isEditing && (
          <button
            type="button"
            onClick={() => setIsEditing(true)}
            aria-label="Редактировать"
            className="rounded-lg p-2 text-[var(--muted)] transition-colors hover:bg-[var(--surface-muted)] hover:text-[var(--ink)]"
          >
            <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
              <path strokeLinecap="round" strokeLinejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125" />
            </svg>
          </button>
        )}
        <button
          type="button"
          onClick={() => onDelete(todo.id)}
          aria-label="Удалить"
          className="rounded-lg p-2 text-[var(--muted)] transition-colors hover:bg-[var(--danger-soft)] hover:text-[var(--danger)]"
        >
          <svg aria-hidden="true" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.8}>
            <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
          </svg>
        </button>
      </div>
    </li>
  );
}
