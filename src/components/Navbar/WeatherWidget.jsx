import { useState, useEffect } from 'react'

export function WeatherWidget() {
  const [weather, setWeather] = useState(null)
  const [error, setError] = useState(null)
  const WEATHER_API_KEY = import.meta.env.VITE_WEATHER_API_KEY
  const city = 'Seattle'

  useEffect(() => {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${WEATHER_API_KEY}&units=imperial`)
      .then(res => {
        if (!res.ok) throw new Error('Weather API error')
        return res.json()
      })
      .then(data => {
        setWeather({
          description: data.weather[0].description,
          icon: `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`
        })
      })
      .catch(err => setError(err.message))
  }, [])

  if (error) return <span className="text-red-500">{error}</span>
  if (!weather) return null

  return (
    <div className="flex items-center gap-2">
      <img src={weather.icon} alt="weather icon" className="w-8 h-8" />
      <span className="text-gray-600">{weather.description}</span>
    </div>
  )
} 