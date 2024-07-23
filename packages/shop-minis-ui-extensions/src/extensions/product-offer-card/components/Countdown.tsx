import {useEffect, useState} from 'react'
import {Text} from '@shopify/shop-minis-platform-sdk'

export function Countdown({
  expiresAt,
  isExpired,
  onExpiry,
}: {
  expiresAt: Date
  isExpired: boolean
  onExpiry: () => void
}) {
  const [expiresInMs, setExpiresInMs] = useState(
    expiresAt?.getTime() - Date.now()
  )

  useEffect(() => {
    if (expiresInMs && expiresInMs < 1000) {
      onExpiry()
      return
    }

    const interval = setInterval(() => {
      setExpiresInMs(expiresAt.getTime() - Date.now())
    }, 1000)

    return () => clearInterval(interval)
  }, [expiresAt, expiresInMs, onExpiry])

  if (!expiresInMs) return null

  const {days, hours, minutes, seconds} = countdown(expiresAt)

  const expirationMsg = () => {
    if (days) {
      if (days >= 7) return 'Expiring soon'
      return `${days} days left`
    }

    if (hours) {
      if (hours < 24)
        return `${hours.toString().padStart(2, '0')}:${minutes
          .toString()
          .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`
    } else {
      return `${minutes.toString().padStart(2, '0')}:${seconds
        .toString()
        .padStart(2, '0')}`
    }
  }

  return (
    <Text
      testID="countdown-mini"
      variant="bodyTitleLarge"
      color={isExpired ? 'foregrounds-subdued' : 'highlights-discounted'}
      style={{
        fontVariant: ['tabular-nums'],
      }}
    >
      {expirationMsg()}
    </Text>
  )
}

function countdown(futureDate: Date) {
  const currentDate = new Date()
  const timeDifference = futureDate.getTime() - currentDate.getTime()

  if (timeDifference <= 0) {
    return {
      hours: 0,
      minutes: 0,
      seconds: 0,
    }
  }

  const hours = Math.floor(timeDifference / (1000 * 60 * 60))
  const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60))
  const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000)
  const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24))

  return {
    hours,
    minutes,
    seconds,
    days,
  }
}
