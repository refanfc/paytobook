
'use client'

import { useEffect, useState } from 'react'
import { DynamicWidget, useDynamicContext } from '@dynamic-labs/sdk-react-core'
import { useBookWithUSDC } from '../lib/usdc'

export default function Home() {
  const { user } = useDynamicContext()
  const [booked, setBooked] = useState(false)
  const { book, isPending, isSuccess } = useBookWithUSDC('0xYourWalletAddress') // Replace this

  useEffect(() => {
    if (isSuccess) setBooked(true)
  }, [isSuccess])

  return (
    <main className="p-4 font-sans">
      <h1 className="text-xl font-bold mb-4">📅 Book a Session</h1>
      <DynamicWidget />
      {user ? (
        booked ? (
          <>
            <p className="mt-4 text-green-600">✅ Booking confirmed!</p>
            <a
              href="https://calendar.google.com/calendar/render?action=TEMPLATE&text=Booked+Session&details=Thanks+for+booking!&dates=20250601T150000Z/20250601T153000Z"
              target="_blank"
              className="block mt-4 underline text-blue-600"
            >
              Add to Google Calendar
            </a>
          </>
        ) : (
          <button
            className="mt-4 bg-blue-600 text-white px-4 py-2 rounded"
            onClick={() => book()}
            disabled={isPending}
          >
            {isPending ? 'Paying...' : 'Pay 5 USDC to Book'}
          </button>
        )
      ) : (
        <p className="mt-4 text-gray-500">Connect your wallet to book.</p>
      )}
    </main>
  )
}
