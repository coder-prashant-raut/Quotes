import { useState } from 'react'
import Navbar from './components/Navbar'
import HomePage from './components/HomePages.jsx/HomePage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
   <HomePage/>
    </>
  )
}

export default App
