import { Inter } from "next/font/google";
import "./globals.css";
import Cursor from "../components/Cursor";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata = {
  title: "Angelo Amenta - CV",
  description: "Frontend Developer & Designer",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <body
        className={`${inter.variable} font-sans antialiased bg-stone-100 text-stone-950 cursor-none`}
      >
        <Cursor />
        {children}
      </body>
    </html>
  );
}
