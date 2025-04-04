"use client";

import React, { useState, useEffect } from 'react';
import Menu from '@/components/Menu';

const PurposePage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('media');
  const [showImageDialog, setShowImageDialog] = useState<boolean>(false);
  const [isMobile, setIsMobile] = useState<boolean>(false);

  // スマホ表示かどうかを判定する関数
  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    // 初期化時にチェック
    checkIfMobile();
    
    // リサイズ時にチェック
    window.addEventListener('resize', checkIfMobile);
    
    // クリーンアップ
    return () => {
      window.removeEventListener('resize', checkIfMobile);
    };
  }, []);

  // ダイアログの外側をクリックしたときに閉じる処理
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      setShowImageDialog(false);
    }
  };

  // 画像クリック時の処理
  const handleImageClick = () => {
    if (!isMobile) {
      setShowImageDialog(true);
    }
  };

  return (
    <>
      <Menu />

      {/* ヒーローセクション */}
      <section className="py-20 bg-gradient-to-r from-[#17142E] to-[#1a3a6c] text-center">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#d4af37]">
              番組の目的
            </h1>
          </div>
        </div>
      </section>

      {/* 目的セクション */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-[#1a3a6c] text-center">
              番組の目的
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* 聴取率No.1を目指す */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 border border-gray-200">
                <div className="h-3 bg-[#0166CD]"></div>
                <div className="p-8">
                  <div className="w-16 h-16 rounded-full bg-[#0166CD]/10 flex items-center justify-center mx-auto mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#0166CD]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#1a3a6c] mb-4 text-center">
                    聴取率No.1を目指す
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    ラジオ日本局内で『聴取率』『SNS（X）』のフォロワー数でNo.1を目指します。リスナーの皆様と一緒に成長する番組を作ります。
                  </p>
                </div>
              </div>

              {/* クロスメディア展開 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 border border-gray-200">
                <div className="h-3 bg-[#0166CD]"></div>
                <div className="p-8">
                  <div className="w-16 h-16 rounded-full bg-[#0166CD]/10 flex items-center justify-center mx-auto mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#0166CD]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#1a3a6c] mb-4 text-center">
                    クロスメディア展開
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    渋谷愛ビジョンと連動するクロスメディア展開を実現。ラジオの枠を超えた新しいエンターテイメントをお届けします。
                  </p>
                </div>
              </div>

              {/* 魅力的なWEB＆SNS展開 */}
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-transform duration-300 hover:scale-105 border border-gray-200">
                <div className="h-3 bg-[#0166CD]"></div>
                <div className="p-8">
                  <div className="w-16 h-16 rounded-full bg-[#0166CD]/10 flex items-center justify-center mx-auto mb-6">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 text-[#0166CD]" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-[#1a3a6c] mb-4 text-center">
                    魅力的なWEB＆SNS展開
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    公式サイトやSNSを通じて、番組の魅力を最大限に伝えます。リスナーとの双方向コミュニケーションを大切にします。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* クロスメディア展開の全体像 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold mb-12 text-[#1a3a6c] text-center">
              クロスメディア展開の全体像
            </h2>

            <div className="flex flex-col md:flex-row mb-12">
              <div className="md:w-1/2 mb-8 md:mb-0 flex items-center justify-center">
                <img 
                  src="/chart.png" 
                  alt="クロスメディア展開図" 
                  className={`max-w-full h-auto rounded-lg shadow-lg ${!isMobile ? 'cursor-pointer hover:opacity-90 transition-opacity' : ''}`} 
                  onClick={handleImageClick}
                />
              </div>
              <div className="md:w-1/2 md:pl-12">
                <div className="bg-gray-50 p-6 rounded-lg shadow-md">
                  <h3 className="text-2xl font-bold text-[#1a3a6c] mb-4">
                    クロスメディア戦略のまとめ
                  </h3>
                  <p className="text-gray-700 leading-relaxed mb-4">
                    このクロスメディア戦略により、単なるラジオ番組を超えて、リスナー・視聴者との双方向コミュニケーションを実現し、複数のメディアにまたがる一貫した「誕生日を祝う」体験を創出します。
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    各メディアの特性を活かしながら相互に補完し合うことで、「おめでとう」「ありがとう」というポジティブなメッセージを広く伝播させる仕組みを構築しています。
                  </p>
                </div>
              </div>
            </div>

            {/* タブ切り替えセクション */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden border border-gray-200">
              <div className="flex flex-wrap border-b border-gray-200 bg-blue-50">
                <button 
                  onClick={() => setActiveTab('media')}
                  className={`flex-1 py-4 px-6 text-center font-medium ${activeTab === 'media' ? 'text-[#1a3a6c] border-b-2 border-[#0166CD]' : 'text-gray-500 hover:text-[#1a3a6c] border-b-2 border-transparent hover:border-gray-300'}`}
                >
                  メディア間の連携
                </button>
                <button 
                  onClick={() => setActiveTab('content')}
                  className={`flex-1 py-4 px-6 text-center font-medium ${activeTab === 'content' ? 'text-[#1a3a6c] border-b-2 border-[#0166CD]' : 'text-gray-500 hover:text-[#1a3a6c] border-b-2 border-transparent hover:border-gray-300'}`}
                >
                  コンテンツの展開
                </button>
                <button 
                  onClick={() => setActiveTab('collaboration')}
                  className={`flex-1 py-4 px-6 text-center font-medium ${activeTab === 'collaboration' ? 'text-[#1a3a6c] border-b-2 border-[#0166CD]' : 'text-gray-500 hover:text-[#1a3a6c] border-b-2 border-transparent hover:border-gray-300'}`}
                >
                  コラボレーション
                </button>
              </div>

              {/* メディア間の連携タブ */}
              <div className={`p-8 ${activeTab === 'media' ? 'block' : 'hidden'}`}>
                <h3 className="text-xl font-bold text-[#1a3a6c] mb-4">
                  ラジオ番組を核にした連携
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  ラジオ日本の「ウィークリー・バースデー・ランキング」を中心に、公式WEBサイト、渋谷愛ビジョン（街頭ビジョン）、YouTube Live、SNS（X/Twitter）が相互に連携しています。
                </p>

                <h3 className="text-xl font-bold text-[#1a3a6c] mb-4 mt-6">
                  メッセージの循環
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  投稿者からの誕生日メッセージがWEBサイトやラジオ番組に届き、それがさらに渋谷の街頭ビジョンで放映される流れを作り出しています。
                </p>

                <h3 className="text-xl font-bold text-[#1a3a6c] mb-4 mt-6">
                  バイタルデータ連携
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  MOTHERブレスレットと連携し、出演者のリアルタイムバイタルデータを表示します。
                </p>
              </div>

              {/* コンテンツの展開タブ (非表示デフォルト) */}
              <div className={`p-8 ${activeTab === 'content' ? 'block' : 'hidden'}`}>
                <h3 className="text-xl font-bold text-[#1a3a6c] mb-4">
                  マルチプラットフォーム展開
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  ラジオでの放送内容がYouTubeでアーカイブ配信され、SNSで拡散される仕組みを整えています。
                </p>

                <h3 className="text-xl font-bold text-[#1a3a6c] mb-4 mt-6">
                  街中からデジタルへ
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  渋谷愛ビジョンでのゲスト映像放映が街中で視聴され、その様子がSNSで共有される循環を生み出しています。
                </p>

                <h3 className="text-xl font-bold text-[#1a3a6c] mb-4 mt-6">
                  ランキング情報の更新
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  ランキング情報がWEBサイトで更新され、次回放送の期待感を高める仕組みを取り入れています。
                </p>
              </div>

              {/* コラボレーションタブ (非表示デフォルト) */}
              <div className={`p-8 ${activeTab === 'collaboration' ? 'block' : 'hidden'}`}>
                <h3 className="text-xl font-bold text-[#1a3a6c] mb-4">
                  メッセージからコンテンツへ
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  投稿者からのメッセージが番組コンテンツになり、それが様々なメディアで展開されます。
                </p>

                <h3 className="text-xl font-bold text-[#1a3a6c] mb-4 mt-6">
                  SNSフィードバック
                </h3>
                <p className="text-gray-700 leading-relaxed mb-4">
                  SNSでの反応がラジオ番組にフィードバックされ、コンテンツに反映される双方向のコミュニケーションを実現しています。
                </p>

                <h3 className="text-xl font-bold text-[#1a3a6c] mb-4 mt-6">
                  新規視聴者の獲得
                </h3>
                <p className="text-gray-700 leading-relaxed">
                  YouTube視聴者からの再拡散でさらに新しい視聴者を獲得する好循環を生み出しています。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 画像ダイアログ */}
      {showImageDialog && (
        <div className="fixed inset-0 bg-black bg-opacity-80 flex items-center justify-center z-50 p-4 backdrop-blur-sm overflow-y-auto" onClick={handleBackdropClick}>
          <div className="relative max-w-5xl w-full">
            <img 
              src="/chart.png" 
              alt="クロスメディア展開図" 
              className="w-full h-auto rounded-lg shadow-2xl" 
            />
          </div>
        </div>
      )}
    </>
  );
};

export default PurposePage;
