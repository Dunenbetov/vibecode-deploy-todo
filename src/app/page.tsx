import { TodoApp } from "@/components/TodoApp";

export default function Home() {
  return (
    <div className="liquid-bg relative min-h-screen overflow-hidden px-4 py-8 sm:px-6 sm:py-14">
      <div aria-hidden="true" className="pointer-events-none absolute inset-0">
        <div className="absolute left-[8%] top-[6%] h-72 w-72 rounded-full bg-[var(--glow-1)] blur-3xl" />
        <div className="absolute right-[4%] top-[18%] h-96 w-96 rounded-full bg-[var(--glow-2)] blur-3xl" />
        <div className="absolute bottom-[-10%] left-[28%] h-[28rem] w-[28rem] rounded-full bg-[var(--glow-3)] blur-3xl" />
        <div className="grain absolute inset-0 opacity-[0.18] mix-blend-overlay" />
      </div>

      <main className="relative z-10 flex min-h-[calc(100vh-4rem)] items-center">
        <TodoApp />
      </main>
    </div>
  );
}
