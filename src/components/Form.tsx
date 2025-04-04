import React, { useState } from 'react';

const Form: React.FC = () => {
  const [formData, setFormData] = useState({
    birthMonth: '',
    birthDay: '',
    recipientName: '',
    senderName: '',
    email: '',
    message: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // ここでフォームデータを送信する処理を実装
    console.log('送信されたデータ:', formData);
    // 送信後の処理（成功メッセージの表示など）
    alert('メッセージが送信されました！');
  };

  // 月と日の選択肢を生成
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-[#1a3a6c] mb-6 text-center">愛メッセージを投稿する</h2>
      
      <div className="bg-[#f8f9fa] p-4 rounded-lg mb-6 border-l-4 border-[#0167CC]">
        <p className="text-gray-700 font-bold">【注意事項】1人＝1通しかカウントされません。あらかじめご了承ください。</p>
      </div>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-gray-700 font-bold mb-2">
            ① 誕生日を教えてください<span className="text-red-600">*</span>
          </label>
          <div className="flex items-center space-x-2">
            <select 
              name="birthMonth"
              value={formData.birthMonth}
              onChange={(e) => setFormData(prev => ({ ...prev, birthMonth: e.target.value }))}
              className="w-24 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0167CC]"
              required
            >
              <option value="">月</option>
              {months.map(month => (
                <option key={month} value={month}>{month}月</option>
              ))}
            </select>
            
            <select 
              name="birthDay"
              value={formData.birthDay}
              onChange={(e) => setFormData(prev => ({ ...prev, birthDay: e.target.value }))}
              className="w-24 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0167CC]"
              required
            >
              <option value="">日</option>
              {days.map(day => (
                <option key={day} value={day}>{day}日</option>
              ))}
            </select>
          </div>
        </div>
        
        <div>
          <label className="block text-gray-700 font-bold mb-2">
            ② 投票する方のお名前を教えてください<span className="text-red-600">*</span>
          </label>
          <input 
            type="text" 
            name="recipientName"
            value={formData.recipientName}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0167CC]"
            required
          />
        </div>
        
        <div>
          <label className="block text-gray-700 font-bold mb-2">
            ③ あなたのお名前を教えてください（HNも可能）<span className="text-red-600">*</span>
          </label>
          <input 
            type="text" 
            name="senderName"
            value={formData.senderName}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0167CC]"
            required
          />
        </div>
        
        <div>
          <label className="block text-gray-700 font-bold mb-2">
            ④ メールアドレスを教えてください<span className="text-red-600">*</span>
          </label>
          <input 
            type="email" 
            name="email"
            value={formData.email}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0167CC]"
            required
          />
        </div>
        
        <div>
          <label className="block text-gray-700 font-bold mb-2">
            ⑤ 伝えたい誕生日愛メッセージがある方はご記入ください（任意）
          </label>
          <textarea 
            name="message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0167CC] h-32"
          />
        </div>
        
        <div className="text-center pt-4">
          <button 
            type="submit"
            className="inline-flex items-center justify-center bg-[#0167CC] hover:bg-[#0156a5] text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
          >
            送信する
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
