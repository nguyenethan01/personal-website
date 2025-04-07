import { WeatherWidget } from './WeatherWidget'
import { LocationTimeWidget } from './LocationTimeWidget'

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="flex items-center justify-between px-2 py-4">
        <div className="flex gap-4 items-center">
          <WeatherWidget />
          <LocationTimeWidget />
        </div>
        <div className="flex gap-4 items-center">
          <a href="/" className="hover:text-blue-600">Home</a>
          <a href="/photos" className="hover:text-blue-600">Photos</a>
          <a href="#" className="hover:text-blue-600">About</a>
          <a href="#" className="hover:text-blue-600">Contact</a>
          <Logo />
        </div>
      </div>
    </nav>
  )
} 

const Logo = () => (
  <img 
    src="/images/logo.png"
    alt="Cute Blue Character Logo"
    className="
      w-12 
      h-12 
      rounded-full 
      border-2 
      border-gray-200 
      object-cover
      hover:scale-110
      transition-transform
      duration-200
      cursor-pointer
    "
  />
);