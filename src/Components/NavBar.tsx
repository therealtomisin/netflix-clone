//import React, {useState, useEffect} from 'react'
import logo from '../netflix-logo-png-2582.png'
import { useEffect, useState } from 'react'

const NavBar = () => {

    const [show, handleShow] = useState(false)

    useEffect(() => {
      window.addEventListener('scroll', ()=>{
          window.scrollY > 100 ? handleShow(true) : handleShow(false)
      });
      return ()=>{}
    }, [])
    

  return (
    <div className={`navBar ${show && 'nav__black'}`}>

        <img src={logo} alt="" className="navBar__netflixLogo" />
        <img src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png" alt="" className="navBar__profileLogo" />
    </div>
  )
}

export default NavBar
