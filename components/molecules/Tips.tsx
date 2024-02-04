import { Tip, CustomLabel } from '@/components/atoms'

const Tips = () => {
  return (
    <section className='flex flex-col gap-3 w-full'>
      <CustomLabel text='Select Tip %' />
      <div className='flex flex-wrap gap-3 max-w-sm'>
        <Tip text='5' />
        <Tip text='10' />
        <Tip text='15' />
        <Tip text='25' />
        <Tip text='50' />

        <input
          className='rounded-md placeholder:text-darkGrayishCyan md:w-24 w-[140px] pr-3 text-right  outline-none focus:ring-[1.5px] focus:ring-strongCyan cursor-pointer bg-veryLightGrayishCyan'
          type='text'
          placeholder='Custom'
        />
      </div>
    </section>
  )
}

export default Tips
