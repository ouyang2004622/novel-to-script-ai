import { FeaturePlaceholder } from "@/components/FeaturePlaceholder";

const upcomingFeatures = [
  "小说章节输入与章节数校验",
  "AI 辅助剧本结构化转换",
  "YAML 输出与 Schema 校验",
  "剧本预览与示例导出",
];

const actionButtons = ["开始转换小说", "查看 YAML Schema", "查看 Demo 示例"];

export default function Home() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#060814] text-slate-100">
      <div className="aurora-layer" aria-hidden="true" />
      <div className="grid-layer" aria-hidden="true" />
      <div className="scan-layer" aria-hidden="true" />

      <section className="relative mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-8 px-6 py-8 sm:px-10 lg:px-12">
        <div className="grid min-w-0 flex-1 items-center gap-8 lg:grid-cols-[1.15fr_0.85fr]">
          <div className="animate-slide-up min-w-0 max-w-[calc(100vw-3rem)] space-y-7 sm:max-w-none">
            <div className="inline-flex items-center gap-3 rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-xs font-medium text-cyan-100 shadow-[0_0_30px_rgba(34,211,238,0.18)]">
              <span className="h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_16px_rgba(34,211,238,0.9)]" />
              Web Demo 初始化阶段
            </div>

            <div className="space-y-5">
              <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-normal text-white sm:text-6xl">
                AI 小说转剧本工具
              </h1>
              <p className="max-w-2xl break-words text-base leading-8 text-slate-300 sm:text-lg">
                面向小说改编场景的创作辅助界面。后续将支持输入 3 个章节以上的小说文本，
                整理为结构化剧本内容，并输出符合 Schema 约束的 YAML。
              </p>
            </div>

            <div className="flex max-w-full flex-wrap gap-3">
              {actionButtons.map((label) => (
                <button
                  key={label}
                  type="button"
                  className="group relative overflow-hidden rounded-full border border-cyan-200/25 bg-white/10 px-5 py-3 text-sm font-semibold text-cyan-50 shadow-[0_0_28px_rgba(34,211,238,0.12)] transition duration-300 hover:-translate-y-1 hover:border-cyan-200/70 hover:bg-cyan-300/20 hover:shadow-[0_0_42px_rgba(34,211,238,0.28)]"
                >
                  <span className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/20 to-transparent transition duration-700 group-hover:translate-x-full" />
                  <span className="relative">{label}</span>
                </button>
              ))}
            </div>
          </div>

          <FeaturePlaceholder items={upcomingFeatures} />
        </div>

        <section className="animate-fade-in max-w-[calc(100vw-3rem)] rounded-lg border border-white/10 bg-white/5 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur sm:max-w-none">
          <h2 className="mb-3 text-xl font-semibold text-white">后续功能占位</h2>
          <p className="max-w-3xl leading-7 text-slate-300">
            本阶段只优化展示和文档。小说解析、AI 调用、YAML 生成和剧本预览会在后续 PR 中分阶段实现。
          </p>
        </section>
      </section>
    </main>
  );
}
