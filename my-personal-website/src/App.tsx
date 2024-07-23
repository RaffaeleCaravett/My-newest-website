

import './App.css'
import {BrowserRouter, Route,  Routes } from 'react-router-dom'
import Nav from './Components/Nav'
import Footer from './Components/Footer'
import Home from './Components/Home'
import Aos from 'aos'
import Contatti from './Components/Contatti'

function App() {
 
Aos.init()
  return (
    <BrowserRouter>
    <Nav />
    <div className="App">
    <div className="Content">
 <Routes>
        <Route  path="/home" element={<Home />}>
        </Route>
        <Route path="/contatti" element={<Contatti />}>
        </Route>
        <Route path="*" element={<Home />}>
        </Route>
      </Routes>
      </div>
      </div>
      <Footer />
</BrowserRouter>
  )
}

export default App
