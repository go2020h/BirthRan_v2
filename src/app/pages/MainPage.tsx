'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect, useCallback } from 'react';
import { RankingItem, getRankingByDayIndex, fetchMonthlyRankings, formatDate } from '@/app/utils/rankingService';
import UpcomingGuest from '../components/UpcomingGuest';
import { guestArchive } from '../data/guestArchive';

const MainPage = () => {
  // カレンダー用の状態管理
  const [currentDate, setCurrentDate] = useState(new Date()); // 現在の日付を取得
  const today = new Date(); // 現在日
  
  // 最初の週の開始日（2025年3月28日）を定義
  const firstAllowedWeekStart = new Date(2025, 2, 28); // 2025年3月28日
  
  // 金曜日始まりの週の開始日を取得する関数
  function getWeekStartDate(date: Date): Date {
    const day = date.getDay(); // 0: 日曜日, 1: 月曜日, ..., 6: 土曜日
    const diff = day === 0 ? 2 : day - 5; // 金曜日を0とするための調整
    const result = new Date(date);
    result.setDate(date.getDate() - diff);
    return result;
  }

  // 最終週の開始日を取得する関数
  function getLastWeekStartDate(date: Date): Date {
    const weekStart = getWeekStartDate(date);
    const lastWeekStart = new Date(weekStart);
    lastWeekStart.setDate(weekStart.getDate() - 7);
    return lastWeekStart;
  };

  // ランキング表示用の状態管理
  const [currentWeekStart, setCurrentWeekStart] = useState<Date>(getLastWeekStartDate(today));
  const [selectedDayIndex, setSelectedDayIndex] = useState<number>(0); // 金曜日（インデックスは0が金曜日）
  const [rankingData, setRankingData] = useState<RankingItem[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  
  // 週の日付配列を生成する関数
  function getWeekDates(startDate: Date): Date[] {
    const dates: Date[] = [];
    for (let i = 0; i < 7; i++) {
      const date = new Date(startDate);
      date.setDate(startDate.getDate() + i);
      dates.push(date);
    }
    return dates;
  }

  // 週の日付配列を文字列形式で生成する関数
  const getWeekDateStrings = useCallback((startDate: Date): string[] => {
    const dates = getWeekDates(startDate);
    return dates.map(date => {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    });
  }, []);

  // 選択された日付のランキングデータを取得
  const fetchRankingData = useCallback(async (dayIndex: number) => {
    setLoading(true);
    try {
      // 週の日付配列を文字列形式で生成
      const weekDateStrings = getWeekDateStrings(currentWeekStart);
      console.log(`[DEBUG] Week dates:`, weekDateStrings);
      
      const data = await getRankingByDayIndex(dayIndex, weekDateStrings);
      setRankingData(data);
    } catch (error) {
      console.error('ランキングデータの取得に失敗しました', error);
      setRankingData([{ name: 'データなし', song: 'データなし', rank: 1, message: '' }]);
    } finally {
      setLoading(false);
    }
  }, [currentWeekStart, getWeekDateStrings]);

  // 選択された日付が変更されたときにデータを取得
  useEffect(() => {
    fetchRankingData(selectedDayIndex);
  }, [selectedDayIndex, fetchRankingData]);
  
  // 日付タブを選択したときの処理
  const handleDaySelect = (index: number) => {
    console.log(`[DEBUG] Selecting day index: ${index}`);
    setSelectedDayIndex(index);
  };
  
  // 前の週に移動
  const goToPreviousWeek = () => {
    const newDate = new Date(currentWeekStart);
    newDate.setDate(currentWeekStart.getDate() - 7);
    
    // 2025年3月28日より前には遡れないように制限
    if (newDate >= firstAllowedWeekStart) {
      setCurrentWeekStart(newDate);
      // 週を切り替えたときに選択された曜日インデックスをリセット
      setSelectedDayIndex(0);
    }
  };
  
  // 次の週に移動
  const goToNextWeek = () => {
    const newDate = new Date(currentWeekStart);
    newDate.setDate(currentWeekStart.getDate() + 7);
    setCurrentWeekStart(newDate);
    // 週を切り替えたときに選択された曜日インデックスをリセット
    setSelectedDayIndex(0);
  };
  
  // 日付をフォーマットする関数
  function getWeekRangeText(startDate: Date): string {
    const endDate = new Date(startDate);
    endDate.setDate(startDate.getDate() + 6);
    const startYear = startDate.getFullYear();
    const endYear = endDate.getFullYear();
    const startMonth = startDate.getMonth() + 1;
    const endMonth = endDate.getMonth() + 1;
    const startDay = startDate.getDate();
    const endDay = endDate.getDate();
    
    if (startYear === endYear) {
      if (startMonth === endMonth) {
        return `${startYear}年${startMonth}月${startDay}日～${endDay}日`;
      } else {
        return `${startYear}年${startMonth}月${startDay}日～${endMonth}月${endDay}日`;
      }
    } else {
      return `${startYear}年${startMonth}月${startDay}日～${endYear}年${endMonth}月${endDay}日`;
    }
  }
  
  // 曜日の短縮名
  const dayNames = ['金', '土', '日', '月', '火', '水', '木'];
  
  // 前月へ移動
  const goToPreviousMonth = () => {
    const prevMonth = new Date(currentDate);
    prevMonth.setMonth(prevMonth.getMonth() - 1);
    setCurrentDate(prevMonth);
  };

  // 翌月へ移動
  const goToNextMonth = () => {
    const nextMonth = new Date(currentDate);
    nextMonth.setMonth(nextMonth.getMonth() + 1);
    setCurrentDate(nextMonth);
  };

  // カレンダーの日付を生成する関数
  const generateCalendarDays = () => {
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();
    
    // 月の最初の日
    const firstDayOfMonth = new Date(year, month, 1);
    // 月の最後の日
    const lastDayOfMonth = new Date(year, month + 1, 0);
    
    // 前月の最後の日
    const lastDayOfPrevMonth = new Date(year, month, 0);
    
    // 月の最初の日の曜日（0: 日曜日, 1: 月曜日, ...）
    const firstDayOfWeek = firstDayOfMonth.getDay();
    // 月の最後の日の曜日
    const lastDayOfWeek = lastDayOfMonth.getDay();
    
    // カレンダーに表示する日数（前月の日 + 当月の日 + 翌月の日）
    const daysInMonth = lastDayOfMonth.getDate();
    const daysInPrevMonth = lastDayOfPrevMonth.getDate();
    
    const calendarDays = [];
    
    // 日付をYYYY-MM-DD形式に変換する関数
    const formatDateHelper = (date: Date): string => {
      const year = date.getFullYear();
      const month = String(date.getMonth() + 1).padStart(2, '0');
      const day = String(date.getDate()).padStart(2, '0');
      return `${year}-${month}-${day}`;
    };
    
    // 前月の日を追加
    for (let i = 0; i < firstDayOfWeek; i++) {
      const day = daysInPrevMonth - firstDayOfWeek + i + 1;
      const date = new Date(year, month - 1, day);
      const dateStr = formatDateHelper(date);
      const topRanker = monthlyRankings[dateStr]?.[0]?.name || '';
      
      calendarDays.push({
        day,
        currentMonth: false,
        date,
        dateStr,
        topRanker
      });
    }
    
    // 当月の日を追加
    for (let i = 1; i <= daysInMonth; i++) {
      const date = new Date(year, month, i);
      const dateStr = formatDateHelper(date);
      const topRanker = monthlyRankings[dateStr]?.[0]?.name || '';
      
      calendarDays.push({
        day: i,
        currentMonth: true,
        date,
        dateStr,
        topRanker,
        isToday: i === today.getDate() && month === today.getMonth() && year === today.getFullYear()
      });
    }
    
    // 翌月の日を追加（最終週を完成させるために必要な日数のみ）
    const remainingDays = lastDayOfWeek < 6 ? 6 - lastDayOfWeek : 0;
    
    for (let i = 1; i <= remainingDays; i++) {
      const date = new Date(year, month + 1, i);
      const dateStr = formatDateHelper(date);
      const topRanker = monthlyRankings[dateStr]?.[0]?.name || '';
      
      calendarDays.push({
        day: i,
        currentMonth: false,
        date,
        dateStr,
        topRanker
      });
    }
    
    return calendarDays;
  };

  // 月の名前を取得
  const getMonthName = (date: Date) => {
    return `${date.getFullYear()}年${date.getMonth() + 1}月`;
  };

  // バイタルデータをLIVE配信
  const [monthlyRankings, setMonthlyRankings] = useState<Record<string, RankingItem[]>>({});
  // 月間ランキングデータを取得
  const fetchMonthlyRankingData = useCallback(async () => {
    try {
      const data = await fetchMonthlyRankings();
      setMonthlyRankings(data);
    } catch (error) {
      console.error('月間ランキングデータの取得に失敗しました', error);
      setMonthlyRankings({});
    }
  }, []);

  // 現在の日付が変更されたときに月間ランキングデータを取得
  useEffect(() => {
    fetchMonthlyRankingData();
    console.log('月間ランキングデータを取得しました');
  }, [fetchMonthlyRankingData]);

  // 月間ランキングデータが変更されたときにログを出力
  useEffect(() => {
    console.log('月間ランキングデータ:', monthlyRankings);
  }, [monthlyRankings]);

  // u65e5u4ed8u306eu67a0u3092u30afu30eau30c3u30afu3057u307eu305fu3068u304du306bu30ddu30c3u30d7u6a5fu80fdu3092u8ffdu52a0u3057u307eu3059u3002
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const [selectedDateData, setSelectedDateData] = useState<{date: string, ranking: RankingItem | null}>({date: '', ranking: null});

  const handleDayClick = (dateStr: string) => {
    console.log('日付がクリックされました:', dateStr);
    console.log('月間ランキング:', monthlyRankings);
    console.log('選択された日のランキング:', monthlyRankings[dateStr]);
    
    if (monthlyRankings[dateStr] && monthlyRankings[dateStr].length > 0) {
      console.log('ポップアップを表示します');
      setSelectedDateData({date: dateStr, ranking: monthlyRankings[dateStr][0]});
      setIsPopupOpen(true);
    } else {
      console.log('選択された日のランキングがありません');
    }
  };

  const closePopup = () => {
    setIsPopupOpen(false);
  };

  // u65e5u4ed8u3092u300c2024u5e744u67083u65e5u300du5f62u5f0fu306bu30d5u30a9u30fcu30deu30c8u3059u308bu95a2u6570
  const formatDateJapanese = (dateStr: string): string => {
    const parts = dateStr.split('-');
    if (parts.length !== 3) return dateStr;
    
    const year = parts[0];
    const month = parseInt(parts[1], 10);
    const day = parseInt(parts[2], 10);
    
    return `${year}年${month}月${day}日`;
  };

  return (
    <main>
      {/* ヒーローセクション */}
      <section className="relative w-full h-[66vh] bg-[#17142E]">
        {/* スマホ表示用画像 */}
        <div className="relative w-full h-full md:hidden">
          <div className="relative w-full h-full">
            <Image 
              src="/hero2.png" 
              alt="バースデーランキング" 
              className="w-full h-full object-contain"
              fill
              priority
              sizes="100vw"
            />
          </div>
        </div>
        
        {/* デスクトップ表示用画像 */}
        <div className="relative w-full h-full hidden md:block">
          <div className="relative w-full h-full">
            <Image 
              src="/hero1.png" 
              alt="バースデーランキング" 
              className="w-full h-full object-contain"
              fill
              priority
              sizes="100vw"
            />
          </div>
        </div>
      </section>

      {/* メニューセクション */}
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

      {/* キャッチコピーセクション */}
      <section className="py-12 md:py-20 bg-gradient-to-r from-[#17142E] to-[#1a3a6c] text-center">
        <div className="container mx-auto px-3 md:px-4">
          <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-sm p-4 md:p-10 rounded-lg shadow-xl border border-white/10">
            <h2 className="text-xl sm:text-2xl md:text-4xl text-[#d4af37] font-bold mb-4 md:mb-8 tracking-wide drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]">
              ⭐毎日が誰かの誕生日⭐
            </h2>
            <p className="text-base sm:text-lg md:text-2xl text-white mb-3 md:mb-8 leading-relaxed drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]">
              最もバースデー愛メッセージが贈られたのは誰なのか♡
            </p>
            <p className="text-base sm:text-lg md:text-2xl text-white leading-relaxed drop-shadow-[0_1px_1px_rgba(0,0,0,0.5)]">
              大好きな人、大切なひとが生まれた記念日を一緒にお祝いしよう♡
            </p>
          </div>
        </div>
      </section>

      {/* バスランカレンダー */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#1a3a6c]">
              バスランカレンダー
            </h2>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-4 sm:p-8 max-w-4xl mx-auto border border-gray-200">
            <div className="flex justify-center items-center mb-4 sm:mb-8">
              <button 
                className="text-[#1a3a6c] hover:text-[#d4af37] transition-colors mr-3 sm:mr-6 p-1 sm:p-2" 
                onClick={() => goToPreviousMonth()}
                type="button"
                aria-label="前月へ移動"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              <h3 className="text-xl sm:text-2xl font-bold mx-2 sm:mx-4 text-[#1a3a6c]">{getMonthName(currentDate)}</h3>
              <button 
                className="text-[#1a3a6c] hover:text-[#d4af37] transition-colors ml-3 sm:ml-6 p-1 sm:p-2" 
                onClick={() => goToNextMonth()}
                type="button"
                aria-label="翌月へ移動"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 sm:h-6 sm:w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            
            <div className="grid grid-cols-7 gap-1 sm:gap-2">
              {['日', '月', '火', '水', '木', '金', '土'].map((day) => (
                <div key={day} className="text-center font-medium py-1 sm:py-2 text-gray-600 text-xs sm:text-base">{day}</div>
              ))}
              {generateCalendarDays().map((day, index) => (
                <div 
                  key={index} 
                  className={`h-16 sm:h-20 bg-gray-50 hover:bg-[#f0f8ff] rounded-lg flex flex-col items-start p-1 sm:p-2 cursor-pointer transition-colors border border-gray-100 ${!day.currentMonth ? 'text-gray-400' : day.isToday ? 'text-[#d4af37] font-bold' : 'text-gray-700'} font-medium`}
                  onClick={() => handleDayClick(day.dateStr)}
                >
                  <div className="calendar-day-content self-start w-full text-left">
                    <span className="text-xs sm:text-sm">{day.day}</span>
                    {day.isToday && <span className="inline-block w-1.5 h-1.5 sm:w-2 sm:h-2 rounded-full bg-[#d4af37] ml-1"></span>}
                  </div>
                  {day.topRanker && (
                    <div className="mt-0.5 sm:mt-1 text-[10px] sm:text-xs text-[#1a3a6c] w-full break-words line-clamp-2 overflow-hidden">
                      {day.topRanker}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* 過去のランキングを見るボタン */}
          <div className="mt-8 text-center">
            <Link 
              href="/backnumber"
              className="bg-[#1a3a6c] hover:bg-[#15305a] text-white font-medium py-2 px-4 rounded-md transition-colors inline-block"
            >
              過去のランキングを見る
            </Link>
          </div>
        </div>
      </section>

      {/* バースデー・ランキングに投稿しよう！ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#1a3a6c]">
              バースデー・ランキングに投稿しよう！
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              皆様の投稿がランキングを決める！
            </p>
          </div>
          
          <div className="bg-gradient-to-br from-[#f8f9fa] to-[#e6f0ff] rounded-xl shadow-lg p-10 max-w-4xl mx-auto border border-gray-200 relative overflow-hidden">
            {/* 装飾用の半透明円形要素 */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#d4af37] to-[#f0e68c] opacity-10 rounded-full transform translate-x-20 -translate-y-20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#0166CD] to-[#4dabf5] opacity-10 rounded-full transform -translate-x-16 translate-y-16"></div>
            
            <div className="flex flex-col items-center text-center mb-8 relative z-10">
              <div className="mb-8 p-8 bg-white bg-opacity-80 rounded-lg shadow-md relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#d4af37] via-[#f0e68c] to-[#d4af37]"></div>
                <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-[#d4af37] via-[#f0e68c] to-[#d4af37]"></div>
                
                <p className="text-2xl md:text-3xl text-gray-800 mb-4 font-medium leading-relaxed">
                  <span className="inline-block transform hover:scale-105 transition-transform duration-300">大好きな人、大切なひとへ</span>
                </p>
                <p className="text-2xl md:text-3xl text-gray-800 mb-4 font-medium leading-relaxed">
                  <span className="inline-block transform hover:scale-105 transition-transform duration-300">おめでとう、ありがとう</span>
                </p>
                <p className="text-2xl md:text-3xl text-gray-800 mb-2 font-medium leading-relaxed">
                  <span className="inline-block transform hover:scale-105 transition-transform duration-300">愛メッセージを贈ろう♡</span>
                </p>
              </div>
              
              <Link 
                href="/post" 
                className="bg-[#d4af37] hover:bg-[#c9a431] text-white font-bold py-4 px-8 rounded-lg transition-colors inline-block"
              >
                愛メッセージを投稿する
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* バスラン！デイリーランキングベスト３ */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#1a3a6c]">
              バスラン！デイリーランキングベスト３
            </h2>
            <p className="text-lg text-gray-600 max-w-3xl mx-auto">
              最も多くのお祝いメッセージを受け取った上位3名を発表します！
            </p>
          </div>
          
          <div className="bg-white rounded-xl shadow-lg p-8 max-w-4xl mx-auto border border-gray-200 mb-8">
            <div className="flex justify-center items-center mb-6">
              <button 
                className="text-[#1a3a6c] hover:text-[#d4af37] transition-colors mr-6 p-2" 
                onClick={goToPreviousWeek}
                type="button"
                aria-label="前週へ移動"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                </svg>
              </button>
              
              <h3 className="text-xl font-bold mx-4 text-[#1a3a6c]">{getWeekRangeText(currentWeekStart)}</h3>
              
              <button 
                className="text-[#1a3a6c] hover:text-[#d4af37] transition-colors ml-6 p-2" 
                onClick={goToNextWeek}
                type="button"
                aria-label="翌週へ移動"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </button>
            </div>
            
            {/* 曜日タブ */}
            <div className="grid grid-cols-7 gap-2 mb-6">
              {getWeekDates(currentWeekStart).map((date, index) => (
                <button
                  key={index}
                  onClick={() => handleDaySelect(index)}
                  className={`py-2 px-1 sm:px-3 rounded-lg transition-colors relative flex items-center justify-center ${selectedDayIndex === index ? 'bg-[#0166CD] text-white font-bold' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
                >
                  <div className="text-center w-full">
                    <div className="text-sm md:text-base"><span className="inline md:hidden">{dayNames[index].charAt(0)}</span><span className="hidden md:inline">{dayNames[index]}</span></div>
                    <div className="hidden md:block text-xs md:text-sm">{formatDate(date)}</div>
                  </div>
                </button>
              ))}
            </div>
            
            {/* ランキング表示 */}
            <h3 className="text-xl font-bold text-[#1a3a6c] mb-4">
              {formatDate(getWeekDates(currentWeekStart)[selectedDayIndex])}
              のランキング
            </h3>
            {loading ? (
              <div className="flex justify-center items-center py-10">
                <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1a3a6c]"></div>
              </div>
            ) : (
              <div className="overflow-x-auto">
                <table className="min-w-full table-fixed">
                  <thead>
                    <tr>
                      <th className="py-3 px-4 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[60px] min-w-[60px]">順位</th>
                      <th className="py-3 px-4 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[150px] min-w-[150px]">名前</th>
                      <th className="py-3 px-4 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[300px] min-w-[300px]">愛メッセージ</th>
                      <th className="py-3 px-4 bg-gray-50 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-[180px] min-w-[180px]">川村所長の選曲</th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {/* 1位のみ表示 */}
                    {rankingData.length > 0 && (
                      <tr className="hover:bg-gray-50 transition-colors">
                        <td className="py-4 px-4">
                          <span className="inline-flex items-center justify-center bg-[#d4af37] text-white rounded-full w-6 h-6 text-sm font-bold">1</span>
                        </td>
                        <td className="py-4 px-4 font-medium text-[#1a3a6c] whitespace-nowrap">
                          {rankingData[0].name === '集計中' ? 
                            '集計中' : 
                            `${rankingData[0].name}さん`
                          }
                        </td>
                        <td className="py-4 px-4 text-gray-700 whitespace-pre-wrap">
                          {(rankingData[0].message ? rankingData[0].message.replace(/\\n/g, '\n') : '') || '集計中'}
                        </td>
                        <td className="py-4 px-4">
                          {rankingData[0].song}
                        </td>
                      </tr>
                    )}
                    
                    {/* 2025年4月4日以降は2位と3位も表示 */}
                    {new Date() >= new Date(2025, 3, 4) && rankingData.length > 1 && (
                      <>
                        {/* 2位 */}
                        <tr className="hover:bg-gray-50 transition-colors">
                          <td className="py-4 px-4">
                            <span className="inline-flex items-center justify-center bg-[#C0C0C0] text-white rounded-full w-6 h-6 text-sm font-bold">2</span>
                          </td>
                          <td className="py-4 px-4 font-medium text-[#1a3a6c] whitespace-nowrap">
                            {rankingData[1]?.name === '集計中' ? 
                              '集計中' : 
                              `${rankingData[1]?.name}さん`
                            }
                          </td>
                          <td className="py-4 px-4 text-gray-700 whitespace-pre-wrap">
                            {(rankingData[1]?.message ? rankingData[1].message.replace(/\\n/g, '\n') : '') || '集計中'}
                          </td>
                          <td className="py-4 px-4">
                            {rankingData[1]?.song}
                          </td>
                        </tr>
                        {/* 3位 */}
                        {rankingData.length > 2 && (
                          <tr className="hover:bg-gray-50 transition-colors">
                            <td className="py-4 px-4">
                              <span className="inline-flex items-center justify-center bg-[#CD7F32] text-white rounded-full w-6 h-6 text-sm font-bold">3</span>
                            </td>
                            <td className="py-4 px-4 font-medium text-[#1a3a6c] whitespace-nowrap">
                              {rankingData[2]?.name === '集計中' ? 
                                '集計中' : 
                                `${rankingData[2]?.name}さん`
                              }
                            </td>
                            <td className="py-4 px-4 text-gray-700 whitespace-pre-wrap">
                              {(rankingData[2]?.message ? rankingData[2].message.replace(/\\n/g, '\n') : '') || '集計中'}
                            </td>
                            <td className="py-4 px-4">
                              {rankingData[2]?.song}
                            </td>
                          </tr>
                        )}
                      </>
                    )}
                  </tbody>
                </table>
              </div>
            )}
          </div>
          
          
        </div>
      </section>

      {/* バスラン！の夢 */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#1a3a6c] inline-block relative">
              バスラン！の夢
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto bg-gradient-to-br from-[#f8f9fa] to-[#e6f0ff] rounded-xl shadow-lg p-10 border border-gray-200 relative overflow-hidden">
            {/* 装飾用の半透明円形要素 */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#d4af37] to-[#f0e68c] opacity-10 rounded-full transform translate-x-20 -translate-y-20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#0166CD] to-[#4dabf5] opacity-10 rounded-full transform -translate-x-16 translate-y-16"></div>
            
            <div className="text-center relative z-10">
              <p className="text-xl md:text-2xl text-[#1a3a6c] font-medium mb-6">
                愛溢れるメディアを創りたい<span className="text-[#ff4081]">💝</span>
              </p>
              
              <div className="space-y-4 text-lg text-gray-700 mb-8 leading-relaxed">
                <p>誕生日をお祝いしたい人はいますか？</p>
                <p>誕生日をお祝いしてくれる人はいますか？</p>
                <p>バスランは生まれたことに感謝し…、</p>
                <p>大好きな人、大切な人へ、「おめでとう」「ありがとう」</p>
                <p>愛メッセージを贈り笑顔の輪を広げていきたいと心から願っています。</p>
                <p>そして、</p>
                <p>「おかえりなさい」「またね～」</p>
                <p>という愛言葉が集まる場所になることを目指しています。</p>
              </div>
              
              <div className="bg-white bg-opacity-80 rounded-lg shadow-md mb-6">
                <div className="birthran-broadcast-info grid grid-cols-1 md:grid-cols-2 gap-4 text-left p-6">                  <div className="birthran-info-col">
                    <p className="text-gray-700 mb-3 text-center sm:text-left"><span className="font-bold sm:inline block sm:after:content-[':'] after:content-['']">放送開始</span><span className="sm:inline"> </span>2025年4月3日<br className="sm:hidden" />（木曜日）</p>
                    <p className="text-gray-700 text-center sm:text-left"><span className="font-bold sm:inline block sm:after:content-[':'] after:content-['']">放送時間</span><span className="sm:inline"> </span>毎週木曜日18:00～20:30<br className="sm:hidden" />（生放送）</p>
                  </div>
                  <div className="birthran-info-col">
                    <p className="text-gray-700 mb-3 text-center sm:text-left"><span className="font-bold sm:inline block sm:after:content-[':'] after:content-['']">放送局</span><span className="sm:inline"> </span>ラジオ日本<br className="sm:hidden" />（FM92.4、AM1424）</p>
                    <p className="text-gray-700 text-center sm:text-left"><span className="font-bold sm:inline block sm:after:content-[':'] after:content-['']">ビジョン</span><span className="sm:inline"> </span>渋谷愛ビジョン<br className="sm:hidden" />（宮益坂交差点下）</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 渋谷愛ビジョンYouTube-LIVE */}
      <section className="py-20 bg-gradient-to-br from-[#f0f8ff] to-[#e6f0ff]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#1a3a6c] inline-block relative">
              渋谷愛ビジョンYouTube-LIVE
            </h2>
          </div>
          
          <div className="max-w-5xl mx-auto bg-white rounded-xl shadow-lg p-8 md:p-10 border border-gray-200 relative overflow-hidden">
            {/* 装飾用の半透明円形要素 */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#d4af37] to-[#f0e68c] opacity-10 rounded-full transform translate-x-20 -translate-y-20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#0166CD] to-[#4dabf5] opacity-10 rounded-full transform -translate-x-16 translate-y-16"></div>
            
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative z-10">
              {/* 最新のYouTube動画 */}
              <div className="rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:scale-102 hover:shadow-xl transform border border-gray-100 bg-gradient-to-br from-white to-[#f8f9fa]">
                <div className="relative pb-[56.25%] h-0 overflow-hidden">
                  <iframe 
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/six6fVA6Gxo" 
                    title="【LIVE】渋谷愛ビジョン・宮益坂交差点ライブカメラ／『SHIBUYA AI Vision』" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-5 bg-gradient-to-r from-[#f0f8ff] to-[#e6f0ff] border-t border-gray-100">
                  <div className="flex items-center mb-2">
                    <span className="text-xs bg-red-600 text-white px-2 py-1 rounded-full mr-2">LIVE</span>
                    <h3 className="text-lg font-bold text-[#1a3a6c]">渋谷愛ビジョン・宮益坂交差点ライブカメラ</h3>
                  </div>
                  <div className="mt-3 flex justify-end items-center">
                    <a 
                      href="https://www.youtube.com/watch?v=six6fVA6Gxo" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#0166CD] hover:text-[#d4af37] text-sm font-medium inline-flex items-center transition-colors"
                    >
                      YouTubeで見る
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
              
              {/* 2つ目のYouTube動画 */}
              <div className="rounded-xl overflow-hidden shadow-lg transition-all duration-300 hover:scale-102 hover:shadow-xl transform border border-gray-100 bg-gradient-to-br from-white to-[#f8f9fa]">
                <div className="relative pb-[56.25%] h-0 overflow-hidden">
                  <iframe 
                    className="absolute top-0 left-0 w-full h-full"
                    src="https://www.youtube.com/embed/frp2DX9D3tc" 
                    title="【LIVE】渋谷愛ビジョンの眼（AI）／SHIBUYA AI Vision" 
                    frameBorder="0" 
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" 
                    referrerPolicy="strict-origin-when-cross-origin" 
                    allowFullScreen
                  ></iframe>
                </div>
                <div className="p-5 bg-gradient-to-r from-[#f0f8ff] to-[#e6f0ff] border-t border-gray-100">
                  <div className="flex items-center mb-2">
                    <span className="text-xs bg-red-600 text-white px-2 py-1 rounded-full mr-2">LIVE</span>
                    <h3 className="text-lg font-bold text-[#1a3a6c]">渋谷愛ビジョンの眼</h3>
                  </div>
                  <div className="mt-3 flex justify-end items-center">
                    <a 
                      href="https://www.youtube.com/watch?v=frp2DX9D3tc" 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="text-[#0166CD] hover:text-[#d4af37] text-sm font-medium inline-flex items-center transition-colors"
                    >
                      YouTubeで見る
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* もうすぐ誕生日！ようこそバスランへ */}
      <UpcomingGuest 
        name={guestArchive[guestArchive.length - 1].name}
        image={guestArchive[guestArchive.length - 1].image}
        bio={guestArchive[guestArchive.length - 1].bio}
        appearanceDate={guestArchive[guestArchive.length - 1].appearanceDate}
        birthDate={guestArchive[guestArchive.length - 1].birthDate}
        officialSite={guestArchive[guestArchive.length - 1].officialSite}
        twitter={guestArchive[guestArchive.length - 1].twitter}
        instagram={guestArchive[guestArchive.length - 1].instagram}
      />

      {/* 誕生日が近い！ゲスト募集中！！ */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#1a3a6c] inline-block relative">
              誕生日が近い！ゲスト募集中！！
            </h2>
          </div>
          
          <div className="bg-gradient-to-br from-[#f8f9fa] to-[#e6f0ff] rounded-xl shadow-lg p-8 max-w-4xl mx-auto border border-gray-200 relative overflow-hidden">
            {/* 装飾用の半透明円形要素 */}
            <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#d4af37] to-[#f0e68c] opacity-10 rounded-full transform translate-x-20 -translate-y-20"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#0166CD] to-[#4dabf5] opacity-10 rounded-full transform -translate-x-16 translate-y-16"></div>
            
            <div className="relative z-10">
              <p className="text-lg text-gray-700 mb-6">
                番組では、誕生日が近いゲストを大募集しています。
              </p>
              
              <div className="bg-white bg-opacity-80 rounded-lg p-6 shadow-md mb-6">
                <ul className="space-y-3 text-gray-700">
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#d4af37] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>出演日から１か月以内に誕生日を迎える方</span>
                  </li>
                  <li className="flex items-start">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#d4af37] mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                    <span>バスランでベスト３に入ると自負している方</span>
                  </li>
                </ul>
              </div>
              
              <h3 className="text-xl font-bold mb-4 text-[#1a3a6c]">ゲスト出演してくださった方には、誕生日プレゼントとして</h3>
              
              <div className="space-y-6 mb-8">
                <div className="bg-white rounded-lg p-5 shadow-md">
                  <div className="flex items-center mb-4">
                    <span className="inline-block bg-[#d4af37] text-white text-xl font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">1</span>
                    <h4 className="text-lg font-bold text-[#1a3a6c]">渋谷愛ビジョンの放映枠</h4>
                  </div>
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                      <img src="/home1.jpg" alt="渋谷愛ビジョン" className="w-full h-auto object-contain rounded-lg shadow-sm" />
                    </div>
                    <div className="md:w-2/3">
                      <p className="text-gray-700 mb-4">
                        20時00分30秒～20時5分00秒（4分30秒間）を1週間無償でご提供
                      </p>
                      <p className="text-gray-700 mt-3">
                        ミュージックビデオや映画・ドラマのPRはもちろんのこと、自らが発信したい映像を放映して渋谷で注目を浴びましょう。
                      </p>
                      <div className="mt-4 text-center">
                        <a 
                          href="https://saivision.jp/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center bg-[#0167CC] hover:bg-[#0155a8] text-white font-medium py-2 px-4 rounded-md transition-colors"
                        >
                          公式サイトを見る
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-5 shadow-md">
                  <div className="flex items-center mb-4">
                    <span className="inline-block bg-[#d4af37] text-white text-xl font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">2</span>
                    <h4 className="text-lg font-bold text-[#1a3a6c]">MOTHER Bracelet</h4>
                  </div>
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                      <img src="/home2.jpg" alt="MOTHER Bracelet" className="w-full h-auto object-contain rounded-lg shadow-sm" />
                    </div>
                    <div className="md:w-2/3">
                      <p className="text-gray-700">
                        世界初の充電不要ウェアラブルデバイスで、体温だけで充電し24時間365日あなたの健康を見守ります。貯めたエナジーで寄付やギフト交換も可能な、あなたの健康と社会貢献を同時に実現する革新的なブレスレットです。
                      </p>
                      <div className="mt-4 text-center">
                        <a 
                          href="https://mother-bracelet.com/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center bg-[#0167CC] hover:bg-[#0155a8] text-white font-medium py-2 px-4 rounded-md transition-colors"
                        >
                          公式サイトを見る
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="bg-white rounded-lg p-5 shadow-md">
                  <div className="flex items-center mb-4">
                    <span className="inline-block bg-[#d4af37] text-white text-xl font-bold rounded-full w-8 h-8 flex items-center justify-center mr-3">3</span>
                    <h4 className="text-lg font-bold text-[#1a3a6c]">今月のバースデープレゼント</h4>
                  </div>
                  <div className="flex flex-col md:flex-row gap-6">
                    <div className="md:w-1/3">
                      <img src="/home3.png" alt="SHIBUYA HACHIKO SPICE" className="w-full h-auto object-contain rounded-lg shadow-sm" />
                    </div>
                    <div className="md:w-2/3">
                      <h5 className="font-bold mb-2">SHIBUYA HACHIKO SPICE</h5>
                      <p className="text-gray-700">
                        渋谷発の高級スパイス「渋谷八香唐辛子」。厚みのある香りと爽快な辛さが特徴で、和洋問わず様々な料理に一振り加えるだけで深みと高級感を与える至高の一品です。
                      </p>
                      <div className="mt-4 text-center">
                        <a 
                          href="https://shibuyaspice.tokyo/" 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center bg-[#0167CC] hover:bg-[#0155a8] text-white font-medium py-2 px-4 rounded-md transition-colors"
                        >
                          公式サイトを見る
                        </a>
                      </div>
                    </div>
                  </div>
                  <div className="mt-8 text-center">
                    <Link href="/wanted" className="text-[#0167CC] hover:text-[#d4af37] font-medium transition-colors inline-flex items-center justify-center">
                      <span className="sm:hidden">
                        バースデープレゼントの<br/>
                        スポンサー募集中！
                      </span>
                      <span className="hidden sm:inline">
                        バースデープレゼントのスポンサー募集中！
                      </span>
                    </Link>
                  </div>
                </div>
              </div>
              
              <p className="text-lg text-gray-700 mb-8 text-center">
                以上、愛が詰まった３つのサービス＆商品をプレゼントさせていただきます。
              </p>
              
              <div className="text-center mb-4">
                <Link href="/wanted" className="bg-[#d4af37] hover:bg-[#c9a431] text-white font-bold py-3 px-8 rounded-lg transition-colors inline-block text-lg">
                  応募する
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>  

      {/* バイタルデータセクション */}
      <section className="py-20 bg-gradient-to-r from-[#f0f8ff] to-[#e6f0ff]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-[#1a3a6c] inline-block relative">
              バイタルデータをLIVE配信！
            </h2>
          </div>
          
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="md:w-1/3">
                  <img src="/home2.jpg" alt="MOTHER Bracelet" className="w-full h-auto object-contain rounded-lg shadow-sm" />
                </div>
                <div className="md:w-2/3">
                  <h3 className="text-xl font-bold text-[#1a3a6c] mb-4">MOTHER Bracelet</h3>
                  <p className="text-gray-700 mb-4">
                    MOTHER Braceletでは、体温だけで充電し24時間365日あなたの健康を見守ります。貯めたエナジーで寄付やギフト交換も可能な、あなたの健康と社会貢献を同時に実現する革新的なブレスレットです。
                  </p>
                  <ul className="space-y-2 mb-4">
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#d4af37] mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>心拍数、体温、睡眠時間、活動量、歩数などを測定</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#d4af37] mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>貯めたエナジーで寄付やギフト交換が可能</span>
                    </li>
                    <li className="flex items-start">
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-[#d4af37] mr-2 mt-1 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>健康データをLIVE配信してみよう</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="bg-white rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold text-[#1a3a6c] mb-6 text-center">バイタルデータ</h3>
              
              <p className="text-gray-700 text-center mb-8">
              出演者の生放送中のバイタルデータをLIVE配信して健康チェックをしています！<br />
                チャンネル登録して最新情報をお見逃しなく。
              </p>
              
              <div className="text-center">
                <a 
                  href="https://www.youtube.com/@バスラン公式" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#FF0000] hover:bg-[#CC0000] text-white font-bold py-3 px-8 rounded-lg transition-colors inline-flex items-center"
                >
                  LIVE配信を見る
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" viewBox="0 0 20 20" fill="currentColor">
                    <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* メッセージポップアップ */}
      {isPopupOpen && selectedDateData.ranking && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50" onClick={closePopup}>
          <div className="bg-white rounded-lg shadow-xl p-6 max-w-lg w-full max-h-[80vh] overflow-y-auto" onClick={(e) => e.stopPropagation()}>
            <div className="flex justify-between items-center mb-4">
              <h3 className="text-xl font-bold text-[#1a3a6c]">{formatDateJapanese(selectedDateData.date)} 愛メッセージ</h3>
              <button 
                onClick={closePopup}
                className="text-gray-500 hover:text-gray-700 transition-colors"
                aria-label="閉じる"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>
            </div>
            
            <div className="space-y-6">
              <div className="pb-4">
                <div className="flex items-center mb-2">
                  <span className="inline-flex items-center justify-center bg-[#FFD700] text-white rounded-full w-6 h-6 text-sm font-bold mr-2">
                    1
                  </span>
                  <span className="font-medium text-[#1a3a6c]">{selectedDateData.ranking.name}さん</span>
                </div>
                {selectedDateData.ranking.message && (
                  <div className="mt-4 bg-gradient-to-br from-[#f8f9fa] to-[#e6f0ff] p-4 rounded-lg border border-[#d4af37] shadow-md">
                    <div className="flex flex-col items-center justify-center">
                      <div className="inline-block text-center">
                        <p className="text-[#1a3a6c] whitespace-pre-wrap font-medium text-lg leading-relaxed">
                          {selectedDateData.ranking.message.replace(/\\n/g, '\n')}
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            </div>
            
            <div className="mt-6 text-center">
              <button 
                onClick={closePopup}
                className="bg-[#1a3a6c] hover:bg-[#15305a] text-white font-medium py-2 px-4 rounded-md transition-colors"
              >
                閉じる
              </button>
            </div>
          </div>
        </div>
      )}
    </main>
    
  );
};

export default MainPage;
