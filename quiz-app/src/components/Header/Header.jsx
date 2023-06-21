import React from 'react'
import "./Header.css"
import { headerLogo } from '../../assets'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header>
      <img src={headerLogo} alt="" />
      <Link to="/"><p>Dashboard</p></Link>
      <Link to="/quiz"><p>Play Quiz</p></Link>
    </header>
  )
}

export default Header