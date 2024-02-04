import { EnteredData, ShowData } from '@components/organisms'
const Home = () => {
  return (
    <div className='flex flex-col justify-center items-center gap-10'>
      <h1 className='text-darkGrayishCyan tracking-[10px] flex flex-col'>
        <span>SPLI</span>
        <span>TTER</span>
      </h1>
      <section className='bg-white p-8 flex-col gap-5   flex sm:flex-row rounded-2xl '>
        <EnteredData />
        <ShowData />
      </section>
    </div>
  )
}

export default Home
