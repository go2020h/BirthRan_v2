'use client';

import { guestArchive } from '../data/guestArchive';
import Menu from '@/components/Menu';
import { useState } from 'react';

export default function GuestArchivePage() {
  // 各ゲストの説明文の展開状態を管理する状態
  const [expandedBios, setExpandedBios] = useState<{[key: number]: boolean}>({});

  // 説明文の展開・折りたたみを切り替える関数
  const toggleBio = (index: number) => {
    setExpandedBios(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Menu />
      <main className="min-h-screen">
        {/* ヒーローセクション */}
        <section className="py-20 bg-[#0f1429]">
          <div className="container mx-auto px-4">
            <div className="text-center">
              <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#d4af37]">
                ゲスト一覧
              </h1>
            </div>
          </div>
        </section>

        {/* ゲスト一覧 */}
        <section className="py-16 bg-gray-50">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {guestArchive.map((guest, index) => (
                <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden border border-gray-200 transition-transform hover:scale-[1.02]">
                  <div className="relative pb-[120%] overflow-hidden">
                    <img 
                      src={guest.image} 
                      alt={guest.name} 
                      className="absolute inset-0 w-full h-full object-cover"
                      onError={(e) => {
                        const target = e.target as HTMLImageElement;
                        target.src = `https://via.placeholder.com/400x500?text=${guest.name}`;
                      }}
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-bold text-[#1a3a6c] mb-2">{guest.name}</h2>
                    <p className="text-gray-600 text-sm mb-4">
                      <span className="font-medium">出演日:</span> {guest.appearanceDate}
                    </p>
                    <p className="text-gray-600 text-sm mb-4">
                      <span className="font-medium">誕生日:</span> {guest.birthDate}
                    </p>
                    <div className="mb-4">
                      <p className={`text-gray-700 text-sm ${expandedBios[index] ? '' : 'line-clamp-3'}`}>
                        {guest.bio}
                      </p>
                      {guest.bio.length > 150 && (
                        <button 
                          onClick={() => toggleBio(index)}
                          className="text-[#0166CD] hover:text-[#d4af37] text-sm mt-2 font-medium transition-colors focus:outline-none"
                        >
                          {expandedBios[index] ? '折りたたむ' : '続きを読む'}
                        </button>
                      )}
                    </div>
                    
                    <div className="flex space-x-2 mt-4">
                      {guest.twitter && (
                        <a 
                          href={guest.twitter} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-[#1da1f2] hover:text-[#0d8bd9] transition-colors"
                          aria-label="Twitter"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                          </svg>
                        </a>
                      )}
                      {guest.instagram && (
                        <a 
                          href={guest.instagram} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-[#e1306c] hover:text-[#c13584] transition-colors"
                          aria-label="Instagram"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                          </svg>
                        </a>
                      )}
                      {guest.officialSite && (
                        <a 
                          href={guest.officialSite} 
                          target="_blank" 
                          rel="noopener noreferrer"
                          className="text-[#1a3a6c] hover:text-[#d4af37] transition-colors"
                          aria-label="公式サイト"
                        >
                          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                          </svg>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
