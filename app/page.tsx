import { FeaturePlaceholder } from "@/components/FeaturePlaceholder";
import { NovelInputSection } from "@/components/NovelInputSection";
import type { FeatureFlowItem } from "@/components/FeaturePlaceholder";

const featureFlowItems: FeatureFlowItem[] = [
  { label: "小说章节输入与章节数校验", status: "ready" },
  { label: "YAML Schema 设计", status: "ready" },
  { label: "DeepSeek 辅助剧本结构化转换", status: "ready" },
  { label: "剧本结构预览", status: "ready" },
  { label: "YAML Schema 校验", status: "planned" },
  { label: "示例导出", status: "planned" },
  { label: "视频生成工作流扩展", status: "planned" },
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
              PR 5 DeepSeek 辅助转换流程
            </div>

            <div className="space-y-5">
              <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-normal text-white sm:text-6xl">
                AI 小说转剧本工具
              </h1>
              <p className="max-w-2xl break-words text-base leading-8 text-slate-300 sm:text-lg">
                面向作者的小说改编创作界面。当前阶段支持章节校验、
                DeepSeek 辅助生成剧本草稿、结构化预览和 YAML 查看，
                没有 API Key 时也能使用 mock 模式演示完整流程。
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

          <FeaturePlaceholder items={featureFlowItems} />
        </div>

        <NovelInputSection />

        <section className="animate-fade-in max-w-[calc(100vw-3rem)] rounded-lg border border-white/10 bg-white/5 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur sm:max-w-none">
          <h2 className="mb-3 text-xl font-semibold text-white">
            项目定位
          </h2>
          <p className="max-w-3xl leading-7 text-slate-300">
            主要功能是帮助作者把小说内容改编为可阅读、可编辑的剧本草稿。后续可以继续扩展
            Schema 校验、示例导出，以及面向 AI 视频生成和漫剧分镜的工作流。
          </p>
        </section>
      </section>
    </main>
  );
}
