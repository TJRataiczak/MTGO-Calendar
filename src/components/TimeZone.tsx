'use client'
import React, { useEffect, useState } from 'react'

const TimeZone = ({events}) => {

    const [timeZone, setTimeZone] = useState('');

    useEffect(() => {
      setTimeZone(Intl.DateTimeFormat().resolvedOptions().timeZone)
    },[])

    console.log(timeZone);

    return (
    <div className='grid grid-cols-3'>
      {events.map(event => 
        <div key={event.time}>{event.format} {event.name}</div>)}
    </div>
  )
}

export default TimeZone