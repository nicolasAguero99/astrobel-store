// Constants
import { ASTRAL_CARDS } from "@/constants/constants";

export default function AstralCards () {
  return (
    <div className="grid grid-cols-1 min-[450px]:grid-cols-2 min-[650px]:grid-cols-3 min-[1080px]:grid-flow-col gap-12 custom-cards-container">
      {
        ASTRAL_CARDS.map(({ id, name, price, image }) => {
          const formattedPrice = new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(price)
          return (
            <a href={`/card/${id}`} key={id} className="flex flex-col gap-2 cursor-pointer transition-opacity ease-out duration-1000 custom-card">
              <img className='w-40 transition-opacity ease-out duration-1000' src={`/images/${image}`} alt={name} />
              <h3 className="text-xl font-semibold w-36 overflow-x-hidden whitespace-nowrap text-ellipsis">{name}</h3>
              <span className="font-medium text-gray-400">{formattedPrice}</span>
              <span className="text-primary font-semibold underline">Ver lectura</span>
            </a>
          )
        })
      }
    </div>
  )
}