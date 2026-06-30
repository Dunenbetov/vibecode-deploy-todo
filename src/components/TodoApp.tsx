"use client";

import { EmptyState } from "@/components/EmptyState";
import { TodoFilters } from "@/components/TodoFilters";
import { TodoInput } from "@/components/TodoInput";
import { TodoItem } from "@/components/TodoItem";
import { useTodos } from "@/hooks/useTodos";

export function TodoApp() {
  const {
    todos,
    filter,
    setFilter,
    stats,
    hydrated,
    addTodo,
    toggleTodo,
    editTodo,
    deleteTodo,
    clearCompleted,
  } = useTodos();

  if (!hydrated) {
    return (
      <div className="flex min-h-[420px] w-full items-center justify-center">
        <div className="glass-orb h-10 w-10 animate-pulse rounded-full" />
      </div>
    );
  }

  return (
    <div className="todo-app w-full">
      <header className="mb-8 flex items-end justify-between gap-4 px-1 sm:mb-10">
        <div className="flex items-center gap-3.5">
          <div
            aria-hidden="true"
            className="glass-orb h-12 w-12 shrink-0 rounded-[1.25rem]"
          />
          <div>
            <p className="section-label mb-1">Today</p>
            <h1 className="font-display text-[clamp(2.25rem,5vw,3rem)] font-semibold leading-none tracking-[-0.04em] text-[var(--ink)]">
              Tasks
            </h1>
          </div>
        </div>

        <div className="glass-stat px-4 py-2 text-[13px] text-[var(--muted)]">
          <span className="font-semibold text-[var(--ink)]">{stats.active}</span>{" "}
          open ·{" "}
          <span className="font-semibold text-[var(--ink)]">{stats.completed}</span>{" "}
          done
        </div>
      </header>

      <div className="glass-shell overflow-hidden">
        <div className="relative z-10 px-5 pb-5 pt-5 sm:px-7 sm:pt-6">
          <div className="glass-inset p-1">
            <TodoInput onAdd={addTodo} />
          </div>
        </div>

        <ul className="relative z-10 space-y-2.5 px-5 pb-5 sm:px-7">
          {todos.length === 0 ? (
            <EmptyState filter={filter} />
          ) : (
            todos.map((todo, index) => (
              <div
                key={todo.id}
                className="todo-enter"
                style={{ animationDelay: `${Math.min(index, 3) * 40}ms` }}
              >
                <TodoItem
                  todo={todo}
                  onToggle={toggleTodo}
                  onEdit={editTodo}
                  onDelete={deleteTodo}
                />
              </div>
            ))
          )}
        </ul>

        <TodoFilters filter={filter} onChange={setFilter} />

        {stats.completed > 0 && (
          <div className="relative z-10 border-t border-[var(--rim)] px-5 py-3 text-right sm:px-7">
            <button
              type="button"
              onClick={clearCompleted}
              className="rounded-full px-3 py-1.5 text-[13px] font-medium text-[var(--muted)] transition-colors hover:text-[var(--danger)]"
            >
              Очистить выполненные ({stats.completed})
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
