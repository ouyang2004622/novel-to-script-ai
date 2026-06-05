import Link from "next/link";

type HomeActionCardProps = {
  href: string;
  title: string;
  description: string;
  eyebrow: string;
};

export function HomeActionCard({
  href,
  title,
  description,
  eyebrow,
}: HomeActionCardProps) {
  return (
    <Link
      href={href}
      className="group relative min-h-56 overflow-hidden rounded-lg border border-white/10 bg-white/[0.07] p-6 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur transition duration-300 hover:-translate-y-1 hover:border-cyan-200/45 hover:bg-cyan-300/[0.11] hover:shadow-[0_0_52px_rgba(34,211,238,0.22)]"
    >
      <span className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-cyan-200/70 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />
      <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/10 to-transparent transition duration-700 group-hover:translate-x-full" />

      <span className="relative inline-flex rounded-full border border-cyan-300/25 bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-100">
        {eyebrow}
      </span>
      <h2 className="relative mt-6 text-2xl font-semibold text-white">
        {title}
      </h2>
      <p className="relative mt-4 text-sm leading-7 text-slate-300">
        {description}
      </p>
      <span className="relative mt-7 inline-flex text-sm font-semibold text-cyan-100 transition group-hover:translate-x-1">
        进入模块
      </span>
    </Link>
  );
}
