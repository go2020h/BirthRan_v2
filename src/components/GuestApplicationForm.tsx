import React, { useState } from 'react';

const GuestApplicationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    birthYear: '',
    birthMonth: '',
    birthDay: '',
    appearanceYear: '',
    appearanceMonth: '',
    appearanceDay: '',
    agency: '',
    managerName: '',
    email: '',
    motivation: ''
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // ここでフォームデータを送信する処理を実装
    console.log('送信されたデータ:', formData);
    // 送信後の処理（成功メッセージの表示など）
    alert('応募が送信されました！');
  };

  // 月と日の選択肢を生成
  const years = Array.from({ length: 10 }, (_, i) => new Date().getFullYear() - 5 + i);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-[#1a3a6c] mb-6 text-center">ゲスト応募フォーム</h2>
      
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label className="block text-gray-700 font-bold mb-2">
            お名前<span className="text-red-600">*</span>
          </label>
          <input 
            type="text" 
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0167CC]"
            required
          />
        </div>
        
        <div>
          <label className="block text-gray-700 font-bold mb-2">
            誕生日<span className="text-red-600">*</span>
          </label>
          <div className="flex items-center space-x-2">
            <select 
              name="birthYear"
              value={formData.birthYear}
              onChange={handleChange}
              className="w-24 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0167CC]"
              required
            >
              <option value="">年</option>
              {years.map(year => (
                <option key={year} value={year}>{year}年</option>
              ))}
            </select>
            
            <select 
              name="birthMonth"
              value={formData.birthMonth}
              onChange={handleChange}
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
              onChange={handleChange}
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
            ゲスト出演希望日<span className="text-red-600">*</span>
          </label>
          <div className="flex items-center space-x-2">
            <select 
              name="appearanceYear"
              value={formData.appearanceYear}
              onChange={handleChange}
              className="w-24 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0167CC]"
              required
            >
              <option value="">年</option>
              {years.map(year => (
                <option key={year} value={year}>{year}年</option>
              ))}
            </select>
            
            <select 
              name="appearanceMonth"
              value={formData.appearanceMonth}
              onChange={handleChange}
              className="w-24 p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0167CC]"
              required
            >
              <option value="">月</option>
              {months.map(month => (
                <option key={month} value={month}>{month}月</option>
              ))}
            </select>
            
            <select 
              name="appearanceDay"
              value={formData.appearanceDay}
              onChange={handleChange}
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
            所属事務所<span className="text-red-600">*</span>
          </label>
          <input 
            type="text" 
            name="agency"
            value={formData.agency}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0167CC]"
            required
          />
        </div>
        
        <div>
          <label className="block text-gray-700 font-bold mb-2">
            担当者名<span className="text-red-600">*</span>
          </label>
          <input 
            type="text" 
            name="managerName"
            value={formData.managerName}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0167CC]"
            required
          />
        </div>
        
        <div>
          <label className="block text-gray-700 font-bold mb-2">
            メールアドレス<span className="text-red-600">*</span>
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
            応募の動機<span className="text-red-600">*</span>
          </label>
          <textarea 
            name="motivation"
            value={formData.motivation}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0167CC] h-32"
            required
          />
        </div>
        
        <div className="text-center pt-4">
          <button 
            type="submit"
            className="inline-flex items-center justify-center bg-[#0167CC] hover:bg-[#0156a5] text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
          >
            応募する
          </button>
        </div>
      </form>
    </div>
  );
};

export default GuestApplicationForm;
