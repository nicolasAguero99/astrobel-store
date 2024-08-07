import { ASTRAL_CARDS } from "@/constants/constants";

export default function StoreSection() {
  return (
    <section className="flex flex-col gap-4 h-screen items-center justify-center">
      <div className="flex flex-col gap-4 text-center">
        <h2 className="text-4xl font-bold">¿Qué lectura te <span className="text-primary">gustaría</span> hacer?</h2>
        <p className="text-xl w-2/3 m-auto">Las lecturas son profundas y completamente personalizadas para vos.</p>
      </div>
      <div className="flex justify-center items-center gap-14 flex-wrap my-6">
        {
          ASTRAL_CARDS.map(({ id, name, price, description, image }) => {
            const formattedPrice = new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS' }).format(price)
            return (
              <div key={id} className="flex flex-col gap-2">
                <img className="w-40" src={`/images/${image}`} alt={name} />
                <h3 className="text-xl font-semibold w-36 overflow-x-hidden whitespace-nowrap text-ellipsis">{name}</h3>
                <span className="font-medium text-gray-400">{formattedPrice}</span>
                <a href={`/id/${id}`} className="text-primary font-semibold underline">Ver lectura</a>
              </div>
            )
          })
        }
      </div>
    </section>
  )
}