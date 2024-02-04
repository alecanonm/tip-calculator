import { Metadata } from 'next'
import { Home } from '@/components/pages'

export const metadata: Metadata = {
  title: 'Frontend Mentor | Tip calculator',
  description: 'A challenge from Frontend Mentor',
}

const HomePage = () => <Home />

export default HomePage
