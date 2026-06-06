import { AppShell } from "@/components/AppShell";
import { HomeActionCard } from "@/components/HomeActionCard";

const actionCards = [
  {
    href: "/convert",
    title: "开始转换小说",
    eyebrow: "Create",
    description:
      "粘贴小说文本，完成章节校验后生成结构化剧本草稿，并查看角色、场景和节拍。",
  },
  {
    href: "/schema",
    title: "查看 YAML Schema",
    eyebrow: "Schema",
    description:
      "查看剧本结构字段说明、设计原因和 YAML Schema 文件，支持复制与下载。",
  },
];

export default function Home() {
  return (
    <AppShell>
      <section className="animate-slide-up flex flex-1 flex-col justify-center gap-10 py-10">
        <div className="mx-auto max-w-4xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.24em] text-cyan-200/70">
            Novel to Screenplay
          </p>
          <h1 className="mt-5 text-4xl font-bold leading-tight tracking-normal text-white sm:text-6xl">
            小说转剧本创作台
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg">
            把多章节小说整理为结构化剧本草稿，集中管理正文输入、剧本预览、Schema
            查看与 YAML 输出。
          </p>
        </div>

        <div className="mx-auto grid w-full max-w-4xl gap-5 md:grid-cols-2">
          {actionCards.map((card) => (
            <HomeActionCard key={card.href} {...card} />
          ))}
        </div>
      </section>
    </AppShell>
  );
}
