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
  twitter2?: string;
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
  },
  {
    name: "新木宏典",
    image: "/guest/guest9.jpg",
    bio: "兵庫県波市出身。2007 年「獣拳戦隊ゲキレンジャー」理央役で注目を集め、舞台を中心に活動。地元・丹波市の観光アンバサダーも務める。近年の主な出演作は、ミュージカル『刀剣乱舞』シリーズ、ヒプノシスマイク-Division Rap Battle-』Rule the Stage シリーズ、明治座創業150 周年記念『赤ひげ』など。今後の待機作に、ミュージカル『刀剣乱舞』 目出度歌誉花舞十周年祝賀祭（7 月29 日、30 日、東京ドーム）、ミュージカル「Fate/Zero」～A Hero of Justice～（2025 年9 月、THEATER MILANO-Za）などがあります。◇今までで特に印象に残っている誕生日プレゼントは? この体を親からいただいた事が、何にも変えられない最高のプレゼントです。 今日までこの仕事を続けられる身体に産んでくれた事に感謝しています。",
    appearanceDate: "2025年6月5日", 
    birthDate: "6月14日",
    officialSite: " https://www.watanabepro.co.jp/mypage/10000022/",
    twitter: "https://x.com/araki_hiro0614",
    instagram: ""
  },
  {
    name: "Misaki（The Biscats）",
    image: "/guest/guest10.jpg",
    bio: "The Biscats(ザ・ビスキャッツ)はモデル、ファッション・プロデューサーとしての顔を持つVo.Misaki(青野美沙稀)を 中心として、Kenji(Gt)、Suke (W.ba) のハイブリッド・ロカビリーバンドとして2019年に結成。 同年4月ラスベガスで行われた「VIVA LASVEGAS ROCKABILLY WEEKEND #22」で初ライブを敢行。日本のロカビリーシーンを率引するレジェンド・久米浩司 (ex: BLACKCATS、 MAGIC RODEO etc.)のDNAを受け継ぐ Misakiは、ソロ名義(青野美沙稀)で2016年 ミニ・アルバム 『1959~Magical Rockabily Night~』、2017年 ミニ・アルバム 『Sweet Devil』 をリリース。2018年 世界33カ国のiTunesアルバムチャートで1位を獲得した5Seconds Of Summer の 『Youngblood』のMVに出演。",
    appearanceDate: "2025年6月12日", 
    birthDate: "6月29日",
    officialSite: "https://thebiscats.com/",
    twitter: "https://x.com/misax2_629",
    instagram: ""
  },
  {
    name: "山内あいな（SILENT SIREN）",
    image: "/guest/guest11.jpg",
    bio: "“サイサイ”の愛称で親しまれるガールズバンド・SILENT SIRENのベーシスト。メンバーと共に自主レーベル「YOUTHFUL TUNE」を設立。2025年1月15日にSILENT SIRENの新ミニアルバム「more than pink」を発売。今年9月7日でSILENT SIREN 結成15周年を迎える。また、イラストレーターとしての才能も発揮し、バンドのメインアイコンやバンドロゴを制作。また、絵本制作企画でコンテストに入賞し、2019年絵本作家デビュー。現在までに2 作品をリリースしている。抽象画の個展やポップアップストアも開催している。♪ 今までで特に印象に残っている誕生日プレゼントは？ 毎年メンバーでお祝いをし合ってしるのですが、当時ジープに憧れて免許を取った私に、メンバーがダンボールで作った手作りジープをくれました。",
    appearanceDate: "2025年6月26日", 
    birthDate: "7月3日",
    officialSite: "https://silent-siren.com/",
    twitter: "https://x.com/aina0703",
    instagram: "https://www.instagram.com/ainayamauchi3131/?hl=jaN"
  },{
    name: "吉澤 悠華 (ヨシザワ ハルカ)",
    image: "/guest/guest12.jpg",
    bio: "2003.7.8生まれ、東京都出身の21歳。5人組アイドルグループ「マジカル・パンチライン」のメンバーとして活動中。グループの衣装デザインを担当しており、メンバーカラーは水色。ニックネームは「はるるん」 ♪ 今までで特に印象に残っている誕生日プレゼントは? メンバーの沖口優奈ちゃんが20歳の誕生日にプレゼントしてくれた持ち歩き用のストレートアイロンです！",
    appearanceDate: "2025年7月3日", 
    birthDate: "7月8日",
    officialSite: "https://magipun.com/",
    twitter: "https://x.com/haru_yoshizawa?s=21&t=TYIFUolCTOsorY55LKxm5w",
    twitter2: "https://x.com/magipunofficial?s=21&t=TYIFUolCTOsorY55LKxm5w",
  } ,{
    name: "西森 杏弥(僕が見たかった青空)",
    image: "/guest/guest13.jpg",
    bio: "2003年7月18生まれ、高知県出身。僕が見たかった青空は2023年にデビューした23人のアイドルグループです。 ♪ 今までで特に印象に残っている誕生日プレゼントは? 10歳のときに1/2成人式ということで誕生石であるルビーのネックレスを母からプレゼントしてもらいました！それまでのプレゼントより高価で大人っぽいものだったので、頻繁に箱を開けてニヤニヤしたり友達に自慢していました。",
    appearanceDate: "2025年7月10日", 
    birthDate: "7月18日",
    officialSite: "https://bokuao.com/",
    twitter: "https://x.com/BOKUAOofficial",
    twitter2: "",
  } ,{
    name: "くまだまさし",
    image: "/guest/guest14.jpg",
    bio: "1973年生まれ。東京都荒川区出身。東京NSC（吉本総合芸能学院）に2期生として入学し、1997年にデビュー。小道具を使ったネタを武器に「エンタの神様」（日本テレビ系）、「爆笑レッドカーペット」（フジテレビ系）などに出演し、人気を博す。 ♪　今までで特に印象に残っている誕生日プレゼントは？ 子供の頃のファミコン。あといつも被っている帽子です。",
    appearanceDate: "2025年7月17日", 
    birthDate: "7月26日",
    officialSite: "https://profile.yoshimoto.co.jp/talent/detail?id=681",
    twitter: "https://x.com/kumadamasashi",
    twitter2: "",
  } ,{
    name: "海蔵亮太",
    image: "/guest/guest15.jpg",
    bio: "1990年8月8日生まれ、愛知県名古屋市出身。2016、2017年KWC(Karaoke World Championships)に出場し二連覇を経て2018年に「愛のカタチ」でメジャーデビュー。2024年にはギネス世界記録「毎週連続配信」63週を樹立。数ある歌番組で優勝を経験現在、BS日テレ「現役歌王JAPAN」に挑戦中。♪　今まで特に印象に残っている誕生日プレゼントは？ デビュー後、ファンの方と一緒に過ごしたバースデーライブで直接いただいた「おめでとう」のお声が何にも変えられないプレゼントです。",
    appearanceDate: "2025年7月24日", 
    birthDate: "8月8日",
    officialSite: "https://www.ryota-kaizo.com/",
    twitter: "https://x.com/uuuumin_88?s=21&t=yFiC3o3Bku78q-p_1LbtKQ",
    twitter2: "",
  } 

];
