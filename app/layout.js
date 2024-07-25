import { Cormorant } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant({ subsets: ["latin"] });

export const metadata = {
  title: "CamYork Construction",
  description: "Hotel Construction Amplified",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cormorant.className}>{children}</body>
    </html>
  );
}
