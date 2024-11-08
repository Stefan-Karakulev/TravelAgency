import React from "react"
import {BrowserRouter,Routes,Route} from "react-router-dom"
import Home from "./pages/Home"
import Navbar from "./components/Navbar"
import Footer from "./components/Footer"
import Gallery from "./pages/Gallery"
import Contacts from "./pages/Contacts"
import About from "./pages/About"

function App() {
 

  return (
   <>
   
    <BrowserRouter>
    <Navbar/>
      
     <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/gallery" element={<Gallery/>}/>
      <Route path="/contact" element={<Contacts/>}/>
      <Route path="/about" element={<About/>}/>

     </Routes>
    <Footer/>
    </BrowserRouter>
   </>
  )
}

export default App
