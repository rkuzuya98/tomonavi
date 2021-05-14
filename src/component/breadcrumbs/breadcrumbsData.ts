type StringKeyObject = ({
  [key: string] : string
})

const breadcrumbsData: StringKeyObject = {
  about: "ともナビとは",
  signup: "ユーザー登録",
  signin: "ログイン",
  community: "見つける",
  contact: "お問い合わせ",
}

export const getBreadcrumbsData = (item: string) => {
  const c = breadcrumbsData[item]
  return c
}