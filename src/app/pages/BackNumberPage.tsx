"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { RankingItem, fetchAllPastRankings } from '@/app/utils/rankingService';

const BackNumberPage = () => {
  const [pastRankings, setPastRankings] = useState<{[key: string]: RankingItem[]}>({});
  const [loading, setLoading] = useState<boolean>(true);
  const [filteredRankings, setFilteredRankings] = useState<{[key: string]: RankingItem[]}>({});
  const [selectedYear, setSelectedYear] = useState<string>('all');
  const [selectedMonth, setSelectedMonth] = useState<string>('all');
  const [tempYear, setTempYear] = useState<string>('all');
  const [tempMonth, setTempMonth] = useState<string>('all');
  const [availableYears, setAvailableYears] = useState<string[]>([]);
  const [availableMonths, setAvailableMonths] = useState<string[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        const data = await fetchAllPastRankings();
        setPastRankings(data);
        setFilteredRankings(data);
        setTempYear('all');
        setTempMonth('all');
        
        // 利用可能な年と月を抽出
        const years = new Set<string>();
        const months = new Set<string>();
        
        Object.keys(data).forEach(dateStr => {
          const date = new Date(dateStr);
          years.add(date.getFullYear().toString());
          months.add((date.getMonth() + 1).toString().padStart(2, '0'));
        });
        
        setAvailableYears(Array.from(years).sort((a, b) => parseInt(b) - parseInt(a)));
        setAvailableMonths(Array.from(months).sort());
      } catch (error) {
        console.error('過去のランキングデータの取得に失敗しました', error);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);
  
  // 年と月のフィルタリング
  useEffect(() => {
    if (Object.keys(pastRankings).length === 0) return;
    
    let filtered = { ...pastRankings };
    
    if (selectedYear !== 'all') {
      filtered = Object.fromEntries(
        Object.entries(filtered).filter(([dateStr]) => {
          const date = new Date(dateStr);
          return date.getFullYear().toString() === selectedYear;
        })
      );
    }
    
    if (selectedMonth !== 'all') {
      filtered = Object.fromEntries(
        Object.entries(filtered).filter(([dateStr]) => {
          const date = new Date(dateStr);
          return (date.getMonth() + 1).toString().padStart(2, '0') === selectedMonth;
        })
      );
    }
    
    setFilteredRankings(filtered);
  }, [pastRankings, selectedYear, selectedMonth]);
  
  const handleYearChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTempYear(e.target.value);
  };
  
  const handleMonthChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setTempMonth(e.target.value);
  };
  
  const applyFilters = () => {
    setSelectedYear(tempYear);
    setSelectedMonth(tempMonth);
  };
  
  const resetFilters = () => {
    setTempYear('all');
    setTempMonth('all');
    setSelectedYear('all');
    setSelectedMonth('all');
  };

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
            
            {/* フィルター */}
            <div className="mb-6 p-4 bg-gray-50 rounded-lg border border-gray-200">
              <h3 className="text-lg font-medium text-[#1a3a6c] mb-4">フィルタリング条件</h3>
              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="flex flex-row items-center w-full sm:w-auto gap-2">
                  <div className="flex items-center w-1/2 sm:w-auto">
                    <label htmlFor="year-filter" className="mr-2 text-gray-700 whitespace-nowrap">年:</label>
                    <select 
                      id="year-filter"
                      value={tempYear}
                      onChange={handleYearChange}
                      className="bg-white border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#1a3a6c] focus:border-transparent w-full"
                    >
                      <option value="all">すべて</option>
                      {availableYears.map(year => (
                        <option key={year} value={year}>{year}年</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="flex items-center w-1/2 sm:w-auto">
                    <label htmlFor="month-filter" className="mr-2 text-gray-700 whitespace-nowrap">月:</label>
                    <select 
                      id="month-filter"
                      value={tempMonth}
                      onChange={handleMonthChange}
                      className="bg-white border border-gray-300 rounded-md py-2 px-3 focus:outline-none focus:ring-2 focus:ring-[#1a3a6c] focus:border-transparent w-full"
                    >
                      <option value="all">すべて</option>
                      {availableMonths.map(month => (
                        <option key={month} value={month}>{parseInt(month)}月</option>
                      ))}
                    </select>
                  </div>
                </div>
                
                <div className="flex gap-2 w-full sm:w-auto justify-end sm:justify-start">
                  <button 
                    onClick={applyFilters}
                    className="bg-[#1a3a6c] hover:bg-[#15305a] text-white font-medium py-2 px-4 rounded-md transition-colors"
                  >
                    適用する
                  </button>
                  <button 
                    onClick={resetFilters}
                    className="bg-gray-200 hover:bg-gray-300 text-gray-700 font-medium py-2 px-4 rounded-md transition-colors"
                  >
                    リセット
                  </button>
                </div>
              </div>
            </div>
            
            {loading ? (
              <div className="flex justify-center items-center py-10">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1a3a6c]"></div>
              </div>
            ) : Object.keys(filteredRankings).length === 0 ? (
              <p className="text-center text-gray-500 py-10">該当するランキングデータがありません。</p>
            ) : (
              <div className="overflow-x-auto -mx-0 sm:mx-0 shadow-sm rounded-lg">
                <div className="min-w-[600px] sm:min-w-full overflow-x-auto pb-2">
                  <table className="w-full border-collapse">
                    <thead>
                      <tr className="bg-gray-50">
                        <th className="py-3 px-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[100px] sm:w-[20%]">日付</th>
                        <th className="py-3 px-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[120px] sm:w-[25%]">名前</th>
                        <th className="py-3 px-2 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[350px] sm:w-auto">愛メッセージ</th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {Object.entries(filteredRankings)
                        .sort(([dateA], [dateB]) => new Date(dateB).getTime() - new Date(dateA).getTime())
                        .flatMap(([date, rankings]) => {
                          const dateObj = new Date(date);
                          const formattedDate = `${dateObj.getFullYear()}/${String(dateObj.getMonth() + 1).padStart(2, '0')}/${String(dateObj.getDate()).padStart(2, '0')}`;
                          
                          return rankings.map((item, index) => (
                            <tr key={`${date}-${index}`} className="hover:bg-gray-50 transition-colors">
                              {index === 0 ? (
                                <td className="py-4 px-2 font-medium text-[#1a3a6c]" rowSpan={rankings.length}>
                                  {formattedDate}
                                </td>
                              ) : null}
                              <td className="py-4 px-2 font-medium text-[#1a3a6c]">
                                {item.name === '集計中' ? 
                                  '集計中' : 
                                  `${item.name}さん`
                                }
                              </td>
                              <td className="py-4 px-2">
                                {item.message ? (
                                  <div className="whitespace-pre-line break-words w-[350px] sm:w-full">{item.message.replace(/\\n/g, '\n')}</div>
                                ) : (
                                  <span className="text-gray-400">メッセージなし</span>
                                )}
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
