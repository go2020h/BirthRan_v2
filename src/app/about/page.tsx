            "use client";

import React, { useState } from 'react';
import Link from 'next/link';
import Menu from '@/components/Menu';
import { FaTrophy, FaGift, FaHeart, FaEnvelope, FaMicrophone, FaNewspaper, FaVideo, FaChartBar } from 'react-icons/fa';

const ProgramPage: React.FC = () => {
  const [activeTab, setActiveTab] = useState<string>('18');

  const handleTabChange = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <>
      <Menu />

      {/* ヒーローセクション */}
      <section className="py-20 bg-gradient-to-r from-[#17142E] to-[#1a3a6c] text-center">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#d4af37]">
              番組内容
            </h1>
          </div>
        </div>
      </section>

      {/* 番組内容セクション */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-[#1a3a6c] mb-8 text-center">番組内容</h2>
            
            {/* タブメニュー */}
            <div className="flex justify-center border-b border-gray-200 mb-8">
              <button
                className={`px-6 py-3 font-medium text-lg ${activeTab === '18' ? 'bg-[#0167CC] text-white' : 'bg-[#e6f2ff] text-gray-700 hover:bg-[#cce6ff]'}`}
                onClick={() => handleTabChange('18')}
              >
                18時00分～
              </button>
              <button
                className={`px-6 py-3 font-medium text-lg ${activeTab === '19' ? 'bg-[#0167CC] text-white' : 'bg-[#e6f2ff] text-gray-700 hover:bg-[#cce6ff]'}`}
                onClick={() => handleTabChange('19')}
              >
                19時00分～
              </button>
              <button
                className={`px-6 py-3 font-medium text-lg ${activeTab === '20' ? 'bg-[#0167CC] text-white' : 'bg-[#e6f2ff] text-gray-700 hover:bg-[#cce6ff]'}`}
                onClick={() => handleTabChange('20')}
              >
                20時00分～
              </button>
            </div>
            
            {/* 18時00分のコンテンツ */}
            {activeTab === '18' && (
              <div className="space-y-8">
                <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-[#0167CC] hover:shadow-md transition-all duration-300">
                  <div className="flex items-center mb-3">
                    <div className="bg-[#0167CC] text-white rounded-full p-2 mr-3">
                      <FaMicrophone className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1a3a6c]">18時00分／『オープニングトーク』</h3>
                  </div>
                  <p className="text-gray-700 ml-10">パーソナリティ、川村ケンスケ、風谷南友から最近のおめでたい話等で心がポカポカになるオープニングトークで番組がスタートします・</p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-[#d4af37] hover:shadow-md transition-all duration-300">
                  <div className="flex items-center mb-3">
                    <div className="bg-[#d4af37] text-white rounded-full p-2 mr-3">
                      <FaTrophy className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1a3a6c]">18時05分頃／（先週金曜日の）『バスランベスト３の発表！』</h3>
                  </div>
                  <p className="text-gray-700 ml-10">先週金曜日に誕生日を迎えた方へのバースデーメッセージランキングを発表します。</p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-[#d4af37] hover:shadow-md transition-all duration-300">
                  <div className="flex items-center mb-3">
                    <div className="bg-[#d4af37] text-white rounded-full p-2 mr-3">
                      <FaTrophy className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1a3a6c]">18時18分頃／（先週土曜日の）『バスランベスト３の発表！』</h3>
                  </div>
                  <p className="text-gray-700 ml-10">先週土曜日に誕生日を迎えた方へのバースデーメッセージランキングを発表します。</p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-[#d4af37] hover:shadow-md transition-all duration-300">
                  <div className="flex items-center mb-3">
                    <div className="bg-[#d4af37] text-white rounded-full p-2 mr-3">
                      <FaTrophy className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1a3a6c]">18時28分頃／（先週日曜日の）『バスランベスト３の発表！』</h3>
                  </div>
                  <p className="text-gray-700 ml-10">先週日曜日に誕生日を迎えた方へのバースデーメッセージランキングを発表します。</p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-[#d4af37] hover:shadow-md transition-all duration-300">
                  <div className="flex items-center mb-3">
                    <div className="bg-[#d4af37] text-white rounded-full p-2 mr-3">
                      <FaTrophy className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1a3a6c]">18時36分頃／（今週月曜日の）『バスランベスト３の発表！』</h3>
                  </div>
                  <p className="text-gray-700 ml-10">今週月曜日に誕生日を迎えた方へのバースデーメッセージランキングを発表します。</p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-[#4A90E2] hover:shadow-md transition-all duration-300">
                  <div className="flex items-center mb-3">
                    <div className="bg-[#4A90E2] text-white rounded-full p-2 mr-3">
                      <FaNewspaper className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1a3a6c]">18時48分頃／ラジオ日本のニュース＆天気予報</h3>
                  </div>
                  <p className="text-gray-700 ml-10">最新のニュースと天気予報をお届けします。</p>
                </div>
              </div>
            )}
            
            {/* 19時00分のコンテンツ */}
            {activeTab === '19' && (
              <div className="space-y-8">
                <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-[#6C5CE7] hover:shadow-md transition-all duration-300">
                  <div className="flex items-center mb-3">
                    <div className="bg-[#6C5CE7] text-white rounded-full p-2 mr-3">
                      <FaVideo className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1a3a6c]">19時00分～20分／『渋谷愛メッセージ誕生祭』の再放送TIME</h3>
                  </div>
                  <p className="text-gray-700 ml-10">渋谷愛ビジョンでは『渋谷愛メッセージ誕生祭』の再放送がはじまっています。ラジオと渋谷愛ビジョン公式YouTube-LIVEの二刀流！聴いて～観てお楽しみください。</p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-[#d4af37] hover:shadow-md transition-all duration-300">
                  <div className="flex items-center mb-3">
                    <div className="bg-[#d4af37] text-white rounded-full p-2 mr-3">
                      <FaTrophy className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1a3a6c]">19時03分頃／（今週火曜日の）『バスランベスト３の発表！』</h3>
                  </div>
                  <p className="text-gray-700 ml-10">今週火曜日に誕生日を迎えた方へのバースデーメッセージランキングを発表します。</p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-[#FF6B6B] hover:shadow-md transition-all duration-300">
                  <div className="flex items-center mb-3">
                    <div className="bg-[#FF6B6B] text-white rounded-full p-2 mr-3">
                      <FaGift className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1a3a6c]">19時12分頃／『おめありレコメンド』</h3>
                  </div>
                  <p className="text-gray-700 ml-10">お客様やSTAFFから「おめでとう」「ありがとう」という言葉が集まっていいる愛ある商品やサービス、会社をご紹介するコーナーです。<br/>
                  「おめありレコメンド」でご紹介した商品やサービスを『もうすぐ誕生日！ようこそバスランへ！』にご出演頂いたゲストへの誕生日プレゼントとさせていただいております。<br/>
                  お楽しみに～♡</p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-[#d4af37] hover:shadow-md transition-all duration-300">
                  <div className="flex items-center mb-3">
                    <div className="bg-[#d4af37] text-white rounded-full p-2 mr-3">
                      <FaTrophy className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1a3a6c]">19時19分頃／（今週水曜日の）『バスランベスト３の発表！』</h3>
                  </div>
                  <p className="text-gray-700 ml-10">今週水曜日に誕生日を迎えた方へのバースデーメッセージランキングを発表します。</p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-[#FF6B6B] hover:shadow-md transition-all duration-300">
                  <div className="flex items-center mb-3">
                    <div className="bg-[#FF6B6B] text-white rounded-full p-2 mr-3">
                      <FaGift className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1a3a6c]">19時31分頃／『もうすぐ誕生日！ようこそバスランへ！』</h3>
                  </div>
                  <p className="text-gray-700 ml-10">1カ月以内に誕生日を迎えるゲストをご招待。<br/>
                  今まで一番思い出に残っている誕生日やとっても嬉しかった誕生日プレゼント等、誕生日に纏わる素敵なお話をお伺いするコーナーです。<br/>
                  ご出演いただいたゲストの皆様には、少し早いですが愛が詰まったおめありGIFTを誕生日プレゼントとしてご用意しております。</p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-[#FF6B6B] hover:shadow-md transition-all duration-300">
                  <div className="flex items-center mb-3">
                    <div className="bg-[#FF6B6B] text-white rounded-full p-2 mr-3">
                      <FaHeart className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1a3a6c]">19時57分頃／『おめでとう！ありがとう！愛言葉』</h3>
                  </div>
                  <p className="text-gray-700 ml-10">リスナーの皆様から頂いた「おめでとう」「ありがとう」の愛言葉をご紹介するコーナーです。<br/>
                  皆様からの愛言葉をお待ちしております。</p>
                </div>
              </div>
            )}
            
            {/* 20時00分のコンテンツ */}
            {activeTab === '20' && (
              <div className="space-y-8">
                <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-[#FF6B6B] hover:shadow-md transition-all duration-300">
                  <div className="flex items-center mb-3">
                    <div className="bg-[#FF6B6B] text-white rounded-full p-2 mr-3">
                      <FaEnvelope className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1a3a6c]">20時00分頃／『ピックアップ！愛メッセージ！！』</h3>
                  </div>
                  <p className="text-gray-700 ml-10">渋谷愛ビジョンには誕生日の愛メッセージだけでなく、結婚記念日や母の日、父の日、友人へのお礼、何気ない「おめでとう」「ありがとう」の愛メッセージが溢れています。その中から番組パーソナリティが1通をピックアップしてご紹介！愛の伝道師を担っていただくコーナーです。</p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-[#0167CC] hover:shadow-md transition-all duration-300">
                  <div className="flex items-center mb-3">
                    <div className="bg-[#0167CC] text-white rounded-full p-2 mr-3">
                      <FaHeart className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1a3a6c]">20時10分頃／『パーソナリティにありがとう』</h3>
                  </div>
                  <p className="text-gray-700 ml-10">毎週・週替わりでパーソナリティを務める皆様がリスナーの皆様に自信を持ってお届けする情報が満載のコーナーです。このコーナーを聴いたあとに、思わず<br/>
                  「パーソナリティさん♡ありがとう」素敵な愛言葉を贈ることになりますよ～。<br/>
                  こうご期待です！</p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-[#d4af37] hover:shadow-md transition-all duration-300">
                  <div className="flex items-center mb-3">
                    <div className="bg-[#d4af37] text-white rounded-full p-2 mr-3">
                      <FaTrophy className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1a3a6c]">20時19分頃／（今週木曜日の）『バスランベスト３の発表！』</h3>
                  </div>
                  <p className="text-gray-700 ml-10">今週木曜日に誕生日を迎えた方へのバースデーメッセージランキングを発表します。</p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-[#0167CC] hover:shadow-md transition-all duration-300">
                  <div className="flex items-center mb-3">
                    <div className="bg-[#0167CC] text-white rounded-full p-2 mr-3">
                      <FaChartBar className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1a3a6c]">20時25分頃／ランキングの振り返り</h3>
                  </div>
                  <p className="text-gray-700 ml-10">本日発表したバスランベスト３の振り返りと翌週明日から来週木曜日までに誕生日を迎えた方の昨年の第一位を発表します。</p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-[#0167CC] hover:shadow-md transition-all duration-300">
                  <div className="flex items-center mb-3">
                    <div className="bg-[#0167CC] text-white rounded-full p-2 mr-3">
                      <FaMicrophone className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1a3a6c]">20時28分頃／『エンディングトーク』</h3>
                  </div>
                  <p className="text-gray-700 ml-10">パーソナリティの皆様が今週の放送を振り返り、来週の放送に向けてのお話をします。</p>
                </div>
                
                <div className="bg-white rounded-lg p-6 shadow-sm border-l-4 border-[#6C5CE7] hover:shadow-md transition-all duration-300">
                  <div className="flex items-center mb-3">
                    <div className="bg-[#6C5CE7] text-white rounded-full p-2 mr-3">
                      <FaVideo className="h-5 w-5" />
                    </div>
                    <h3 className="text-xl font-bold text-[#1a3a6c]">20時50分頃／『渋谷愛ビジョンYouTube-LIVE』</h3>
                  </div>
                  <p className="text-gray-700 ml-10">渋谷愛ビジョンでは『渋谷愛メッセージ誕生祭』の放送が続いています。ラジオ放送終了後も渋谷愛ビジョン公式YouTube-LIVEをお楽しみください。</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* 番組コーナーセクション */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1a3a6c] mb-12 text-center">番組コーナー</h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#d4af37] hover:shadow-lg transition-all duration-300">
                <h3 className="text-2xl font-bold text-[#1a3a6c] mb-4 flex items-center">
                  <div className="bg-[#d4af37] text-white rounded-full p-2 mr-3">
                    <FaTrophy className="h-6 w-6" />
                  </div>
                  <span>バスラン！ベスト３</span>
                </h3>
                <p className="text-gray-700 leading-relaxed ml-12">
                  毎日！渋谷愛ビジョンと番組あてに寄せられるたくさんのバースデー愛メッセージ。それを日ごとに集計してベスト３を発表していきます。1位を獲得した人には、MV監督の巨匠・川村ケンスケが愛を込めて選曲した音楽をプレゼント！<br/>
                  バースデー愛メッセージを読み上げるのは勝負の姫君として勝運を授けている女優の風谷南友。運気を上げる美声に酔いしれてください。<br/>
                  ランクインした有名人の電話ゲスト出演なども交えながら素敵な誕生日を演出していきます。
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#FF6B6B] hover:shadow-lg transition-all duration-300">
                <h3 className="text-2xl font-bold text-[#1a3a6c] mb-4 flex items-center">
                  <div className="bg-[#FF6B6B] text-white rounded-full p-2 mr-3">
                    <FaGift className="h-6 w-6" />
                  </div>
                  <span>おめありレコメンド</span>
                </h3>
                <p className="text-gray-700 leading-relaxed ml-12">
                  番組がセレクトした「おめでとう」「ありがとう」愛が詰まった商品やサービスをご紹介するコーナーです。スタジオにサンプルを用意してご紹介！企画・開発担当者さんに電話を繋いでその魅力を紐解いていきます。
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#0167CC] hover:shadow-lg transition-all duration-300">
                <h3 className="text-2xl font-bold text-[#1a3a6c] mb-4 flex items-center">
                  <div className="bg-[#0167CC] text-white rounded-full p-2 mr-3">
                    <FaHeart className="h-6 w-6" />
                  </div>
                  <span>パーソナリティへありがとう</span>
                </h3>
                <p className="text-gray-700 leading-relaxed ml-12">
                  個性豊かなバスランのパーソナリティが得意とする分野、世の中に発信したい愛ある情報を紹介するコーナーです。<br/>
                  このコーナーを聴いたリスナーは、パーソナリティに素敵な情報を『ありがとう』と伝えたくなること間違いなし！こうご期待！！
                </p>
              </div>

              <div className="bg-white p-6 rounded-lg shadow-md border-l-4 border-[#FF6B6B] hover:shadow-lg transition-all duration-300">
                <h3 className="text-2xl font-bold text-[#1a3a6c] mb-4 flex items-center">
                  <div className="bg-[#FF6B6B] text-white rounded-full p-2 mr-3">
                    <FaEnvelope className="h-6 w-6" />
                  </div>
                  <span>ピックアップ！愛メッセージ！！</span>
                </h3>
                <p className="text-gray-700 leading-relaxed ml-12">
                  渋谷愛ビジョンには誕生日の愛メッセージだけでなく、結婚記念日や母の日、父の日、友人へのお礼、何気ない「おめでとう」「ありがとう」の愛メッセージが溢れています。その中から番組パーソナリティが1通をピックアップしてご紹介！愛の伝道師を担っていただくコーナーです。
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 渋谷愛ビジョン連動セクション */}
      <section className="py-16 bg-gradient-to-br from-[#f0f8ff] to-[#e6f0ff]">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-3xl font-bold text-[#1a3a6c] mb-12 text-center">渋谷愛ビジョン連動</h2>
            
            <div className="bg-white p-8 rounded-xl shadow-xl border border-gray-100">
              <div className="flex flex-col md:flex-row items-center gap-10">
                <div className="md:w-2/5">
                  <img 
                    src="/about1.jpg" 
                    alt="渋谷愛ビジョン" 
                    className="rounded-lg w-full h-auto shadow-md transform hover:scale-102 transition-transform duration-300 border-4 border-white"
                  />
                </div>
                
                <div className="md:w-3/5">
                  <h3 className="text-2xl font-bold text-[#1a3a6c] mb-6">
                    ラジオとビジョンが融合する<br />
                    新しいエンターテイメント体験
                  </h3>
                  
                  <div className="space-y-5">
                    <div className="flex flex-col sm:flex-row items-center p-3 rounded-lg bg-gradient-to-r from-[#f0f8ff] to-white border border-gray-100 hover:shadow-md transition-shadow duration-300">
                      <div className="w-full sm:w-36 font-bold text-[#0167CC] flex items-center justify-center mb-3 sm:mb-0">
                        <span className="rounded-full bg-[#0167CC] text-white px-3 py-1 w-32 text-center whitespace-nowrap inline-block font-mono">
                          00:00～00:30
                        </span>
                      </div>
                      <div className="w-full text-center sm:text-left sm:ml-6 text-gray-700">
                        渋谷愛メッセージ誕生祭
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row items-center p-3 rounded-lg bg-gradient-to-r from-[#f0f8ff] to-white border border-gray-100 hover:shadow-md transition-shadow duration-300 mt-10">
                      <div className="w-full sm:w-36 font-bold text-[#0167CC] flex items-center justify-center mb-3 sm:mb-0">
                        <span className="rounded-full bg-[#0167CC] text-white px-3 py-1 w-32 text-center whitespace-nowrap inline-block font-mono">
                          12:00～12:20
                        </span>
                      </div>
                      <div className="w-full text-center sm:text-left sm:ml-6 text-gray-700">
                        渋谷愛メッセージおめあり祭
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row items-center p-3 rounded-lg bg-gradient-to-r from-[#f0f8ff] to-white border border-gray-100 hover:shadow-md transition-shadow duration-300 mt-10">
                      <div className="w-full sm:w-36 font-bold text-[#0167CC] flex items-center justify-center mb-3 sm:mb-0">
                        <span className="rounded-full bg-[#0167CC] text-white px-3 py-1 w-32 text-center whitespace-nowrap inline-block font-mono">
                          19:00～19:20
                        </span>
                      </div>
                      <div className="w-full text-center sm:text-left sm:ml-6 text-gray-700">
                        渋谷愛メッセージ誕生祭（再放送）
                      </div>
                    </div>
                    
                    <div className="flex flex-col sm:flex-row items-center p-3 rounded-lg bg-gradient-to-r from-[#f0f8ff] to-white border border-gray-100 hover:shadow-md transition-shadow duration-300 mt-10">
                      <div className="w-full sm:w-36 font-bold text-[#0167CC] flex items-center justify-center mb-3 sm:mb-0">
                        <span className="rounded-full bg-[#0167CC] text-white px-3 py-1 w-32 text-center whitespace-nowrap inline-block font-mono">
                          放送終了後
                        </span>
                      </div>
                      <div className="w-full text-center sm:text-left sm:ml-6 text-gray-700">
                        バスランの音楽を除いて<br />部分の再放送（毎時20分～60分）
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-10 text-center">
                    <Link href="/#youtube" className="inline-flex items-center justify-center bg-[#f5d742] hover:bg-[#f2c464] text-black font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105">
                      渋谷愛ビジョンLIVEはこちら 
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProgramPage;
