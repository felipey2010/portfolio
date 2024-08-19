'use client'
import { useState, useEffect } from 'react'
import { IoTimeOutline } from 'react-icons/io5'

export default function Clock() {
  const [time, setTime] = useState('00:00')

  function getCurrentTime() {
    let currentTime = new Date().toLocaleTimeString('en-US', {
      hourCycle: 'h24',
      hour: '2-digit',
      minute: '2-digit',
    })
    setTime(currentTime)
  }

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      getCurrentTime()
    }, 1000)
    return () => clearTimeout(timeoutId)
  }, [time])

  return (
    <div className="flex items-center gap-1 text-foreground">
      <IoTimeOutline className="w-4 h-4" />
      <p className=" text-sm">{time}</p>
    </div>
  )
}
