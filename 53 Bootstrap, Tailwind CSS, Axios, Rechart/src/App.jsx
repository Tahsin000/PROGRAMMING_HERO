import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Tailwind from './53-2 Setup tailwind css with Create React App/Tailwind'
import Navbar from './53-2 Setup tailwind css with Create React App/Navbar'
import Navbar1 from './53-3 Responsive Navbar using react and tailwind/Navbar'
import Navbar2 from './53-4 Create Nav toggle and navbar animation/Navbar'
import Navbar3 from './53-5 Simple Pricing Option using React and Tailwind/Navbar'
import PriceList from './53-5 Simple Pricing Option using React and Tailwind/PriceList'
import PriceList1 from './53-7 Use reachart to draw any type of chart using React/PriceList'
import AXios from './53-8 Axios, data extraction and data processing bar chart/AXios'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">




      {/* 53-2 Setup tailwind css with Create React App */}
      {/* <Navbar></Navbar>
      <Tailwind></Tailwind> */}




      {/* 53-3 Responsive Navbar using react and tailwind */}
      {/* <Navbar1></Navbar1> */}




      {/* 53-4 Create Nav toggle and navbar animation */}
      {/* <Navbar2></Navbar2> */}




      {/* 53-5 Simple Pricing Option using React and Tailwind */}
      {/* 53-6 Responsive pricing card with Tailwind and Hero icons */}
      {/* <Navbar3></Navbar3> */}
      {/* <PriceList></PriceList> */}




      {/* 53-7 Use reachart to draw any type of chart using React */}
      {/* <PriceList1></PriceList1> */}




      {/* 53-8 Axios, data extraction and data processing bar chart */}
      <AXios></AXios>





    </div>
  )
}

export default App
