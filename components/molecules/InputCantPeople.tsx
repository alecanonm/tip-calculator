import { CustomInput, CustomLabel } from '@components/atoms'
import persona from '@/public/assets/icon-person.svg'

const InputCantPeople = () => {
  return (
    <div className='flex flex-col gap-1 text-xl text-veryDarkCyan'>
      <CustomLabel text='Number of people' />
      <CustomInput
        src={persona}
        width={11}
        height={11}
        alt='persona'
        placeholder='0'
        type='people'
      />
    </div>
  )
}

export default InputCantPeople
