# AI 小说转剧本工具

七牛云 x XEngineer 暑期实训营第三批次题目三：AI 小说转剧本工具。

本项目计划开发一个 Web Demo，用于将 3 个章节以上的小说文本转换为结构化剧本，并以 YAML 格式输出。项目还会提供 YAML Schema 设计说明文档，解释字段设计与设计原因。

## 技术栈

- Next.js
- TypeScript
- Tailwind CSS
- React

## 当前状态

PR 1 已完成 Node / Next.js 项目初始化。PR 2 优化了首页视觉和项目文档。

当前 PR 3 完成小说输入与章节处理：

- 新增小说文本输入区域。
- 新增“填入示例文本”和“检查章节”按钮。
- 新增章节标题识别与章节数量校验。
- 新增原创示例小说文本。
- 在首页展示识别到的章节数量、章节标题和每章正文非空字符数。

当前阶段不包含 AI 调用、YAML 生成、剧本预览或真实小说转剧本逻辑。

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

PR 3 未新增第三方依赖。

后续如果引入 YAML、Schema 校验、AI SDK 或其他第三方库，会在本节补充库名、用途和必要性。

## AI 辅助开发说明

当前阶段使用 AI 工具辅助设计章节解析规则、组件拆分和提示文案。代码整合、测试和最终提交由本人完成。
