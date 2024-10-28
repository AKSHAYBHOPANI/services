"use client"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import "./navbar.css"
import Hamburger from "../../../assets/icons/Hamburger.svg"
import Brand from "../../../assets/icons/logo.png"

export default function Navbar() {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="navbar">
      <div className="container">
        <div className="logo">
          <Image src={Brand} width={100} height={60} alt="Brand" />
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <Image src={Hamburger} width={30} height={30} alt="Hamburger" />
        </div>
        <div className={`nav-elements  ${showNavbar && "active"}`}>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/blog">Blog</Link>
            </li>
            <li>
              <Link href="/projects">Projects</Link>
            </li>
            <li>
              <Link href="/about">About</Link>
            </li>
            <li>
              <Link href="/contact">Contact</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
