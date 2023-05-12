import { useState } from 'react'
import './App.css'
import { useLoaderData } from 'react-router-dom'
import CoffeeCard from './components/CoffeeCard';

function App() {
  const LoadedData = useLoaderData();
  const [coffees, setCoffees] = useState(LoadedData)

  return (
    <div className="md:m-20 ">

      <h1 className='text-4xl text-center text-purple-600'>Vite + React</h1>
      <div className='grid md:grid-cols-2 gap-3 container mx-auto my-3'>
        {
          coffees.map(coffee => <CoffeeCard key={coffee._id} coffee={coffee} coffees={coffees} setCoffees={setCoffees}></CoffeeCard>)
        }
      </div>
    </div>
  )
}

export default App
