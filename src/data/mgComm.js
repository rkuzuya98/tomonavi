// 入力項目
export const mgCommCreatingList = [
  {
    jpn: "名称",
    eng: "name",
    type: "text",
    explanation: "サイト上で表示されるコミュニティの名前です。",
    hint: "渋谷ともナビ会",
    validation: ["min1"]
  },
  {
    jpn: "コミュニティ紹介",
    eng: "summary",
    type: "sentence",
    explanation: "コミュニティの簡単な説明をご記入ください（30文字〜40文字）",
    hint: "ヒント",
    validation: ["min1"]
  },
  {
    jpn: "テーマ・分野",
    eng: "theme",
    type: "select",
    explanation: "コミュニティのテーマ・分野に該当するものを選択してください（複数可）",
    hint: "ヒント",
    validation: ["min1"]
  },
  {
    jpn: "開催エリア",
    eng: "place",
    type: "select",
    explanation: "コミュニティの開催エリアを選択してください（複数選択可能）。",
    hint: "ヒント",
    validation: ["min1"]
  },
  {
    jpn: "ロゴ",
    eng: "logo",
    type: "image",
    explanation: "サイト上で表示されるコミュニティの画像です",
    hint: "渋谷ともナビ会",
    validation: ["min1"]
  },
  {
    jpn: "URL",
    eng: "url",
    type: "text",
    explanation: "サイト上で表示される`コミュニティの画像です`",
    hint: "渋谷ともナビ会",
    validation: ["min1"]
  },
]

export const mgCommCreatingData = {
  name: "",
  summary: "",
  theme: [],
  place: [],
  logo: "",
  url: "",
}