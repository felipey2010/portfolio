'use client'
import { useEffect, useState } from 'react'
import { PiCalendarDotsThin } from 'react-icons/pi'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { Calendar } from './ui/calendar'
import { Button } from './ui/button'

function DateDisplay() {
  const [date, setDate] = useState({
    day: 0,
    month: 0,
    year: 0,
  })
  const currentDate = new Date()

  function getCurrentDate() {
    let date = new Date()

    setDate({
      day: date.getDate(),
      month: date.getMonth() + 1,
      year: date.getFullYear(),
    })
  }

  useEffect(() => {
    getCurrentDate()
    const intervalId = setInterval(() => {
      getCurrentDate()
    }, 60000)
    return () => clearInterval(intervalId)
  }, [])

  return (
    <Popover>
      <PopoverTrigger asChild>
        <Button
          size="sm"
          className="flex items-center gap-1 text-foreground bg-transparent border-none shadow-none p-0 hover:bg-transparent"
        >
          <PiCalendarDotsThin className="w-4 h-4" />
          <p className="min-w-fit text-sm flex items-center font-normal">{`${date.day.toString().padStart(2, '0')}-${date.month.toString().padStart(2, '0')}-${date.year}`}</p>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={currentDate}
          onSelect={() => {}}
          initialFocus
        />
      </PopoverContent>
    </Popover>
  )
}

export default DateDisplay
