// ランキングデータの型定義
export interface RankingItem {
  name: string;
  song: string;
}

// 日付ごとのランキングデータ
export const rankingData: Record<string, RankingItem[]> = {
  '2025-03-28': [{ name: '相澤 莉多', song: '「RiR」／Sir Vanity' }],
  '2025-03-29': [{ name: '鈴木 亮平', song: '「ロマンスの血」／アイナ・ジ・エンド' }],
  '2025-03-30': [{ name: '島崎 遥香', song: '「永遠プレッシャー」／AKB48' }],
  '2025-03-31': [{ name: '柏木 悠（超特急）', song: '「AwA AwA」／超特急' }],
  '2025-04-01': [{ name: '大野 雄大（Da-iCE）', song: '「もうひとつの土曜日」／浜田省吾' }],
  '2025-04-02': [{ name: '浪川 大輔', song: '「NE-CHU-SHOW」／ぼっちぼろまる' }],
  '2025-04-03': [{ name: '髙橋 海人（King & Prince）', song: '「二十九、三十」／クリープハイプ' }],
};

// 安全にランキングデータを取得する関数
export const getSafeRankingData = (date: string, index: number = 0): RankingItem => {
  // データが存在しない場合のエラーハンドリング
  if (!rankingData[date] || !rankingData[date][index]) {
    return { name: 'データなし', song: 'データなし' };
  }
  
  return rankingData[date][index];
};

// 曜日インデックスに基づいてランキングデータを取得する関数
export const getRankingByDayIndex = (dayIndex: number): RankingItem[] => {
  try {
    // 選択日を取得
    const dates = [
      '2025-03-28',
      '2025-03-29',
      '2025-03-30',
      '2025-03-31',
      '2025-04-01',
      '2025-04-02',
      '2025-04-03'
    ];
    
    const index = dayIndex >= 0 && dayIndex < 7 ? dayIndex : 0;
    const selectedDate = dates[index];
    
    // 選択日が2025年4月4日以降の場合、集計中を3つ表示
    const today = new Date();
    const targetDate = new Date(2025, 3, 4); // 2025年4月4日
    
    if (today >= targetDate) {
      // 4月4日以降の場合、3つ表示
      return [
        { name: '集計中', song: '集計中' },
        { name: '集計中', song: '集計中' },
        { name: '集計中', song: '集計中' }
      ];
    }
    
    // 3月28日～4月3日はランキングデータを1つ表示
    const data = rankingData[selectedDate];
    
    // データが存在しない場合のエラーハンドリング
    if (!data || data.length === 0) {
      return [{ name: 'データなし', song: 'データなし' }];
    }
    
    return data;
  } catch (error) {
    console.error('ランキングデータの取得に失敗しました', error);
    return [{ name: 'データなし', song: 'データなし' }];
  }
};

// 日付文字列を整形する関数
export const formatDateString = (date: Date): string => {
  try {
    const month = date.getMonth() + 1;
    const day = date.getDate();
    const dayOfWeek = ['日', '月', '火', '水', '木', '金', '土'][date.getDay()];
    return `${month}月${day}日(${dayOfWeek})`;
  } catch (error) {
    console.error('日付の整形に失敗しました', error);
    return '不正な日付';
  }
};

// 日付に基づいてランキングデータの表示数を取得する関数
export const getRankingCount = (date: Date): number => {
  try {
    const today = new Date();
    const targetDate = new Date(2025, 3, 4); // 2025年4月4日
    return today >= targetDate ? 3 : 1; // 4月4日以降は3つ表示
  } catch (error) {
    console.error('ランキングデータの表示数の取得に失敗しました', error);
    return 1;
  }
};
