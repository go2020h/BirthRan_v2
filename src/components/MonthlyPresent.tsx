'use client';

import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { BirthdayPresent } from '@/app/data/birthdayPresents';
import ReactMarkdown from 'react-markdown';

interface MonthlyPresentProps {
  present: BirthdayPresent;
  asTableRow?: boolean;
}

const MonthlyPresent: React.FC<MonthlyPresentProps> = ({ present, asTableRow }) => {
  // 表示タイプを判断するための状態を追加
  const [isTableRow, setIsTableRow] = useState(asTableRow || false);
  // 説明文の展開状態を管理
  const [isExpanded, setIsExpanded] = useState(false);
  
  // クライアントサイドでのみ実行
  useEffect(() => {
    if (asTableRow === undefined) {
      setIsTableRow(window.location.pathname === '/presents');
    }
  }, [asTableRow]);
  
  // 日付をフォーマットするための関数
  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return `${date.getFullYear()}年${date.getMonth() + 1}月${date.getDate()}日`;
  };
  
  if (isTableRow) {
    // プレゼント一覧ページ用の表形式レイアウト
    return (
      <tr className="border-b border-gray-200 hover:bg-gray-50 transition-colors duration-150">
        <td className="py-4 px-6 text-center">
          <div className="text-sm text-gray-600">{formatDate(present.date)}</div>
        </td>
        
        <td className="py-4 px-6 text-left">
          <div className="text-sm font-medium">{present.name}</div>
        </td>
        
        <td className="py-4 px-6">
          <Image 
            src={present.imagePath} 
            alt={present.imageAlt} 
            width={384}
            height={192}
            className="object-cover rounded-lg mx-auto" 
          />
        </td>
        
        <td className="py-4 px-6">
          <div className="max-w-md overflow-hidden text-sm">
            <div className={`${isExpanded ? '' : 'line-clamp-3'}`}>
              <ReactMarkdown>{present.descriptionMarkdown}</ReactMarkdown>
            </div>
            {present.description.length > 100 && (
              <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-[#0166CD] hover:text-[#d4af37] text-sm mt-2 font-medium transition-colors focus:outline-none"
              >
                {isExpanded ? '折りたたむ' : '続きを読む'}
              </button>
            )}
          </div>
        </td>
        
        <td className="py-4 px-6 text-center">
          <div className="text-sm">{present.company}</div>
        </td>
        
        <td className="py-4 px-6 text-center">
          <a 
            href={present.url} 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center bg-[#0167CC] hover:bg-[#0155a8] text-white text-sm py-2 px-3 rounded-md transition-colors"
            title="u516cu5f0fu30b5u30a4u30c8u3092u958bu304f"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
            </svg>
          </a>
        </td>
      </tr>
    );
  } else {
    // メインページ用のカード形式レイアウト
    return (
      <div className="flex flex-col md:flex-row gap-6">
        <div className="md:w-1/3">
          <Image 
            src={present.imagePath} 
            alt={present.imageAlt} 
            width={400} 
            height={300} 
            className="object-contain rounded-lg shadow-sm" 
          />
        </div>
        <div className="md:w-2/3">
          <h5 className="font-bold mb-2">{present.name}</h5>
          <div className="text-gray-700">
            <div className={`${isExpanded ? '' : 'line-clamp-3'}`}>
              <ReactMarkdown>{present.descriptionMarkdown}</ReactMarkdown>
            </div>
            {present.description.length > 100 && (
              <button 
                onClick={() => setIsExpanded(!isExpanded)}
                className="text-[#0166CD] hover:text-[#d4af37] text-sm mt-2 font-medium transition-colors focus:outline-none"
              >
                {isExpanded ? '折りたたむ' : '続きを読む'}
              </button>
            )}
          </div>
          <div className="mt-4 text-center">
            <a 
              href={present.url} 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center bg-[#0167CC] hover:bg-[#0155a8] text-white font-medium py-2 px-4 rounded-md transition-colors"
            >
              公式サイトを見る
            </a>
          </div>
        </div>
      </div>
    );
  }
};

export default MonthlyPresent;
