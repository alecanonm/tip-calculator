import { ShowText } from '@components/atoms'

const TextsData = () => {
  return (
    <section className='flex flex-col gap-5'>
      <ShowText text='Tip amount' type='amount' />
      <ShowText text='Total' type='total' />
    </section>
  )
}

export default TextsData
