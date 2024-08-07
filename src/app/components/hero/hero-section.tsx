import Image from 'next/image'

export default function HeroSection() {
  return (
    <div className="flex justify-between items-end gap-4">
      <div className='absolute inset-0 m-auto flex justify-center items-center -z-10'>
        <img className='w-[50vw] blur-sm' src="/images/flash-bg.png" alt="Destello ilustración" />
      </div>
      <div className='flex-1 w-1/2 flex flex-col gap-6'>
        <h1 className='text-6xl font-bold leading-snug'>Pedazo de titulo mega <span className='text-primary'>epicardium</span></h1>
        <p className='text-2xl font-medium w-3/4'>Requete pedazo de descripcion increible mega bum chacalaca bum</p>
        <button className='bg-primary text-white text-xl font-medium px-4 py-2 rounded-lg w-fit'>Ver lecturas</button>
      </div>
      <div className='flex-1 flex justify-center items-center'>
        <div className='relative flex justify-center gap-4 [&>img]:relative [&>img]:w-[225px] [&>img]:object-cover'>
          <img className='top-6 left-28 rotate-[-10deg]' src="/images/card-2.png" alt="carta astral" />
          <img className='-top-20 left-0 -translate-y-4 z-10' src="/images/card-4.png" alt="carta astral" />
          <img className='top-6 -left-28 rotate-[10deg]' src="/images/card-3.png" alt="carta astral" />
        </div>
      </div>
    </div>
  )
}