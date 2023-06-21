import React from 'react'
import "./Header.css"
import { headerLogo } from '../../assets'


const Header = () => {
  return (
    <header>
      <img src={headerLogo} alt="" />
      <p>All topics</p>
    </header>
  )
}

export default Header