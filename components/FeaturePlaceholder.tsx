type FeaturePlaceholderProps = {
  items: string[];
};

export function FeaturePlaceholder({ items }: FeaturePlaceholderProps) {
  return (
    <div className="animate-fade-in w-full min-w-0 max-w-[calc(100vw-3rem)] rounded-lg border border-white/10 bg-white/10 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.32)] backdrop-blur-xl sm:max-w-none">
      <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
        <h2 className="text-lg font-semibold text-white">功能规划</h2>
        <span className="rounded-full border border-violet-300/30 bg-violet-300/10 px-3 py-1 text-xs text-violet-100">
          待接入
        </span>
      </div>
      <ul className="space-y-3">
        {items.map((item) => (
          <li
            key={item}
            className="group flex gap-3 border-b border-white/10 py-3 text-sm leading-6 text-slate-300 transition duration-300 last:border-0 hover:translate-x-1 hover:text-cyan-50"
          >
            <span
              className="mt-2 h-2 w-2 shrink-0 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(34,211,238,0.75)] transition group-hover:scale-125"
              aria-hidden="true"
            />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
