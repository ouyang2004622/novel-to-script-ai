import { readFileSync } from "fs";
import path from "path";

import { AppShell } from "@/components/AppShell";
import { SchemaYamlPanel } from "@/components/SchemaYamlPanel";

const structureReasons = [
  {
    title: "chapter",
    text: "保留小说原始章节边界，方便从剧本内容追溯到原文来源。",
  },
  {
    title: "scene",
    text: "表达可视化场景，适合组织场景切换、镜头顺序和人物出场。",
  },
  {
    title: "beat",
    text: "表达单个动作、对白、旁白、情绪或转场，是后续分镜细化的最小单位。",
  },
];

const fieldGroups = [
  {
    title: "顶层结构",
    description:
      "顶层使用 script 包裹所有剧本内容，让导出、校验和后续元数据扩展保持清晰。",
    fields: [
      ["script.title", "string", "剧本标题", "用于页面展示、文件命名和导出标题。"],
      ["script.source_type", "string", "来源类型", "当前固定为 novel，说明数据来自小说文本。"],
      ["script.language", "string", "内容语言", "便于字幕、多语言导出和提示词组织。"],
      ["script.chapters", "array", "章节列表", "保留小说章节结构，方便从原文追溯到剧本。"],
    ],
  },
  {
    title: "Chapter 字段",
    description: "chapter 对应小说中的一个章节，负责承接原文结构和章节摘要。",
    fields: [
      ["chapter_id", "string", "章节唯一标识", "方便后续引用、排序和定位。"],
      ["chapter_title", "string", "章节标题", "保留原文标题或整理后的标题。"],
      ["summary", "string", "章节摘要", "帮助用户快速理解章节内容。"],
      ["scenes", "array", "场景列表", "把章节拆成可视化场景，便于分镜和预览。"],
    ],
  },
  {
    title: "Scene 字段",
    description:
      "scene 描述一组发生在同一地点或同一段连续情境中的剧情，是剧本预览的主要组织单位。",
    fields: [
      ["scene_id", "string", "场景唯一标识", "方便场景排序、编辑和后续引用。"],
      ["scene_title", "string", "场景标题", "用于页面展示和分镜分组。"],
      ["location", "string", "场景地点", "帮助明确空间信息。"],
      ["time", "string", "场景时间", "帮助确定光线、氛围和画面风格。"],
      ["characters", "string[]", "出场角色", "帮助保持角色一致性和对白归属。"],
      ["scene_purpose", "string", "场景作用", "说明本场戏推动剧情、制造冲突或展示情绪的目的。"],
      ["beats", "array", "场景内节拍", "将场景拆成更小的动作、对白和镜头提示。"],
    ],
  },
  {
    title: "Beat 字段",
    description:
      "beat 表达一个连续的小动作、对白、旁白、情绪变化或转场，适合逐条编辑和重排。",
    fields: [
      ["beat_id", "string", "beat 唯一标识", "方便逐条编辑、重排和追踪结果。"],
      ["type", "enum", "beat 类型", "限定 action、dialogue、narration、emotion、transition。"],
      ["character", "string", "关联角色", "对白和情绪 beat 需要知道说话或表现情绪的人物。"],
      ["content", "string", "beat 内容", "描述动作、台词、旁白或转场。"],
      ["duration", "number", "建议时长", "用于后续节奏控制。"],
      ["camera_hint", "string", "镜头提示", "提示近景、远景、推镜、特写等画面组织。"],
      ["sound_hint", "string", "声音提示", "提示环境声、音乐、音效或语气。"],
    ],
  },
];

const beatTypes = [
  ["action", "人物动作或可视化事件。"],
  ["dialogue", "角色对白，需要尽量填写 character。"],
  ["narration", "旁白或必要解释，适合补充故事背景。"],
  ["emotion", "人物情绪变化，适合引导表情、姿态和画面氛围。"],
  ["transition", "场景或镜头转场。"],
];

function getSchemaYamlText() {
  return readFileSync(
    path.join(process.cwd(), "schema", "script.schema.yaml"),
    "utf8",
  );
}

