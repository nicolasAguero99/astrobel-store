// Constants
import { ASTRAL_CARDS, DEFAULT_MSG, ID_CARD_CUSTOMED, WPP_NUMBER } from '@/constants/constants'

// Components
import Nav from '@/app/components/nav'

export default function Id({ params }: { params: { id: string } }) {
  const { id } = params
  const astralCard = ASTRAL_CARDS.find(cards => cards.id === id)
  if (!astralCard) return <p>Carta no encontrada</p>
  const { name, price, description, keyPoints, image } = astralCard
  const formattedPrice = new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(price)

  return (
    <>
      <Nav />
      <main className="flex max-w-[1200px] max-[780px]:flex-col h-screen mx-auto px-10 min-[420px]:px-16 lg:px-28 gap-y-10 gap-x-28 justify-center items-center custom-bg">
        <div className='fixed left-[-110%] right-0 max-h-screen overflow-y-hidden flex justify-center items-center -z-10'>
          <img className='w-[1100px] blur-sm' src="/images/flash-bg.png" alt="Destello ilustración" />
        </div>
        <div className='max-[300px]:hidden relative w-[150px] min-[620px]:w-[200px] tablet:w-[250px] lg:w-[350px] h-[250px] tablet:h-[350px] lg:h-[480px] xl:h-[450px] max-[520px]:mt-[350px] mt-[200px] min-[780px]:mt-0 astral-card'>
          <img className='tablet:absolute top-0 left-0 drop-shadow-2xl max-tablet:animate-floatTop tablet:custom-single-front-card' src={`/images/${image}`} alt={name} />
          <img className='max-tablet:hidden absolute top-0.5 -left-0.5 drop-shadow-2xl custom-single-back-card' src={`/images/card-dorsal.png`} alt='carta astral dorsal' />
        </div>
        <div className="w-full min-[780px]:w-1/2 xl:w-fit flex flex-col gap-6 max-tablet:pb-10">
          <h1 className="text-2xl min-[420px]:text-3xl table:text-4xl font-semibold w-fit">{name}</h1>
          <small className="text-xl min-[420px]:text-2xl tablet:text-3xl font-medium">{ID_CARD_CUSTOMED !== id ? formattedPrice : `Desde: ${formattedPrice}`}</small>
          <p className='xl:w-[520px] text-sm min-[420px]:text-base lg:text-lg text-black min-[780px]:text-gray-500'>{description}</p>
          <ul className='flex flex-col gap-2'>
            {
              keyPoints.length >= 1 && keyPoints.map((point, index) => (
                <li key={index} className='flex items-center gap-2'>
                  <span className='text-sm lg:text-base'>🔮</span>
                  <span className='text-sm lg:text-base font-medium'>{point}</span>
                </li>
              ))
            }
          </ul>
          <a href={`https://api.whatsapp.com/send?phone=${WPP_NUMBER}&text=${DEFAULT_MSG} ${name}.`} target='_blank' className='relative bg-primary text-white text-base tablet:text-lg font-medium px-4 py-2 rounded-lg w-fit transition-transform ease-out duration-500 hover:scale-110 custom-hero-button'><span className='max-miniMobile:hidden'>¿Te interesa?</span> Chateemos</a>
        </div>
      </main>
    </>
  )
}