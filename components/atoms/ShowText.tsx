'use client'

import { useTipsContext } from '@/context/TipsContext'

const ShowText = ({ text, type }: { text: String; type: String }) => {
  const { bill, numberPeople, selectTip } = useTipsContext()

  const totalTip =
    numberPeople !== 0
      ? ((bill * selectTip) / 100 / numberPeople || 0).toFixed(2)
      : '0.00'

  const totalPay =
    numberPeople !== 0
      ? (bill / numberPeople + Number(totalTip) || 0).toFixed(2)
      : '0.00'

  return (
    <div className='text-black flex items-center justify-between gap-20 '>
      <p className='flex flex-col text-sm text-white'>
        <span>{text}</span>
        <span className='text-xs text-grayishCyan'>/ person</span>
      </p>
      <span className='text-4xl text-strongCyan'>
        ${type == 'amount' ? totalTip : totalPay}
      </span>
    </div>
  )
}

export default ShowText
