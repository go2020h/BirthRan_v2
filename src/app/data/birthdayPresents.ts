// バースデープレゼントのデータ

export interface BirthdayPresent {
  id: number;
  name: string;
  description: string;
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
    imagePath: "/home3.png",
    imageAlt: "SHIBUYA HACHIKO SPICE",
    url: "https://shibuyaspice.tokyo/",
    date: "2025-04-01",
    company: "株式会社智立商事"
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
