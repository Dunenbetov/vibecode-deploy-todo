import { TodoApp } from "@/components/TodoApp";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden px-4 py-10 sm:px-6 sm:py-16">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute -left-24 top-0 h-72 w-72 rounded-full bg-[var(--glow-1)] blur-3xl" />
        <div className="absolute -right-16 bottom-0 h-80 w-80 rounded-full bg-[var(--glow-2)] blur-3xl" />
        <div className="grain absolute inset-0 opacity-[0.35]" />
      </div>

      <main className="relative z-10">
        <TodoApp />
      </main>
    </div>
  );
}
