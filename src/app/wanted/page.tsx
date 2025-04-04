"use client";

import React, { useState } from 'react';
import Menu from '../../components/Menu';
import Dialog from '../../components/Dialog';
import GuestApplicationForm from '../../components/GuestApplicationForm';

const RecruitPage: React.FC = () => {
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
              募集中
            </h1>
          </div>
        </div>
      </section>

      {/* コンテンツセクション */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            {/* 誕生日が近い！ゲスト募集中！！セクション */}
            <div className="bg-white p-8 rounded-xl shadow-lg mb-12 flex flex-wrap items-center">
              <div className="w-full md:w-1/3 lg:w-1/3 xl:w-1/3 p-4 flex justify-center">
                <img src="wanted1.jpg" alt="wanted1" className="object-cover" />
              </div>
              <div className="w-full md:w-2/3 lg:w-2/3 xl:w-2/3 p-4">
                <h2 className="text-3xl font-bold text-[#1a3a6c] mb-8 text-center">誕生日が近い！ゲスト募集中！！</h2>
                
                <div className="text-center max-w-2xl mx-auto">
                  <p className="text-xl font-bold text-[#0167CC] mb-4">番組では、誕生日が近いゲストを大募集しています。</p>
                  <ul className="text-lg text-gray-700 mb-6 list-disc text-left pl-8">
                    <li>出演日から1ヶ月以内に誕生日を迎える方</li>
                    <li>バスランでベスト3に入ると自負している方</li>
                  </ul>
                  
                  <div className="mt-8">
                    <button 
                      onClick={handleOpen}
                      className="inline-flex items-center justify-center bg-[#f5d742] hover:bg-[#f2c464] text-black font-bold py-4 px-8 rounded-lg transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                    >
                      応募する
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Dialog isOpen={isOpen} onClose={handleClose}>
        <GuestApplicationForm />
      </Dialog>
    </>
  );
};

export default RecruitPage;
