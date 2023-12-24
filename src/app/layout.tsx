import Header from "~/components/Header";
import "~/styles/globals.css";
import { PrismaClient } from "@prisma/client";
import Calendar from "~/components/Calendar";

export const metadata = {
  title: "MTGO Calendar",
  description: "A calendar made for Magic: the Gathering Online",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

async function getEvents(eventType){
    const prisma = new PrismaClient();

    if (eventType === "Scheduled"){

      let currentDate = new Date();
      currentDate.setHours(0, 0, 0, 0);
      let twoWeeks = currentDate.setDate(currentDate.getDate() + 15);


      return await prisma.events.findMany({
        where: {
          AND: [{time: { lte: twoWeeks/1000}}, {time: {gte: currentDate.getDate()/1000}}]
        }
      });
  }
    else if (eventType === "Reoccuring"){
      return prisma.reoccuringEvents.findMany();
    }
}

let scheduledEvents = await getEvents('Scheduled');
let reoccuringEvents = await getEvents('Reoccuring');

console.log(scheduledEvents)

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header/>
        <Calendar scheduled={scheduledEvents} reoccuring={reoccuringEvents}/>
        {children}
      </body>
    </html>
  );
}
