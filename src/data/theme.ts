export type ThemeListProps = ({
  [key: string] : {
    image: string
    explanation: string
    list: {
      longName: string
      shortName: string
      alphabet: string
      keywords: string[]
    }[]
  }
})

export const themeList: ThemeListProps = {
  障害:
    {
      image: "https://firebasestorage.googleapis.com/v0/b/tomonavi.appspot.com/o/desgin%2Fdisabled.png?alt=media&token=ab253d03-a323-41bc-98f0-069a6c6b1270",
      explanation: "ADHD、ASD、自閉症、身体障害などの障害分野",
      list: 
        [
          {
            longName: "注意欠如・多動症 (ADHD)",
            shortName: "ADHD",
            alphabet: "adhd",
            keywords: [
              "不注意",
              "多動・衝動性"
            ]
          },
          {
            longName: "自閉スペクトラム症 (ASD)",
            shortName: "ASD",
            alphabet: "asd",
            keywords: [
              "対人関係",
              "こだわり"
            ]
          },
          {
            longName: "学習障害 (LD)",
            shortName: "LD",
            alphabet: "ld",
            keywords: [
              "読み書き",
              "計算"
            ]
          },
          {
            longName: "愛着障害・アタッチメント障害",
            shortName: "愛着障害",
            alphabet: "attachmentDisorder",
            keywords: [
              "アダルトチルドレン",
            ]
          },
          {
            longName: "身体障害",
            shortName: "身体障害",
            alphabet: "physicalDisability",
            keywords: [
              "視覚",
              "聴覚",
              "肢体",
              "内部",
            ]
          },
        ],
    },
  ジェンダー:
    {
      image: "https://firebasestorage.googleapis.com/v0/b/tomonavi.appspot.com/o/desgin%2Fgender.png?alt=media&token=15fad542-f39d-4ca9-861b-dfca1fed4a9b",
      explanation: "同性愛、トランスジェンダーなどのジェンダー分野",
      list: 
      [
        {
          longName: "ゲイ",
          shortName: "ゲイ",
          alphabet: "gay",
          keywords: [
            "性的指向(男性)",
          ]
        },
        {
          longName: "レズビアン",
          shortName: "レズビアン",
          alphabet: "lesbian",
          keywords: [
            "性的指向(女性)",
          ]
        },
        {
          longName: "バイセクシャル",
          shortName: "バイセクシャル",
          alphabet: "bisexual",
          keywords: [
            "性的指向(男性・女性)",
          ]
        },
        {
          longName: "トランスジェンダー",
          shortName: "トランスジェンダー",
          alphabet: "transgender",
          keywords: [
            "性自認",
            "身体的性"
          ]
        },
        {
          longName: "アセクシャル",
          shortName: "アセクシャル",
          alphabet: "asexual",
          keywords: [
            "恋愛感情",
            "性的欲求"
          ]
        },
      ],

    },
  依存症:
    {
      image: "https://firebasestorage.googleapis.com/v0/b/tomonavi.appspot.com/o/desgin%2Fdependence.png?alt=media&token=e580c6ce-54b0-417d-8f16-6409f0508341",
      explanation: "アルコール、ギャンブル、ニコチンなどの依存症分野",
      list: 
      [
        {
          longName: "アルコール依存症",
          shortName: "アルコール依存症",
          alphabet: "alcoholism",
          keywords: [
            "ビール",
            "お酒"
          ]
        },
        {
          longName: "ギャンブル依存症",
          shortName: "ギャンブル依存症",
          alphabet: "gamblingAddiction",
          keywords: [
            "パチンコ",
            "宝くじ",
            "競馬"
          ]
        },
        {
          longName: "ニコチン依存症",
          shortName: "ニコチン依存症",
          alphabet: "nicotineAddiction",
          keywords: [
            "タバコ",
          ]
        },
      ],
    },
  その他:
    {
      image: "https://firebasestorage.googleapis.com/v0/b/tomonavi.appspot.com/o/desgin%2Fothergenre.png?alt=media&token=f71ac05e-7e55-4305-bac4-fdd0684318ba",
      explanation: "いじめ、虐待、HSP、うつ状態などのその他分野",
      list: 
      [
        {
          longName: "HSP",
          shortName: "HSP",
          alphabet: "hsp",
          keywords: [
            "繊細",
            "敏感",
            "感受性"
          ]
        },
        {
          longName: "うつ状態・うつ病",
          shortName: "うつ",
          alphabet: "depressed",
          keywords: [
            "落ち込み",
            "憂鬱"
          ]
        },
      ],
    },
}