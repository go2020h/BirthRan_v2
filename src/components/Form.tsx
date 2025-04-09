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

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
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
      const birthDate = `${formData.birthMonth}月${formData.birthDay}日`;
      
      // 改行を<br>タグに変換
      const formattedMessage = formData.message.replace(/\n/g, '<br>');
      
      // 最終的なフォーマット
      const formattedContent = [
        `【誕生日】${birthDate}`,
        `【投票する方のお名前】${formData.recipientName}`,
        `【送信者名】${formData.senderName}`,
        `【メールアドレス】${formData.email}`,
        `【誕生日愛メッセージ】`,
        formattedMessage || 'メッセージなし'
      ].join('<br>');

      // Webhookに送信
      const response = await fetch('https://hook.us1.make.com/d28elr1h8jvz7fwlrmm9rxs8f9tdx4o0', {
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
        birthMonth: '',
        birthDay: '',
        recipientName: '',
        senderName: '',
        email: '',
        message: ''
      });
    } catch (error) {
      console.error('エラー:', error);
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  // 月と日の選択肢を生成
  const months = Array.from({ length: 12 }, (_, i) => i + 1);
  const days = Array.from({ length: 31 }, (_, i) => i + 1);

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-[#1a3a6c] mb-6 text-center">バスランに投票する</h2>
      
      <div className="bg-[#f8f9fa] p-4 rounded-lg mb-6 border-l-4 border-[#0167CC]">
        <p className="text-gray-700 font-bold">【注意事項】1投票＝大切な人1人に対し重複投票しても1通しかカウントされません。あらかじめご了承ください。</p>
      </div>
      
      {submitSuccess && (
        <div className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative mb-6" role="alert">
          <strong className="font-bold">メッセージが送信されました！</strong>
          <span className="block sm:inline"> ありがとうございます。あなたの愛メッセージが届きました。</span>
        </div>
      )}

      {submitError && (
        <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative mb-6" role="alert">
          <strong className="font-bold">エラーが発生しました。</strong>
          <span className="block sm:inline"> 後ほど再度お試しください。</span>
        </div>
      )}
      
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
            ② 大切な人（投票するお相手）のお名前を教えてください<span className="text-red-600">*</span>
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
            <p className="text-sm font-normal mt-1 text-gray-600">※『バスラン』内で読み上げる可能性があります。あらかじめご了承ください。</p>
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
            disabled={isSubmitting}
            className={`inline-flex items-center justify-center ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-[#0167CC] hover:bg-[#0156a5]'} text-white font-bold py-3 px-8 rounded-lg transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105`}
          >
            {isSubmitting ? '送信中...' : '送信する'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
