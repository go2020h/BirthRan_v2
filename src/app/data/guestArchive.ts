// 過去のゲスト情報アーカイブ
// 新しいゲストが登場したら、配列の最後に追加する

export interface GuestData {
  name: string;
  image: string;
  bio: string;
  appearanceDate: string;
  birthDate: string;
  officialSite?: string;
  twitter?: string;
  instagram?: string;
}

export const guestArchive: GuestData[] = [
  {
    name: "神谷明采",
    image: "/guest/guest1.jpg",
    bio: "タレント、会社経営者、YouTuber。これまでに「ミス東大2020」と「MISS OF MISS CAMPUS QUEEN CONTEST 2021」でグランプリを受賞。幼少期からバレエを始め、中高時代は新体操部で活躍し部長も務める。「One Young World Manchester 2022」に参加し、低糖質スイーツ事業と世界の糖尿病問題について英語でスピーチを行うなど、国内外で活躍の場を広げている。現在は東京大学公共政策大学院経済政策コース在学中。",
    appearanceDate: "2025年4月3日", 
    birthDate: "2000年4月19日",
    officialSite: "https://furutachi-project.co.jp/profile/kamiya-asa/",
    twitter: "https://x.com/AsaKamiya",
    instagram: "https://www.instagram.com/asa_kamiya/"
  },
  {
    name: "早河ルカ",
    image: "/guest/guest2.jpg",
    bio: "小悪魔ageha専属モデル。プラチナムプロダクション所属。以前はRanzuki専属モデルとして活動、現在は小悪魔ageha専属モデルとして活躍中。映画やCMなど、モデルだけでなく女優としても活躍の場を広げている。",
    appearanceDate: "2025年4月10日", 
    birthDate: "2003年4月19日",
    officialSite: "https://platinumproduction.jp/talent/hayakawaruka/",
    twitter: "https://x.com/ruka15321",
    instagram: "https://www.instagram.com/ru_4519"
  },
  {
    name: "ひなたまる",
    image: "/guest/guest3.jpg",
    bio: "趣味はメイク、料理、お菓子作り、シーシャ、ゲーム、ギャンブル、カラオケ。特技は声真似、変顔、複雑な料理をギャルでも作れるようにアレンジすること。SNSでも人気を集めており、モデル活動の他、バラエティ番組やイベントなどでも活躍中。",
    appearanceDate: "2025年4月24日", 
    birthDate: "2003年4月29日",
    officialSite: "https://platinumproduction.jp/talent/hinatamaru/",
    twitter: "https://x.com/NATAMARU041",
    instagram: "https://www.instagram.com/natamaru041/"
  }
];
