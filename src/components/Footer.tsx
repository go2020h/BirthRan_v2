import Link from 'next/link';
import Image from 'next/image';

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
        
        {/* 番組情報セクション */}
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6 mb-8 max-w-md mx-auto">
          {/*<div className="bg-[#1a2542] p-4 rounded-lg flex flex-col items-center justify-center">
            <p className="text-white font-medium mb-2">番組のご意見・ご感想はメールにて♡</p>
            <a 
              href="mailto:br@jorf.co.jp" 
              className="text-white hover:text-[#d4af37] transition-colors"
            >
              br@jorf.co.jp
            </a>
          </div>*/}
          <div className="bg-[#1a2542] p-4 rounded-lg flex flex-col items-center">
            <p className="text-white font-medium mb-2">バスランは、radikoのタイムフリーで<br />放送後1週間聴くことができます♡</p>
            <a 
              href="https://radiko.jp/r_seasons/10029307"
              target="_blank" 
              rel="noopener noreferrer"
              className="hover:opacity-80 transition-all"
            >
              <Image src="/radiko.png" alt="radikoで聴く" width={120} height={40} className="h-10 w-auto" />
            </a>
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
            投票&投稿しよう
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
