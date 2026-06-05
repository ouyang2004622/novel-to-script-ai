import { NextRequest, NextResponse } from "next/server";
import yaml from "js-yaml";

import { mockScriptObject } from "@/data/mockScript";
import { generateScriptWithDeepSeek } from "@/lib/ai/deepseek";
import { parseNovelChapters } from "@/lib/novel-parser";
import type {
  ConvertScriptError,
  ConvertScriptResponse,
  ScriptObject,
} from "@/lib/script-types";

export const runtime = "nodejs";

function createErrorResponse(message: string, status = 400) {
  return NextResponse.json<ConvertScriptError>(
    {
      error: message,
      message,
    },
    { status },
  );
}

function shouldUseMockAi() {
  return process.env.MOCK_AI !== "false";
}

function scriptToYaml(scriptObject: ScriptObject) {
  return yaml.dump(scriptObject, {
    noRefs: true,
    lineWidth: 120,
    sortKeys: false,
  });
}

export async function POST(request: NextRequest) {
  try {
    const body = (await request.json().catch(() => null)) as {
      novelText?: unknown;
    } | null;

    const novelText = typeof body?.novelText === "string" ? body.novelText : "";
    const parseResult = parseNovelChapters(novelText);

    if (!parseResult.isValid) {
      return createErrorResponse(parseResult.message, 400);
    }

    const useMock = shouldUseMockAi();

    if (!useMock && !process.env.DEEPSEEK_API_KEY) {
      return createErrorResponse(
        "未检测到 DEEPSEEK_API_KEY。请在 .env.local 中配置密钥，或将 MOCK_AI 设置为 true 使用 mock 演示。",
        400,
      );
    }

    const scriptObject = useMock
      ? mockScriptObject
      : await generateScriptWithDeepSeek(parseResult);

    const response: ConvertScriptResponse = {
      scriptObject,
      yamlText: scriptToYaml(scriptObject),
      source: useMock ? "mock" : "deepseek",
      message: useMock
        ? "已使用 mock 模式生成剧本草稿。"
        : "已通过 DeepSeek 生成剧本草稿。",
    };

    return NextResponse.json(response);
  } catch (error) {
    const message =
      error instanceof Error
        ? error.message
        : "转换过程中出现异常，请稍后重试。";

    return createErrorResponse(message, 500);
  }
}
