import { PrismaClient } from "@prisma/client";

function getEvents(){
    const prisma = new PrismaClient();
    const events = prisma.events.findMany({
        where: {
            format: 'Legacy'
        }}
    )

    return events;
}


export default getEvents;