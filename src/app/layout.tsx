import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: '소소정 - 전통의 맛, 현대의 감각',
  description: '50년 전통의 한식 전문점, 소소정에서 정통 한식의 깊은 맛을 경험하세요.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ko">
      <body className={inter.className}>{children}</body>
    </html>
  )
}