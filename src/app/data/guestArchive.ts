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
  twitterName1?: string;
  twitterName2?: string;
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
  } ,{
    name: "金子みゆ",
    image: "/guest/guest16.jpg",
    bio: "福岡県宗像市出身です。20歳の時に福岡から上京して、いまはインフルエンサーをしつつ、アーティスト活動も頑張っています！　♪　これまでにもらった誕生日プレゼントで一番印象に残っているものは？ 20歳の時にお父さんから貰ったネックレスです！初めてアクセサリーを貰ったのでとっても嬉しかったです！今でも大事につけてます。",
    appearanceDate: "2025年8月7日", 
    birthDate: "8月13日",
    officialSite: "https://uniiique.jp/talent/miyu-kaneko/",
    twitter: "https://x.com/kaneko_miyu",
    twitter2: "",
    instagram: "https://www.instagram.com/kaneko_miyu0813/"
  } ,{
    name: "早見優",
    image: "/guest/guest17.jpg",
    bio: "日本生まれ。3歳から14歳までをグァム、ハワイで育つ。14歳でスカウトされ82年「急いで!初恋」で歌手デビュー。「夏色のナンシー」や「PASSION」などのヒット曲を持つ。1991年に上智大学比較文化学部日本文化学科を卒業。翌年には「地球サミット」に参加。2008年にワインエキスパート認定。2018年にダンスフィットネス ZUMBA®のインストラクター認定。2022年デビュー40周年迎え、ベストアルバム「Affection~Yu Hayami 40th Anniversary Collection~」をリリース。2023年配信シングル「Shampoo」 ーDJ Night Tempo feat.YU HAYAMIをリリース、作詞を手掛ける。2024年、早見優名義の新曲「DISCO de DISCO」（作詞:早見優／作曲:DJ Night Tempo）を配信リリース。レギュラーでNHKラジオ「深夜便ビギナーズ」、NHKWorld「Dining with the Chef」に出演。BS-TBS「MUSIC X（ミュージッククロス）」の司会も務める。毎夏恒例となるソロライブ 『夏色のナンシー祭り 2025』を7月13日に大手町三井ホールにて開催。近年、ジャズの魅力に魅せられ、最近はジャズライブの活動も開始。ポップスと共に音楽の新たな可能性を追求している ♪　今までにもらった誕生日プレゼントで特に印象に残っているものは？ 娘たちがサプライズで作ってくれた動画です。小さい頃の思い出や、私へのメッセージを一生懸命編集してくれて…嬉しかったです。",
    appearanceDate: "2025年8月14日", 
    birthDate: "9月2日",
    officialSite: "https://www.yu-hayami.com/",
    twitter: "",
    twitter2: "",
    instagram: "https://www.instagram.com/yuyuhayami/?hl=ja"
  } ,{
    name: "竹島宏",
    image: "/guest/guest18.jpg",
    bio: "2002年デビュー。一昨年、レコード大賞企画賞を受賞したヨーロッパ3部作をモチーフにして作られたミュージカル「プラハの橋」で今年１月・２月にミュージカルに初挑戦しました。♪　これまでにもらった誕生日プレゼントで一番印象に残っているものは？小学1年生の誕生日に祖父がプレゼントしてくれたミッキーマウスの目覚まし時計。なんと今も動いてます。",
    appearanceDate: "2025年8月21日", 
    birthDate: "8月28日",
    officialSite: "https://takeshimahiroshi.com/",
    twitter: "https://x.com/takeshima_staff",
    twitter2: "",
    instagram: ""
  } ,{
    name: "えまちぃ",
    image: "/guest/guest19.jpg",
    bio: "＜あっとせぶんてぃーん プロフィール＞あっとせぶんてぃーんとは、秋葉原のメイドカフェ『あっとほぉーむカフェ』で給仕する現役のメイドたち（＝永遠の17歳）から生まれたユニット。2016年に期間限定で結成後、2017年より現役メイド350人（当時）の中から選ばれたメンバーで現役のメイドとアーティスト活動を両立させている。あっとせぶんてぃーんは、 『あっとほぉーむカフェ』という非日常感（メルヘン）いっぱいのテーマパークから飛び出してきたメイドたちが、それぞれの夢に向かって羽ばたいていく、ひとつの成長物語でもある。2024年９月15日に新メンバーを加え、７人組の新体制で2024年12月18日氣志團・綾小路 翔プロデュース「メイド in Nippon」でメジャーデビュー。綾小路 翔プロデュース作品三部作を完成させ、2025年9月、あっとせぶんてぃーん史上最大規模のワンマンライブがLINE CUBE SHIBUYA（渋谷公会堂）にて開催される。",
    appearanceDate: "2025年8月28日", 
    birthDate: "9月15日",
    officialSite: "https://at17.jp/",
    twitter: "https://x.com/maid_emachii?s=21&t=yFiC3o3Bku78q-p_1LbtKQ",
    twitter2: "",
    instagram: ""
  } ,{
    name: "藤宮めい(Appare!)",
    image: "/guest/guest20.jpg",
    bio: "2016年に天晴れ！原宿というグループ名で結成されたアイドルグループ。同年7月にアイドルフェス「アイドル横丁夏まつり!!～2016～」でステージデビューし、12月に自主レーベルのTAKENOKO Music より1stアルバム「APPARE! WORLD」を発表。2018年8月にはアイドルフェス「@JAM EXPO 2018」のメインステージ争奪戦決勝ライブで優勝した。2020年3月に新宿BLAZEで開催したワンマンライブをもって充電期間に入り、7月の結成4周年記念配信ライブにて新体制をお披露目。天晴れ！原宿からAppare!に改名し、新章の活動をスタートさせた。2024年8月に日本武道館公演が開催中止に、その後2025年1月に改めて開催し、無事成功させた。♪ 　今までにもらった誕生日プレゼントで特に印象に残っているものは？ アルバム",
    appearanceDate: "2025年9月4日", 
    birthDate: "9月27日",
    officialSite: "https://appare-official.jp/",
    twitter: "https://x.com/appare_may",
    twitter2: "",
    instagram: ""
  } ,{
    name: "柿澤勇人・ウエンツ瑛士",
    image: "/guest/guest21.jpg",
    bio: "【柿澤勇人】「俳優」劇団四季でキャリアをスタート、退団後は舞台、映像で幅広く活動 第31回読売演劇大賞優秀男優賞、第49回菊田一夫演劇賞受賞 10月7日から放送開始のフジテレビ系火曜ドラマ「新東京水上警察」に出演。 11月7日(金)全国公開する長編アニメーション映画「トリツカレ男」では主人公の相棒のハツカネズミ・シエロの声を担当します。 また、来年3月から再演するミュージカル「ジキル＆ハイド」でも主演を務めます。 2026年1月にウエンツ瑛士、木南晴夏とのユニット「カキンツハルカ」でのライブツアーが開催決定！ ♪　これまでにもらった誕生日プレゼントで印象に残っているものは？ →家族から貰った水泳用ゴーグルと稽古用のスニーカー \n\n【ウエンツ瑛士】「俳優・タレント」4歳でモデルデビュー。2005年～2016年2月まで小池徹平とのデュオ「WaT」として活動。『第56回NHK紅白歌合戦』にメジャーデビューから史上最短で初出場を果たす。2024年から「カキンツハルカ」としての活動もはじめる。 ♪ これまでにもらった誕⽣⽇プレゼントで印象に残ってるものは？ →保温機能がついていない高級炊飯器",
    appearanceDate: "2025年9月18日", 
    birthDate: "10月12日・10月8日",
    officialSite: "",
    twitter: "",
    twitter2: "",
    instagram: "https://www.instagram.com/kakintzharuka_staff?igsh=c3M3djllb3hqZjEz"
  } ,{
    name: "高輝",
    image: "/guest/guest22.jpg",
    bio: "所属事務所：サンミュージック名古屋 2013年からダンスボーカルユニットWEBERのヴォーカリストTaka.として音楽活動を開始し、ユニットとして様々な音楽シーンでの活動を行う。2017年ビクターエンタテインメントよりメジャーデビュー。ユニット活動の集大成として2017年Zepp Namba/Zepp Diver cityでのone-man liveを機に個人での音楽活動や楽曲制作に目覚める。2024年1月のWEBER解散後は、活動名を『高輝-takateru-』として、弾き語りでのlive活動を中心に活動中。2025年7月から渋谷愛ビジョンの愛8サポーターに就任。 ♪ 　今までにもらった誕生日プレゼントで特に印象に残っているものは？ すっっごくいい蜂蜜",
    appearanceDate: "2025年9月25日", 
    birthDate: "10月8日",
    officialSite: "https://note.com/terutaka1008",
    twitter: "https://x.com/terutaka1008",
    twitter2: "",
    instagram: ""
  } ,{
    name: "#KTCHAN",
    image: "/guest/guest23.jpg",
    bio: "所属事務所：神奈川県横浜市出身。2022年、「高校生RAP選手権」で注目を集め、同年「戦極MCBATTLE」にて新人賞を受賞。翌年、アーティストとしてインディーズデビューを果たし、楽曲「BaNe BaNe」はM V関連動画を含めて1000万再生を突破するなど、大きな話題を呼んだ。2023年には「Yahoo!検索大賞2023」ネクストブレイク部門に選出され、2024年には「戦極MCBATTLE」で女性として初のベスト4進出を果たす。同年、自身初のワンマンライブを渋谷WWWで成功させ、1月には「距離ガール」で待望のメジャーデビュー。本作は全国ラジオオンエアチャートでウィークリー1位を獲得し、Billboardの新人チャート「Heatseekers」に3週連続、チャートインなど続々とランクイン。以降2月に「ワンチャン」、 3月に「キャp＠い」と立て続けにリリースし、初の東名阪ツアーも完遂。その勢いをさらに加速している。新世代Rapper/Artist。\n♪ 今まででもらって印象に残ったプレゼントは？２０歳の誕生日に渋谷WWWでワンマンライブの時に、ゲストで来てくれたでぃおっち（D.Oさん）が、ステージ上でテキーラ１８００を持ってきてくれて、人生初のお酒をステージ上で飲みました。今でも強烈に覚えています。お酒はそんなに普段飲まないけれど、でぃおっちのおかげで好きなお酒で最初に頭に浮かぶのはテキーラです。またみんなで乾杯したいな。",
    appearanceDate: "2025年10月2日", 
    birthDate: "10月6日",
    officialSite: "",
    twitter: "https://x.com/kt_disritakunai?s=21&t=yFiC3o3Bku78q-p_1LbtKQ",
    twitter2: "",
    instagram: ""
  } ,{
    name: "ユイガドクソン・ナルハワールド",
    image: "/guest/guest24.jpg",
    bio: "「みんなの遊び場」をコンセプトに活動する、ヤママチミキ、ユメノユア、キャン・GP・マイカ、ココ・パーティン・ココ、ユイ・ガ・ドクソン、月ノウサギ、キラ・メイ、キャ・ノン、チャンベイビー、ナルハワールド、アイナスターの11人からなるアイドルグループ。2014年に結成された前身ユニットから2度の改名とメンバーの増減を経て、2019年4月にワーナーミュージック・ジャパン内のレーベル「FUELED BY MENTAIKO」よりメジャーデビュー。その後グループ分裂を乗り越え、2022年5月より再始動。\n♪　これまでにもらった誕生日プレゼントで印象に残ってるものは？ ・(ドク) 遊び人(ファンの総称)のチェキ付きメッセージブックです。 ・(ナルハ) 弟からのGODIVAのチョコレートです。お姉ちゃんとは、よくお互いの誕生日にプレゼントを買いに行ったりしているのですが、弟が自分で選んでプレゼントしてくれると思ってなくて、さらに好きなものもわかってくれてたのが嬉しかったです。",
    appearanceDate: "2025年10月9日", 
    birthDate: "10月21日・11月5日",
    officialSite: "",
    twitter: "https://x.com/DOCKSON_GANG",
    twitter2: "https://x.com/NARU_GANG",
    instagram: ""
  } ,{
    name: "立嶋迅留(たてしまはやと)・岡島源武(おかじまもとむ)",
    image: "/guest/guest25.jpg",
    bio: "プロテアの花言葉 “変幻自在” をコンセプトに、多種多彩な音楽と掛け合わさっていくダンス＆ボーカルグループ「Protea*」(読み方：バイプロテア)。YouTube・smash.で配信された『プラチナムピクセル1st BOYS GROUP AUDITION』から誕生 2025年2月には「BAMBOO SHOT」がTBS系列「ひるおび」エンディングテーマに決定。2026年7月20日(月祝)にはZepp Shinjukuにてワンマンライブ開催決定。\n♪　これまでにもらった誕生日プレゼントで印象に残ってるものは？ （立嶋）高校生の時、今もなんですけど、コーラが大好きで、親友から誕プレでコーラ500mlをケースを学校内でいただいたのがすごく色んな意味で印象に残ってます。（岡島）誕生日の日に父親から送られてきたpaypay 1113ポイントが今でも印象に残ってます。誕生日と同じポイントでつい笑ってしまいました。",
    appearanceDate: "2025年10月16日", 
    birthDate: "(立嶋)11月11日・(岡島)11月13日",
    officialSite: "https://platinumpixel.co.jp/talent/protea",
    twitter: "https://x.com/hayato_protea",
    twitter2: "https://x.com/motomu_protea",
    twitterName1: "X(立嶋)",
    twitterName2: "X(岡島)",
    instagram: ""
  } ,{
    name: "稲川英里",
    image: "/guest/guest26.jpg",
    bio: "『アイドルマスター ミリオンライブ！』大神環役や『SHOW BY ROCK!!』シアン役、『不滅のあなたへ』トナリ役などを演じるフリーの声優さん。アニメだけでなく、吹き替えやドラマになど幅広く活躍されています。",
    appearanceDate: "2025年10月23日", 
    birthDate: "10月28日",
    officialSite: "https://eri-inagawa.studio.site/",
    twitter: "https://x.com/greentea_senbei?s=11&t=YF5X7XblfHzTuB7isvFDfg",
    twitter2: "",
    instagram: ""
  } ,{
    name: "中西圭三",
    image: "/guest/guest27.jpg",
    bio: "91年デビュー。この年ダンスユニットZOOに提供した シングル「Choo Choo TRAIN」 （03年にはEXILEにより再びヒット）はミリオンヒット。90年代のポップダンスシーンを牽引する代表曲となり、第13回JAM広告音楽大競技会作曲賞を受賞。翌92 年自らの楽曲「Woman」もヒット。この年同曲で日本レコード大賞作曲賞を受賞、並びに第31回紅白歌合戦へ出場。続くアルバム「STEPS」 「STARTING OVER」はオリコンチャートNO１に輝く。94年には企画ユニットICEBOXに参加。シングル「冷たいキス」がヒット。 95年以降はWendyMoton ・PeaboBryson ・ChristinaAguileraなど海外の アーティストとも楽曲をリリース。98年には「ウッチャンナンチャンのウリナリ!!」（NTV)の企画でビビアンスー・南原清隆・天野ひろゆきが在籍したブラックビスケッツ に提供した「タイミング」がミリオンヒット(2022年Klang  Rulerによりカバーされた同曲はTikTokにおいてHOTチャート6週連続１位を記録。総再生回数は20億回を突破）。その他提供楽曲も多数。2005年以降はNHK 「おかあさんといっしょ」の体操曲「ぱわわぷ体操」の歌唱。2006年月の歌として好評を博した「ぼよよん行進曲」や2008年「まんまるスマイル」2019年「あさペラ！」の制作など活動の幅も広がっている。2020年コロナ禍による緊急事態宣言の最中よしお兄さん（おかあさんと一緒の体操のお兄さん）の声がけによりリモートで歴代お兄さんお姉さんが大集合して歌われた「ぼよよん行進曲」はYouTubeチャンネルで公開され現在までで3000万回を超える再生数を数えている。2020年秋、自主レーベル『TAO LIFE RECORDS』を設立、その第一弾シングルとして『流れ星/愛することを信じて〜Amazing Grace For You〜』がリリースされた。現在CS旅チャンネルにおいて「中西圭三の朝ぶら散歩」出演中。",
    appearanceDate: "2025年10月30日", 
    birthDate: "11月11日",
    officialSite: "https://www.keizo.net/",
    twitter: "https://x.com/keizo1111?s=21&t=yFiC3o3Bku78q-p_1LbtKQ",
    twitter2: "",
    instagram: ""
  } ,{
    name: "中川心",
    image: "/guest/guest28.jpg",
    bio: "インターネット上で「令和版・“奇跡の1枚”」でライブ中の写真が話題となり、日本テレビ系「スター発掘バラエティー あとは見つかるだけ」に出演し、“NEXT 橋本環奈”と紹介される。雑誌『週刊FLASH』にて、表紙＆巻頭10ページでの掲載やグラビア掲載など被写体としても人気を誇る。\n♪　これまでにもらった誕生日プレゼントで印象に残ってるものは？ 小学生の時家族でハワイに行きました！お母さんの退職金で！初海外で思い出に残っています",
    appearanceDate: "2025年11月6日", 
    birthDate: "12月1日",
    officialSite: "https://twinplanet.co.jp/4361/",
    twitter: "https://x.com/556_nakagawa",
    twitter2: "",
    instagram: ""
  } 

];
