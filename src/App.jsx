import { useState } from 'react'
// import Navbar from './components/Navbar'
// import HomePage from './components/HomePages.jsx/HomePage'
// import DemoHomePage from './components/HomePages.jsx/DemoHomePage'
import HomePage from './components/HomePages.jsx/HomePage'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
{/* <DemoHomePage/> */}
<HomePage/>
    </>
  )
}

export default App
