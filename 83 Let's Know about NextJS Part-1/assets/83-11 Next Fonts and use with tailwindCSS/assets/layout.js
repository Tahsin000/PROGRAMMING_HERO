import { Inter, Roboto } from "next/font/google";
import Link from "next/link";
import "./globals.css";
import Navbar from "@/components/Navbar";

const roboto = Roboto({ subsets: ["latin"], weight: ["100", "400"], variable: "--font-roboto" });

export const metadata = {
  title: "Next Hero",
  description: "Next Hero",
};

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={`${roboto.variable} font-roboto`}>
        <div className="p-5 text-center">
          <Navbar />
          {children}
          <footer> footer </footer>
        </div>
      </body>
    </html>
  );
};

export default RootLayout;
