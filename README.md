# AI 小说转剧本工具

七牛云 x XEngineer 暑期实训营第三批次题目三：AI 小说转剧本工具。

本项目计划开发一个 Web Demo，用于将 3 个章节以上的小说文本转换为结构化剧本，并以 YAML 格式输出。项目还会提供 YAML Schema 设计说明文档，解释字段设计与设计原因。

## 技术栈

- Next.js
- TypeScript
- Tailwind CSS
- React

## 当前状态

PR 1 已完成 Node / Next.js 项目初始化。PR 2 优化了首页视觉和项目文档。PR 3 完成了小说输入、章节识别和至少 3 章的数量校验。

当前 PR 4 完成 YAML Schema 设计说明：

- 新增 `schema/script.schema.yaml`，定义 `script -> chapter -> scene -> beat` 三级剧本结构。
- 新增 `docs/schema-design.md`，说明字段类型、作用和设计原因。
- 新增 `data/sample-script.yaml`，提供一章两场景的示例剧本数据。
- 为后续 AI 漫剧分镜和视频生成保留 `duration`、`camera_hint`、`sound_hint` 等提示字段。

当前阶段不包含自动生成 YAML、AI 调用、剧本预览或真实小说转剧本逻辑。

## YAML Schema

- Schema 文件：[schema/script.schema.yaml](schema/script.schema.yaml)
- 字段说明：[docs/schema-design.md](docs/schema-design.md)
- 示例数据：[data/sample-script.yaml](data/sample-script.yaml)

## 本地运行

```powershell
npm install
npm run dev
```

启动后访问：

```text
http://localhost:3000
```

常用命令：

```powershell
npm run lint
npm run build
```

## 目录结构

```text
app/          Next.js App Router 页面与全局样式
components/   可复用 UI 组件
lib/          工具函数与业务逻辑模块
data/         示例数据与静态数据
docs/         项目文档
schema/       YAML Schema 定义
```

## 持续 PR 开发计划

完整计划见 [docs/pr-development-plan.md](docs/pr-development-plan.md)。

本项目会按 PR 拆分持续开发。每个 PR 尽量只完成一个明确阶段，后续计划可随着实现情况更新。

## 第三方库说明

当前项目引入的第三方库：

- `next`：用于构建 Web Demo 和路由页面。
- `react`、`react-dom`：用于构建页面组件。
- `typescript`：用于提供类型约束。
- `tailwindcss`、`postcss`、`autoprefixer`：用于页面样式开发。
- `eslint`、`eslint-config-next`：用于基础代码规范检查。

PR 4 未新增第三方依赖。

后续如果引入 YAML、Schema 校验、AI SDK 或其他第三方库，会在本节补充库名、用途和必要性。

## AI 辅助开发说明

当前阶段使用 AI 工具辅助梳理 Schema 草稿和文档表述。YAML 字段设计、字段取舍、文件整合、检查和最终提交由本人完成。
