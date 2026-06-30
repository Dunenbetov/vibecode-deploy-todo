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
        <div className="h-8 w-8 animate-spin rounded-full border-2 border-[var(--accent-muted)] border-t-[var(--accent)]" />
      </div>
    );
  }

  return (
    <div className="todo-app mx-auto w-full max-w-2xl">
      <header className="mb-8 text-center">
        <p className="mb-2 text-sm font-medium uppercase tracking-[0.2em] text-[var(--accent)]">
          Vibecode Deploy
        </p>
        <h1 className="font-display text-4xl font-normal tracking-tight text-[var(--ink)] sm:text-5xl">
          Todo List
        </h1>
        <p className="mt-3 text-base text-[var(--muted)]">
          Простой, красивый и надёжный список задач с сохранением в браузере
        </p>
      </header>

      <div className="overflow-hidden rounded-3xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-card)]">
        <div className="border-b border-[var(--border)] bg-[var(--surface-muted)]/60 px-5 py-5">
          <TodoInput onAdd={addTodo} />
        </div>

        <ul className="space-y-3 px-5 py-5">
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
          <div className="border-t border-[var(--border)] px-5 py-3 text-right">
            <button
              type="button"
              onClick={clearCompleted}
              className="text-sm font-medium text-[var(--danger)] transition-colors hover:text-[var(--danger-hover)]"
            >
              Очистить выполненные ({stats.completed})
            </button>
          </div>
        )}
      </div>

      <footer className="mt-8 text-center text-sm text-[var(--muted)]">
        {stats.total > 0 ? (
          <p>
            Всего {stats.total} · Активных {stats.active} · Готовых {stats.completed}
          </p>
        ) : (
          <p>Двойной клик по задаче — редактирование</p>
        )}
      </footer>
    </div>
  );
}
