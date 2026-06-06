"use client";

import { useEffect, useState } from "react";

import type { ConvertScriptResponse, ScriptBeat } from "@/lib/script-types";

type ScriptDraftPreviewProps = {
  result: ConvertScriptResponse | null;
  error: string | null;
  isLoading: boolean;
};

function BeatItem({ beat }: { beat: ScriptBeat }) {
  return (
    <li className="rounded-lg border border-white/10 bg-slate-950/45 p-4">
      <div className="mb-3 flex flex-wrap items-center gap-2">
        <span className="rounded-full border border-cyan-300/25 bg-cyan-300/10 px-3 py-1 text-xs font-semibold text-cyan-100">
          {beat.type}
        </span>
        {beat.character ? (
          <span className="rounded-full border border-violet-300/25 bg-violet-300/10 px-3 py-1 text-xs text-violet-100">
            {beat.character}
          </span>
        ) : null}
        {beat.duration_seconds ? (
          <span className="rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-slate-300">
            {beat.duration_seconds}s
          </span>
        ) : null}
      </div>
      <p className="text-sm leading-7 text-slate-100">{beat.content}</p>
      <div className="mt-4 grid gap-3 text-xs leading-6 text-slate-300 md:grid-cols-2">
        {beat.camera_hint ? (
          <div className="rounded-md border border-white/10 bg-white/5 p-3">
            <span className="font-semibold text-cyan-100">镜头</span>
            <p className="mt-1">{beat.camera_hint}</p>
          </div>
        ) : null}
        {beat.sound_hint ? (
          <div className="rounded-md border border-white/10 bg-white/5 p-3">
            <span className="font-semibold text-emerald-100">声音</span>
            <p className="mt-1">{beat.sound_hint}</p>
          </div>
        ) : null}
      </div>
    </li>
  );
}

