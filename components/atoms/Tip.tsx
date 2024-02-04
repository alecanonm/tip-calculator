'use client'

import { useTipsContext } from '@/context/TipsContext'

const Tip = ({ text }: { text: String }) => {
  const { setSelectTip } = useTipsContext()

  const handleClick = function handleClick(): void {
    setSelectTip(Number(text))
  }

  return (
    <button
      onClick={handleClick}
      className='bg-veryDarkCyan text-white py-[7px] px-2 md:w-24 w-[140px] rounded-md hover:bg-strongCyan'
    >
      {text}%
    </button>
  )
}

export default Tip
