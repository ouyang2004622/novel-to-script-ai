import type { ScriptObject } from "@/lib/script-types";

export const mockScriptObject: ScriptObject = {
  script: {
    title: "未寄出的结尾",
    source_type: "novel",
    language: "zh-CN",
    logline:
      "小说作者林禾在现实线索的逼近中重写第三章，试图阻止一个角色从故事和现实里同时消失。",
    characters: [
      {
        name: "林禾",
        role: "主角",
        description: "陷入创作瓶颈的小说作者，敏感、执拗，逐渐发现自己的文本正在影响现实。",
      },
      {
        name: "周岚",
        role: "配角",
        description: "林禾的编辑，熟悉她的创作习惯，也最先察觉新稿结局带来的异常。",
      },
      {
        name: "店主",
        role: "配角",
        description: "旧唱片店的守店人，像是知道故事真相，负责把录音线索交给林禾。",
      },
    ],
    chapters: [
      {
        chapter_id: 1,
        chapter_title: "第一章 失眠的书房",
        summary:
          "凌晨的书房里，林禾反复修改小说结尾。编辑周岚发来语音质疑她的决定，林禾意识到这个结局可能不只属于故事。",
        scenes: [
          {
            scene_id: "1-1",
            scene_title: "凌晨书房里的结局",
            location: "书房",
            time_range: {
              start: "凌晨一点",
              end: "凌晨一点后",
            },
            visual_style:
              "冷蓝色电脑光照亮狭窄书房，窗外雨幕折射城市灯光，适合悬疑感 AI 漫剧分镜。",
            characters: ["林禾", "周岚"],
            scene_purpose: "建立林禾的创作困境，并引出小说结局影响现实的悬念。",
            beats: [
              {
                beat_id: "1-1-1",
                type: "narration",
                content: "凌晨一点，林禾坐在书桌前，屏幕上的小说结尾停在最后一行。",
                duration_seconds: 4,
                camera_hint: "中景缓慢推进到电脑屏幕，突出反复删除的光标。",
                sound_hint: "键盘敲击声断断续续，窗外有细密雨声。",
              },
              {
                beat_id: "1-1-2",
                type: "action",
                character: "林禾",
                content: "林禾删掉刚写好的结尾，又把手停在键盘上。",
                duration_seconds: 5,
                camera_hint: "手部特写切到林禾疲惫的眼神。",
                sound_hint: "删除键连续响起，随后安静下来。",
              },
              {
                beat_id: "1-1-3",
                type: "dialogue",
                character: "周岚",
                content: "你真的要改掉结局吗？",
                duration_seconds: 4,
                camera_hint: "手机屏幕亮起，语音气泡占据画面右侧。",
                sound_hint: "手机震动后响起周岚略带担忧的语音。",
              },
              {
                beat_id: "1-1-4",
                type: "emotion",
                character: "林禾",
                content: "林禾望向雨中的城市灯光，意识到这个结局像是在等待她做选择。",
                duration_seconds: 5,
                camera_hint: "侧脸近景转向窗外虚焦灯光。",
                sound_hint: "雨声放大，背景音乐压低并拉出悬念尾音。",
              },
            ],
          },
        ],
      },
      {
        chapter_id: 2,
        chapter_title: "第二章 雨巷里的录音",
        summary:
          "林禾来到老城区雨巷，进入小说里出现过的旧唱片店。店主交给她一支录音笔，录音警告她不要让主角在第三章离开。",
        scenes: [
          {
            scene_id: "2-1",
            scene_title: "旧唱片店的录音",
            location: "雨巷里的旧唱片店",
            time_range: {
              start: "第二天傍晚",
              end: "傍晚雨后",
            },
            visual_style:
              "潮湿雨巷、昏黄门灯和堆满唱片的狭窄店面，画面带有复古悬疑质感。",
            characters: ["林禾", "店主"],
            scene_purpose: "让小说中的地点进入现实，并交付推动第三章选择的关键线索。",
            beats: [
              {
                beat_id: "2-1-1",
                type: "action",
                character: "林禾",
                content: "林禾沿着雨巷找到旧唱片店，推门时门铃发出轻响。",
                duration_seconds: 4,
                camera_hint: "跟拍林禾脚步穿过积水，低角度拍门铃晃动。",
                sound_hint: "雨后水滴声、远处车流声和清脆门铃声叠加。",
              },
              {
                beat_id: "2-1-2",
                type: "dialogue",
                character: "店主",
                content: "有人让我把这个交给写故事的人。",
                duration_seconds: 4,
                camera_hint: "柜台对切，店主把录音笔推入灯光中心。",
                sound_hint: "店主声音低沉，背景有唱片轻微沙沙声。",
              },
              {
                beat_id: "2-1-3",
                type: "narration",
                content: "录音笔里只有一句话：不要让主角在第三章离开。",
                duration_seconds: 5,
                camera_hint: "录音笔红点闪烁特写，画面短暂压暗。",
                sound_hint: "录音播放声带有电流杂音，尾句回声延长。",
              },
              {
                beat_id: "2-1-4",
                type: "transition",
                content: "林禾握紧录音笔，唱片店门灯在她身后忽明忽暗。",
                duration_seconds: 3,
                camera_hint: "从录音笔特写切到店门外雨巷远景。",
                sound_hint: "门铃声渐弱，转入低频悬疑音乐。",
              },
            ],
          },
        ],
      },
      {
        chapter_id: 3,
        chapter_title: "第三章 未寄出的结尾",
        summary:
          "林禾回到家后发现角色与现实中的某个人重名。周岚提醒第三章不能这样写，林禾最终决定改写新的开头。",
        scenes: [
          {
            scene_id: "3-1",
            scene_title: "重写第三章",
            location: "林禾家中书房",
            time_range: {
              start: "夜晚",
              end: "深夜",
            },
            visual_style:
              "室内冷光与电脑屏幕高反差构图，角色的犹豫和决断通过近景与屏幕字句呈现。",
            characters: ["林禾", "周岚"],
            scene_purpose: "完成主角选择，让剧本进入可继续改编的核心转折。",
            beats: [
              {
                beat_id: "3-1-1",
                type: "narration",
                content: "林禾反复播放录音，发现自己笔下角色和现实里某个人有相同的名字。",
                duration_seconds: 5,
                camera_hint: "俯拍桌面，录音笔、手稿和电脑屏幕形成三角构图。",
                sound_hint: "录音句子低声重复，背景音乐逐渐紧张。",
              },
              {
                beat_id: "3-1-2",
                type: "dialogue",
                character: "周岚",
                content: "你的新稿我看了，第三章不能这样写。",
                duration_seconds: 4,
                camera_hint: "电话来电界面特写，切到林禾沉默的表情。",
                sound_hint: "周岚语速急促，电话底噪轻微失真。",
              },
              {
                beat_id: "3-1-3",
                type: "emotion",
                character: "林禾",
                content: "林禾没有立刻回应，她意识到自己必须在故事和现实之间做出选择。",
                duration_seconds: 5,
                camera_hint: "极近景捕捉林禾眼神变化，屏幕光在脸上闪动。",
                sound_hint: "电话声渐低，只保留呼吸声和键盘待机声。",
              },
              {
                beat_id: "3-1-4",
                type: "action",
                character: "林禾",
                content: "林禾把标题改成《未寄出的结尾》，敲下新的第一句。",
                duration_seconds: 5,
                camera_hint: "屏幕文字逐字出现，最后定格在新标题上。",
                sound_hint: "键盘声重新响起，音乐从低沉转为清亮但保留悬念。",
              },
            ],
          },
        ],
      },
    ],
  },
};
