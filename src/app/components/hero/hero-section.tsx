import Image from 'next/image'

export default function HeroSection() {
  return (
    <div className="flex max-tablet:flex-col-reverse justify-between items-end gap-20 tablet:gap-4 mx-6">
      <div className='absolute inset-0 m-auto flex justify-center items-center -z-10'>
        <img className='w-[50vw] blur-sm' src="/images/flash-bg.png" alt="Destello ilustración" />
      </div>
      <div className='tablet:flex-1 tablet:w-1/2 max-tablet:px-8 max-tablet:mx-auto max-tablet:relative max-tablet:top-10 flex flex-col gap-6 max-tablet:items-center max-tablet:text-center'>
        <h1 className='text-5xl xl:text-6xl font-bold leading-snug'>Pedazo de titulo mega <span className='text-primary'>epicardium</span></h1>
        <p className='text-xl xl:text-2xl font-medium w-3/4'>Requete pedazo de descripcion increible mega bum chacalaca bum</p>
        <button className='relative bg-primary text-white text-lg xl:text-xl font-medium px-4 py-2 rounded-lg w-fit border-transparent border-2 ring-offset-0 ring-primary ring-2 hover:ring-offset-4 hover:bg-white hover:border-primary hover:text-primary transition-all ease-out duration-300'>Ver lecturas</button>
      </div>
      <div className='tablet:flex-1 flex justify-center items-center max-tablet:w-full max-tablet:relative max-tablet:top-10'>
        <div className='relative flex justify-center gap-4 [&>img]:relative [&>img]:w-[180px] xl:[&>img]:w-[225px] [&>img]:object-cover'>
          <img className='max-tablet:left-20 top-6 left-24 xl:left-28 rotate-[-10deg] animate-floatLeft' src="/images/card-2.png" alt="carta astral" />
          <img className='max-tablet:-top-12 -top-16 xl:-top-20 left-0 -translate-y-4 z-10 animate-floatTop' src="/images/card-4.png" alt="carta astral" />
          <img className='max-tablet:-left-20 top-6 -left-24 xl:-left-28 rotate-[10deg] animate-floatRight' src="/images/card-3.png" alt="carta astral" />
        </div>
      </div>
    </div>
  )
}