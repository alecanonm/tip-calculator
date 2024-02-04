'use client'

import { useTipsContext } from '@/context/TipsContext'
import Image from 'next/image'
import React from 'react'

type CustomInputProps = {
  src: string
  alt: string
  type: string
  width: number
  height: number
  placeholder: string
}

const CustomInput = ({
  src,
  alt,
  width,
  height,
  placeholder,
  type,
}: CustomInputProps) => {
  const { setBill, setNumberPeople, bill, numberPeople } = useTipsContext()

  const handleInputChange = function handleInputChange(
    e: React.ChangeEvent<HTMLInputElement>,
  ) {
    if (type == 'bill') setBill(Number(e.target.value))
    if (type == 'people') setNumberPeople(Number(e.target.value))
  }
  return (
    <div className='relative'>
      <div className='absolute inset-y-0  flex items-center pl-4'>
        <Image src={src} alt={alt} width={width} height={height} />
      </div>
      <input
        onChange={handleInputChange}
        value={type == 'bill' ? bill : numberPeople}
        className='sm:w-[310px] w-full  rounded-sm pr-3 text-right p-1 outline-none focus:ring-[1.5px] focus:ring-strongCyan cursor-pointer bg-veryLightGrayishCyan'
        placeholder={placeholder}
      />
    </div>
  )
}

export default CustomInput
