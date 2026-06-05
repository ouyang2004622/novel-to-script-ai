# PR 开发计划

本计划用于记录项目的分阶段开发节奏，满足“持续 commit、按 PR 拆分功能、每个 PR 只做一件事”的提交要求。后续阶段可以根据实现情况调整，不需要一次性锁死所有细节。

每个 PR 合并前建议说明：

- 本次做了什么。
- 本次没有做什么。
- 如何本地查看或验证。
- 下一步计划是什么。

## PR 1：Next.js 项目初始化

- 分支：`codex/pr1-project-scaffold`
- 状态：已合并
- 目标：建立 Next.js + TypeScript + Tailwind CSS 项目骨架。
- 已完成：基础首页、项目目录、README、环境变量示例、Node 项目 `.gitignore`。
- 未包含：小说解析、AI 调用、YAML 生成、剧本预览。
- commit：`chore: scaffold nextjs project and submission docs`

## PR 2：首页视觉优化与文档更新

- 分支：`codex/pr2-polish-homepage-pr-plan`
- 状态：已合并
- 目标：优化首页展示效果，并让文档更贴合当前开发进度。
- 已完成：删除首页红色训练营标签，增加深色科技感视觉、动态背景、功能入口占位按钮，更新 README 和 PR 开发计划。
- 未包含：小说解析、AI API 调用、YAML 生成、剧本预览、YAML Schema 修改。
- commit：`feat: polish homepage and update PR plan`

## PR 3：小说输入与章节处理

- 分支：`codex/pr3-novel-input`
- 状态：已完成本地实现
- 目标：增加小说文本输入区域，支持识别章节标题，并校验章节数量不少于 3。
- 已完成：小说输入框、原创示例文本、章节解析工具、章节数量校验、章节列表展示。
- 未包含：AI API 调用、YAML 生成、剧本预览、真实小说转剧本逻辑。
- commit：`feat: add novel input and chapter parsing`

## 后续阶段：YAML Schema 设计说明

- 建议分支：`codex/pr4-yaml-schema-doc`
- 目标：设计剧本 YAML 结构，并补充字段说明文档。
- 可能涉及：`schema/`、`docs/schema-design.md`、`data/`。
- 暂不包含：自动生成 YAML 的业务逻辑。

## 后续阶段：基础转换流程

- 建议分支：`codex/pr5-basic-conversion-flow`
- 目标：将已解析的章节转换为基础剧本结构，形成可预览的数据。
- 可能涉及：`lib/`、`components/`。
- 暂不包含：真实 AI API 调用。

## 后续阶段：AI 辅助转换

- 建议分支：`codex/pr6-ai-adapter`
- 目标：设计 AI 调用入口、提示词模板和 mock 流程，为真实 API 接入做准备。
- 可能涉及：`lib/ai/`、`app/api/`、`docs/prompts.md`。
- 暂不包含：依赖真实密钥才能通过的测试。

## 后续阶段：YAML 输出与演示整理

- 建议分支：`codex/pr7-yaml-output-demo`
- 目标：完成 YAML 输出、示例数据、Demo 操作说明和最终提交清单。
- 可能涉及：`components/`、`lib/`、`data/`、`docs/`、`README.md`。
- 暂不包含：和当前目标无关的大规模重构。
