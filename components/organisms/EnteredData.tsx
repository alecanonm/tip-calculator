import { InputCantPeople, InputProps, Tips } from '@components/molecules'
const EnteredData = () => {
  return (
    <section className='flex flex-col gap-6'>
      <InputProps />
      <Tips />
      <InputCantPeople />
    </section>
  )
}

export default EnteredData
