// Components
import Nav from './components/nav'
import MainSection from './components/main-section'
import StoreSection from './components/store/store-section'

export default function Home() {
  return (
    <div className='mx-auto max-w-[1200px]'>
      <Nav />
      <MainSection />
      <StoreSection />
    </div>
  )
}
