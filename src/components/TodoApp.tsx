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
      <div className="flex min-h-[420px] items-center justify-center">
        <div className="glass-orb h-10 w-10 animate-pulse rounded-full" />
      </div>
    );
  }

  return (
    <div className="todo-app mx-auto w-full max-w-3xl">
      <header className="mb-7 flex items-center justify-between gap-4 px-2">
        <div className="flex items-center gap-4">
          <div aria-hidden="true" className="glass-orb h-16 w-16 rounded-[1.65rem]" />
          <div>
            <h1 className="font-display text-5xl font-semibold tracking-[-0.06em] text-[var(--ink)] sm:text-6xl">
              Today
            </h1>
          </div>
        </div>

        <div className="hidden gap-2 sm:flex">
          <div className="glass-chip rounded-full px-4 py-2 text-sm text-[var(--muted)]">
            <span className="font-semibold text-[var(--ink)]">{stats.active}</span> open
          </div>
          <div className="glass-chip rounded-full px-4 py-2 text-sm text-[var(--muted)]">
            <span className="font-semibold text-[var(--ink)]">{stats.completed}</span> done
          </div>
        </div>
      </header>

      <div className="glass-panel overflow-hidden rounded-[2rem]">
        <div className="relative z-10 border-b border-[var(--border)] px-5 py-5 sm:px-6">
          <TodoInput onAdd={addTodo} />
        </div>

        <ul className="relative z-10 space-y-3 px-5 py-5 sm:px-6">
          {todos.length === 0 ? (
            <EmptyState filter={filter} />
          ) : (
            todos.map((todo, index) => (
              <div
                key={todo.id}
                className="todo-enter"
                style={{ animationDelay: `${index * 40}ms` }}
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

        <TodoFilters filter={filter} onChange={setFilter} stats={stats} />

        {stats.completed > 0 && (
          <div className="relative z-10 border-t border-[var(--border)] px-5 py-3 text-right sm:px-6">
            <button
              type="button"
              onClick={clearCompleted}
              className="rounded-full px-3 py-1.5 text-sm font-semibold text-[var(--danger)] transition-colors hover:bg-[var(--danger-soft)] hover:text-[var(--danger-hover)]"
            >
              Очистить выполненные ({stats.completed})
            </button>
          </div>
        )}
      </div>

      {stats.total > 0 && (
        <footer className="mt-5 flex justify-center text-sm text-[var(--muted)] sm:hidden">
          <div className="glass-chip rounded-full px-4 py-2">
            {stats.active} open · {stats.completed} done
          </div>
        </footer>
      )}
    </div>
  );
}
