# AI 小说转剧本工具

七牛云 x XEngineer 暑期实训营第三批次题目三：AI 小说转剧本工具。

本项目计划开发一个 Web Demo，主要面向作者的小说改编需求：将 3 个章节以上的小说文本整理为可阅读、可编辑的结构化剧本，并以 YAML 格式承载剧本结构。后续可以在此基础上拓展 AI 视频生成、漫剧分镜和镜头提示等能力。项目还会提供 YAML Schema 设计说明文档，解释字段设计与设计原因。

## 技术栈

- Next.js
- TypeScript
- Tailwind CSS
- React
- DeepSeek API（OpenAI 兼容格式）

## 当前状态

PR 1 已完成 Node / Next.js 项目初始化。PR 2 优化了首页视觉和项目文档。PR 3 完成了小说输入、章节识别和至少 3 章的数量校验。PR 4 完成了 YAML Schema 与字段说明。

当前 PR 5 新增 DeepSeek API 辅助转换流程：

- 新增 `/api/convert` 接口，在服务端完成章节解析、mock 判断和 DeepSeek 调用。
- 新增 DeepSeek OpenAI 兼容客户端，模型默认使用 `deepseek-v4-flash`。
- 新增 mock 模式，没有 API Key 时也可以演示剧本草稿生成。
- 新增结构化剧本预览，展示角色、章节、场景、beats、镜头建议和声音建议。
- 新增 YAML 查看与复制能力，YAML 由结构化 JSON 数据转换得到。

当前阶段不包含视频生成、账号系统、生产级提示词评测或多模型管理。

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

## 环境变量

复制 `.env.example` 到 `.env.local` 后按需配置：

```text
DEEPSEEK_API_KEY=你的 DeepSeek API Key
DEEPSEEK_BASE_URL=https://api.deepseek.com
DEEPSEEK_MODEL=deepseek-v4-flash
MOCK_AI=false
```

本地演示如果不想调用真实 API，可以使用：

```text
MOCK_AI=true
```

`.env.local` 只保存在本地，不允许提交到 Git。

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
- `openai`：用于以 OpenAI 兼容格式调用 DeepSeek API。
- `js-yaml`：用于把结构化剧本 JSON 转换成 YAML 文本。
- `@types/js-yaml`：用于提供 `js-yaml` 的 TypeScript 类型。

PR 5 新增 `openai`、`js-yaml` 和 `@types/js-yaml`。

后续如果引入 YAML、Schema 校验、AI SDK 或其他第三方库，会在本节补充库名、用途和必要性。

## AI 辅助开发说明

本阶段使用 AI 工具辅助梳理 DeepSeek API 接入方式、提示词结构和错误处理思路，具体代码整合、环境变量配置、页面调试和最终提交由本人完成。
