export type PlaceListProps = ({
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

export const PlaceList: PlaceListProps = {
  "北海道・東北":
    {
      image: "https://firebasestorage.googleapis.com/v0/b/tomonavi.appspot.com/o/desgin%2Fplace%2Fhokkaido%26tohoku.png?alt=media&token=290954d1-bc94-4399-9d9b-1de69e826912",
      explanation: "北海道・宮城・福島・青森・岩手・山形・秋田",
      list: 
        [
          {
            longName: "北海道",
            shortName: "北海道",
            alphabet: "hokkaido",
            keywords: []
          },
          {
            longName: "宮城県",
            shortName: "宮城",
            alphabet: "miyagi",
            keywords: []
          },
          {
            longName: "福島県",
            shortName: "福島",
            alphabet: "fukushima",
            keywords: []
          },
          {
            longName: "青森県",
            shortName: "青森",
            alphabet: "aomori",
            keywords: []
          },
          {
            longName: "岩手県",
            shortName: "岩手",
            alphabet: "iwate",
            keywords: []
          },
          {
            longName: "山形県",
            shortName: "山形",
            alphabet: "yamagata",
            keywords: []
          },
          {
            longName: "秋田県",
            shortName: "秋田",
            alphabet: "akita",
            keywords: []
          },
        ],
    },
  "関東":
    {
      image: "https://firebasestorage.googleapis.com/v0/b/tomonavi.appspot.com/o/desgin%2Fplace%2Fkanto.png?alt=media&token=784a8370-0adc-4559-9320-95819d34557f",
      explanation: "東京・神奈川・埼玉・千葉・茨城・栃木・群馬",
      list: 
        [
          {
            longName: "東京都",
            shortName: "東京",
            alphabet: "tokyo",
            keywords: []
          },
          {
            longName: "神奈川県",
            shortName: "神奈川",
            alphabet: "kanagawa",
            keywords: []
          },
          {
            longName: "埼玉県",
            shortName: "埼玉",
            alphabet: "saitama",
            keywords: []
          },
          {
            longName: "千葉県",
            shortName: "千葉",
            alphabet: "chiba",
            keywords: []
          },
          {
            longName: "茨城県",
            shortName: "茨城",
            alphabet: "hokkaido",
            keywords: []
          },
          {
            longName: "栃木県",
            shortName: "栃木",
            alphabet: "tochigi",
            keywords: []
          },
          {
            longName: "群馬県",
            shortName: "群馬",
            alphabet: "gunma",
            keywords: []
          },
        ],
    },
  "中部":
    {
      image: "https://firebasestorage.googleapis.com/v0/b/tomonavi.appspot.com/o/desgin%2Fplace%2Fchubu.png?alt=media&token=150906ac-774f-4496-9959-cb943e9da5cf",
      explanation: "愛知・静岡・新潟・長野・岐阜・石川・富山・三重・山梨・福井",
      list: 
        [
          {
            longName: "愛知県",
            shortName: "愛知",
            alphabet: "aichi",
            keywords: []
          },
          {
            longName: "静岡県",
            shortName: "静岡",
            alphabet: "shizuoka",
            keywords: []
          },
          {
            longName: "新潟県",
            shortName: "新潟",
            alphabet: "niigata",
            keywords: []
          },
          {
            longName: "長野県",
            shortName: "長野",
            alphabet: "nagano",
            keywords: []
          },
          {
            longName: "岐阜県",
            shortName: "岐阜",
            alphabet: "gifu",
            keywords: []
          },
          {
            longName: "石川県",
            shortName: "石川",
            alphabet: "ishikawa",
            keywords: []
          },
          {
            longName: "富山県",
            shortName: "富山",
            alphabet: "toyama",
            keywords: []
          },
          {
            longName: "三重県",
            shortName: "三重",
            alphabet: "mie",
            keywords: []
          },
          {
            longName: "山梨県",
            shortName: "山梨",
            alphabet: "yamanashi",
            keywords: []
          },
          {
            longName: "福井県",
            shortName: "福井",
            alphabet: "fukui",
            keywords: []
          },
        ],
    },
  "関西":
    {
      image: "https://firebasestorage.googleapis.com/v0/b/tomonavi.appspot.com/o/desgin%2Fplace%2Fkansai.png?alt=media&token=e246fc0b-9af2-445b-bb90-321cf4255b67",
      explanation: "大阪・兵庫・京都・滋賀・奈良・和歌山",
      list: 
        [
          {
            longName: "大阪府",
            shortName: "大阪",
            alphabet: "osaka",
            keywords: []
          },
          {
            longName: "兵庫県",
            shortName: "兵庫",
            alphabet: "hyogo",
            keywords: []
          },
          {
            longName: "京都府",
            shortName: "京都",
            alphabet: "kyoto",
            keywords: []
          },
          {
            longName: "滋賀県",
            shortName: "滋賀",
            alphabet: "shiga",
            keywords: []
          },
          {
            longName: "奈良県",
            shortName: "奈良",
            alphabet: "nara",
            keywords: []
          },
          {
            longName: "和歌山県",
            shortName: "和歌山",
            alphabet: "wakayama",
            keywords: []
          },
        ],
    },
  "中国":
    {
      image: "https://firebasestorage.googleapis.com/v0/b/tomonavi.appspot.com/o/desgin%2Fplace%2Fchugoku.png?alt=media&token=15b03621-8a8d-4c7d-b71d-e31593390f1e",
      explanation: "広島・岡山・山口・島根・鳥取",
      list: 
        [
          {
            longName: "広島県",
            shortName: "広島",
            alphabet: "hiroshima",
            keywords: []
          },
          {
            longName: "岡山県",
            shortName: "岡山",
            alphabet: "okayama",
            keywords: []
          },
          {
            longName: "山口県",
            shortName: "山口",
            alphabet: "yamaguchi",
            keywords: []
          },
          {
            longName: "島根県",
            shortName: "島根",
            alphabet: "shimane",
            keywords: []
          },
          {
            longName: "鳥取県",
            shortName: "鳥取",
            alphabet: "tottori",
            keywords: []
          },
        ],
    },
  "四国":
    {
      image: "https://firebasestorage.googleapis.com/v0/b/tomonavi.appspot.com/o/desgin%2Fplace%2Fshikoku.png?alt=media&token=6874241c-345c-43fc-9cf8-0512a7ef40db",
      explanation: "愛媛・香川・徳島・高知",
      list: 
        [
          {
            longName: "愛媛県",
            shortName: "愛媛",
            alphabet: "ehime",
            keywords: []
          },
          {
            longName: "香川県",
            shortName: "香川",
            alphabet: "kagawa",
            keywords: []
          },
          {
            longName: "徳島県",
            shortName: "徳島",
            alphabet: "tokushima",
            keywords: []
          },
          {
            longName: "高知県",
            shortName: "高知",
            alphabet: "kochi",
            keywords: []
          },
        ],
    },
  "九州":
    {
      image: "https://firebasestorage.googleapis.com/v0/b/tomonavi.appspot.com/o/desgin%2Fplace%2Fkyushu.png?alt=media&token=2ca04528-d90f-457f-9036-e38acd3b51c9",
      explanation: "福岡・熊本・鹿児島・沖縄・長崎・大分・宮崎・佐賀",
      list: 
        [
          {
            longName: "福岡県",
            shortName: "福岡",
            alphabet: "fukuoka",
            keywords: []
          },
          {
            longName: "熊本県",
            shortName: "熊本",
            alphabet: "kumamoto",
            keywords: []
          },
          {
            longName: "鹿児島県",
            shortName: "鹿児島",
            alphabet: "kagoshima",
            keywords: []
          },
          {
            longName: "沖縄県",
            shortName: "沖縄",
            alphabet: "okinawa",
            keywords: []
          },
          {
            longName: "長崎県",
            shortName: "長崎",
            alphabet: "nagasaki",
            keywords: []
          },
          {
            longName: "大分県",
            shortName: "大分",
            alphabet: "oita",
            keywords: []
          },
          {
            longName: "宮崎県",
            shortName: "宮崎",
            alphabet: "miyazaki",
            keywords: []
          },
          {
            longName: "佐賀県",
            shortName: "佐賀",
            alphabet: "saga",
            keywords: []
          },
        ],
    },
}


// export const placeList = [
//   {
//     "オンライン":
//     [
//       "オンライン",
//     ]
//   },
//   {
//     "北海道・東北":
//     [
//       "北海道",
//       "青森県",
//       "岩手県",
//       "宮城県",
//       "秋田県",
//       "山形県",
//     ]
//   },
//   {
//     "関東":
//     [
//       "茨城県",
//       "栃木県",
//       "群馬県",
//       "埼玉県",
//       "千葉県",
//       "東京都",
//       "神奈川県",
//     ]
//   },
//   {
//     "中部":
//     [
//       "新潟県",
//       "富山県",
//       "石川県",
//       "福井県",
//       "山梨県",
//       "長野県",
//       "岐阜県",
//       "静岡県",
//       "愛知県",
//     ]
//   },
//   {
//     "近畿":
//     [
//       "三重県",
//       "滋賀県",
//       "京都府",
//       "大阪府",
//       "兵庫県",
//       "奈良県",
//       "和歌山県",
//     ]
//   },
//   {
//     "中国・四国":
//     [
//       "鳥取県",
//       "島根県",
//       "岡山県",
//       "広島県",
//       "山口県",
//       "徳島県",
//       "香川県",
//       "愛媛県",
//       "高知県",
//     ]
//   },
//   {
//     "九州・沖縄":
//     [
//       "福岡県",
//       "佐賀県",
//       "長崎県",
//       "熊本県",
//       "大分県",
//       "宮崎県",
//       "鹿児島県",
//       "沖縄県",
//     ]
//   },
// ]