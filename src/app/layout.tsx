import "~/styles/globals.css";

export const metadata = {
  title: "MTGO Calendar",
  description: "A calendar made for Magic: the Gathering Online",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
