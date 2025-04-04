'use client';

import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="w-full md:hidden">
      <div className="fixed top-0 left-0 w-full h-16 bg-[#0167CC] shadow-md z-[9999]">
        <div className="container mx-auto px-4 h-full flex items-center justify-end">
          {/* メニューボタン */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              {isMenuOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>

          {/* モバイルナビゲーション */}
          {isMenuOpen && (
            <div className="bg-[#0166CD] shadow-lg absolute top-16 right-0 w-64 rounded-bl-lg">
              <nav className="container mx-auto px-4 py-3 flex flex-col space-y-3">
                <Link 
                  href="/" 
                  className="text-white hover:text-[#d4af37] transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  ホーム
                </Link>
                <Link 
                  href="/about" 
                  className="text-white hover:text-[#d4af37] transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  番組内容
                </Link>
                <Link 
                  href="/post" 
                  className="text-white hover:text-[#d4af37] transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  投稿しよう
                </Link>
                <Link 
                  href="/wanted" 
                  className="text-white hover:text-[#d4af37] transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  募集中
                </Link>
                <Link 
                  href="/cast" 
                  className="text-white hover:text-[#d4af37] transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  キャスト＆STAFF
                </Link>
                <Link 
                  href="/purpose" 
                  className="text-white hover:text-[#d4af37] transition-colors py-2"
                  onClick={() => setIsMenuOpen(false)}
                >
                  番組の目的
                </Link>
              </nav>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Header;
