"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import Menu from '../../components/Menu';
import Dialog from '../../components/Dialog';
import Form from '../../components/Form';

const PostPage: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <>
      <Menu />

      {/* ヒーローセクション */}
      <section className="py-20 bg-gradient-to-r from-[#17142E] to-[#1a3a6c] text-center">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 text-[#d4af37]">
              投票&投稿しよう
            </h1>
          </div>
        </div>
      </section>

      {/* コンテンツセクション */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* バスランに投稿しようセクション */}
            <div className="bg-white p-8 rounded-xl shadow-lg mb-12 flex flex-wrap items-center">
              <div className="w-full md:w-1/3 lg:w-1/3 xl:w-1/3 p-4 flex justify-center">
                <Image src="/post1.jpg" alt="post1" width={300} height={300} />
              </div>
              <div className="w-full md:w-2/3 lg:w-2/3 xl:w-2/3 p-4">
                <h2 className="text-3xl font-bold text-[#1a3a6c] mb-8 text-center">バースデー・ランキングに投票しよう</h2>
                
                <div className="text-center max-w-2xl mx-auto">
                  <p className="text-xl font-bold text-[#0167CC] mb-4">皆様の投票&投稿がランキングを決める！</p>
                  <p className="text-lg text-gray-700 mb-6">
                    大好きな人、大切な人に<br />
                    生まれてきてくれて「ありがとう」の<br />
                    気持ちを込めて投票しよう♡
                  </p>
                  
                  <div className="mt-8">
                    <button 
                      onClick={handleOpen}
                      className="inline-flex items-center justify-center bg-[#f5d742] hover:bg-[#f2c464] text-black font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      バスランに投票する
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* 渋谷愛ビジョンに関するセクション */}
            <div className="bg-white p-8 rounded-xl shadow-lg mb-12 flex flex-wrap items-center">
              <div className="w-full md:w-1/3 lg:w-1/3 xl:w-1/3 p-4 flex justify-center">
                <Image src="/post2.jpg" alt="post2" width={300} height={300} />
              </div>
              <div className="w-full md:w-2/3 lg:w-2/3 xl:w-2/3 p-4">
                <h2 className="text-3xl font-bold text-[#1a3a6c] mb-8 text-center">渋谷愛ビジョンに放映しよう</h2>
                
                <div className="text-center max-w-2xl mx-auto">
                  <p className="text-lg text-gray-700 mb-6">
                    渋谷愛ビジョンで愛メッセージを放映したい方はコチラから投稿してください。
                  </p>
                  
                  <div className="bg-[#f8f9fa] p-4 rounded-lg mb-6 border-l-4 border-[#0167CC]">
                    <p className="text-gray-700 font-bold text-left">【注意事項】</p>
                    <ul className="text-left text-gray-700 list-disc pl-5 mt-2">
                      <li>渋谷愛ビジョン公式ホームページからの投稿となります。</li>
                      <li>無料投稿は、誕生日の2日前に投稿していただいた愛メッセージが放映の対象となります。</li>
                      <li>無料放映は抽選となります。予めご了承ください。</li>
                    </ul>
                  </div>
                  
                  <div className="mt-8">
                    <a 
                      href="https://ec.saivision.jp/" 
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center justify-center bg-[#f5d742] hover:bg-[#f2c464] text-black font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      愛メッセージを投稿する
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Dialog isOpen={isOpen} onClose={handleClose}>
        <Form />
      </Dialog>
    </>
  );
};

export default PostPage;
