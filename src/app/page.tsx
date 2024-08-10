// Components
import Nav from './components/nav'
import MainSection from './components/main-section'
import StoreSection from './components/store/store-section'
import Footer from './components/footer/footer'

export default function Home() {
  return (
    <div>
      <div className='mx-auto max-w-[1200px]'>
        <Nav isHome />
        <MainSection />
        <StoreSection />
      </div>
      <Footer />
    </div>
  )
}
