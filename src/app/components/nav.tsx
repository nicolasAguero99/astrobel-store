export default function Nav ({ isHome = false }: { isHome?: boolean }) {
  const urlStarts = isHome ? '#' : '/#'

  return (
    <header className="absolute top-0 w-full max-w-[1200px] mx-auto px-6">
      <nav className="flex justify-between items-end py-6">
        <a href="/">
          <img src="/icons/astrobel-logo.svg" alt="Astrobel logo" />
        </a>
        <div>
          <ul className="max-mobile:hidden flex gap-8 text-lg font-medium hover:[&>li]:opacity-50 [&>li]:cursor-pointer">
            <li><a href={`${urlStarts}home`}>Inicio</a></li>
            <li><a href={`${urlStarts}store`}>Tienda</a></li>
          </ul>
        </div>
      </nav>
    </header>
  )
}