import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function Home() {

  const calendarEvents = await prisma.events.findMany();

  return (
    calendarEvents.map(events => {
      return (
      <div>
        <div>{events.name}</div>
        <div>{events.date}</div>
      </div>)
    })
  );
};