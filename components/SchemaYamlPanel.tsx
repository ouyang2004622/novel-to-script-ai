"use client";

import { useState } from "react";

type SchemaYamlPanelProps = {
  yamlText: string;
};

export function SchemaYamlPanel({ yamlText }: SchemaYamlPanelProps) {
  const [copyState, setCopyState] = useState("复制 YAML");

  async function handleCopy() {
    try {
      await navigator.clipboard.writeText(yamlText);
      setCopyState("已复制");
      window.setTimeout(() => setCopyState("复制 YAML"), 1600);
    } catch {
      setCopyState("复制失败");
      window.setTimeout(() => setCopyState("复制 YAML"), 1600);
    }
  }

  function handleDownload() {
    const blob = new Blob([yamlText], {
      type: "application/x-yaml;charset=utf-8",
    });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = "script.schema.yaml";
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    URL.revokeObjectURL(url);
  }

  return (
    <section className="rounded-lg border border-white/10 bg-slate-950/45 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.24)]">
      <div className="flex flex-wrap items-center justify-between gap-3">
        <div>
          <p className="text-xs font-semibold uppercase text-cyan-200/70">
            YAML File
          </p>
          <h2 className="mt-2 text-xl font-semibold text-white">
            script.schema.yaml
          </h2>
        </div>
        <div className="flex flex-wrap gap-2">
          <button
            type="button"
            onClick={handleCopy}
            className="rounded-full border border-cyan-200/30 bg-cyan-300/10 px-4 py-2 text-xs font-semibold text-cyan-50 transition duration-300 hover:-translate-y-0.5 hover:border-cyan-100 hover:bg-cyan-300/20"
          >
            {copyState}
          </button>
          <button
            type="button"
            onClick={handleDownload}
            className="rounded-full border border-emerald-200/30 bg-emerald-300/10 px-4 py-2 text-xs font-semibold text-emerald-50 transition duration-300 hover:-translate-y-0.5 hover:border-emerald-100 hover:bg-emerald-300/20"
          >
            下载 YAML
          </button>
        </div>
      </div>

      <pre className="mt-5 max-h-[34rem] overflow-auto rounded-lg border border-white/10 bg-black/40 p-4 text-xs leading-6 text-slate-200">
        {yamlText}
      </pre>
    </section>
  );
}
