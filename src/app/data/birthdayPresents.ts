// バースデープレゼントのデータ

export interface BirthdayPresent {
  id: number;
  name: string;
  description: string; // 検索用プレーンテキスト
  descriptionMarkdown: string; // マークダウン形式のテキスト
  imagePath: string;
  imageAlt: string;
  url: string;
  date: string; // 追加日
  company: string; // 提供社
}

const birthdayPresents: BirthdayPresent[] = [
  {
    id: 1,
    name: "SHIBUYA HACHIKO SPICE",
    description: "渋谷発の高級スパイス「渋谷八香唐辛子」。厚みのある香りと爽快な辛さが特徴で、和洋問わず様々な料理に一振り加えるだけで深みと高級感を与える至高の一品です。",
    descriptionMarkdown: "渋谷発の高級スパイス「[渋谷八香唐辛子](https://shibuyaspice.tokyo/products/)」。厚みのある香りと爽快な辛さが特徴で、和洋問わず様々な料理に一振り加えるだけで深みと高級感を与える至高の一品です。",
    imagePath: "/home3.png",
    imageAlt: "SHIBUYA HACHIKO SPICE",
    url: "https://shibuyaspice.tokyo/",
    date: "2025-04-01",
    company: "株式会社智立商事"
  },
  {
    id: 2,
    name: "「今日もワインの香りがするほうへ」（幻冬舎）と「おめあり」の場に最適なワインをセレクトしてくれます",
    description: "Amazonのワインランキングで１位を獲得した「今日もワインの香りがするほうへ」（幻冬舎）年間400本のワインを飲み干すワイン党夫婦が書き上げた珠玉のエッセイ集を読んでワインの魅力をもっと×２感じてください。今回は、著者である坂本康宏・雅子夫妻が「おめでとう」「ありがとう」の場に最適なワインをご紹介してくれます。もちろん！「もうすぐ誕生日！ようこそバスランへ」のゲスト向けたセレクトワインをプレゼントさせていただきます。どんな「おめありワイン」をご紹介していただけるのか！？お楽しみに～。＜過去の提供ワイン＞5月1日／瀬戸千佳（d-girls／アイドル＆声優）イエリングバーグ・マルサンヌ・ルーサンヌ",
    descriptionMarkdown: "Amazonのワインランキングで１位を獲得した「今日もワインの香りがするほうへ」（幻冬舎）年間400本のワインを飲み干すワイン党夫婦が書き上げた珠玉のエッセイ集を読んでワインの魅力をもっと×２感じてください。今回は、著者である坂本康宏・雅子夫妻が「おめでとう」「ありがとう」の場に最適なワインをご紹介してくれます。もちろん！「もうすぐ誕生日！ようこそバスランへ」のゲスト向けたセレクトワインをプレゼントさせていただきます。どんな「おめありワイン」をご紹介していただけるのか！？お楽しみに～。＜過去の提供ワイン＞[5月1日／瀬戸千佳（d-girls／アイドル＆声優）イエリングバーグ・マルサンヌ・ルーサンヌ](https://www.enoteca.co.jp/item/detail/110310140?td_seg=tds993246tds773385tds773387tds886566&app_share)",
    imagePath: "/home4.png",
    imageAlt: "「今日もワインの香りがするほうへ」（幻冬舎）と「おめあり」の場に最適なワインをセレクトしてくれます",
    url: "https://www.amazon.co.jp/dp/4344938909?ref=cm_sw_r_ffobk_cp_ud_dp_S6E7XP3GXA5Y2YT1FHW5&ref_=cm_sw_r_ffobk_cp_ud_dp_S6E7XP3GXA5Y2YT1FHW5&social_share=cm_sw_r_ffobk_cp_ud_dp_S6E7XP3GXA5Y2YT1FHW5&bestFormat=true&previewDoh=1",
    date: "2025-05-05",
    company: "株式会社幻冬舎"
  },
  // 今後、新しいプレゼントをここに追加していく
  // {
  //   id: 2,
  //   name: "新しいプレゼント名",
  //   description: "説明文",
  //   imagePath: "/path/to/image.jpg",
  //   imageAlt: "画像の代替テキスト",
  //   url: "https://example.com/",
  //   date: "2025-05-01",
  //   company: "提供社名"
  // },
];

// 最新のプレゼントを取得する関数
export const getLatestPresent = (): BirthdayPresent => {
  // 日付でソートして最新のものを返す
  return [...birthdayPresents].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  })[0];
};

// すべてのプレゼントを取得する関数
export const getAllPresents = (): BirthdayPresent[] => {
  return [...birthdayPresents].sort((a, b) => {
    return new Date(b.date).getTime() - new Date(a.date).getTime();
  });
};

export default birthdayPresents;
