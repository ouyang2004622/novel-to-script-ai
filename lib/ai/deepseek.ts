import OpenAI from "openai";

import { safeParseModelJson } from "@/lib/ai/json";
import { buildUserPrompt, systemPrompt } from "@/lib/ai/prompts";
import type { NovelParseResult } from "@/lib/novel-parser";
import type { ScriptObject } from "@/lib/script-types";

function isScriptObject(value: unknown): value is ScriptObject {
  if (!value || typeof value !== "object") {
    return false;
  }

  const maybeScript = (value as { script?: unknown }).script;

  if (!maybeScript || typeof maybeScript !== "object") {
    return false;
  }

  const script = maybeScript as {
    title?: unknown;
    source_type?: unknown;
    language?: unknown;
    chapters?: unknown;
  };

  return (
    typeof script.title === "string" &&
    script.source_type === "novel" &&
    script.language === "zh-CN" &&
    Array.isArray(script.chapters)
  );
}

export async function generateScriptWithDeepSeek(
  parsedChapters: NovelParseResult,
): Promise<ScriptObject> {
  const apiKey = process.env.DEEPSEEK_API_KEY;

  if (!apiKey) {
    throw new Error(
      "未检测到 DEEPSEEK_API_KEY。请在 .env.local 中配置密钥，或将 MOCK_AI 设置为 true 使用 mock 演示。",
    );
  }

  const client = new OpenAI({
    baseURL: process.env.DEEPSEEK_BASE_URL || "https://api.deepseek.com",
    apiKey,
  });

  try {
    const completion = await client.chat.completions.create({
      model: process.env.DEEPSEEK_MODEL || "deepseek-v4-flash",
      messages: [
        { role: "system", content: systemPrompt },
        { role: "user", content: buildUserPrompt(parsedChapters) },
      ],
      stream: false,
    });

    const rawContent = completion.choices[0]?.message?.content;

    if (!rawContent) {
      throw new Error("DeepSeek 未返回可解析的剧本内容，请稍后重试。");
    }

    const parsed = safeParseModelJson(rawContent);

    if (!isScriptObject(parsed)) {
      throw new Error("DeepSeek 返回的 JSON 结构不符合剧本草稿要求，请切换 mock 模式或稍后重试。");
    }

    return parsed;
  } catch (error) {
    if (error instanceof Error) {
      throw new Error(`DeepSeek API 调用失败：${error.message}`);
    }

    throw new Error("DeepSeek API 调用失败，请检查网络或稍后重试。");
  }
}
