import { FeaturePlaceholder } from "@/components/FeaturePlaceholder";

const upcomingFeatures = [
  "小说章节输入与章节数校验",
  "AI 辅助剧本结构化转换",
  "YAML 输出与 Schema 校验",
  "剧本预览与示例导出",
];

export default function Home() {
  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col gap-10 px-6 py-10 sm:px-10 lg:px-12">
      <section className="grid flex-1 items-center gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <div className="space-y-6">
          <p className="text-sm font-semibold text-qiniu">
            七牛云 x XEngineer 暑期实训营第三批次题目三
          </p>
          <div className="space-y-4">
            <h1 className="max-w-3xl text-4xl font-bold leading-tight text-ink sm:text-5xl">
              AI 小说转剧本工具
            </h1>
            <p className="max-w-2xl text-base leading-8 text-zinc-700 sm:text-lg">
              面向小说改编场景的 Web Demo，计划支持输入 3 个章节以上的小说文本，
              自动整理为结构化剧本内容，并输出符合 Schema 约束的 YAML。
            </p>
          </div>
        </div>

        <FeaturePlaceholder items={upcomingFeatures} />
      </section>

      <section className="border-t border-zinc-300 py-6">
        <h2 className="mb-3 text-xl font-semibold text-ink">后续功能占位</h2>
        <p className="max-w-3xl leading-7 text-zinc-700">
          本 PR 仅初始化项目骨架。小说解析、AI 调用、YAML 生成和剧本预览将在后续 PR 中分阶段实现。
        </p>
      </section>
    </main>
  );
}
