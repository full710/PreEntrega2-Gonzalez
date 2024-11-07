import React from 'react';
import '../styles/contact.css'

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>¡Ponte en contacto con nosotros!</h1>
      <p>En **SomosTrailer**, nos encantaría saber de ti. Si tienes preguntas sobre nuestros productos, quieres hacer un pedido especial o simplemente deseas saber más sobre nuestro emprendimiento, no dudes en comunicarte con nosotros.</p>

      <div className="contact-methods">
        <h2>¿Cómo puedes contactarnos?</h2>
        <ul>
          <li><strong>Correo electrónico:</strong> <a href="mailto:contacto@somostrailer.com">contacto@somostrailer.com</a></li>
          <li><strong>Teléfono:</strong> +54 9 11 1234 5678</li>
          <li><strong>Redes sociales:</strong> Síguenos en nuestras redes sociales para ver más de nuestros productos y novedades:
            <ul>
              <li><a href="https://www.instagram.com/somostrailer" target="_blank" rel="noopener noreferrer">Instagram</a></li>
              <li><a href="https://www.facebook.com/somostrailer" target="_blank" rel="noopener noreferrer">Facebook</a></li>
              <li><a href="https://twitter.com/somostrailer" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            </ul>
          </li>
        </ul>
      </div>

      <div className="location">
        <h2>¿Dónde encontrarnos?</h2>
        <p>Nos encontramos en <strong>Buenos Aires, Argentina</strong>. Si prefieres una compra presencial, contáctanos para coordinar una visita a nuestro showroom.</p>
      </div>

      <div className="contact-form">
        <h2>Envíanos un mensaje</h2>
        <form>
          <label htmlFor="name">Nombre:</label>
          <input type="text" id="name" name="name" placeholder="Tu nombre" required />

          <label htmlFor="email">Correo electrónico:</label>
          <input type="email" id="email" name="email" placeholder="Tu correo" required />

          <label htmlFor="message">Mensaje:</label>
          <textarea id="message" name="message" placeholder="Tu mensaje" required></textarea>

          <button type="submit">Enviar mensaje</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
