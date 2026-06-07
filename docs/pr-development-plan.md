# PR 迭代记录与维护计划

本项目按照“每个 PR 聚焦一个明确功能”的方式持续迭代。各阶段均保留独立分支、功能 commit、PR 标题和 PR 描述，避免在最后阶段一次性导入全部代码。

最后更新：2026 年 6 月 7 日

## 已完成 PR

### PR 1：Next.js 项目初始化

- 分支：`codex/pr1-project-scaffold`
- PR 标题：`chore: scaffold Next.js project and submission docs`
- 状态：已合并
- 完成内容：
  - 初始化 Next.js、TypeScript、React 和 Tailwind CSS 项目。
  - 建立 `app/`、`components/`、`lib/`、`data/`、`docs/` 等基础目录。
  - 增加基础首页、README、`.env.example` 和 Node 项目 `.gitignore`。
  - 明确项目本地运行方式和分阶段提交原则。

### PR 2：首页视觉与文档优化

- 分支：`codex/pr2-polish-homepage-pr-plan`
- PR 标题：`feat: polish homepage and update PR plan`
- 状态：已合并
- 完成内容：
  - 将首页调整为深色科技感视觉。
  - 增加背景网格、光效、淡入和上移动画。
  - 优化首页按钮与功能区域样式。
  - 更新 README 和开发计划文档。

### PR 3：小说输入与章节处理

- 分支：`codex/pr3-novel-input`
- PR 标题：`feat: add novel input and chapter parsing`
- 状态：已合并
- 完成内容：
  - 增加小说文本输入区和原创示例文本。
  - 支持“第一章”“第 1 章”“Chapter 1”等章节标题格式。
  - 增加至少 3 章校验和友好错误提示。
  - 展示章节序号、标题和正文字符数。

### PR 4：YAML Schema 设计说明

- 分支：`codex/pr4-yaml-schema-doc`
- PR 标题：`feat: add screenplay YAML schema and design doc`
- 状态：已合并
- 完成内容：
  - 设计 `script -> chapter -> scene -> beat` 剧本结构。
  - 新增 `schema/script.schema.yaml`。
  - 新增字段类型、作用和设计原因说明。
  - 增加包含章节、场景和 beats 的示例 YAML。

### PR 5：DeepSeek 剧本转换流程

- 分支：`codex/pr5-deepseek-conversion-flow`
- PR 标题：`feat: add DeepSeek script conversion flow`
- 状态：已合并
- 完成内容：
  - 新增服务端 `/api/convert` 转换接口。
  - 通过 OpenAI 兼容 SDK 调用 DeepSeek。
  - 增加 Prompt 模板、模型 JSON 清理和解析工具。
  - 增加 Mock 模式，未配置真实密钥时也可演示。
  - 增加角色、章节、场景、beats 和 YAML 预览。
  - 保证真实 API Key 只从环境变量读取。

### PR 6：多页面 UI 与功能整合

- 分支：`codex/pr6-ui-pagination`
- PR 标题：`feat: ui pagination and final homepage integration`
- 状态：已合并
- 完成内容：
  - 使用 Next.js App Router 拆分首页、转换页和 Schema 页面。
  - 增加统一页面布局与顶部导航。
  - 增加剧本章节分页预览。
  - 将 Schema 设计说明整理为 UI 页面。
  - 增加 Schema YAML 复制和下载能力。

### PR 7：README 横幅与文档完善

- 分支：`codex/pr7-readme-final-polish`
- PR 标题：`docs: polish README and add project banner`
- 状态：已合并
- 完成内容：
  - 在 README 开头增加项目横幅图片。
  - 调整项目定位描述。
  - 补齐第三方依赖说明。
  - 检查项目 commit、PR 记录和敏感信息提交情况。

### PR 8：移除 Demo 页面并更新项目文档

