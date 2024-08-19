import { useState, useEffect } from 'react'

interface BatteryStatus {
  batteryLevel: number | null
  charging: boolean | null
  isBatteryStatusAvailable: boolean
}

export function useBatteryStatus() {
  const [batteryStatus, setBatteryStatus] = useState<BatteryStatus>({
    batteryLevel: null,
    charging: null,
    isBatteryStatusAvailable: false,
  })

  useEffect(() => {
    async function getBattery() {
      if (navigator.getBattery) {
        const battery = await navigator.getBattery()

        const updateBatteryStatus = () => {
          setBatteryStatus({
            batteryLevel: battery.level * 100,
            charging: battery.charging,
            isBatteryStatusAvailable: true,
          })
        }

        updateBatteryStatus() // Set initial state

        battery.addEventListener('levelchange', updateBatteryStatus)
        battery.addEventListener('chargingchange', updateBatteryStatus)

        return () => {
          battery.removeEventListener('levelchange', updateBatteryStatus)
          battery.removeEventListener('chargingchange', updateBatteryStatus)
        }
      }
    }

    getBattery()
  }, [])

  return batteryStatus
}
