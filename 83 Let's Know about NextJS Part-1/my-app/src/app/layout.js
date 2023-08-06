import { Inter } from 'next/font/google';
import Link from 'next/link';
import './globals.css';
import Navbar from '@/components/Navbar';

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'Next Hero',
  description: 'Next Hero',
}

const RootLayout = ({ children }) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="p-5 text-center">
        <Navbar/>
        {children}
        <footer> footer </footer>

        </div>
        </body>
    </html>
  )
};


export default RootLayout;