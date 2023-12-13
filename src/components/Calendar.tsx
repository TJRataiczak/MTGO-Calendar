import React from 'react'
import { PrismaClient } from '@prisma/client'

const Calendar = async () => {
    
    const prisma = new PrismaClient();

    const events = await prisma.reoccuringEvents.findMany();
    console.log(events)

    return (
        <div className='grid grid-cols-4 text-center'>
            {events.map(event => 
                <div className='border-2 border-red-600'>
                    <div>{event.format} {event.name}</div>
                    <div>{event.date}</div>
                </div>
            )}
        </div>
    )
}

export default Calendar