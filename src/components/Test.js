import { PrismaClient } from "@prisma/client";

async function getEvents(){
    const prisma = new PrismaClient();
    const events = await prisma.events.findMany({
        where: {
            format: 'Modern'
        }}
    );

    return events;
}


export default getEvents;