'use client'

import React, { createContext, useContext, useState } from 'react'

interface TipsContextProps {
  bill: number
  setBill: React.Dispatch<React.SetStateAction<number>>
  selectTip: number
  setSelectTip: React.Dispatch<React.SetStateAction<number>>
  numberPeople: number
  setNumberPeople: React.Dispatch<React.SetStateAction<number>>
}

const tipsContextDefaultValues: TipsContextProps = {
  bill: 0,
  setBill: () => {},
  selectTip: 0,
  setSelectTip: () => {},
  numberPeople: 0,
  setNumberPeople: () => {},
}

const TipsContext = createContext(tipsContextDefaultValues)

export const useTipsContext = () => useContext(TipsContext)

export const TipsProvider = ({ children }: { children: React.ReactNode }) => {
  const [bill, setBill] = useState(0)
  const [selectTip, setSelectTip] = useState(0)
  const [numberPeople, setNumberPeople] = useState(0)

  return (
    <TipsContext.Provider
      value={{
        bill,
        setBill,
        selectTip,
        setSelectTip,
        numberPeople,
        setNumberPeople,
      }}
    >
      {children}
    </TipsContext.Provider>
  )
}
