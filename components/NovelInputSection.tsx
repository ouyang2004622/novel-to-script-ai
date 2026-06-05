"use client";

import { useState } from "react";

import { sampleNovelText } from "@/data/sampleNovel";
import { parseNovelChapters, type NovelParseResult } from "@/lib/novel-parser";
import { ChapterPreview } from "@/components/ChapterPreview";

export function NovelInputSection() {
  const [novelText, setNovelText] = useState("");
  const [parseResult, setParseResult] = useState<NovelParseResult | null>(null);

  function handleUseSample() {
    setNovelText(sampleNovelText);
    setParseResult(null);
  }

  function handleCheckChapters() {
    setParseResult(parseNovelChapters(novelText));
  }

  return (
    <section className="animate-fade-in grid gap-6 rounded-lg border border-white/10 bg-white/5 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur lg:grid-cols-[1.05fr_0.95fr]">
      <div className="min-w-0 space-y-5">
        <div>
          <p className="text-xs font-semibold uppercase text-cyan-200/70">
            Novel Input
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-white">
            小说文本输入
          </h2>
          <p className="mt-3 max-w-2xl text-sm leading-7 text-slate-300">
            粘贴至少 3 个章节的小说文本，先检查章节标题和章节数量。本阶段只做输入和章节处理，不进行剧本转换。
          </p>
        </div>

        <textarea
          value={novelText}
          onChange={(event) => {
            setNovelText(event.target.value);
            setParseResult(null);
          }}
          placeholder="请粘贴小说文本，例如：第一章 雾中的站台..."
          className="min-h-80 w-full resize-y rounded-lg border border-cyan-300/20 bg-slate-950/60 p-4 text-sm leading-7 text-slate-100 outline-none transition duration-300 placeholder:text-slate-500 focus:border-cyan-300/70 focus:shadow-[0_0_36px_rgba(34,211,238,0.18)]"
        />

        <div className="flex flex-wrap gap-3">
          <button
            type="button"
            onClick={handleUseSample}
            className="rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-semibold text-slate-100 transition duration-300 hover:-translate-y-1 hover:border-violet-200/70 hover:bg-violet-300/20 hover:shadow-[0_0_34px_rgba(167,139,250,0.28)]"
          >
            填入示例文本
          </button>
          <button
            type="button"
            onClick={handleCheckChapters}
            className="rounded-full border border-cyan-200/40 bg-cyan-300/15 px-5 py-3 text-sm font-semibold text-cyan-50 transition duration-300 hover:-translate-y-1 hover:border-cyan-100 hover:bg-cyan-300/25 hover:shadow-[0_0_40px_rgba(34,211,238,0.3)]"
          >
            检查章节
          </button>
        </div>
      </div>

      <div className="min-w-0 space-y-5">
        <div>
          <p className="text-xs font-semibold uppercase text-violet-200/70">
            Parse Result
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-white">
            章节识别结果
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-300">
            结果会展示章节数量、校验提示和每章的标题与正文非空字符数。
          </p>
        </div>

        <ChapterPreview result={parseResult} />
      </div>
    </section>
  );
}
