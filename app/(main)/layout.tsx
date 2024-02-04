import React from 'react'

const MainLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className='flex flex-col flex-grow justify-center items-center'>
      {children}
    </main>
  )
}

export default MainLayout
