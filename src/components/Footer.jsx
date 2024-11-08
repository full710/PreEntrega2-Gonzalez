import React from 'react'
import '../styles/footer.css'
import { NavLink } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <h1 className="footer-title">SomosTrailer</h1>
        <p className="footer-description">Disfruta de tus peliculas favoritas con la mejor comodidadd</p>
        <nav className="footer-links">
          <NavLink to="/Information" className="footer-link">Sobre Nosotros</NavLink>
          <NavLink to="/Contact" className="footer-link">Contacto</NavLink>
          <NavLink to="/Products" className="footer-link">Productos</NavLink>
        </nav>
        <p className="footer-copy">© 2024 SomosTrailer. Todos los derechos reservados.</p>
      </div>
    </footer>
  )
}

export default Footer
