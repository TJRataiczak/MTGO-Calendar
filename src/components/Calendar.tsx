'use client'
import React from 'react'
import getEvents from './Test';
import { useState, useEffect } from 'react';

const Calendar = () => {

    const [timeZone, setTimeZone] = useState(Intl.DateTimeFormat().resolvedOptions().timeZone);

    useEffect(() => {
      
    },[timeZone])
    
    let events = getEvents().then()

    console.log(events)
    console.log(timeZone)

    return (
        <div>
            {events.map(event => 
                <div key={event.time}>
                    <div>{event.name}</div>
                    <div>{event.format}</div>
                </div>
            )}
        </div>
    )
}

export default Calendar