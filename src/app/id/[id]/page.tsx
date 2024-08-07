// Constants
import { ASTRAL_CARDS } from '@/constants/constants'

export default function Id({ params }: { params: { id: string } }) {
  const { id } = params
  const astralCard = ASTRAL_CARDS.find(cards => cards.id === id)
  if (!astralCard) return <p>Carta no encontrada</p>
  const { name, price, description, image } = astralCard
  const formattedPrice = new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(price)

  return (
    <main className="max-w-[1200px] h-screen mx-auto px-28 flex gap-28 justify-center items-center">
      <div className='absolute bottom-[-95%] left-0 right-0 flex justify-center items-center -z-10'>
        <img className='w-[1100px] blur-sm' src="/images/flash-bg.png" alt="Destello ilustración" />
      </div>
      <div>
        <img className='w-[300px]' src={`/images/${image}`} alt={name} />
      </div>
      <div className="w-fit flex flex-col gap-6">
        <h1 className="text-4xl font-semibold w-fit">Carta astral: {name}</h1>
        <small className="text-3xl">{formattedPrice}</small>
        <p className='w-[520px] text-xl text-gray-500'>{description}</p>
        <button className='bg-primary text-white text-lg font-medium px-4 py-2 rounded-lg w-fit'>¿Te interesa? Chateemos</button>
      </div>
    </main>
  )
}