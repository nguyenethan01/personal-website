import { useState, useEffect } from 'react'

export function LocationTimeWidget() {
  const [time, setTime] = useState(
    new Date().toLocaleTimeString('en-US', {
      timeZone: 'America/Los_Angeles',
      hour12: false,
      hour: 'numeric',
      minute: 'numeric',
    })
  )

  useEffect(() => {
    const timer = setInterval(() => {
      setTime(new Date().toLocaleTimeString('en-US', {
        timeZone: 'America/Los_Angeles',
        hour12: false,
        hour: 'numeric',
        minute: 'numeric',
      }))
    }, 1000)

    return () => clearInterval(timer)
  }, [])

  return (
    <div className="flex flex-col items-center">
      <span className="text-gray-600">{time}</span>
      <span className="text-bold text-sm">Seattle, WA</span>
    </div>
  )
}