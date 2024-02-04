import Image from 'next/image'

type CustomInputProps = {
  src: string
  alt: string
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
}: CustomInputProps) => {
  return (
    <div className='relative'>
      <div className='absolute inset-y-0  flex items-center pl-4'>
        <Image src={src} alt={alt} width={width} height={height} />
      </div>
      <input
        className='sm:w-[310px] w-full  rounded-sm pr-3 text-right p-1 outline-none focus:ring-[1.5px] focus:ring-strongCyan cursor-pointer bg-veryLightGrayishCyan'
        placeholder={placeholder}
      />
    </div>
  )
}

export default CustomInput
