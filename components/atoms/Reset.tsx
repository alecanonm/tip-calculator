'use client'

import { useTipsContext } from '@/context/TipsContext'

const Reset = () => {
  const {
    setBill,
    setNumberPeople,
    setSelectTip,
    bill,
    numberPeople,
    selectTip,
  } = useTipsContext()

  const handleClick = function reset() {
    setBill(0)
    setNumberPeople(0)
    setSelectTip(0)
  }

  const display = ` bg-strongCyan mx-1 mt-10 hover:bg-lightGrayishCyan p-2 text-veryDarkCyan rounded-md ${bill == 0 && numberPeople == 0 && selectTip == 0 && 'text-teal-950 opacity-20'}`

  return (
    <button disabled={bill == 0} onClick={handleClick} className={display}>
      Reset
    </button>
  )
}

export default Reset
