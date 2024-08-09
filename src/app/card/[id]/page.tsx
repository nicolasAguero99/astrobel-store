// Constants
import { ASTRAL_CARDS } from '@/constants/constants'

export default function Id({ params }: { params: { id: string } }) {
  const { id } = params
  const astralCard = ASTRAL_CARDS.find(cards => cards.id === id)
  if (!astralCard) return <p>Carta no encontrada</p>
  const { name, price, description, keyPoints, image } = astralCard
  const formattedPrice = new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(price)

  return (
    <main className="max-w-[1200px] h-screen mx-auto px-28 flex gap-28 justify-center items-center custom-bg">
      {/* <div className='absolute top-0 left-0 -z-10 w-screen h-screen'>
        <div className='absolute top-0 left-0 size-full bg-white/70 pointer-events-none'></div>
      </div> */}
      <div className='absolute left-[-110%] right-0 max-h-screen overflow-y-hidden flex justify-center items-center -z-10'>
        <img className='w-[1100px] blur-sm' src="/images/flash-bg.png" alt="Destello ilustración" />
      </div>
      <div className='relative w-[350px] h-[400px] astral-card'>
        <img className='absolute top-0 left-0 w-[300px] drop-shadow-2xl custom-single-front-card' src={`/images/${image}`} alt={name} />
        <img className='absolute top-0.5 -left-0.5 w-[300px] drop-shadow-2xl custom-single-back-card' src={`/images/card-dorsal.png`} alt='carta astral dorsal' />
      </div>
      <div className="w-fit flex flex-col gap-6">
        <h1 className="text-4xl font-semibold w-fit">Carta astral: {name}</h1>
        <small className="text-3xl">{formattedPrice}</small>
        <p className='w-[520px] text-lg text-gray-500'>{description}</p>
        <ul className='flex flex-col gap-2'>
          {
            keyPoints.length >= 1 && keyPoints.map((point, index) => (
              <li key={index} className='flex items-center gap-2'>
                <span>🔮</span>
                <span className='text-base font-medium'>{point}</span>
              </li>
            ))
          }
        </ul>
        <button className='relative bg-primary text-white text-lg font-medium px-4 py-2 rounded-lg w-fit transition-transform ease-out duration-500 hover:scale-110 custom-hero-button'>¿Te interesa? Chateemos</button>
      </div>
    </main>
  )
}