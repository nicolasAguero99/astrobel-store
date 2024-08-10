import Image from 'next/image'

export default function HeroSection() {
  return (
    <div className="flex max-tablet:flex-col-reverse justify-between items-end gap-20 tablet:gap-4 mx-6">
      <div className='absolute inset-0 m-auto flex justify-center items-center -z-10'>
        <img className='w-[50vw] blur-sm' src="/images/flash-bg.png" alt="Destello ilustración" />
      </div>
      <div className='tablet:flex-1 tablet:w-1/2 px-0 miniMobile:px-8 tablet:px-0 max-tablet:mx-auto max-tablet:relative mobile:top-16 max-tablet:top-10 flex flex-col gap-6 max-tablet:items-center max-tablet:text-center'>
        <h1 className='text-4xl min-[580px]:text-5xl xl:text-6xl font-bold leading-snug'>Pedazo de titulo mega <span className='custom-hero-text'>epicardium</span></h1>
        <p className='text-lg min-[580px]:text-xl xl:text-2xl font-medium tablet:w-3/4 text-pretty'>Requete pedazo de descripcion increible mega bum chacalaca bum</p>
        <a href='#store' className='relative bg-primary text-white text-base min-[580px]:text-lg xl:text-xl font-medium px-4 py-2 rounded-lg w-fit border-transparent border-[1px] ring-offset-0 ring-primary ring-[1px] hover:ring-offset-4 hover:bg-white hover:border-primary hover:text-primary transition-all ease-out duration-300'>Ver lecturas</a>
      </div>
      <div className='tablet:flex-1 flex justify-center items-center max-tablet:w-full max-tablet:relative max-tablet:top-10'>
        <div className='relative flex justify-center gap-4 [&>img]:relative max-mobile:[&>img]:w-[120px] [&>img]:w-[180px] xl:[&>img]:w-[225px] [&>img]:object-cover'>
          <img className='left-28 miniMobile:left-14 mobile:left-24 tablet:left-20 xl:left-28 top-0 miniMobile:top-6 rotate-[-10deg] animate-floatLeft' src="/images/card-2.png" alt="carta astral" />
          <img className='-top-8 mobile:-top-14 tablet:-top-12 xl:-top-20 left-0 -translate-y-4 z-10 animate-floatTop' src="/images/card-4.png" alt="carta astral" />
          <img className='-left-28 miniMobile:-left-14 mobile:-left-24 tablet:-left-20 xl:-left-28 top-0 miniMobile:top-6 rotate-[10deg] animate-floatRight' src="/images/card-3.png" alt="carta astral" />
        </div>
      </div>
    </div>
  )
}