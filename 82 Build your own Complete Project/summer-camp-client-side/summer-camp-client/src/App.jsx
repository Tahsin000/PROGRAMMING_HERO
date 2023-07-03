import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='flex gap-3'>
      <button className='btn-primary'>Click ME</button>
      <button className='btn-secondary'>Click ME</button>
      <button className='btn-secondary-outline'>Click ME</button>
      <button className='btn-primary-outline'>Click ME</button>
    </div>
  )
}

export default App
