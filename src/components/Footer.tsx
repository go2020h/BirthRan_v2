import Link from 'next/link';

const Footer = () => {
  return (
    <footer className="w-full bg-[#0f1429] text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="flex justify-center space-x-10 mb-8">
          <div className="flex flex-col items-center">
            <a href="https://x.com/NinjaHachi_" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white hover:opacity-80 transition-all mb-2">
              <span className="text-xl font-bold">𝕏</span>
            </a>
            <span className="text-sm">忍者ハチ</span>
          </div>
          <div className="flex flex-col items-center">
            <a href="https://x.com/birth_ran_" target="_blank" rel="noopener noreferrer" className="w-12 h-12 bg-black rounded-full flex items-center justify-center text-white hover:opacity-80 transition-all mb-2">
              <span className="text-xl font-bold">𝕏</span>
            </a>
            <span className="text-sm">バスラン</span>
          </div>
        </div>
        
        <div className="flex justify-center flex-wrap space-x-4 md:space-x-8 mb-8">
          <Link href="/" className="text-white hover:text-[#d4af37] transition-colors text-base py-1">
            ホーム
          </Link>
          <Link href="/about" className="text-white hover:text-[#d4af37] transition-colors text-base py-1">
            番組内容
          </Link>
          <Link href="/post" className="text-white hover:text-[#d4af37] transition-colors text-base py-1">
            投稿しよう
          </Link>
          <Link href="/wanted" className="text-white hover:text-[#d4af37] transition-colors text-base py-1">
            募集中
          </Link>
          <Link href="/cast" className="text-white hover:text-[#d4af37] transition-colors text-base py-1">
            キャスト＆STAFF
          </Link>
          <Link href="/purpose" className="text-white hover:text-[#d4af37] transition-colors text-base py-1">
            番組の目的
          </Link>
        </div>
        
        <div className="text-center text-sm text-gray-300">
          Copyright &copy; 2025 バスラン, All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
