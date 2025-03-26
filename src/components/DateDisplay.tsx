'use client'
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from '@/components/ui/popover'
import { useLanguage } from '@/components/providers/LanguageProvider'
import { useEffect, useState } from 'react'
import { PiCalendarDotsThin } from 'react-icons/pi'
import { Button } from './ui/button'
import { Calendar } from './ui/calendar'
import { enUS, ptBR } from 'date-fns/locale'

function DateDisplay() {
  const { language } = useLanguage()
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
          <PiCalendarDotsThin className="w-3 h-3" />
          <p className="min-w-fit text-xs flex items-center font-normal">{`${date.day.toString().padStart(2, '0')}-${date.month.toString().padStart(2, '0')}-${date.year}`}</p>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-auto p-0" align="start">
        <Calendar
          mode="single"
          selected={currentDate}
          onSelect={() => {}}
          initialFocus
          locale={language === 'en' ? enUS : ptBR}
        />
      </PopoverContent>
    </Popover>
  )
}

export default DateDisplay
