import Link from "next/link";

import { AppShell } from "@/components/AppShell";

const demoSlots = [
  {
    title: "操作演示视频",
    description: "用于放置从小说输入到剧本预览的完整操作录屏链接。",
  },
  {
    title: "作品讲解视频",
    description: "用于放置作品结构、Schema 设计和转换流程的讲解链接。",
  },
  {
    title: "示例剧本展示",
    description: "用于放置生成结果、YAML 文件或后续导出文件的展示链接。",
  },
];

export default function DemoPage() {
  return (
    <AppShell>
      <section className="animate-slide-up grid flex-1 items-center gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <div className="space-y-6">
          <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200/70">
            Demo
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-normal text-white sm:text-5xl">
            Demo 示例页面
          </h1>
          <p className="max-w-2xl text-base leading-8 text-slate-300">
            这里用于集中放置演示视频、操作录屏和示例剧本链接。当前视频地址尚未上传，页面已预留展示区域。
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/convert"
              className="rounded-full border border-cyan-200/40 bg-cyan-300/15 px-5 py-3 text-sm font-semibold text-cyan-50 transition duration-300 hover:-translate-y-1 hover:border-cyan-100 hover:bg-cyan-300/25 hover:shadow-[0_0_40px_rgba(34,211,238,0.3)]"
            >
              体验转换流程
            </Link>
            <Link
              href="/schema"
              className="rounded-full border border-white/15 bg-white/10 px-5 py-3 text-sm font-semibold text-slate-100 transition duration-300 hover:-translate-y-1 hover:border-violet-200/70 hover:bg-violet-300/20 hover:shadow-[0_0_34px_rgba(167,139,250,0.28)]"
            >
              查看 Schema
            </Link>
          </div>
        </div>

        <section className="rounded-lg border border-white/10 bg-white/5 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur">
          <div className="aspect-video rounded-lg border border-dashed border-cyan-300/30 bg-slate-950/50 p-6">
            <div className="flex h-full flex-col items-center justify-center text-center">
              <span className="rounded-full border border-cyan-300/30 bg-cyan-300/10 px-4 py-2 text-xs font-semibold text-cyan-100">
                视频链接占位
              </span>
              <h2 className="mt-5 text-2xl font-semibold text-white">
                演示视频尚未上传
              </h2>
              <p className="mt-3 max-w-md text-sm leading-7 text-slate-300">
                上传视频后，可在此处替换为播放器、外链入口或作品展示封面。
              </p>
            </div>
          </div>

          <div className="mt-5 grid gap-3">
            {demoSlots.map((slot) => (
              <article
                key={slot.title}
                className="rounded-lg border border-white/10 bg-slate-950/35 p-4"
              >
                <h3 className="font-semibold text-white">{slot.title}</h3>
                <p className="mt-2 text-sm leading-7 text-slate-300">
                  {slot.description}
                </p>
              </article>
            ))}
          </div>
        </section>
      </section>
    </AppShell>
  );
}
