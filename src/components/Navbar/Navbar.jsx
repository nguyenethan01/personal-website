import { WeatherWidget } from './WeatherWidget'
import { LocationTimeWidget } from './LocationTimeWidget'

export function Navbar() {
  return (
    <nav className="sticky top-0 z-50 w-full bg-white shadow-md">
      <div className="container mx-auto px-4 py-4 flex items-center">
        <div className="font-bold">Logo</div>
        <div className="flex gap-4 ml-auto items-center">
        <WeatherWidget />
          <LocationTimeWidget />
          <a href="#" className="hover:text-blue-600">Home</a>
          <a href="#" className="hover:text-blue-600">About</a>
          <a href="#" className="hover:text-blue-600">Contact</a>
        </div>
      </div>
    </nav>
  )
} 