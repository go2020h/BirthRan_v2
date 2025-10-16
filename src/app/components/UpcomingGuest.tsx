'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useState } from 'react';

interface GuestProps {
  name: string;
  image: string;
  bio: string;
  appearanceDate: string;
  birthDate: string;
  officialSite?: string;
  twitter?: string;
  twitter2?: string;
  twitterName1?: string;
  twitterName2?: string;
  instagram?: string;
}

export default function UpcomingGuest({
  name,
  image,
  bio,
  appearanceDate,
  birthDate,
  officialSite,
  twitter,
  twitter2,
  twitterName1,
  twitterName2,
  instagram
}: GuestProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  const bioLines = bio.split('\n');
  const needsTruncate = bioLines.length > 102 || bio.length > 388;
  const displayedBio = needsTruncate && !isExpanded
    ? (bioLines.length > 102
        ? bioLines.slice(0, 102).join('\n') + '...'
        : bio.slice(0, 388) + '...')
    : bio;

  return (
    <div className="py-20 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-[#1a3a6c] inline-block relative">
            もうすぐ誕生日！ようこそバスランへ
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto mb-2">
            次回のゲスト
          </p>
        </div>
        
        <div className="bg-gradient-to-br from-[#f8f9fa] to-[#e6f0ff] rounded-xl shadow-lg p-6 max-w-4xl mx-auto border border-gray-200 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-40 h-40 bg-gradient-to-br from-[#d4af37] to-[#f0e68c] opacity-10 rounded-full transform translate-x-20 -translate-y-20"></div>
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-gradient-to-tr from-[#0166CD] to-[#4dabf5] opacity-10 rounded-full transform -translate-x-16 translate-y-16"></div>
          <div className="guest-profile-container flex flex-col md:flex-row items-start md:items-center relative z-10">
            {/* ゲスト画像 */}
            <div className="guest-image-wrapper w-full md:w-1/3 mb-6 md:mb-0 flex justify-center">
              <div className="guest-image-container max-w-[250px] w-full overflow-hidden shadow-lg rounded-lg">
                <Image
                  src={image}
                  alt={name}
                  width={300}
                  height={400}
                  className="w-full h-auto object-cover"
                />
              </div>
            </div>
            
            {/* ゲスト情報 */}
            <div className="guest-info-wrapper w-full md:w-2/3 md:pl-8">
              <h3 className="text-2xl font-bold text-[#1a3a6c] mb-2 text-center md:text-left">{name}</h3>
              
              <div className="flex flex-col sm:flex-row items-center sm:items-start gap-2 sm:gap-4 mb-4">
                <div className="guest-date-badge bg-[#1a3a6c] text-white px-4 py-1.5 rounded-full text-sm font-medium shadow-sm w-full sm:w-auto text-center">
                  <span className="mr-1">出演日：</span>{appearanceDate}
                </div>
                <div className="guest-birthday-badge bg-[#d4af37] text-white px-4 py-1.5 rounded-full text-sm font-medium shadow-sm w-full sm:w-auto text-center">
                  <span className="mr-1">誕生日：</span>{birthDate}
                </div>
              </div>
              
              {/* ゲスト紹介文（10行超でアコーディオン表示） */}
              <p className="guest-bio text-gray-700 mb-2 text-sm sm:text-base whitespace-pre-line">
                {displayedBio}
              </p>
              {needsTruncate && (
                <button
                  type="button"
                  onClick={() => setIsExpanded((prev) => !prev)}
                  className="text-[#0166CD] hover:text-[#d4af37] transition-colors mb-4 text-sm sm:text-base"
                >
                  {isExpanded ? '閉じる' : '続きを読む'}
                </button>
              )}
              
              <div className="guest-details bg-white bg-opacity-80 rounded-lg p-4 sm:p-6 shadow-md mb-6">
                <div className="grid grid-cols-1 gap-4 text-left">{/* md:grid-cols-2を削除しました */}
                  <div className="guest-links">
                    {officialSite && (
                      <p className="text-gray-700 mb-2 text-sm sm:text-base">
                        <span className="font-bold">公式HP：</span>
                        <a 
                          href={officialSite} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-[#0166CD] hover:text-[#d4af37] transition-colors"
                        >
                          公式サイトへ
                        </a>
                      </p>
                    )}
                    {(twitter || twitter2 || instagram) && (
                      <p className="text-gray-700 mb-2 text-sm sm:text-base">
                        <span className="font-bold">SNS：</span>
                        {twitter && (
                          <a
                            href={twitter}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#0166CD] hover:text-[#d4af37] transition-colors mr-2"
                          >
                            {twitterName1 || 'X（Twitter）'}
                          </a>
                        )}
                        {twitter2 && (
                          <a
                            href={twitter2}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#0166CD] hover:text-[#d4af37] transition-colors mr-2"
                          >
                            {twitterName2 || 'X（Twitter）'}
                          </a>
                        )}

                        {instagram && (
                          <a
                            href={instagram}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-[#0166CD] hover:text-[#d4af37] transition-colors"
                          >
                            Instagram
                          </a>
                        )}
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="text-center mt-8">
                <Link 
                  href="/guest" 
                  className="bg-[#0266CD] hover:bg-[#01509f] text-white font-bold py-3 px-6 rounded-lg transition-colors inline-block text-lg"
                >
                  過去のゲストを見る
                </Link>
              </div>
      </div>
    </div>
  );
}
