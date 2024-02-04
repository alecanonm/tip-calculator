import { TextsData } from '@components/molecules'
import { Reset } from '@components/atoms'

const ShowData = () => {
  return (
    <aside className='bg-veryDarkCyan p-5 flex flex-col justify-between rounded-xl '>
      <TextsData />
      <Reset />
    </aside>
  )
}

export default ShowData
