import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Script from 'next/script';

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "バスラン - ウィークリー・バースデー・ランキング",
  description: "毎日が誰かの誕生日 最もバースデー愛メッセージが贈られたのは誰なのか 大好きな人、大切なひとが生まれた記念日を一緒にお祝いしよう",
  icons: {
    icon: "/favicon.ico",
  },
  // OGP設定
  openGraph: {
    title: "バスラン - ウィークリー・バースデー・ランキング",
    description: "毎日が誰かの誕生日 最もバースデー愛メッセージが贈られたのは誰なのか 大好きな人、大切なひとが生まれた記念日を一緒にお祝いしよう",
    url: "https://birthran.jp/",
    siteName: "バスラン - ウィークリー・バースデー・ランキング",
    images: [
      {
        url: "/ogp.jpg",  // 表示するOGP画像
        width: 1200,
        height: 630,
        alt: "バスラン - ウィークリー・バースデー・ランキング",
      },
    ],
    locale: "ja_JP",
    type: "website",
  },
  // Twitter Card
  twitter: {
    card: "summary_large_image",
    title: "バスラン - ウィークリー・バースデー・ランキング",
    description: "毎日が誰かの誕生日 最もバースデー愛メッセージが贈られたのは誰なのか 大好きな人、大切なひとが生まれた記念日を一緒にお祝いしよう",
    images: ["/ogp.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja" className="scroll-smooth">
      <head>
        {/* Google Analytics */}
        <Script
          src="https://www.googletagmanager.com/gtag/js?id=G-6Y9Z9M5ED9"
          strategy="afterInteractive"
        />
        <Script id="google-analytics" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', 'G-6Y9Z9M5ED9');
          `}
        </Script>
        {/* Microsoft Clarity */}
        <Script id="microsoft-clarity" strategy="afterInteractive">
          {`
            (function(c,l,a,r,i,t,y){
                c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
            })(window, document, "clarity", "script", "qxs616s8op");
          `}
        </Script>
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col m-0 p-0 overflow-x-hidden`}>
        <Header />
        <main className="flex-grow w-full"> {/* パディングを使用しない */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
