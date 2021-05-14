// 入力項目
export const usersCreatingList = [
  {
    jpn: "ユーザー名",
    eng: "username",
    type: "text",
    explanation: "サイト上に表示されるニックネーム又は本名を入力して下さい。",
    hint: "渋谷ともナビ会",
    validation: ["min1"],
    open: "public"
  },
  {
    jpn: "アイコン",
    eng: "icon",
    type: "image",
    explanation: "サイト上で表示されるコミュニティの画像です",
    hint: "渋谷ともナビ会",
    validation: ["min1"],
    open: "public"
  },
  {
    jpn: "興味のある分野・テーマ",
    eng: "theme",
    type: "select",
    explanation: "あなたが興味のある分野・テーマを一つ以上選択して下さい。",
    hint: "渋谷ともナビ会",
    validation: ["min1"],
    open: "private"
  },
  {
    jpn: "年齢",
    eng: "age",
    type: "select",
    explanation: "あなたの年齢層を一つ選択して下さい。",
    hint: "渋谷ともナビ会",
    validation: ["min1"],
    open: "private"
  },
  {
    jpn: "性別",
    eng: "sex",
    type: "select",
    explanation: "あなたの性別を一つ選択して下さい。",
    hint: "渋谷ともナビ会",
    validation: ["min1"],
    open: "private"
  },
]

export const usersCreatingData = {
  username: "",
  icon: "",
  theme: [],
  age: [],
  sex: [],
}

// この入力内容はサービス改善のために集計しているデータなので公開されることはありません。