export function ScriptDraftPreview({
  result,
  error,
  isLoading,
}: ScriptDraftPreviewProps) {
  const [copyState, setCopyState] = useState("复制 YAML");
  const [activeChapterIndex, setActiveChapterIndex] = useState(0);

  useEffect(() => {
    setActiveChapterIndex(0);
  }, [result]);

  async function handleCopyYaml() {
    if (!result?.yamlText) {
      return;
    }

    try {
      await navigator.clipboard.writeText(result.yamlText);
      setCopyState("已复制");
      window.setTimeout(() => setCopyState("复制 YAML"), 1600);
    } catch {
      setCopyState("复制失败");
      window.setTimeout(() => setCopyState("复制 YAML"), 1600);
    }
  }

  function handleDownloadYaml() {
    if (!result?.yamlText) {
      return;
    }

    const safeTitle =
      result.scriptObject.script.title
        .trim()
        .replace(/[\\/:*?"<>|]/g, "-")
        .replace(/\s+/g, "-") || "script-draft";
    const blob = new Blob([result.yamlText], {
      type: "application/x-yaml;charset=utf-8",
    });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");

    anchor.href = url;
    anchor.download = `${safeTitle}.yaml`;
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    URL.revokeObjectURL(url);
  }

  if (isLoading) {
    return (
      <section className="animate-fade-in rounded-lg border border-cyan-300/20 bg-cyan-300/10 p-6 text-cyan-50 shadow-[0_24px_80px_rgba(34,211,238,0.14)] backdrop-blur">
        正在分析章节并生成剧本草稿...
      </section>
    );
  }

  if (error) {
    return (
      <section className="animate-fade-in rounded-lg border border-amber-300/30 bg-amber-300/10 p-6 text-sm leading-7 text-amber-100 shadow-[0_24px_80px_rgba(0,0,0,0.24)] backdrop-blur">
        {error}
      </section>
    );
  }

  if (!result) {
    return null;
  }

  const { script } = result.scriptObject;
  const chapters = script.chapters;
  const selectedChapter =
    chapters[Math.min(activeChapterIndex, chapters.length - 1)];

  return (
    <section className="animate-fade-in space-y-6 rounded-lg border border-white/10 bg-white/5 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur">
      <div className="flex flex-wrap items-start justify-between gap-4">
        <div className="max-w-3xl">
          <p className="text-xs font-semibold uppercase text-cyan-200/70">
            Script Draft
          </p>
          <h2 className="mt-2 text-2xl font-semibold text-white">
            {script.title}
          </h2>
          <p className="mt-3 text-sm leading-7 text-slate-300">
            {script.logline}
          </p>
        </div>
        <span className="rounded-full border border-emerald-300/30 bg-emerald-300/10 px-4 py-2 text-xs font-semibold text-emerald-100">
          剧本草稿已生成
        </span>
      </div>

      <div className="grid gap-3 md:grid-cols-3">
        {script.characters.map((character) => (
          <article
            key={character.name}
            className="rounded-lg border border-white/10 bg-slate-950/35 p-4"
          >
            <div className="flex items-center justify-between gap-3">
              <h3 className="font-semibold text-white">{character.name}</h3>
              <span className="rounded-full border border-violet-300/25 bg-violet-300/10 px-3 py-1 text-xs text-violet-100">
                {character.role}
              </span>
            </div>
            <p className="mt-3 text-sm leading-7 text-slate-300">
              {character.description}
            </p>
          </article>
        ))}
      </div>

      {chapters.length > 1 ? (
        <div className="flex flex-wrap gap-2">
          {chapters.map((chapter, index) => (
            <button
              key={chapter.chapter_id}
              type="button"
              onClick={() => setActiveChapterIndex(index)}
              className={`rounded-full border px-4 py-2 text-xs font-semibold transition duration-300 ${
                index === activeChapterIndex
                  ? "border-cyan-200/60 bg-cyan-300/20 text-cyan-50"
                  : "border-white/10 bg-white/5 text-slate-300 hover:border-cyan-200/40 hover:bg-cyan-300/10"
              }`}
            >
              第 {chapter.chapter_id} 章
            </button>
          ))}
        </div>
      ) : null}

      <div className="space-y-5">
        {selectedChapter ? (
          <article
            key={selectedChapter.chapter_id}
            className="rounded-lg border border-white/10 bg-slate-950/30 p-5"
          >
            <div className="mb-5">
              <p className="text-xs uppercase text-slate-500">
                Chapter {selectedChapter.chapter_id}
              </p>
              <h3 className="mt-2 text-xl font-semibold text-white">
                {selectedChapter.chapter_title}
              </h3>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                {selectedChapter.summary}
              </p>
            </div>

            <div className="space-y-4">
              {selectedChapter.scenes.map((scene) => (
                <section
                  key={scene.scene_id}
                  className="rounded-lg border border-cyan-300/15 bg-cyan-300/[0.06] p-4"
                >
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div>
                      <p className="text-xs uppercase text-cyan-200/60">
                        Scene {scene.scene_id}
                      </p>
                      <h4 className="mt-1 text-lg font-semibold text-cyan-50">
                        {scene.scene_title}
                      </h4>
                    </div>
                    <span className="rounded-full border border-white/10 bg-white/10 px-3 py-1 text-xs text-slate-200">
                      {scene.location}
                    </span>
                  </div>

                  <div className="mt-4 grid gap-3 text-sm leading-6 text-slate-300 md:grid-cols-2">
                    <p>
                      <span className="text-slate-500">时间：</span>
                      {scene.time_range.start} - {scene.time_range.end}
                    </p>
                    <p>
                      <span className="text-slate-500">人物：</span>
                      {scene.characters.length > 0
                        ? scene.characters.join("、")
                        : "待补充"}
                    </p>
                    <p className="md:col-span-2">
                      <span className="text-slate-500">画面风格：</span>
                      {scene.visual_style}
                    </p>
                    <p className="md:col-span-2">
                      <span className="text-slate-500">场景作用：</span>
                      {scene.scene_purpose}
                    </p>
                  </div>

                  <ul className="mt-4 space-y-3">
                    {scene.beats.map((beat) => (
                      <BeatItem key={beat.beat_id} beat={beat} />
                    ))}
                  </ul>
                </section>
              ))}
            </div>
          </article>
        ) : null}
      </div>

      <details className="rounded-lg border border-white/10 bg-slate-950/45 p-4">
        <summary className="cursor-pointer text-sm font-semibold text-cyan-100">
          查看 YAML
        </summary>
        <div className="mt-4 flex flex-wrap justify-end gap-2">
          <button
            type="button"
            onClick={handleCopyYaml}
            className="rounded-full border border-cyan-200/30 bg-cyan-300/10 px-4 py-2 text-xs font-semibold text-cyan-50 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-100 hover:bg-cyan-300/20"
          >
            {copyState}
          </button>
          <button
            type="button"
            onClick={handleDownloadYaml}
            className="rounded-full border border-emerald-200/30 bg-emerald-300/10 px-4 py-2 text-xs font-semibold text-emerald-50 transition duration-300 hover:-translate-y-0.5 hover:border-emerald-100 hover:bg-emerald-300/20"
          >
            下载 YAML
          </button>
        </div>
        <pre className="mt-3 max-h-96 overflow-auto rounded-lg border border-white/10 bg-black/40 p-4 text-xs leading-6 text-slate-200">
          {result.yamlText}
        </pre>
      </details>
    </section>
  );
}
