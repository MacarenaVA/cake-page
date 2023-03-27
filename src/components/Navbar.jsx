import React from "react"
import { Link } from "react-router-dom"

function Navbar() {
  return (
    <nav className="nav">
      <Link to="/" className="">
        <img src="src\assets\imgs\Happy cake.png"></img>
      </Link>
      <ul>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navbar
