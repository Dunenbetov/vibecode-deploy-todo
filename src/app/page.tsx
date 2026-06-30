import { TodoApp } from "@/components/TodoApp";

export default function Home() {
  return (
    <div className="ambient-sheen relative min-h-screen overflow-hidden px-5 py-12 sm:px-8 sm:py-16">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-[6%] top-[8%] h-64 w-64 rounded-full bg-[var(--glow-1)] opacity-35 blur-[100px] dark:opacity-25" />
        <div className="absolute bottom-[8%] right-[6%] h-80 w-80 rounded-full bg-[var(--glow-2)] opacity-35 blur-[100px] dark:opacity-25" />
        <div className="grain absolute inset-0" />
      </div>

      <main className="relative z-10 mx-auto flex min-h-[calc(100vh-6rem)] w-full max-w-[680px] items-center">
        <TodoApp />
      </main>
    </div>
  );
}
