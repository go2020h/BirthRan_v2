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
  },
  {
    name: "瀬戸千花",
    image: "/guest/guest4.jpg",
    bio: "d-girls 黄色担当の瀬戸千花です。d-girlsは、トランスやユーロビート中心のダンスサウンドを基調とした5人組のユニットです。5人組なのですが、基本1ボーカルか2ボーカルの楽曲で、ボーカルを担当するメンバーが作詞をしているところや、歌わないメンバーはダンサーに徹したりする珍しい体制にも注目してほしいです！個人的には舞台や声優などのお芝居のお仕事もさせていただいています。趣味は妄想と運転、特技は寝ることです！",
    appearanceDate: "2025年5月1日", 
    birthDate: "5月9日",
    officialSite: "http://d-girls.info/",
    twitter: "https://x.com/seto_chika",
    instagram: ""
  },
   {
    name: "ChumuNote",
    image: "/guest/guest5.jpg",
    bio: "レメディ・アンド・カンパニー株式会社所属音楽系釣り好きVTuberのChumuNote（チュムノート）です。バスラン第５週のパーソナリティも担当しています！",
    appearanceDate: "2025年5月8日", 
    birthDate: "5月19日",
    officialSite: "https://chumunote.info/",
    twitter: "https://x.com/tmgnrei",
    instagram: ""
  },
  {
    name: "リアクション ザ ブッタ ◎大野宏二朗さん（ドラムス）",
    image: "/guest/guest6.jpg",
    bio: "2007年結成。埼玉県発3ピースロックバンド。10代の頃からバンド選手権で入賞を重ね数々の大型フェスに出演を果たし、年々その知名度を上げている。TikTokを中心に＜共感できる恋愛ソング＞として楽曲「ドラマのあとで」が話題となり、Spotify日本のバイラルチャートに24週連続チャートインし最高位7位までランクイン、今もなお広がり続けている。【今までもらった印象に残ってるプレゼント】「何年か前にもらった友人からのサインがたくさん書いてあるサインボールです。全く野球に関係する人生ではなかったのでツッコミどころが多すぎて印象に残っています。」",
    appearanceDate: "2025年5月15日", 
    birthDate: "5月18日",
    officialSite: "https://rtb-music.com/",
    twitter: "https://x.com/RTB_info",
    instagram: ""
  },
  {
    name: "LEEVELLES ◎宮地正明さん（ベース）",
    image: "/guest/guest7.jpg",
    bio: "LEEVELLES（リーベルス）は、ファミリーネームとして「森林を切り開いた場所に住む人」という意味を持つ lee と「願望」の意味を持つ velle に複数形 s をつけた「開拓を望む者達」という造語で、 メンバー全員で革新的なエンターテイメントを作り、新しい音楽とバンドの未来を開拓していこうという意を込めて命名された。すべての録音行程をメンバーで完結。アルバムジャケットのメインイラストはボーカルの小川が描き、 MV もほぼ全ての作品をメンバーで完結。ロック、ポップス、エレクトロ等、邦楽洋楽の多彩なジャンルから影響を受けた楽曲と、心の奥底にあるノスタルジー、夢、希望を描いた歌詞やフィクションの物語を紡いだ言葉を優しくも力強い歌声と演奏で表現した楽曲が持ち味。日本の音楽シーンに新たなエンターテイメントの風を吹かせる。",
    appearanceDate: "2025年5月22日", 
    birthDate: "5月25日",
    officialSite: "https://leevelles.jp/",
    twitter: "https://x.com/leevelles",
    instagram: ""
  },
  {
    name: "tonun",
    image: "/guest/guest8.jpg",
    bio: "甘くスモーキーな歌声と、グルーヴィーで心地良いトラックが魅力のシンガーソングライター。特徴的な甘い声と絶対的なメロディーセンスを武器に、洋楽の影響を色濃く受けたサウンドを掛け合わせることで独自の世界観を作り上げている。「YouTube Music Sessions」、「Spotify RADAR:Early Noise」などに選出、さらにファーストアルバム「Intro」はCDショップ大賞2024に入賞し話題となった。誕生日にもらったプレゼントで嬉しかったもの→ギター",
    appearanceDate: "2025年5月29日", 
    birthDate: "6月12日",
    officialSite: "https://tonun.jp/",
    twitter: "https://x.com/tonun_official?s=21&t=yFiC3o3Bku78q-p_1LbtKQ",
    instagram: ""
  }

];
