'use client'

import React, { useEffect, useState } from 'react'
import getEvents from './Test';

const Calendar = async () => {
    
    const events = await getEvents()
    const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone;

    console.log(timeZone);

    return (
        <div>
            {events.map((event) => 
            <div key={event.time}>
                <div>{event.format} {event.name}</div>
                <div></div>
            </div>
            )}
        </div>
    )
}

export default Calendar