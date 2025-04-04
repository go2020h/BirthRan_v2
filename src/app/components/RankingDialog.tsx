import React from 'react';
import { RankingItem } from '@/app/utils/rankingService';

interface RankingDialogProps {
  isOpen: boolean;
  onClose: () => void;
  rankings: {[key: string]: RankingItem[]};
  loading: boolean;
}

const RankingDialog: React.FC<RankingDialogProps> = ({ isOpen, onClose, rankings, loading }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
        <div className="flex justify-between items-center bg-[#1a3a6c] text-white p-4">
          <h3 className="text-xl font-bold">過去のランキング</h3>
          <button 
            onClick={onClose}
            className="text-white hover:text-gray-300 transition-colors"
            aria-label="閉じる"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="p-6 overflow-y-auto max-h-[calc(90vh-80px)]">
          {loading ? (
            <div className="flex justify-center items-center py-10">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#1a3a6c]"></div>
            </div>
          ) : Object.keys(rankings).length === 0 ? (
            <p className="text-center text-gray-500 py-10">ランキングデータがありません。</p>
          ) : (
            <div className="space-y-8">
              {Object.entries(rankings)
                .sort(([dateA], [dateB]) => new Date(dateB).getTime() - new Date(dateA).getTime())
                .map(([date, rankingItems]) => {
                  const dateObj = new Date(date);
                  const formattedDate = `${dateObj.getFullYear()}年${dateObj.getMonth() + 1}月${dateObj.getDate()}日`;
                  
                  return (
                    <div key={date} className="border-b pb-6 last:border-b-0">
                      <h4 className="text-lg font-bold text-[#1a3a6c] mb-3">{formattedDate}のランキング</h4>
                      <table className="min-w-full table-fixed border-collapse">
                        <thead>
                          <tr className="bg-gray-50">
                            <th className="py-2 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/6">順位</th>
                            <th className="py-2 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/3">名前</th>
                            <th className="py-2 px-4 text-left text-xs font-medium text-gray-500 uppercase tracking-wider w-1/2">川村所長の選曲</th>
                          </tr>
                        </thead>
                        <tbody>
                          {rankingItems.map((item, index) => (
                            <tr key={index} className="hover:bg-gray-50 transition-colors">
                              <td className="py-3 px-4">
                                <span className={`inline-flex items-center justify-center ${item.rank === 1 ? 'bg-[#d4af37]' : item.rank === 2 ? 'bg-[#C0C0C0]' : 'bg-[#CD7F32]'} text-white rounded-full w-6 h-6 text-sm font-bold`}>
                                  {item.rank}
                                </span>
                              </td>
                              <td className="py-3 px-4 font-medium text-[#1a3a6c]">
                                {item.name === '集計中' ? '集計中' : `${item.name}さん`}
                              </td>
                              <td className="py-3 px-4">{item.song}</td>
                            </tr>
                          ))}
                        </tbody>
                      </table>
                    </div>
                  );
                })}
            </div>
          )}
        </div>
        
        <div className="bg-gray-50 p-4 flex justify-end">
          <button 
            onClick={onClose}
            className="bg-[#1a3a6c] hover:bg-[#15305a] text-white font-medium py-2 px-4 rounded-md transition-colors"
          >
            閉じる
          </button>
        </div>
      </div>
    </div>
  );
};

export default RankingDialog;
