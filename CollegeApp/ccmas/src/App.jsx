import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Navbar from './componets/Navbar'
import Home from './pages/Home'
import Nav from './pages/Nav'
import Home2 from './pages/home2'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar></Navbar>
    <Home></Home>
    
    <Home2></Home2>
    
    </>
   
  )
}

export default App
