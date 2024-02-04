import { Space_Mono } from 'next/font/google'
import type { Metadata } from 'next'
import React from 'react'
import '../styles/globals.css'

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
        <div className='sm:h-screen flex flex-col p-8 bg-lightGrayishCyan'>
          {children}
        </div>
      </body>
    </html>
  )
}
