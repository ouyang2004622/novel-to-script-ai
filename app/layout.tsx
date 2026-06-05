import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "小说转剧本创作台",
  description: "面向小说改编场景的结构化剧本创作工具",
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