export default function SchemaPage() {
  const schemaYamlText = getSchemaYamlText();

  return (
    <AppShell maxWidth="max-w-7xl">
      <section className="animate-slide-up space-y-4">
        <p className="text-sm font-semibold uppercase tracking-[0.22em] text-cyan-200/70">
          YAML Schema
        </p>
        <h1 className="max-w-4xl text-4xl font-bold leading-tight tracking-normal text-white sm:text-5xl">
          剧本结构设计
        </h1>
        <p className="max-w-3xl text-base leading-8 text-slate-300">
          结构首先服务于小说到剧本的改编流程，同时保留场景、节拍、镜头和声音提示等字段，方便继续扩展分镜与成片流程。
        </p>
      </section>

      <section className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="space-y-5">
          <section className="rounded-lg border border-white/10 bg-white/5 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur">
            <h2 className="text-xl font-semibold text-white">设计目标</h2>
            <p className="mt-4 text-sm leading-7 text-slate-300">
              Schema 采用 script → chapter → scene → beat 的三级叙事结构，既保留小说章节顺序，也让作者先得到可阅读、可编辑的剧本草稿。
            </p>
            <div className="mt-5 grid gap-3">
              {structureReasons.map((item) => (
                <div
                  key={item.title}
                  className="rounded-lg border border-white/10 bg-slate-950/35 p-4"
                >
                  <h3 className="font-semibold text-cyan-100">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm leading-7 text-slate-300">
                    {item.text}
                  </p>
                </div>
              ))}
            </div>
          </section>

          <section className="rounded-lg border border-white/10 bg-white/5 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur">
            <h2 className="text-xl font-semibold text-white">Beat 类型</h2>
            <ul className="mt-4 space-y-3">
              {beatTypes.map(([type, description]) => (
                <li
                  key={type}
                  className="flex gap-3 rounded-lg border border-white/10 bg-slate-950/35 p-3 text-sm leading-6 text-slate-300"
                >
                  <span className="min-w-24 font-semibold text-cyan-100">
                    {type}
                  </span>
                  <span>{description}</span>
                </li>
              ))}
            </ul>
          </section>

          <section className="rounded-lg border border-white/10 bg-white/5 p-6 shadow-[0_24px_80px_rgba(0,0,0,0.28)] backdrop-blur">
            <h2 className="text-xl font-semibold text-white">扩展方向</h2>
            <div className="mt-4 grid gap-3 text-sm leading-7 text-slate-300">
              <p>Schema 校验可以接入表单提示，让字段缺失或类型错误更容易定位。</p>
              <p>导出模板可以继续补充示例剧本、分镜表和项目交付包。</p>
            </div>
          </section>
        </div>

        <div className="space-y-5">
          {fieldGroups.map((group) => (
            <section
              key={group.title}
              className="rounded-lg border border-white/10 bg-white/5 p-5 shadow-[0_24px_80px_rgba(0,0,0,0.24)] backdrop-blur"
            >
              <h2 className="text-xl font-semibold text-white">
                {group.title}
              </h2>
              <p className="mt-3 text-sm leading-7 text-slate-300">
                {group.description}
              </p>
              <div className="mt-5 overflow-x-auto">
                <table className="w-full min-w-[42rem] border-separate border-spacing-0 text-left text-sm">
                  <thead className="text-xs uppercase text-slate-500">
                    <tr>
                      <th className="border-b border-white/10 px-3 py-3">
                        字段
                      </th>
                      <th className="border-b border-white/10 px-3 py-3">
                        类型
                      </th>
                      <th className="border-b border-white/10 px-3 py-3">
                        作用
                      </th>
                      <th className="border-b border-white/10 px-3 py-3">
                        设计原因
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {group.fields.map(([field, type, usage, reason]) => (
                      <tr key={field} className="text-slate-300">
                        <td className="border-b border-white/10 px-3 py-3 font-semibold text-cyan-100">
                          {field}
                        </td>
                        <td className="border-b border-white/10 px-3 py-3">
                          {type}
                        </td>
                        <td className="border-b border-white/10 px-3 py-3">
                          {usage}
                        </td>
                        <td className="border-b border-white/10 px-3 py-3">
                          {reason}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </section>
          ))}

          <SchemaYamlPanel yamlText={schemaYamlText} />
        </div>
      </section>
    </AppShell>
  );
}
