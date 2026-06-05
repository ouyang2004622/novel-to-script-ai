import type { NovelParseResult } from "@/lib/novel-parser";

type ChapterPreviewProps = {
  result: NovelParseResult | null;
};

export function ChapterPreview({ result }: ChapterPreviewProps) {
  if (!result) {
    return (
      <div className="rounded-lg border border-white/10 bg-slate-950/35 p-5 text-sm leading-7 text-slate-400">
        粘贴小说文本后点击“检查章节”，这里会显示识别结果。
      </div>
    );
  }

  const messageTone = result.isValid
    ? "border-emerald-300/30 bg-emerald-300/10 text-emerald-100"
    : "border-amber-300/30 bg-amber-300/10 text-amber-100";

  return (
    <div className="space-y-4">
      <div className={`rounded-lg border px-4 py-3 text-sm ${messageTone}`}>
        {result.message}
      </div>

      <div className="grid gap-3 sm:grid-cols-2">
        <div className="rounded-lg border border-white/10 bg-white/5 p-4">
          <p className="text-xs uppercase text-slate-500">Chapter Count</p>
          <p className="mt-2 text-3xl font-semibold text-white">
            {result.chapterCount}
          </p>
        </div>
        <div className="rounded-lg border border-white/10 bg-white/5 p-4">
          <p className="text-xs uppercase text-slate-500">Validation</p>
          <p className="mt-2 text-lg font-semibold text-cyan-100">
            {result.isValid ? "章节数量满足要求" : "需要补充章节"}
          </p>
        </div>
      </div>

      {result.chapters.length > 0 ? (
        <ul className="space-y-3">
          {result.chapters.map((chapter) => (
            <li
              key={`${chapter.index}-${chapter.title}`}
              className="rounded-lg border border-white/10 bg-slate-950/35 p-4 transition duration-300 hover:border-cyan-300/40 hover:bg-cyan-300/10"
            >
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <p className="text-xs text-slate-500">
                    第 {chapter.index} 个章节
                  </p>
                  <h3 className="mt-1 text-base font-semibold text-white">
                    {chapter.title}
                  </h3>
                </div>
                <span className="rounded-full border border-cyan-300/25 bg-cyan-300/10 px-3 py-1 text-xs text-cyan-100">
                  {chapter.wordCount} 字
                </span>
              </div>
            </li>
          ))}
        </ul>
      ) : null}
    </div>
  );
}
