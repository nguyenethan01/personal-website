import { WeatherWidget } from './WeatherWidget'
import { LocationTimeWidget } from './LocationTimeWidget'
import { Link } from 'react-router-dom'

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="flex items-center justify-between px-2 py-4">
        <div className="flex gap-4 items-center">
          <WeatherWidget />
          <LocationTimeWidget />
        </div>
        <div className="flex gap-4 items-center">
          <Link to="/" className="hover:text-blue-600">Home</Link>
          <Link to="/photos" className="hover:text-blue-600">Photos</Link>
          <Link to="/about" className="hover:text-blue-600">About</Link>
          <Link to="/contact" className="hover:text-blue-600">Contact</Link>
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