'use client';

import { useState, useMemo } from 'react';
import Link from 'next/link';
import { getAllPresents } from '@/app/data/birthdayPresents';
import MonthlyPresent from '@/components/MonthlyPresent';
import Header from '@/components/Header';
import Menu from '@/components/Menu';

const PresentsPage = () => {
  const allPresents = getAllPresents();
  const [selectedYearMonth, setSelectedYearMonth] = useState<string>('all');

  // 年月のリストを取得
  const yearMonthOptions = useMemo(() => {
    const options = new Set<string>();
    
    allPresents.forEach(present => {
      const date = new Date(present.date);
      const yearMonth = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
      options.add(yearMonth);
    });
    
    return Array.from(options).sort().reverse(); // 新しい順に並べる
  }, [allPresents]);

  // フィルタリングされたプレゼントのリスト
  const filteredPresents = useMemo(() => {
    if (selectedYearMonth === 'all') {
      return allPresents;
    }
    
    return allPresents.filter(present => {
      const date = new Date(present.date);
      const yearMonth = `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}`;
      return yearMonth === selectedYearMonth;
    });
  }, [allPresents, selectedYearMonth]);

  return (
    <>
      <Header />
      <Menu />

      {/* ヒーローセクション */}
      <section className="py-20 bg-[#0f1429] text-center">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#d4af37]">
              バースデープレゼント一覧
            </h1>
          </div>
        </div>
      </section>

      <main className="py-16 bg-gray-50">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="mx-auto">
            {/* フィルターセクション */}
            <div className="mb-10 bg-white rounded-lg shadow-md p-6">
              <div className="flex flex-wrap gap-2">
                <button 
                  className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedYearMonth === 'all' ? 'bg-[#0167CC] text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                  onClick={() => setSelectedYearMonth('all')}
                >
                  すべて
                </button>
                {yearMonthOptions.map(yearMonth => (
                  <button 
                    key={yearMonth}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${selectedYearMonth === yearMonth ? 'bg-[#0167CC] text-white' : 'bg-gray-200 text-gray-700 hover:bg-gray-300'}`}
                    onClick={() => setSelectedYearMonth(yearMonth)}
                  >
                    {yearMonth.split('-')[0]}年{parseInt(yearMonth.split('-')[1])}月
                  </button>
                ))}
              </div>
            </div>

            {/* プレゼント一覧テーブル */}
            {filteredPresents.length > 0 ? (
              <div className="bg-white rounded-lg shadow-md overflow-x-auto p-4">
                <table className="w-full min-w-[1200px] table-auto border-collapse">
                  <thead>
                    <tr className="bg-gray-100 border-b border-gray-200">
                      <th className="py-4 px-6 text-center font-semibold text-gray-700 whitespace-nowrap">紹介日</th>
                      <th className="py-4 px-6 text-left font-semibold text-gray-700 whitespace-nowrap">おめありレコメンド</th>
                      <th className="py-4 px-6 text-center font-semibold text-gray-700 whitespace-nowrap min-w-[300px]">写真</th>
                      <th className="py-4 px-6 text-left font-semibold text-gray-700 whitespace-nowrap min-w-[300px]">レコメンド</th>
                      <th className="py-4 px-6 text-center font-semibold text-gray-700 whitespace-nowrap">会社名（提供社）</th>
                      <th className="py-4 px-6 text-center font-semibold text-gray-700 whitespace-nowrap">公式WEB</th>
                    </tr>
                  </thead>
                  <tbody>
                    {filteredPresents.map((present) => (
                      <MonthlyPresent key={present.id} present={present} asTableRow={true} />
                    ))}
                  </tbody>
                </table>
              </div>
            ) : (
              <div className="bg-white rounded-lg shadow-md p-6 text-center">
                <p className="text-gray-500">該当するプレゼントがありません</p>
              </div>
            )}

            <div className="mt-12 text-center">
              <Link 
                href="/wanted" 
                className="inline-flex items-center justify-center bg-[#0167CC] hover:bg-[#0155a8] text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
              >
                スポンサーになる
              </Link>
            </div>
          </div>
        </div>
      </main>
    </>
  );
};

export default PresentsPage;
