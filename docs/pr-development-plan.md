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
- 状态：已合并
- 目标：增加小说文本输入区域，支持识别章节标题，并校验章节数量不少于 3。
- 已完成：小说输入框、原创示例文本、章节解析工具、章节数量校验、章节列表展示。
- 未包含：AI API 调用、YAML 生成、剧本预览、真实小说转剧本逻辑。
- commit：`feat: add novel input and chapter parsing`

## PR 4：YAML Schema 设计说明

- 分支：`codex/pr4-yaml-schema-doc`
- 状态：已合并
- 目标：设计剧本 YAML 结构，并补充字段说明文档。
- 已完成：新增 `schema/script.schema.yaml`、`docs/schema-design.md`、`data/sample-script.yaml`，采用 `script -> chapter -> scene -> beat` 结构，并为分镜和视频生成预留镜头、声音、时长提示。
- 未包含：自动生成 YAML 的业务逻辑、AI API 调用、剧本预览。
- commit：`feat: add screenplay YAML schema and design doc`

## PR 5：DeepSeek 辅助基础转换流程

- 分支：`codex/pr5-deepseek-conversion-flow`
- 状态：当前阶段
- 目标：使用 DeepSeek API 将已解析的小说章节转换为结构化剧本草稿，并在页面中预览。
- 已完成：新增 `/api/convert`、DeepSeek OpenAI 兼容调用模块、mock 模式、结构化剧本预览、YAML 查看与复制、首页创作流程状态更新。
- 未包含：视频生成、账号系统、生产级提示词评测、多模型供应商管理。
- commit：`feat: add deepseek script conversion flow`

## 后续阶段：校验、导出与提示词优化

- 可以继续完善 YAML Schema 校验、YAML 文件导出、示例导出和提示词效果优化。
- 如果后续接入更多模型或视频生成工作流，建议单独拆分 PR，避免和当前转换流程混在一起。

## 后续阶段：演示整理

- 目标：补充 Demo 操作说明、最终提交清单和必要截图，确保作品提交材料清楚可复现。
- 暂不包含：和演示整理无关的大规模重构。
