import { supabase } from './supabase';

export interface RankingItem {
  name: string;
  song: string;
  rank: number;
  message: string;
  reason?: string;
}

// Supabaseから返されるデータの型を定義
interface RankingData {
  date: string;
  name: string;
  song: string;
  rank: number;
  message: string;
  reason?: string;
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
      message: item.message || '',
      reason: item.reason || ''
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
        message: item.message || '',
        reason: item.reason || ''
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
        { name: '集計中', song: '集計中', rank: 1, message: '', reason: '' },
        { name: '集計中', song: '集計中', rank: 2, message: '', reason: '' },
        { name: '集計中', song: '集計中', rank: 3, message: '', reason: '' }
      ];
    }
    
    console.log(`[DEBUG] Returning data from Supabase:`, rankings);
    return rankings;
  } catch (error) {
    console.error('ランキングデータの取得中にエラーが発生しました', error);
    return [{ name: 'データなし', song: 'データなし', rank: 1, message: '', reason: '' }];
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
export async function fetchMonthlyRankings(): Promise<Record<string, RankingItem[]>> {
  try {
    const { data, error } = await supabase
      .from('rankings')
      .select('*')
      .eq('rank', 1) // 1位のみを取得
      .order('date', { ascending: false });

    if (error) {
      console.error('Error fetching monthly rankings:', error);
      return {};
    }

    // データを日付ごとにグループ化
    const groupedByMonth: Record<string, RankingItem[]> = {};
    
    // データを日付ごとにグループ化
    if (data) {
      data.forEach((item: RankingData) => {
        const dateStr = item.date; // 'YYYY-MM-DD'形式
        
        if (!groupedByMonth[dateStr]) {
          groupedByMonth[dateStr] = [];
        }
        
        groupedByMonth[dateStr].push({
          name: item.name || '',
          song: item.song || '',
          rank: item.rank,
          message: item.message || '',
          reason: item.reason || ''
        });
      });
    }

    console.log('Fetched monthly rankings:', groupedByMonth);
    return groupedByMonth;
  } catch (error) {
    console.error('Error in fetchMonthlyRankings:', error);
    return {};
  }
}

// 日付をYYYY-MM-DD形式の文字列に変換する関数
export function formatDate(date: Date): string {
  const month = date.getMonth() + 1; 
  const day = date.getDate(); 
  return `${month}月${day}日`;
}
