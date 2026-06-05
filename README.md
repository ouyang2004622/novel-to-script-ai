# AI 小说转剧本工具

七牛云 x XEngineer 暑期实训营第三批次题目三：AI 小说转剧本工具。

本项目是一个面向作者的小说改编 Web 工具，用于将 3 个章节以上的小说文本整理为结构化剧本草稿，并以 YAML 格式承载剧本结构。剧本结构优先服务于小说改编，也为后续分镜、视频生成和示例导出保留扩展空间。

## 功能入口

首页提供三个主要入口：

- 开始转换小说：进入小说输入、章节校验、剧本生成和结构化预览流程。
- 查看 YAML Schema：查看字段说明、设计原因，并复制或下载 Schema YAML 文件。
- 查看 Demo 示例：进入演示视频占位页面，后续可放置操作录屏或作品展示链接。

## 使用说明

本地启动后访问首页：

```text
http://localhost:3000
```

使用小说转换功能：

1. 点击“开始转换小说”。
2. 粘贴至少 3 个章节的小说文本，或点击“填入示例文本”。
3. 点击“检查章节”确认章节数量。
4. 点击“生成剧本草稿”。
5. 在预览区查看角色、章节、场景、节拍、镜头建议和声音建议。
6. 展开“查看 YAML”后复制 YAML 文本。

查看 Schema：

1. 点击“查看 YAML Schema”。
2. 阅读字段说明和设计原因。
3. 点击“复制 YAML”复制 Schema 文件内容。
4. 点击“下载 YAML”下载 `script.schema.yaml`。

查看 Demo：

1. 点击“查看 Demo 示例”。
2. 页面会展示视频占位区域。
3. 后续上传演示视频后，可在该页面替换为视频链接或播放器。

## 技术栈

- Next.js
- TypeScript
- Tailwind CSS
- React
- DeepSeek API（OpenAI 兼容格式）

## 本地运行

```powershell
npm install
npm run dev
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

本地演示如果不想调用真实接口，可以使用：

```text
MOCK_AI=true
```

`.env.local` 只保存在本地，不允许提交到 Git。

## YAML Schema

- Schema 文件：[schema/script.schema.yaml](schema/script.schema.yaml)
- 字段说明：[docs/schema-design.md](docs/schema-design.md)
- 示例数据：[data/sample-script.yaml](data/sample-script.yaml)

## 目录结构

```text
app/          Next.js App Router 页面与接口
components/   可复用 UI 组件
lib/          工具函数与业务逻辑模块
data/         示例数据与静态数据
docs/         项目文档
schema/       YAML Schema 定义
```

## 第三方库说明

- `next`：用于构建 Web 应用和路由页面。
- `react`、`react-dom`：用于构建页面组件。
- `typescript`：用于提供类型约束。
- `tailwindcss`、`postcss`、`autoprefixer`：用于页面样式开发。
- `eslint`、`eslint-config-next`：用于基础代码规范检查。
- `openai`：用于以 OpenAI 兼容格式调用 DeepSeek API。
- `js-yaml`：用于把结构化剧本 JSON 转换成 YAML 文本。
- `@types/js-yaml`：用于提供 `js-yaml` 的 TypeScript 类型。

## 开发辅助说明

本项目开发过程中使用 AI 工具辅助生成部分代码结构、文档草稿和调试建议，但核心功能设计、代码整合、运行调试和最终提交由本人完成。
