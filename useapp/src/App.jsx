import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar'

import { Route, Routes } from 'react-router-dom'
import StateBasics from './components/StateBasics'
import Counter from './components/Counter'
import Dtask from './components/Dtask'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Navbar/>
  <Routes>
    <Route path='/s' element={<StateBasics/>}/>
    <Route path='/c' element={<Counter/>}/>
    <Route path='/d' element={<Dtask/>}/>
    
    
    
   
  </Routes>
    </>
  )
}

export default App
