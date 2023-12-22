import Header from "~/components/Header";
import "~/styles/globals.css";
import { PrismaClient } from "@prisma/client";
import Calendar from "~/components/Calendar";

export const metadata = {
  title: "MTGO Calendar",
  description: "A calendar made for Magic: the Gathering Online",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

async function getEvents(){
    const prisma = new PrismaClient();
    const newQuery = prisma.events.findMany();
    return newQuery;
}

let events = await getEvents();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Header/>
        <Calendar data={events}/>
        {children}
      </body>
    </html>
  );
}
