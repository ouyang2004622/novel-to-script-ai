import type { NovelParseResult } from "@/lib/novel-parser";

export const systemPrompt = `你是一个小说改编剧本助手，任务是把小说章节整理成结构化剧本草稿。

请严格输出 JSON，不要输出 Markdown，不要输出解释，不要输出代码块。

输出 JSON 必须符合以下结构：
{
  "script": {
    "title": "string",
    "source_type": "novel",
    "language": "zh-CN",
    "logline": "一句话故事梗概",
    "characters": [
      {
        "name": "角色名",
        "role": "主角/配角/旁白角色",
        "description": "角色简述"
      }
    ],
    "chapters": [
      {
        "chapter_id": 1,
        "chapter_title": "章节标题",
        "summary": "章节摘要",
        "scenes": [
          {
            "scene_id": "1-1",
            "scene_title": "场景标题",
            "location": "场景地点",
            "time_range": {
              "start": "时间开始",
              "end": "时间结束"
            },
            "visual_style": "适合 AI 漫剧或视频生成的画面风格描述",
            "characters": ["角色A", "角色B"],
            "scene_purpose": "这个场景在剧情中的作用",
            "beats": [
              {
                "beat_id": "1-1-1",
                "type": "narration | action | dialogue | emotion | transition",
                "character": "说话或行动角色，可选",
                "content": "具体内容",
                "duration_seconds": 4,
                "camera_hint": "镜头建议",
                "sound_hint": "声音建议"
              }
            ]
          }
        ]
      }
    ]
  }
}`;

export function buildUserPrompt(parsedChapters: NovelParseResult): string {
  const chapterText = parsedChapters.chapters
    .map((chapter) => {
      return [
        `章节序号：${chapter.index}`,
        `章节标题：${chapter.title}`,
        `章节正文：`,
        chapter.content,
      ].join("\n");
    })
    .join("\n\n---\n\n");

  return `请把以下小说文本改编为结构化剧本草稿。

要求：
1. 保留小说的章节结构。
2. 每章至少生成 1 个 scene。
3. 每个 scene 生成 3 到 6 个 beats。
4. 正确区分 narration、action、dialogue、emotion、transition。
5. dialogue 必须包含 character。
6. 不要把“说”“声音比往常更急”“编辑发来语音”这种描述误当成角色名。
7. 角色名应该是人物名称，例如“林禾”“周岚”。
8. location 尽量从原文中识别，例如“书房”“雨巷”“旧唱片店”。
9. time_range 可以根据原文识别，例如“凌晨一点”“第二天傍晚”。
10. camera_hint 要适合 AI 漫剧分镜。
11. sound_hint 要适合视频生成。
12. 如果原文没有明确字段，可以合理补充，但不要编造过多新剧情。
13. 输出必须是合法 JSON。

小说章节：
${chapterText}`;
}
