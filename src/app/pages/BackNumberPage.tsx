"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { RankingItem, fetchAllPastRankings } from '@/app/utils/rankingService';

const BackNumberPage = () => {
  const [pastRankings, setPastRankings] = useState<{[key: string]: RankingItem[]}>({});
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetchAllPastRankings();
        setPastRankings(data);
      } catch (error) {
        console.error('過去のランキングデータの取得に失敗しました', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  return (
    <main className="min-h-screen flex flex-col">
      {/* ヘッダー */}
      <section className="bg-[#0166CD] py-5 sticky top-0 z-50 shadow-md hidden md:block">
        <div className="container mx-auto px-4">
          <nav className="flex justify-center flex-wrap items-center">
            <Link href="/" className="text-white hover:text-[#d4af37] transition-colors px-6 py-2 text-lg font-medium">
              ホーム
            </Link>
            <div className="h-5 border-r border-white/30 mx-1"></div>
            <Link href="/about" className="text-white hover:text-[#d4af37] transition-colors px-6 py-2 text-lg font-medium">
              番組内容
            </Link>
            <div className="h-5 border-r border-white/30 mx-1"></div>
            <Link href="/post" className="text-white hover:text-[#d4af37] transition-colors px-6 py-2 text-lg font-medium">
              投稿しよう
            </Link>
            <div className="h-5 border-r border-white/30 mx-1"></div>
            <Link href="/wanted" className="text-white hover:text-[#d4af37] transition-colors px-6 py-2 text-lg font-medium">
              募集中
            </Link>
            <div className="h-5 border-r border-white/30 mx-1"></div>
            <Link href="/cast" className="text-white hover:text-[#d4af37] transition-colors px-6 py-2 text-lg font-medium">
              キャスト＆STAFF
            </Link>
            <div className="h-5 border-r border-white/30 mx-1"></div>
            <Link href="/purpose" className="text-white hover:text-[#d4af37] transition-colors px-6 py-2 text-lg font-medium">
              番組の目的
            </Link>
          </nav>
        </div>
      </section>

      {/* メインコンテンツ */}
      <section className="pt-4 pb-0 bg-gray-50 flex-grow flex flex-col">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-lg p-8 border border-gray-200">
            <h2 className="text-2xl font-bold text-[#1a3a6c] mb-8 text-center">過去のランキング</h2>
            
            {loading ? (
              <div className="flex justify-center items-center py-10">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1a3a6c]"></div>
              </div>
            ) : Object.keys(pastRankings).length === 0 ? (
              <p className="text-center text-gray-500 py-10">ランキングデータがありません。</p>
            ) : (
              <div className="overflow-x-auto -mx-4 sm:mx-0 shadow-sm rounded-lg">
                <div className="min-w-full overflow-x-auto pb-2">
                  <table className="min-w-full whitespace-nowrap border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-24 sm:w-1/5">日付</th>
                        <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-16 sm:w-1/12">順位</th>
                        <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-28 sm:w-1/4">名前</th>
                        <th className="py-3 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider sm:w-5/12">川村所長の選曲</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {Object.entries(pastRankings)
                        .sort(([dateA], [dateB]) => new Date(dateB).getTime() - new Date(dateA).getTime())
                        .flatMap(([date, rankings]) => {
                          const dateObj = new Date(date);
                          const formattedDate = `${dateObj.getFullYear()}/${String(dateObj.getMonth() + 1).padStart(2, '0')}/${String(dateObj.getDate()).padStart(2, '0')}`;
                          
                          return rankings.map((item, index) => (
                            <tr key={`${date}-${index}`} className="hover:bg-gray-50 transition-colors">
                              {index === 0 ? (
                                <td className="py-4 px-4 font-medium text-[#1a3a6c]" rowSpan={rankings.length}>
                                  {formattedDate}
                                </td>
                              ) : null}
                              <td className="py-4 px-4">
                                <span className={`inline-flex items-center justify-center ${item.rank === 1 ? 'bg-[#d4af37]' : item.rank === 2 ? 'bg-[#C0C0C0]' : 'bg-[#CD7F32]'} text-white rounded-full w-6 h-6 text-sm font-bold`}>
                                  {item.rank}
                                </span>
                              </td>
                              <td className="py-4 px-4 font-medium text-[#1a3a6c]">
                                {item.name === '集計中' ? 
                                  '集計中' : 
                                  `${item.name}さん`
                                }
                              </td>
                              <td className="py-4 px-4">
                                {item.song}
                              </td>
                            </tr>
                          ));
                        })}
                    </tbody>
                  </table>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* フッターコンポーネントを使用 */}
    </main>
  );
};

export default BackNumberPage;
