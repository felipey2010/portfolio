'use client'
import { useState, useEffect } from 'react'
import { IoTimeOutline } from 'react-icons/io5'

export default function Clock() {
  const [time, setTime] = useState('')

  function getCurrentTime() {
    let currentTime = new Date().toLocaleTimeString('en-US', {
      hourCycle: 'h23',
      hour: '2-digit',
      minute: '2-digit',
    })
    setTime(currentTime)
  }

  useEffect(() => {
    getCurrentTime()

    const intervalId = setInterval(() => {
      getCurrentTime()
    }, 1000)
    return () => clearInterval(intervalId)
  }, [])

  return (
    <div className="flex items-center gap-1 text-foreground">
      <IoTimeOutline className="w-3 h-3" />
      <p className=" text-xs font-normal">{time}</p>
    </div>
  )
}
