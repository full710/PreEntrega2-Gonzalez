import React from 'react'
import '../styles/information.css'

const Information = () => {
  return (
    <div className="information-container">
      <h1>¡Bienvenidos a SomosTrailer!</h1>
      <p>En **SomosTrailer**, nos apasiona llevar la experiencia del cine a tu hogar. Somos una empresa dedicada a diseñar y fabricar <strong>almohadones pochocleros portavasos</strong> para que disfrutes de tus películas favoritas con total comodidad.</p>

      <div className="about-us">
        <h2>¿Quiénes somos?</h2>
        <p>Somos un equipo de cinéfilos que entendemos lo importante que es tener un buen asiento y los snacks adecuados mientras disfrutas de una película. Nuestros almohadones son perfectos para todo tipo de maratones de cine, ya que tienen un diseño único que te permite tener tu pochoclo y bebida siempre a mano.</p>
      </div>

      <div className="product-benefits">
        <h2>¿Por qué elegir nuestros almohadones?</h2>
        <ul>
          <li><strong>Comodidad:</strong> Almohadones suaves que brindan soporte perfecto para ver tus películas por horas.</li>
          <li><strong>Diseño práctico:</strong> El compartimento para el pochoclo y el portavasos integrado hacen de tu experiencia mucho más fácil.</li>
          <li><strong>Variedad:</strong> Disponibles en diferentes colores y tamaños para que elijas el que mejor se adapte a tu estilo.</li>
        </ul>
      </div>

      <div className="mission">
        <h2>Nuestra misión</h2>
        <p>En **SomosTrailer**, nuestro objetivo es transformar cada noche de cine en una experiencia única, cómoda y divertida. Sabemos que el cine no es solo una película, es todo un ritual, y queremos acompañarte en cada momento de esa magia.</p>
      </div>

      <div className="call-to-action">
        <h2>Únete a la familia SomosTrailer</h2>
        <p>¿Estás listo para mejorar tu experiencia de cine en casa? Explora nuestros productos y haz tu pedido hoy mismo.</p>
      </div>
    </div>
  )
}

export default Information
