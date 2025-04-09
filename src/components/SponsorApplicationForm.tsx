import React, { useState } from 'react';

const SponsorApplicationForm: React.FC = () => {
  const [formData, setFormData] = useState({
    companyName: '',
    contactName: '',
    email: '',
    productName: '',
    productUrl: '',
    productDescription: '',
    prPoints: ''
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
      // 改行を<br>タグに変換
      const formattedProductDescription = formData.productDescription.replace(/\n/g, '<br>');
      const formattedPrPoints = formData.prPoints.replace(/\n/g, '<br>');
      
      // 最終的なフォームデータ
      const formattedContent = [
        `【会社名】${formData.companyName}`,
        `【担当者名】${formData.contactName}`,
        `【メールアドレス】${formData.email}`,
        `【商品名】${formData.productName}`,
        `【公式WEB】${formData.productUrl}`,
        `【レコメンド】`,
        formattedProductDescription,
        `【ゲストへのPRポイント】`,
        formattedPrPoints
      ].join('<br>');

      // Webhookに送信
      const response = await fetch('https://hook.us1.make.com/k1nxzkav2gmyjhx6wp07wsyxicm5mwyn', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          content: formattedContent
        })
      });

      if (!response.ok) {
        throw new Error('送信に失敗しました。後ほど再度お試しください。');
      }

      console.log('送信成功:', formData);
      setSubmitSuccess(true);
      
      // フォームをリセット
      setFormData({
        companyName: '',
        contactName: '',
        email: '',
        productName: '',
        productUrl: '',
        productDescription: '',
        prPoints: ''
      });
    } catch (error) {
      console.error('エラー:', error);
      setSubmitError(true);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="max-w-2xl mx-auto">
      <h2 className="text-2xl font-bold text-[#1a3a6c] mb-6 text-center">スポンサー応募フォーム</h2>
      
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
            会社名<span className="text-red-600">*</span>
          </label>
          <input 
            type="text" 
            name="companyName"
            value={formData.companyName}
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
            name="contactName"
            value={formData.contactName}
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
            商品名<span className="text-red-600">*</span>
          </label>
          <input 
            type="text" 
            name="productName"
            value={formData.productName}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0167CC]"
            required
          />
        </div>
        
        <div>
          <label className="block text-gray-700 font-bold mb-2">
            公式WEB<span className="text-red-600">*</span>
          </label>
          <input 
            type="url" 
            name="productUrl"
            value={formData.productUrl}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0167CC]"
            required
          />
        </div>
        
        <div>
          <label className="block text-gray-700 font-bold mb-2">
            レコメンド<span className="text-red-600">*</span>
          </label>
          <textarea 
            name="productDescription"
            value={formData.productDescription}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0167CC] h-32"
            required
          />
        </div>
        
        <div>
          <label className="block text-gray-700 font-bold mb-2">
            ゲストへのPRポイント
          </label>
          <textarea 
            name="prPoints"
            value={formData.prPoints}
            onChange={handleChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0167CC] h-32"
          />
        </div>
        
        <div className="pt-4">
          <button 
            type="submit"
            disabled={isSubmitting}
            className={`w-full bg-[#0167CC] hover:bg-[#0155a8] text-white font-bold py-3 px-4 rounded-md transition-colors duration-300 disabled:bg-gray-400`}
          >
            {isSubmitting ? '送信中...' : '応募する'}
          </button>
        </div>
      </form>
    </div>
  );
};

export default SponsorApplicationForm;
