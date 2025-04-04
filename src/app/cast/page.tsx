"use client";

import React, { useState } from 'react';
import Menu from '@/components/Menu';

const CastStaffPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('cast');

  const [selectedCast, setSelectedCast] = useState<{
    id: string;
    name: string;
    week: string;
    birthday: string;
    image: string;
    detailImage: string;
    description: string;
  } | null>(null);

  const [selectedStaff, setSelectedStaff] = useState<{
    id: string;
    name: string;
    role: string;
    birthday: string;
    image: string;
    detailImage: string;
    description: string;
  } | null>(null);

  const castData = [
    {
      id: 'cast1',
      name: '松田和佳',
      week: '第１週',
      birthday: '5月29日生まれ',
      image: '/cast/cast1-1.jpg',
      detailImage: '/cast/cast1-2.jpg',
      description: '吉本興業所属タレント。元静岡朝日テレビアナウンサーとして活躍した経験を活かし、その明るく爆発力のあるキャラクターとプロ意識の高い進行で番組を盛り上げている。'
    },
    {
      id: 'cast2',
      name: 'ゆうにゃん',
      week: '第２週',
      birthday: '2月22日生まれ',
      image: '/cast/cast2-1.jpg',
      detailImage: '/cast/cast2-2.jpg',
      description: '自称「ぶりっ子女王」として知られる人気インフルエンサー。TikTokAwards2023ファッション部門で最優秀賞を受賞し、SNSでの活動が注目を集めている。フジパンの人気キャラクター「ネオバタくん」の声を担当するなど、声優としても活躍中。キュートなキャラクターと独自の世界観で多くのファンを魅了している。'
    },
    {
      id: 'cast3',
      name: '神谷明采',
      week: '第3週',
      birthday: '4月19日生まれ',
      image: '/cast/cast3-1.jpg',
      detailImage: '/cast/cast3-2.jpg',
      description: 'タレント、会社経営者、YouTuber。これまでに「ミス東大2020」と「MISS OF MISS CAMPUS QUEEN CONTEST 2021」でグランプリを受賞。幼少期からバレエを始め、中高時代は新体操部で活躍し部長も務める。「One Young World Manchester 2022」に参加し、低糖質スイーツ事業と世界の糖尿病問題について英語でスピーチを行うなど、国内外で活躍の場を広げている。現在は東京大学公共政策大学院経済政策コース在学中。'
    },
    {
      id: 'cast4',
      name: '宮崎美穂',
      week: '第4週',
      birthday: '7月30日生まれ',
      image: '/cast/cast4-1.jpg',
      detailImage: '/cast/cast4-2.jpg',
      description: 'AKB48卒業生。PRODUCE48に参加し、日韓での活動経験も持つ。TOPIK3級の韓国語力を活かし、国内外で活動の場を広げている。北海道日本ハムファイターズの熱烈なファンとしても知られる。現在はABEMA「ラブパワーキングダム」に出演し、新たな活動に挑戦している。'
    },
    {
      id: 'cast5',
      name: 'ChumuNote',
      week: '第5週',
      birthday: '5月19日生まれ',
      image: '/cast/cast5-1.jpg',
      detailImage: '/cast/cast5-2.jpg',
      description: '音楽系釣り好きVTuber。「夢はさいたまスーパーアリーナ」を目指し活動中。旧名義で所属していた事務所の解散に伴い転生（？）し、名義を「ChumuNote」へ変更。現在はレメディ・アンド・カンパニーに所属し、医薬品開発の企業にお世話になりながら、「旧名義のチャンネル登録者数を超えたい！」と全身全霊で活動中。'
    },
    {
      id: 'cast6',
      name: '川村ケンスケ',
      week: '誕生日総合研究所',
      birthday: '5月2日生まれ',
      image: '/cast/cast6-1.jpg',
      detailImage: '/cast/cast6-2.jpg',
      description: 'これまでMVを500本以上（自分調べで曖昧です）監督してきた映像ディレクターとして、この番組での私の役割は…ランキング１位のかたに、わたしが選曲した１曲をプレゼントすることです。言ってみれば…１位になったその人を主役に据えてMVを撮りたい！（MVの成り立ちとは真逆ですが）といった発想だったりするかもしれませんね。最高の、全力の、選曲で、バースデー・ランキングを飾りたいと思います。'
    },
    {
      id: 'cast7',
      name: '風谷南友',
      week: '勝負の姫君',
      birthday: '3月21日生まれ',
      image: '/cast/cast7-1.jpg',
      detailImage: '/cast/cast7-2.jpg',
      description: '生き物と植物が好きで、ナウシカをリスペクトする女優。「ミス小野小町」グランプリ受賞後、アクションや日舞、居合抜刀などを習得。「勝負の姫君」として神事抜刀を執り行う。蠱惑的な声質で声優やナレーションも担当。自然愛からSDGsのラジオ番組MCを務め、BS演技バトル番組で優勝。狂気溢れたホラー演技がtiktoKで注目されている。'
    },
  ];

  const staffData = [
    {
      id: 'staff1',
      name: '芳賀正光',
      role: '企画構成',
      birthday: '2月16日生まれ',
      image: '/cast/staff1-1.jpg',
      detailImage: '/cast/staff1-2.jpg',
      description: '誕生日をお祝いしたい人が居る。誕生日をお祝いしてくれる人が居る。とても幸せなことです。私は…、誕生日に産んでくれてありがとう、育ててくれてありがとうという想いを込めて両親にプレゼントを渡しています。その時に出会える最高の笑顔が大好きなんです。この番組を通じ誕生日にお祝いすることがとても素敵な時間であることを見直して欲しいと願っています。'
    },
    {
      id: 'staff2',
      name: '梅本満',
      role: 'プロデューサー',
      birthday: '10月26日生まれ',
      image: '/cast/staff2-1.jpg',
      detailImage: '/cast/staff2-2.jpg',
      description: '言葉にするより、文章や手紙にした方が、その人への想いがより深く伝わることがあります。「誕生日おめでとう」と肉声で言われるのもいいけど、メッセージでもらったらもっとうれしい。『渋谷愛ビジョン』はそんな感動をもたらしてくれる街頭ビジョンです。またラジオも手紙やメッセージととても相性のいいメディアです。その2つがコラボして、“史上最強のバースディメッセージ”を皆さんにお届けすることになりました。なんとランキングにして発表するという恐るべき番組です。メッセージに感動しながらランキングにハラハラドキドキする、前代未聞の誕生日番組が誕生しました!4月2日がその“バスラン”的なバースディです。'
    },
    {
      id: 'staff3',
      name: '野村満',
      role: '総合演出',
      birthday: '10月26日生まれ',
      image: '/cast/staff3-1.jpg',
      detailImage: '/cast/staff3-2.jpg',
      description: 'ラジオ一筋 ？十年！ 最近は、のむDと呼ばれてます。これまでに「ミス東大2020」と「MISS OF MISS CAMPUS QUEEN CONTEST 2021」でグランプリを受賞。幼少期からバレエを始め、中高時代は新体操部で活躍し部長も務める。「One Young World Manchester 2022」に参加し、低糖質スイーツ事業と世界の糖尿病問題について英語でスピーチを行うなど、国内外で活躍の場を広げている。現在は東京大学公共政策大学院経済政策コース在学中。'
    },
    {
      id: 'staff4',
      name: '神取美佳',
      role: 'ミキサー・制作',
      birthday: '9月28日生まれ',
      image: '/cast/staff4-1.jpg',
      detailImage: '/cast/staff4-2.jpg',
      description: '｢誕生日｣をテーマに愛を伝える番組に関わることができて私自身とてもワクワクしております！日頃は恥ずかしくて伝えられない人もこの番組を通して大切な人に伝えたくなる、世界が｢おめでとう｣｢ありがとう｣で溢れる、そんな番組になるように精一杯がんばります。'
    },
    {
      id: 'staff5',
      name: 'Konomi',
      role: 'AP',
      birthday: '5月25日生まれ',
      image: '/cast/staff5-1.jpg',
      detailImage: '/cast/staff5-2.jpg',
      description: '誕生日って自分にとっても特別な日だけど、誰かの誕生日と聞くと、言葉が通じなくても、世代が違っても「おめでとう」と伝えたくなるハッピーな日ですよね。「今日は◯◯さんの誕生日なんだよ。知ってた？」と自分のことのように話題にしてしまう、不思議な日でもあります。誰にとっても平等に存在する、特別な一日。「おめでとう」が溢れて心があたたかくなる時間をバスランで紡げたらいいなと願っています。'
    },
    {
      id: 'staff6',
      name: '後藤英樹',
      role: '制作',
      birthday: '6月19日生まれ',
      image: '/cast/staff6-1.jpg',
      detailImage: '/cast/staff6-2.jpg',
      description: '”感情が動く瞬間を作る”をモットーに日々番組を制作しています。一人ひとりの「おめでとう」を通して、感謝と愛のあふれる番組になるよう精一杯頑張ります！'
    },
    {
      id: 'staff7',
      name: '松浦亮介',
      role: 'WEBディレクター',
      birthday: '11月11日生まれ',
      image: '/cast/staff7-1.jpg',
      detailImage: '/cast/staff7-2.jpg',
      description: '11月11日生まれです。1が並ぶからか、わたりやすいことが多くて、毎年「今日だったよね？」と声をかけてもらえるのがちょっと嬉しいです。しかもポッキー＆プリッツの日でもあるので、軽いプレゼントとしてポッキーをもらうことも。気負わず祝ってもらえる、その“ちょうどよさ”が気に入っています。誕生日って、誰にとっても一年に一度の大切な日ですが、「おめでとう」の一言だけで笑顔が生まれる、不思議な力があると思っています。この番組の“バースデーランキング”も、そんな笑顔のきっかけになればうれしいです。僕も、自分の誕生日にちょっと得した気分になった経験を胸に、番組づくりで誰かの特別な1日をほんの少し明るくできたらと思っています。'
    },
  ];

  const openCastDetail = (cast: typeof castData[0]) => {
    setSelectedCast(cast);
  };

  const closeCastDetail = () => {
    setSelectedCast(null);
  };

  const openStaffDetail = (staff: typeof staffData[0]) => {
    setSelectedStaff(staff);
  };

  const closeStaffDetail = () => {
    setSelectedStaff(null);
  };

  const handleBackdropClick = (e: React.MouseEvent<HTMLDivElement>) => {
    // ダイアログの外側をクリックした場合、ダイアログを閉じる
    if (e.target === e.currentTarget) {
      closeCastDetail();
      closeStaffDetail();
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Menu />
      <main className="min-h-screen">
        {/* ヒーローセクション */}
        <section className="py-20 bg-[#0f1429]">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#d4af37]">
              キャスト＆STAFF
              </h1>
            </div>
          </div>
        </section>

        {/* キャストセクション */}
        <section className="py-20 bg-[#0f1429]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-[#d4af37] inline-block relative">
                愛あるパーソナリティ
              </h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 max-w-6xl mx-auto">
              {castData.map((cast) => (
                <div key={cast.id} className="bg-transparent rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer" onClick={() => openCastDetail(cast)}>
                  <div className="relative">
                    <div className="aspect-square">
                      <img src={cast.image} alt={cast.name} className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="p-6 bg-transparent text-center">
                    <h3 className="text-lg font-bold text-[#d4af37] mb-1">{cast.week}</h3>
                    <h4 className="text-xl font-bold text-[#d4af37] mb-2">{cast.name}</h4>
                    <p className="text-[#d4af37] max-[344px]:text-xs">{cast.birthday}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* スタッフセクション */}
        <section className="py-20 bg-[#0f1429]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-[#d4af37] inline-block relative">
                愛あるSTAFF
              </h2>
            </div>
            
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 max-w-6xl mx-auto">
              {staffData.map((staff) => (
                <div key={staff.id} className="bg-transparent rounded-xl shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 cursor-pointer" onClick={() => openStaffDetail(staff)}>
                  <div className="relative">
                    <div className="aspect-square">
                      <img src={staff.image} alt={staff.name} className="w-full h-full object-cover" />
                    </div>
                  </div>
                  <div className="p-6 bg-transparent text-center">
                    <h3 className="text-lg font-bold text-[#d4af37] mb-2">{staff.role}</h3>
                    <p className="text-xl font-bold text-[#d4af37] mb-1">{staff.name}</p>
                    <p className="text-[#d4af37] max-[344px]:text-xs">{staff.birthday}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 制作STAFFからのメッセージ */}
        <section className="py-20 bg-[#0f1429]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-[#d4af37] inline-block relative">
                制作STAFFからの<br />メッセージ
              </h2>
            </div>
            
            <div className="max-w-4xl mx-auto bg-[#1a2547] rounded-xl shadow-lg overflow-hidden p-8">
              <div className="text-white leading-relaxed space-y-6">
                <p>
                  「<span className="text-[#d4af37] font-bold">efitプレゼンツ☆ウィークリー・バースデー・ランキング</span>」は、視聴者の皆さまに「誕生日」という特別な日を通じて、新しい発見と感動をお届けする番組です。私たち制作チームは、この番組を通じて、視聴者の皆さまに「誕生日」という特別な日の魅力を再発見していただきたいと考えています。
                </p>
                <p>
                  <span className="text-[#d4af37] font-bold">ラジオ日本</span>と<span className="text-[#d4af37] font-bold">渋谷愛ビジョン</span>を結ぶクロスメディア展開により、視聴者の皆さまにより多角的な楽しみ方を提供できるよう工夫を重ねています。また、視聴者参加型の企画も充実させ、ラジオ日本局内で『聴取率』『フォロワー数でNo.1を目指しています。
                </p>
                <p>
                  これからも、視聴者の皆さまに「驚き」と「感動」をお届けできるよう、スタッフ一同、全力で取り組んでまいります。どうぞ、これからも「<span className="text-[#d4af37] font-bold">efitプレゼンツ☆ウィークリー・バースデー・ランキング</span>」をよろしくお願いいたします。
                </p>
                <p className="text-[#d4af37] font-bold text-right mt-8">
                  制作チーム一同
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 協賛・協力セクション */}
        <section className="py-20 bg-[#0f1429]">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4 text-[#d4af37] inline-block relative">
                協賛・協力
              </h2>
            </div>
            
            <div className="max-w-4xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                {/* 渋谷愛ビジョン */}
                <div className="bg-[#1a2547] rounded-xl shadow-lg overflow-hidden p-8 text-center">
                  <h3 className="text-xl font-bold text-[#d4af37] mb-4">情報提供・制作協力</h3>
                  <p className="text-white mb-6">渋谷の街を彩る大型ビジョンで番組情報を放映</p>
                  <div className="flex justify-center p-4 rounded-xl h-32 flex items-center">
                    <a href="https://www.saivision.jp/top.php" target="_blank" rel="noopener noreferrer">
                      <img src="/logo1.png" alt="渋谷愛ビジョン" className="h-24 object-contain hover:opacity-80 transition-opacity" />
                    </a>
                  </div>
                </div>
                
                {/* スポンサー */}
                <div className="bg-[#1a2547] rounded-xl shadow-lg overflow-hidden p-8 text-center">
                  <h3 className="text-xl font-bold text-[#d4af37] mb-4">スポンサー</h3>
                  <p className="text-white mb-6">番組メインスポンサー</p>
                  <div className="flex justify-center bg-white p-4 rounded-xl h-32 flex items-center">
                    <a href="https://efit.co.jp/" target="_blank" rel="noopener noreferrer">
                      <img src="/logo2.png" alt="efit" className="h-24 object-contain hover:opacity-80 transition-opacity" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        
      </main>

      {/* キャスト詳細ダイアログ */}
      {selectedCast && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-start md:items-center justify-center z-50 p-4 pt-20 md:pt-4 backdrop-blur-sm overflow-y-auto" onClick={handleBackdropClick}>
          <div className="bg-[#0f1429] max-w-4xl w-full rounded-xl overflow-hidden relative shadow-2xl border border-[#d4af37]/20 my-4">
            <button 
              onClick={closeCastDetail}
              className="absolute top-4 right-4 text-white text-3xl hover:text-white transition-colors w-10 h-10 flex items-center justify-center rounded-full bg-black hover:bg-black/80 z-50"
              aria-label="閉じる"
            >
              ×
            </button>
            
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 relative">
                <img 
                  src={selectedCast.detailImage} 
                  alt={selectedCast.name} 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0f1429] to-transparent h-20"></div>
              </div>
              
              <div className="md:w-1/2 p-8 flex flex-col justify-center bg-[#0f1429]">
                <div className="border-l-4 border-[#d4af37] pl-4 mb-6">
                  <h2 className="text-3xl font-bold text-[#d4af37] mb-1">
                    {selectedCast.name}
                  </h2>
                  <div className="flex items-center">
                    <span className="text-xl text-[#d4af37] mr-4">{selectedCast.week}</span>
                    <span className="text-[#d4af37]">{selectedCast.birthday}</span>
                  </div>
                </div>
                <p className="text-white leading-relaxed text-lg">{selectedCast.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* スタッフ詳細ダイアログ */}
      {selectedStaff && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-start md:items-center justify-center z-50 p-4 pt-20 md:pt-4 backdrop-blur-sm overflow-y-auto" onClick={handleBackdropClick}>
          <div className="bg-[#0f1429] max-w-4xl w-full rounded-xl overflow-hidden relative shadow-2xl border border-[#d4af37]/20 my-4">
            <button 
              onClick={closeStaffDetail}
              className="absolute top-4 right-4 text-white text-3xl hover:text-white transition-colors w-10 h-10 flex items-center justify-center rounded-full bg-black hover:bg-black/80 z-50"
              aria-label="閉じる"
            >
              ×
            </button>
            
            <div className="flex flex-col md:flex-row">
              <div className="md:w-1/2 relative">
                <img 
                  src={selectedStaff.detailImage} 
                  alt={selectedStaff.name} 
                  className="w-full h-full object-cover" 
                />
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-[#0f1429] to-transparent h-20"></div>
              </div>
              
              <div className="md:w-1/2 p-8 flex flex-col justify-center bg-[#0f1429]">
                <div className="border-l-4 border-[#d4af37] pl-4 mb-6">
                  <h2 className="text-3xl font-bold text-[#d4af37] mb-1">
                    {selectedStaff.name}
                  </h2>
                  <div className="flex items-center">
                    <span className="text-xl text-[#d4af37] mr-4">{selectedStaff.role}</span>
                    <span className="text-[#d4af37]">{selectedStaff.birthday}</span>
                  </div>
                </div>
                <p className="text-white leading-relaxed text-lg">{selectedStaff.description}</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default CastStaffPage;
