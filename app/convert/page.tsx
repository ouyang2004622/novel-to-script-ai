import { AppShell } from "@/components/AppShell";
import { NovelInputSection } from "@/components/NovelInputSection";

export default function ConvertPage() {
  return (
    <AppShell maxWidth="max-w-7xl">
      <section className="animate-slide-up space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200/70">
          Convert
        </p>
        <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-normal text-white sm:text-5xl">
          小说转换工作台
        </h1>
        <p className="max-w-3xl text-base leading-8 text-slate-300">
          粘贴至少 3 个章节的小说文本，完成章节校验后生成剧本草稿，并按章节、场景和节拍查看结果。
        </p>
      </section>

      <NovelInputSection />
    </AppShell>
  );
}
