import type { TodoFilter } from "@/types/todo";

interface TodoFiltersProps {
  filter: TodoFilter;
  onChange: (filter: TodoFilter) => void;
  stats: { total: number; active: number; completed: number };
}

const filters: { value: TodoFilter; label: string }[] = [
  { value: "all", label: "Все" },
  { value: "active", label: "Активные" },
  { value: "completed", label: "Готовые" },
];

export function TodoFilters({ filter, onChange, stats }: TodoFiltersProps) {
  return (
    <div className="relative z-10 flex flex-wrap items-center justify-between gap-3 border-t border-[var(--border)] px-5 py-4 sm:px-6">
      <div className="glass-chip flex gap-1 rounded-full p-1">
        {filters.map((item) => (
          <button
            key={item.value}
            type="button"
            onClick={() => onChange(item.value)}
            className={`rounded-full px-3.5 py-2 text-sm font-semibold transition-all duration-300 ${
              filter === item.value
                ? "bg-[var(--surface-strong)] text-[var(--ink)] shadow-[inset_0_1px_0_rgba(255,255,255,0.6),0_8px_24px_rgba(17,120,255,0.12)]"
                : "text-[var(--muted)] hover:bg-[var(--surface-muted)] hover:text-[var(--ink)]"
            }`}
          >
            {item.label}
          </button>
        ))}
      </div>

      <p className="rounded-full px-2 text-sm text-[var(--muted)]">
        <span className="font-semibold text-[var(--ink)]">{stats.active}</span>{" "}
        {stats.active === 1 ? "задача" : stats.active < 5 ? "задачи" : "задач"}
      </p>
    </div>
  );
}
