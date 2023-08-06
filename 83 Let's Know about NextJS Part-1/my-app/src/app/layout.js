import { Inter } from 'next/font/google';
import Link from 'next/link';
import './globals.css';

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
        {/* <nav className='flex gap-5 p-3 w-full items-center justify-center'>
          <Link className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded' href="/">Home</Link>
          <Link className='bg-transparent hover:bg-blue-500 text-blue-700 font-semibold hover:text-white py-2 px-4 border border-blue-500 hover:border-transparent rounded' href="/about">About</Link>
        </nav> */}
        {children}
        <footer> footer </footer>

        </div>
        </body>
    </html>
  )
};


export default RootLayout;