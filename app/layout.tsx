import { Space_Mono } from 'next/font/google'
import type { Metadata } from 'next'
import React from 'react'
import '../styles/globals.css'
import { TipsProvider } from '@/context/TipsContext'

const space_mono = Space_Mono({
  subsets: ['latin'],
  display: 'swap',
  weight: '700',
})

export const metadata: Metadata = {
  title: 'Frontend Mentor | Tip calculator',
  description: 'A challenge from Frontend Mentor',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='en'>
      <body className={space_mono.className}>
        <div className='lg:h-screen md:h-screen flex flex-col p-8 bg-lightGrayishCyan'>
          <TipsProvider>{children}</TipsProvider>
        </div>
      </body>
    </html>
  )
}
