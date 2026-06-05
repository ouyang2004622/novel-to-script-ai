export type ScriptBeatType =
  | "narration"
  | "action"
  | "dialogue"
  | "emotion"
  | "transition";

export type ScriptCharacter = {
  name: string;
  role: string;
  description: string;
};

export type ScriptBeat = {
  beat_id: string;
  type: ScriptBeatType;
  character?: string;
  content: string;
  duration_seconds?: number;
  camera_hint?: string;
  sound_hint?: string;
};

export type ScriptScene = {
  scene_id: string;
  scene_title: string;
  location: string;
  time_range: {
    start: string;
    end: string;
  };
  visual_style: string;
  characters: string[];
  scene_purpose: string;
  beats: ScriptBeat[];
};

export type ScriptChapter = {
  chapter_id: number;
  chapter_title: string;
  summary: string;
  scenes: ScriptScene[];
};

export type ScriptObject = {
  script: {
    title: string;
    source_type: "novel";
    language: "zh-CN";
    logline: string;
    characters: ScriptCharacter[];
    chapters: ScriptChapter[];
  };
};

export type ConvertSource = "mock" | "deepseek";

export type ConvertScriptResponse = {
  scriptObject: ScriptObject;
  yamlText: string;
  source: ConvertSource;
  message: string;
};

export type ConvertScriptError = {
  error: string;
  message: string;
};
