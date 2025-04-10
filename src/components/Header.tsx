'use client';

import Link from 'next/link';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { usePathname } from 'next/navigation';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  // メニューアイテム
  const menuItems = [
    { href: '/', label: 'ホーム' },
    { href: '/about', label: '番組内容' },
    { href: '/post', label: '投票&投稿しよう' },
    { href: '/wanted', label: '募集中' },
    { href: '/cast', label: 'キャスト＆STAFF' },
    { href: '/purpose', label: '番組の目的' }
  ];

  // クリック外部でメニューを閉じる
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      if (isMenuOpen && !target.closest('.menu-container')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isMenuOpen]);

  return (
    <div className="fixed top-4 right-4 z-[9999] md:hidden menu-container">
      {/* メニューボタン - 青い円形のボタンに変更 */}
      <motion.button
        onClick={() => setIsMenuOpen(!isMenuOpen)}
        className="flex items-center justify-center w-12 h-12 bg-[#0167CC] text-white rounded-full shadow-lg focus:outline-none"
        whileTap={{ scale: 0.95 }}
        whileHover={{ scale: 1.05 }}
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
      </motion.button>

      {/* モバイルナビゲーション - アニメーション付き */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div 
            className="bg-[#0166CD] shadow-lg absolute top-16 right-0 w-64 rounded-lg overflow-hidden"
            initial={{ opacity: 0, y: -20, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -20, scale: 0.95 }}
            transition={{ duration: 0.2 }}
          >
            <nav className="container mx-auto px-4 py-3 flex flex-col space-y-3">
              {menuItems.map((item, index) => {
                const isActive = pathname === item.href;
                return (
                  <motion.div
                    key={item.href}
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <Link 
                      href={item.href} 
                      className={`block py-2 transition-colors ${isActive 
                        ? 'text-[#d4af37] font-bold' 
                        : 'text-white hover:text-[#d4af37]'}`}
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.label}
                    </Link>
                  </motion.div>
                );
              })}
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default Header;
