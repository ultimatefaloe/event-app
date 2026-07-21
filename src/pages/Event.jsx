import React from 'react'
import EventCard from '../components/EventCard'

const Event = () => {
  return (
    <div>

      <div className="grid grid-cols-2 gap-4">

      <EventCard />
      <EventCard />
      </div>
    </div>
  )
}

export default Event