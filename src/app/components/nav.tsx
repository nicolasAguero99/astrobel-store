export default function Nav() {
  return (
    <header className="absolute top-0 w-full max-w-[1200px] mx-auto">
      <nav className="flex justify-between py-6">
        <div>
          <span>Astrobel</span>
        </div>
        <div>
          <ul className="flex gap-4">
            <li>Inicio</li>
            <li>Tienda</li>
          </ul>
        </div>
      </nav>
    </header>
  )
}