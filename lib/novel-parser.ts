export type NovelChapter = {
  index: number;
  title: string;
  content: string;
  wordCount: number;
};

export type NovelParseResult = {
  chapters: NovelChapter[];
  chapterCount: number;
  isValid: boolean;
  message: string;
};

const CHAPTER_TITLE_PATTERN =
  /^(?:第\s*(?:[0-9０-９]+|[一二三四五六七八九十百千万两〇零]+)\s*[章节](?:$|[\s:：、.-].*)|chapter\s+[0-9]+\b.*)$/i;

function countNonWhitespaceCharacters(value: string): number {
  return Array.from(value.replace(/\s/g, "")).length;
}

function isChapterTitle(line: string): boolean {
  return CHAPTER_TITLE_PATTERN.test(line.trim());
}

export function parseNovelChapters(input: string): NovelParseResult {
  const normalizedInput = input.trim();

  if (!normalizedInput) {
    return {
      chapters: [],
      chapterCount: 0,
      isValid: false,
      message: "请先输入小说文本。",
    };
  }

  const lines = normalizedInput.replace(/\r\n?/g, "\n").split("\n");
  const parsedChapters: Array<{ title: string; contentLines: string[] }> = [];
  let currentChapter: { title: string; contentLines: string[] } | null = null;

  for (const rawLine of lines) {
    const line = rawLine.trim();

    if (isChapterTitle(line)) {
      if (currentChapter) {
        parsedChapters.push(currentChapter);
      }

      currentChapter = {
        title: line,
        contentLines: [],
      };
      continue;
    }

    if (currentChapter) {
      currentChapter.contentLines.push(rawLine);
    }
  }

  if (currentChapter) {
    parsedChapters.push(currentChapter);
  }

  const chapters = parsedChapters.map((chapter, chapterIndex) => {
    const content = chapter.contentLines.join("\n").trim();

    return {
      index: chapterIndex + 1,
      title: chapter.title,
      content,
      wordCount: countNonWhitespaceCharacters(content),
    };
  });

  const chapterCount = chapters.length;

  if (chapterCount === 0) {
    return {
      chapters,
      chapterCount,
      isValid: false,
      message: "未识别到章节标题，请使用‘第一章’或‘Chapter 1’等格式。",
    };
  }

  if (chapterCount < 3) {
    return {
      chapters,
      chapterCount,
      isValid: false,
      message: `当前识别到 ${chapterCount} 个章节，请至少输入 3 个章节。`,
    };
  }

  return {
    chapters,
    chapterCount,
    isValid: true,
    message: `已识别 ${chapterCount} 个章节，可以进入后续剧本转换流程。`,
  };
}
