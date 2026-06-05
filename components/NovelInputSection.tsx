"use client";

import { useState } from "react";

import { sampleNovelText } from "@/data/sampleNovel";
import { parseNovelChapters, type NovelParseResult } from "@/lib/novel-parser";
import { ChapterPreview } from "@/components/ChapterPreview";
import { ScriptDraftPreview } from "@/components/ScriptDraftPreview";
import type {
  ConvertScriptError,
  ConvertScriptResponse,
} from "@/lib/script-types";

function formatConvertError(message: string) {
  if (
    message.includes("DEEPSEEK_API_KEY") ||
    message.includes("MOCK_AI") ||
    message.includes("DeepSeek")
  ) {
    return "剧本生成服务暂不可用，请检查本地服务配置后重试。";
  }

  return message;
}

export function NovelInputSection() {
  const [novelText, setNovelText] = useState("");
  const [parseResult, setParseResult] = useState<NovelParseResult | null>(null);
  const [scriptResult, setScriptResult] =
    useState<ConvertScriptResponse | null>(null);
  const [convertError, setConvertError] = useState<string | null>(null);
  const [isConverting, setIsConverting] = useState(false);

  function handleUseSample() {
    setNovelText(sampleNovelText);
    setParseResult(null);
    setScriptResult(null);
    setConvertError(null);
  }

  function handleCheckChapters() {
    setParseResult(parseNovelChapters(novelText));
    setScriptResult(null);
    setConvertError(null);
  }

  async function handleGenerateScript() {
    if (!parseResult?.isValid) {
      setConvertError("请先通过章节检查，再生成剧本草稿。");
      return;
    }

    setIsConverting(true);
    setScriptResult(null);
    setConvertError(null);

    try {
      const response = await fetch("/api/convert", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ novelText }),
      });

      const data = (await response.json()) as
        | ConvertScriptResponse
        | ConvertScriptError;

      if (!response.ok) {
        const errorData = data as ConvertScriptError;
        throw new Error(
          errorData.message || errorData.error || "生成剧本草稿失败。",
        );
      }

      setScriptResult(data as ConvertScriptResponse);
    } catch (error) {
      const message =
        error instanceof Error
          ? error.message
          : "生成剧本草稿时出现异常，请稍后重试。";

      setConvertError(formatConvertError(message));
    } finally {
      setIsConverting(false);
    }
  }

  return (
    <div className="space-y-6">
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
              粘贴至少 3 个章节的小说文本，先检查章节标题和章节数量；通过校验后可生成结构化剧本草稿。
            </p>
          </div>

          <textarea
            value={novelText}
            onChange={(event) => {
              setNovelText(event.target.value);
              setParseResult(null);
              setScriptResult(null);
              setConvertError(null);
            }}
            placeholder="请粘贴小说文本，例如：第一章 失眠的书房..."
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
            {parseResult?.isValid ? (
              <button
                type="button"
                onClick={handleGenerateScript}
                disabled={isConverting}
                className="rounded-full border border-emerald-200/40 bg-emerald-300/15 px-5 py-3 text-sm font-semibold text-emerald-50 transition duration-300 hover:-translate-y-1 hover:border-emerald-100 hover:bg-emerald-300/25 hover:shadow-[0_0_40px_rgba(110,231,183,0.28)] disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
              >
                {isConverting ? "生成中..." : "生成剧本草稿"}
              </button>
            ) : null}
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

      <ScriptDraftPreview
        result={scriptResult}
        error={convertError}
        isLoading={isConverting}
      />
    </div>
  );
}
