# PR 开发计划

本计划用于满足“持续 commit、按 PR 拆分功能、每个 PR 只做一件事”的提交要求。每个 PR 合并前都应包含明确标题、描述、测试方式和 commit message。

## PR 1：Next.js 项目脚手架与提交规范说明

- 分支：`codex/pr1-project-scaffold`
- 目标：建立 Next.js + TypeScript + Tailwind CSS 项目骨架、基础首页、README、环境变量示例和 PR 计划文档。
- 不包含：小说解析、AI 调用、YAML Schema、YAML 输出、剧本预览。
- 建议 commit：`chore: scaffold nextjs project and submission docs`

## PR 2：YAML Schema 与字段设计说明

- 分支：`codex/pr2-yaml-schema-doc`
- 目标：新增剧本 YAML Schema 和字段设计说明文档。
- 主要文件：`schema/script.schema.yaml`、`docs/schema-design.md`、`examples/script.sample.yaml`。
- 不包含：自动转换逻辑。
- 建议 commit：`docs: add screenplay yaml schema design`

## PR 3：Web 输入页面与章节切分

- 分支：`codex/pr3-novel-input-parser`
- 目标：新增小说文本输入区域，识别章节标题，并校验章节数不少于 3。
- 主要文件：`app/`、`components/`、`lib/novel-parser.ts`。
- 不包含：剧本生成和 AI 调用。
- 建议 commit：`feat: parse novel input into chapters`

## PR 4：规则版剧本转换 MVP

- 分支：`codex/pr4-rule-based-script-mvp`
- 目标：实现不依赖 AI 的基础转换，把章节拆成场景、旁白和对白候选结构。
- 主要文件：`lib/script-converter.ts`、`components/`。
- 不包含：真实 AI provider。
- 建议 commit：`feat: convert chapters to basic screenplay structure`

## PR 5：AI 调用抽象层与 prompt 模板

- 分支：`codex/pr5-ai-adapter-prompts`
- 目标：加入 AI provider 抽象、prompt 模板和 mock provider，便于后续接入真实模型。
- 主要文件：`lib/ai/`、`docs/prompts.md`、`app/api/`。
- 不包含：强依赖真实 API 的测试。
- 建议 commit：`feat: add ai adapter and prompt templates`

## PR 6：Web 端到端转换与 Schema 校验

- 分支：`codex/pr6-schema-validation-cli`
- 目标：串联输入、转换、YAML 输出和 Schema 校验，形成可运行 Web Demo 主流程。
- 主要文件：`app/`、`components/`、`lib/yaml-writer.ts`、`lib/schema-validator.ts`。
- 不包含：示例与最终展示整理。
- 建议 commit：`feat: add end-to-end web conversion flow`

## PR 7：示例、演示与文档补充

- 分支：`codex/pr7-examples-demo-docs`
- 目标：补充 3 章以上示例小说、示例 YAML、运行说明、第三方库说明和常见问题。
- 主要文件：`examples/`、`README.md`、`docs/demo.md`。
- 不包含：大规模功能重构。
- 建议 commit：`docs: add examples and demo guide`

## PR 8：最终提交整理与测试补强

- 分支：`codex/pr8-submission-polish`
- 目标：整理最终提交清单，补足边界测试，检查 README、Schema 文档和示例输出一致性。
- 主要文件：`README.md`、`docs/submission-checklist.md`、测试文件。
- 不包含：新增大功能。
- 建议 commit：`chore: polish submission materials`
