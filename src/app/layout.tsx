import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "../components/Footer";
import Header from "../components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "バスラン",
  description: "毎日が誰かの誕生日 最もバースデー愛メッセージが贈られたのは誰なのか 大好きな人、大切なひとが生まれた記念日を一緒にお祝いしよう",
  icons: {
    icon: "/favicon.ico",
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
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css"
        />
        <link rel="icon" href="/favicon.ico" sizes="any" />
      </head>
      <body className={`${inter.className} min-h-screen flex flex-col m-0 p-0 overflow-x-hidden`}>
        <Header />
        <main className="flex-grow w-full md:pt-0 pt-16"> {/* PC表示ではパディングを使用しない */}
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
