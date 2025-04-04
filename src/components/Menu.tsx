import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Menu: React.FC = () => {
  const pathname = usePathname();

  return (
    <section className="bg-[#0167CC] sticky top-0 z-50 hidden md:block w-full">
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <nav className="flex items-center space-x-1 w-full justify-center">
            <Link 
              href="/" 
              className={`${pathname === '/' ? 'text-[#d4af37]' : 'text-white'} hover:text-[#d4af37] transition-colors px-6 py-2 text-lg font-medium`}
            >
              ホーム
            </Link>
            <div className="h-5 border-r border-white/30 mx-1"></div>
            <Link 
              href="/about" 
              className={`${pathname === '/about' ? 'text-[#d4af37]' : 'text-white'} hover:text-[#d4af37] transition-colors px-6 py-2 text-lg font-medium`}
            >
              番組内容
            </Link>
            <div className="h-5 border-r border-white/30 mx-1"></div>
            <Link 
              href="/post" 
              className={`${pathname === '/post' ? 'text-[#d4af37]' : 'text-white'} hover:text-[#d4af37] transition-colors px-6 py-2 text-lg font-medium`}
            >
              投稿しよう
            </Link>
            <div className="h-5 border-r border-white/30 mx-1"></div>
            <Link 
              href="/wanted" 
              className={`${pathname === '/wanted' ? 'text-[#d4af37]' : 'text-white'} hover:text-[#d4af37] transition-colors px-6 py-2 text-lg font-medium`}
            >
              募集中
            </Link>
            <div className="h-5 border-r border-white/30 mx-1"></div>
            <Link 
              href="/cast" 
              className={`${pathname === '/cast' ? 'text-[#d4af37]' : 'text-white'} hover:text-[#d4af37] transition-colors px-6 py-2 text-lg font-medium`}
            >
              キャスト＆STAFF
            </Link>
            <div className="h-5 border-r border-white/30 mx-1"></div>
            <Link 
              href="/purpose" 
              className={`${pathname === '/purpose' ? 'text-[#d4af37]' : 'text-white'} hover:text-[#d4af37] transition-colors px-6 py-2 text-lg font-medium`}
            >
              番組の目的
            </Link>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default Menu;
