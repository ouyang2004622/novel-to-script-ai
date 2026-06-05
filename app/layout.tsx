import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AI 小说转剧本工具",
  description: "七牛云 x XEngineer 暑期实训营第三批次题目三 Web Demo",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="zh-CN">
      <body>{children}</body>
    </html>
  );
}
