interface EmptyStateProps {
  filter: "all" | "active" | "completed";
}

export function EmptyState({ filter }: EmptyStateProps) {
  const messages = {
    all: {
      title: "Чистый лист",
      description: "Добавьте первую задачу — и начните свой день с ясности.",
    },
    active: {
      title: "Всё выполнено",
      description: "Активных задач нет. Отличная работа!",
    },
    completed: {
      title: "Пока пусто",
      description: "Завершённые задачи появятся здесь.",
    },
  };

  const message = messages[filter];

  return (
    <div className="empty-state flex flex-col items-center justify-center px-6 py-16 text-center">
      <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[var(--shadow-soft)]">
        <svg
          aria-hidden="true"
          className="h-7 w-7 text-[var(--accent)]"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth={1.5}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v9.75c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25z"
          />
        </svg>
      </div>
      <h3 className="font-display text-xl text-[var(--ink)]">{message.title}</h3>
      <p className="mt-2 max-w-xs text-sm leading-relaxed text-[var(--muted)]">
        {message.description}
      </p>
    </div>
  );
}
