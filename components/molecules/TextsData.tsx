import { ShowText } from '@components/atoms'

const TextsData = () => {
  return (
    <section className='flex flex-col gap-5'>
      <ShowText text='Total amount' price='4.27' />
      <ShowText text='Total' price='32.79' />
    </section>
  )
}

export default TextsData
