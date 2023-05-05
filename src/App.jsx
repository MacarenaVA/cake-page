import { useState } from "react"
import { Route, Routes } from "react-router-dom"
import "./App.css"
import "bootstrap/dist/css/bootstrap.min.css"
import Navbar from "./components/Navbar"
import Home from "./Pages/Home"
import About from "./Pages/About"
import Contact from "./Pages/Contact"

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="container">
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
        </Routes>
      </div>
    </div>
  )
}

export default App
