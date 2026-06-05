import Link from "next/link";
import type { ReactNode } from "react";

type AppShellProps = {
  children: ReactNode;
  maxWidth?: string;
};

const navItems = [
  { label: "首页", href: "/" },
  { label: "转换", href: "/convert" },
  { label: "Schema", href: "/schema" },
  { label: "Demo", href: "/demo" },
];

export function AppShell({
  children,
  maxWidth = "max-w-6xl",
}: AppShellProps) {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#060814] text-slate-100">
      <div className="aurora-layer" aria-hidden="true" />
      <div className="grid-layer" aria-hidden="true" />
      <div className="scan-layer" aria-hidden="true" />

      <div
        className={`relative mx-auto flex min-h-screen w-full ${maxWidth} flex-col gap-8 px-6 py-8 sm:px-10 lg:px-12`}
      >
        <header className="flex flex-wrap items-center justify-between gap-4">
          <Link
            href="/"
            className="text-sm font-semibold tracking-normal text-white transition hover:text-cyan-100"
          >
            小说转剧本创作台
          </Link>
          <nav className="flex flex-wrap gap-2">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-semibold text-slate-200 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-200/50 hover:bg-cyan-300/15 hover:text-cyan-50"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </header>

        {children}
      </div>
    </main>
  );
}
