import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Device from './49-3 Components and how props works, unidirectional data flow/Device/Device'
import Watch from './49-4 (advanced) How states works, asynchronous, console state/Watch/Watch'
import Watch2 from './49-5 How React Hook works, send state via props , props vs state/Watch/Watch'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      {/* 49-3 Components and how props works, unidirectional data flow */}
      {/* <Device name="uphone" price="31000"></Device> */}




      {/* 49-4 (advanced) How states works, asynchronous, console state */}
      {/* <Watch></Watch> */}




      {/* 49-5 How React Hook works, send state via props , props vs state */}
      <Watch2></Watch2>






    </div>
  )
}

export default App
