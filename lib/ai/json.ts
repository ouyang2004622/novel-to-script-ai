export function cleanModelJsonOutput(raw: string): string {
  const withoutFences = raw
    .trim()
    .replace(/```json/gi, "")
    .replace(/```/g, "")
    .trim();

  const firstBraceIndex = withoutFences.indexOf("{");

  if (firstBraceIndex === -1) {
    return withoutFences;
  }

  let depth = 0;
  let inString = false;
  let escaped = false;

  for (let index = firstBraceIndex; index < withoutFences.length; index += 1) {
    const char = withoutFences[index];

    if (escaped) {
      escaped = false;
      continue;
    }

    if (char === "\\") {
      escaped = true;
      continue;
    }

    if (char === '"') {
      inString = !inString;
      continue;
    }

    if (inString) {
      continue;
    }

    if (char === "{") {
      depth += 1;
    }

    if (char === "}") {
      depth -= 1;
    }

    if (depth === 0) {
      return withoutFences.slice(firstBraceIndex, index + 1).trim();
    }
  }

  return withoutFences.slice(firstBraceIndex).trim();
}

export function safeParseModelJson(raw: string): unknown {
  const cleaned = cleanModelJsonOutput(raw);

  try {
    return JSON.parse(cleaned);
  } catch {
    throw new Error("模型返回内容不是合法 JSON，请切换 mock 模式或稍后重试。");
  }
}
