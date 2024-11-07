import React from 'react'
import logo from "../assets/logo.webp"
import lupaBuscador from "../assets/lupaBuscador.svg"
import '../styles/navbar.css'
import CartWidget from './CartWidget'
import { Link, Routes } from 'react-router-dom'

const NavBar = () => {
    return (
        <>
        <div className='navbar'>
          <div className="logoNavbar">
            <Link to={"/"}><img src={logo} alt="logo" /></Link>
          </div>
          <div className="infoNavbar">
            <ul className='ulNav'>
              <li><Link className='linkNav' to={'/'} >Inicio</Link></li>
              <li><Link className='linkNav' to={'/Contact'} >Contacto</Link></li>
              <li><Link className='linkNav' to={'/Products'}>Productos</Link></li>
              <li><Link className='linkNav' to={'/Information'}>Nosotros</Link></li>
            </ul>
            <div className='cartNavbar'>
              <Link to={"./cart"}><CartWidget /></Link>
            </div>
          </div>
        </div>
      </>
    )
}

export default NavBar