- 分支：`codex/pr8-remove-demo-and-refresh-docs`
- PR 标题：`refactor: remove demo page and refresh project docs`
- 状态：已合并
- 完成内容：
  - 从首页和顶部导航移除 Demo 展示入口。
  - 删除 `/demo` 页面和相关占位内容。
  - 将首页调整为小说转换与 Schema 两个主要入口。
  - 扩充 README 的功能、接口、测试、安全和维护说明。
  - 恢复并完善 PR1 至 PR8 的迭代记录。

### PR 9：生成结果 YAML 下载

- 分支：`codex/pr9-download-generated-yaml`
- PR 标题：`feat: add YAML download for script drafts`
- 状态：已合并
- 完成内容：
  - 在剧本生成结果的 YAML 区域增加下载按钮，并与复制按钮并列展示。
  - 使用浏览器 Blob 将当前 YAML 内容下载为本地文件。
  - 根据剧本标题生成文件名，并过滤 Windows 文件名中的非法字符。
  - 保持转换接口、剧本预览和 YAML Schema 结构不变。
- 验证方式：使用示例小说生成剧本，确认 YAML 可复制、可下载且文件内容完整；运行 lint 和生产构建。

### PR 10：README 演示视频入口

- 分支：`codex/pr10-add-demo-video-links`
- PR 标题：`docs: add project demo video links`
- 状态：已合并
- 完成内容：
  - 在 README 开头的显眼位置增加项目演示视频区域。
  - 增加 B 站完整演示链接和抖音演示链接。
  - 保持应用代码、接口和页面功能不变。
- 验证方式：检查 README 链接渲染与跳转地址，并确认提交只包含文档修改。

### PR 11：持续维护 PR 迭代记录

- 分支：`codex/pr11-update-pr-history`
- PR 标题：`docs: update PR history and maintenance rules`
- 状态：已完成
- 完成内容：
  - 修正 PR 8 的标题字段和合并状态。
  - 补充 PR 9、PR 10 和 PR 11 的分支、标题、状态与完成内容。
  - 明确后续每个 PR 都要同步维护本文件，防止迭代记录再次中断。
  - 本次只更新迭代文档，不修改 UI、接口或业务逻辑。
- 验证方式：检查 PR 8 至 PR 11 记录与 GitHub 实际信息一致，并运行 Markdown 差异检查、lint 和生产构建。

## 后续可维护功能

### YAML 校验与导出体验

- 已支持直接下载生成后的剧本 YAML，后续可补充导出文件命名和格式选项。
- 在导出前使用 Schema 校验字段类型和必填项。
- 在页面中展示具体校验路径和修复提示。

### 剧本编辑与保存

- 支持在页面中编辑角色、场景和 beats。
- 增加浏览器本地草稿保存与恢复。
- 支持重新排序章节、场景和节拍。

### 生成质量优化

- 按悬疑、都市、古风、科幻等题材拆分提示词模板。
- 增加生成参数和风格选项。
- 建立示例集和提示词回归测试，减少角色名、地点和对白识别错误。

### 测试与稳定性

- 为章节解析、JSON 清理和类型校验增加单元测试。
- 为 `/api/convert` 增加接口测试。
- 为完整转换流程增加浏览器端到端测试。
- 增加超时、限流、重试和错误日志处理。

### 视频生成工作流扩展

- 根据 `camera_hint`、`sound_hint` 和 `duration_seconds` 生成分镜清单。
- 增加角色一致性、场景风格和镜头提示词整理。
- 保持视频工作流与小说转剧本核心功能解耦，使用独立 PR 逐步实现。

## 后续 PR 提交规范

1. 每个 PR 只新增或修改一个明确功能。
2. commit message 使用有意义的类型前缀，例如 `feat:`、`fix:`、`docs:`、`refactor:`。
3. 每个新 PR 都要同步更新 `docs/pr-development-plan.md`，记录分支、PR 标题、状态、完成内容和测试方式。
4. PR 描述至少包含：
   - 本日完成的功能和修改范围。
   - 核心实现思路。
   - 测试方式与验证结果。
   - 本 PR 未包含的内容。
5. 合并前运行：

```powershell
npm run lint
npm run build
```

6. 不提交 `.env.local`、API Key、账号、密码、访问令牌或其他敏感信息。
