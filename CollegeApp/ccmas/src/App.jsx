import { useState } from 'react'

import Navbar from './componets/Navbar'
import Home from './pages/Home'




function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar></Navbar>
    <Home></Home>
    
   
  
    
    </>
   
  )
}

export default App
