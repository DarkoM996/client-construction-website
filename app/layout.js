import { Cormorant } from "next/font/google";
import Navbar from "./components/Navbar";
import "./globals.css";

const cormorant = Cormorant({ subsets: ["latin"] });

export const metadata = {
  title: "CamYork Construction",
  description: "Hotel Construction Amplified",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cormorant.className}>
        <div className="w-full h-[calc(100vh - 3rem)]">
          <Navbar />
          {children}
        </div>
      </body>
    </html>
  );
}
