import { CustomInput, CustomLabel } from '@components/atoms'
import dollar from '@/public/assets/icon-dollar.svg'

const InputProps = () => {
  return (
    <div className='flex flex-col gap-1 text-xl text-veryDarkCyan'>
      <CustomLabel text='Bill' />
      <CustomInput
        src={dollar}
        width={11}
        height={11}
        alt='dollar'
        placeholder='0'
        type='bill'
      />
    </div>
  )
}

export default InputProps
