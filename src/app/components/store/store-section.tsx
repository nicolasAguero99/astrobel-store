// Components
import AstralCards from "./astral-cards";

export default function StoreSection() {
  return (
    <section id='store' className="flex flex-col gap-4 tablet:my-20 items-center justify-center px-4 mb-8">
      <div className="flex flex-col gap-4 text-center mb-10">
        <h2 className="text-3xl xl:text-4xl font-bold">¿Qué lectura te <span className="text-primary">gustaría</span> hacer?</h2>
        <p className="text-lg xl:text-xl w-2/3 m-auto">Las lecturas son profundas y completamente personalizadas para vos.</p>
      </div>
      <AstralCards />
    </section>
  )
}