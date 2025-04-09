import React, { useState, useRef } from 'react';
// supabaseu306fu4f7fu7528u3055u308cu3066u3044u306au3044u306eu3067u30a4u30f3u30ddu30fcu30c8u3092u524au9664
import { supabaseAdmin } from '@/app/utils/supabase';

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

  // 画像アップロード用の状態
  const [productImages, setProductImages] = useState<File[]>([]);
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [submitError, setSubmitError] = useState(false);

  // デバッグ情報を追加する関数
  const addDebugInfo = (info: string) => {
    console.log(info); // コンソールにログを出力
    // setDebugInfo(prev => [...prev, `${new Date().toLocaleTimeString()}: ${info}`]);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  // 画像選択時の処理
  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const files = e.target.files;
    if (!files) return;

    // 最大3枚までの制限
    const newFiles: File[] = [];
    const newUrls: string[] = [];
    
    for (let i = 0; i < files.length; i++) {
      if (productImages.length + newFiles.length >= 3) break;
      
      const file = files[i];
      // 5MB以下の制限
      if (file.size <= 5 * 1024 * 1024) {
        newFiles.push(file);
        // FileReaderを使用せずにURL.createObjectURLを使用
        newUrls.push(URL.createObjectURL(file));
      } else {
        alert('画像サイズは5MB以下にしてください。');
      }
    }
    
    setProductImages([...productImages, ...newFiles]);
    setImageUrls([...imageUrls, ...newUrls]);
  };

  // 画像削除の処理
  const handleRemoveImage = (index: number) => {
    const newImages = [...productImages];
    const newUrls = [...imageUrls];
    
    // URLの解放
    URL.revokeObjectURL(newUrls[index]);
    
    newImages.splice(index, 1);
    newUrls.splice(index, 1);
    
    setProductImages(newImages);
    setImageUrls(newUrls);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitError(false);
    setSubmitSuccess(false);
    setIsSubmitting(true);
    
    try {
      // デバッグ情報をクリア
      // setDebugInfo([]);
      
      if (productImages.length === 0) {
        throw new Error('商品の写真を少なくとも1枚アップロードしてください');
      }
      
      addDebugInfo('フォーム送信開始');
      
      // 画像アップロード
      const uploadedImageUrls: string[] = [];
      
      if (productImages.length > 0) {
        try {
          // バケット名を指定
          const bucketName = 'birthran-images';
          
          // 画像をアップロード
          for (const file of productImages) {
            try {
              // 画像タイプをチェック
              const fileType = file.type;
              if (!fileType.startsWith('image/jpeg') && !fileType.startsWith('image/jpg') && !fileType.startsWith('image/png')) {
                addDebugInfo(`画像タイプエラー: ${fileType} - JPGタイプまたはPNGタイプのみ対応しています`);
                throw new Error('JPGタイプまたはPNGタイプのみ対応しています');
              }
              
              // ファイル名を生成
              const isJpg = fileType.startsWith('image/jpeg') || fileType.startsWith('image/jpg');
              const extension = isJpg ? 'jpg' : 'png';
              const fileName = `${Date.now()}-${Math.random().toString(36).substring(2, 15)}.${extension}`;
              // sponsor-productsコールを指定
              const filePath = `sponsor-products/${fileName}`;
              
              addDebugInfo(`アップロード開始: ${filePath}, タイプ: ${fileType}`);
              
              // 画像をアップロード
              const { data, error } = await supabaseAdmin.storage
                .from(bucketName)
                .upload(filePath, file, {
                  cacheControl: '3600',
                  upsert: true,
                  contentType: fileType // 画像タイプを指定
                });
                
              if (error) {
                addDebugInfo(`画像アップロードエラー: ${error.message}`);
                throw new Error(`画像アップロードエラー: ${error.message}`);
              }
              
              addDebugInfo(`アップロード成功: ${filePath}`);
              
              // 公開URLを取得
              const { data: signedData, error: signedError } = await supabaseAdmin.storage
                .from(bucketName)
                .createSignedUrl(filePath, 60 * 60 * 24 * 30); // 30日間有効
                
              if (signedError) {
                addDebugInfo(`公開URL取得エラー: ${signedError.message}`);
                throw new Error(`公開URL取得エラー: ${signedError.message}`);
              }
              
              if (signedData?.signedUrl) {
                uploadedImageUrls.push(signedData.signedUrl);
                addDebugInfo(`公開URL: ${signedData.signedUrl}`);
              } else {
                addDebugInfo('公開URL取得エラー');
                throw new Error('公開URL取得エラー');
              }
            } catch (fileError) {
              addDebugInfo(`ファイル処理エラー: ${fileError instanceof Error ? fileError.message : '不明なエラー'}`);
              throw fileError;
            }
          }
        } catch (uploadError) {
          addDebugInfo(`アップロードエラー: ${uploadError instanceof Error ? uploadError.message : '不明なエラー'}`);
          throw uploadError;
        }
      }
      
      // フォームデータを整形
      // 改行を<br>タグに変換
      const formattedProductDescription = formData.productDescription.replace(/\n/g, '<br>');
      const formattedPrPoints = formData.prPoints.replace(/\n/g, '<br>');
      
      // 画像URLを整形（URLのみを送信し、アンカータグは使用しない）
      let imageUrlsText = '画像なし';
      if (uploadedImageUrls.length > 0) {
        imageUrlsText = uploadedImageUrls.map((url, index) => 
          `【${index + 1}枚目】${url}`
        ).join('<br>');
      }

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
        formattedPrPoints,
        `【商品の写真】`,
        imageUrlsText
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
        throw new Error('送信に失敗しました。再度送信してください。');
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
      
      // 画像URLを解放してからリセット
      imageUrls.forEach(url => {
        URL.revokeObjectURL(url);
      });
      setProductImages([]);
      setImageUrls([]);
      
      // ファイル入力フィールドをリセット
      const fileInput = document.getElementById('productImages') as HTMLInputElement;
      if (fileInput) {
        fileInput.value = '';
      }
    } catch (error) {
      console.error('エラー:', error);
      setSubmitError(true);
      if (error instanceof Error) {
        addDebugInfo(`送信エラー: ${error.message}`);
      }
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
        
        <div>
          <label className="block text-gray-700 font-bold mb-2">
            商品の写真（最大3枚まで）
          </label>
          <input 
            type="file" 
            multiple
            id="productImages"
            onChange={handleImageChange}
            className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-[#0167CC]"
          />
          {imageUrls.length > 0 && (
            <div className="mt-2">
              {imageUrls.map((url, index) => (
                <div key={index} className="mb-2">
                  <img src={url} alt="商品の写真" className="w-full h-48 object-cover mb-2" />
                  <button 
                    type="button"
                    onClick={() => handleRemoveImage(index)}
                    className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                  >
                    削除
                  </button>
                </div>
              ))}
            </div>
          )}
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
