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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitSuccess(false);
    setSubmitError(false);
    
    try {
      // フォームデータを整形
      const birthDate = `${formData.birthYear}年${formData.birthMonth}月${formData.birthDay}日`;
      const appearanceDate = `${formData.appearanceYear}年${formData.appearanceMonth}月${formData.appearanceDay}日`;
      
      // 改行を<br>タグに変換
      const formattedMotivation = formData.motivation.replace(/\n/g, '<br>');
      
      // 最終的なフォーマット
      const formattedContent = [
        `【名前】${formData.name}`,
        `【誕生日】${birthDate}`,
        `【ゲスト出演希望日】${appearanceDate}`,
        `【所属事務所】${formData.agency}`,
        `【担当者名】${formData.managerName}`,
        `【メールアドレス】${formData.email}`,
        `【応募の動機】`,
        formattedMotivation
      ].join('<br>');

      // Webhookに送信
      const response = await fetch('https://hook.us1.make.com/uihk0fyhk1aoyuao28dnpg3igwhkk4af', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: formattedContent
        })
      });

      if (!response.ok) {
        throw new Error('送信に失敗しました');
      }

      console.log('送信成功:', formData);
      setSubmitSuccess(true);
      
      // フォームをリセット
      setFormData({
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
    } catch (error) {
      console.error('エラー:', error);
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  // 月と日の選択肢を生成
  const years = Array.from({ length: 10 }, (_, i) => new Date().getFullYear() - 5 + i);
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-[#1a3a6c] mb-6 text-center">ゲスト応募フォーム</h2>
      
      {submitSuccess && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6" role="alert">
          <strong className="font-bold">応募が送信されました！</strong>
          <span className="block sm:inline"> こちらの内容で送信されました。担当者よりご連絡いたします。</span>
        </div>
      )}

      {submitError && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-6" role="alert">
          <strong className="font-bold">エラーが発生しました。</strong>
          <span className="block sm:inline"> 再度送信してください。</span>
        </div>
      )}
      
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
            disabled={isSubmitting}
            className={`inline-flex items-center justify-center ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#0167CC] hover:bg-[#0156a5]'} text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105`}
          >
            {isSubmitting ? '送信中...' : '応募する'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default GuestApplicationForm;
