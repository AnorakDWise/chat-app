import "../styles/globals.css";
import { Space_Grotesk } from "@next/font/google";
import Header from "./Header";

const SpaceGrotesk = Space_Grotesk({
  weight: ["300", "400", "500", "600", "700"],
  preload: true,
});

export default async function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      className={SpaceGrotesk.className + " scroll-smooth overflow-x-hidden"}
    >
      <head />
      <body className="bg-stone-900 select-none">
        <Header />
        {children}
      </body>
    </html>
  );
}
