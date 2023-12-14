import React from 'react'
import { PrismaClient } from '@prisma/client'
import TimeZone from './TimeZone';

const Calendar = async () => {
    
    const prisma = new PrismaClient();

    const events = await prisma.events.findMany();

    return (
        <TimeZone events={events}/>
    )
}

export default Calendar