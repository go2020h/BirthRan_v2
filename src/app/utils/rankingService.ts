import { supabase } from './supabase';

export interface RankingItem {
  name: string;
  song: string;
  rank?: number;
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

    return data.map((item: any) => ({
      name: item.name,
      song: item.song,
      rank: item.rank
    }));
  } catch (error) {
    console.error('ランキングデータの取得中にエラーが発生しました', error);
    return [];
  }
};

// 全ての過去のランキングデータを取得する関数
export const fetchAllPastRankings = async (): Promise<{[key: string]: RankingItem[]}> => {
  try {
    const { data, error } = await supabase
      .from('rankings')
      .select('*')
      .order('date', { ascending: true })
      .order('rank', { ascending: true });

    if (error) {
      console.error('過去のランキングデータの取得に失敗しました', error);
      return {};
    }

    // 日付ごとにデータを整理
    const groupedData: {[key: string]: RankingItem[]} = {};
    data.forEach((item: any) => {
      if (!groupedData[item.date]) {
        groupedData[item.date] = [];
      }
      groupedData[item.date].push({
        name: item.name,
        song: item.song,
        rank: item.rank
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
        { name: '集計中', song: '集計中', rank: 1 },
        { name: '集計中', song: '集計中', rank: 2 },
        { name: '集計中', song: '集計中', rank: 3 }
      ];
    }
    
    console.log(`[DEBUG] Returning data from Supabase:`, rankings);
    return rankings;
  } catch (error) {
    console.error('ランキングデータの取得中にエラーが発生しました', error);
    return [{ name: 'データなし', song: 'データなし', rank: 1 }];
  }
};

// 日付に基づいてランキングデータの表示数を取得する関数
export const getRankingCount = (date: Date): number => {
  try {
    return 3; // 常に3つ表示
  } catch (error) {
    console.error('ランキング数の取得中にエラーが発生しました', error);
    return 1;
  }
};
