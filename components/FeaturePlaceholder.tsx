type FeaturePlaceholderProps = {
  items: string[];
};

export function FeaturePlaceholder({ items }: FeaturePlaceholderProps) {
  return (
    <div className="border border-zinc-300 bg-white/75 p-6 shadow-sm">
      <h2 className="text-lg font-semibold text-ink">功能规划</h2>
      <ul className="mt-5 space-y-3">
        {items.map((item) => (
          <li key={item} className="flex gap-3 text-sm leading-6 text-zinc-700">
            <span className="mt-2 h-2 w-2 shrink-0 bg-cyan" aria-hidden="true" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
