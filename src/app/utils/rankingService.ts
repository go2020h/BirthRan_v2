import { supabase } from './supabase';

export interface RankingItem {
  name: string;
  song: string;
  rank?: number;
  message?: string; // メッセージを追加
}

// Supabaseから返されるデータの型を定義
interface RankingData {
  date: string;
  name: string;
  song: string;
  rank: number;
  message?: string; // メッセージを追加
}

// 指定した日付のランキングデータを取得する関数
export const fetchRankingByDate = async (date: string): Promise<RankingItem[]> => {
  try {
    console.log(`[DEBUG] Fetching ranking data for date: ${date}`);
    
    const { data, error } = await supabase
      .from('rankings')
      .select('*')
      .eq('date', date)
      .order('rank', { ascending: true });

    if (error) {
      console.error('ランキングデータの取得に失敗しました', error);
      return [];
    }

    console.log(`[DEBUG] Fetched data:`, data);
    
    if (!data || data.length === 0) {
      console.log(`[DEBUG] No data found for date: ${date}`);
      return [];
    }

    return data.map((item: RankingData) => ({
      name: item.name || '',
      song: item.song || '',
      rank: item.rank,
      message: item.message || ''
    }));
  } catch (error) {
    console.error('ランキングデータの取得中にエラーが発生しました', error);
    return [];
  }
};

// 過去のランキングデータを全て取得する関数
export const fetchAllPastRankings = async (): Promise<Record<string, RankingItem[]>> => {
  try {
    // Supabaseからデータを取得
    const { data, error } = await supabase
      .from('rankings')
      .select('*')
      .eq('rank', 1) // 1位のみを取得
      .order('date', { ascending: false });
    
    if (error) {
      console.error('過去のランキングデータの取得に失敗しました', error);
      return {};
    }
    
    // 日付ごとにデータを整理
    const groupedData: Record<string, RankingItem[]> = {};
    
    data.forEach((item: RankingData) => {
      const date = item.date;
      
      if (!groupedData[date]) {
        groupedData[date] = [];
      }
      
      groupedData[date].push({
        name: item.name || '',
        song: item.song || '',
        rank: item.rank,
        message: item.message || ''
      });
    });
    
    return groupedData;
  } catch (error) {
    console.error('過去のランキングデータの取得中にエラーが発生しました', error);
    return {};
  }
};

// 曜日インデックスと週の日付配列に基づいてランキングデータを取得する関数
export const getRankingByDayIndex = async (dayIndex: number, weekDates: string[]): Promise<RankingItem[]> => {
  try {
    // 選択日を取得
    const index = dayIndex >= 0 && dayIndex < weekDates.length ? dayIndex : 0;
    const selectedDate = weekDates[index];
    
    console.log(`[DEBUG] Selected day index: ${dayIndex}, date: ${selectedDate}`);
    
    // Supabaseからデータを取得
    console.log(`[DEBUG] Fetching data from Supabase for date: ${selectedDate}`);
    const rankings = await fetchRankingByDate(selectedDate);
    
    // データが存在しない場合は集計中を表示
    if (rankings.length === 0) {
      console.log(`[DEBUG] No data found, returning '集計中'`);
      return [
        { name: '集計中', song: '集計中', rank: 1, message: '' },
        { name: '集計中', song: '集計中', rank: 2, message: '' },
        { name: '集計中', song: '集計中', rank: 3, message: '' }
      ];
    }
    
    console.log(`[DEBUG] Returning data from Supabase:`, rankings);
    return rankings;
  } catch (error) {
    console.error('ランキングデータの取得中にエラーが発生しました', error);
    return [{ name: 'データなし', song: 'データなし', rank: 1, message: '' }];
  }
};

// 日付に基づいてランキングデータの表示数を取得する関数
export const getRankingCount = (): number => {
  try {
    return 3; // 常に3つ表示
  } catch (error) {
    console.error('ランキング数の取得中にエラーが発生しました', error);
    return 1;
  }
};

// 月次ランキングデータを取得する関数
export const fetchMonthlyRankings = async (year: number, month: number): Promise<Record<string, RankingItem[]>> => {
  try {
    // カレンダー表現用の前月、当月、翌月の日付を取得
    // 前月の末日を計算
    const prevMonth = month === 1 ? 12 : month - 1;
    const prevYear = month === 1 ? year - 1 : year;
    const prevMonthLastDay = new Date(year, month - 1, 0).getDate();
    const prevMonthStart = new Date(prevYear, prevMonth - 1, prevMonthLastDay - 6); // 前月の最後の1週間
    
    // 当月の日付を計算
    const currentMonthStart = new Date(year, month - 1, 1);
    const currentMonthEnd = new Date(year, month, 0);
    
    // 翌月の日付を計算
    const nextMonth = month === 12 ? 1 : month + 1;
    const nextYear = month === 12 ? year + 1 : year;
    const nextMonthStart = new Date(nextYear, nextMonth - 1, 1);
    const nextMonthEnd = new Date(nextYear, nextMonth, 0); // 翌月の最後の1週間
    
    // 翌々月の日付を計算
    const nextNextMonth = nextMonth === 12 ? 1 : nextMonth + 1;
    const nextNextYear = nextMonth === 12 ? nextYear + 1 : nextYear;
    const nextNextMonthStart = new Date(nextNextYear, nextNextMonth - 1, 1);
    const nextNextMonthEnd = new Date(nextNextYear, nextNextMonth - 1, 7); // 翌々月の最初の1週間
    
    // 日付をYYYY-MM-DD形式の文字列に変換
    const startDateStr = formatDate(prevMonthStart);
    const endDateStr = formatDate(nextNextMonthEnd);
    
    console.log(`[DEBUG] Fetching monthly rankings from ${startDateStr} to ${endDateStr}`);
    
    // Supabaseからデータを取得
    const { data, error } = await supabase
      .from('rankings')
      .select('*')
      .gte('date', startDateStr)
      .lte('date', endDateStr)
      .order('rank', { ascending: true });
    
    if (error) {
      console.error('月次ランキングデータの取得に失敗しました', error);
      return {};
    }
    
    // 日付ごとにデータを整理
    const groupedData: Record<string, RankingItem[]> = {};
    
    data.forEach((item: RankingData) => {
      const date = item.date;
      
      if (!groupedData[date]) {
        groupedData[date] = [];
      }
      
      groupedData[date].push({
        name: item.name || '',
        song: item.song || '',
        rank: item.rank,
        message: item.message || ''
      });
    });
    
    // 各日付のデータをランク順に並べ替え
    Object.keys(groupedData).forEach(date => {
      groupedData[date].sort((a, b) => (a.rank || 999) - (b.rank || 999));
    });
    
    return groupedData;
  } catch (error) {
    console.error('月次ランキングデータの取得中にエラーが発生しました', error);
    return {};
  }
};

// 日付をYYYY-MM-DD形式の文字列に変換する関数
export function formatDate(date: Date): string {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${year}-${month}-${day}`;
}
