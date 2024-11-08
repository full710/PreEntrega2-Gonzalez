
**Nota:** Actualmente hay un problema con las rutas de las imágenes en deploy de Vercel, lo que causa que estas no se muestren correctamente en producción. Para ver el proyecto funcionando completamente, incluyendo las imágenes, se recomienda clonar el repositorio y probarlo en local siguiendo los pasos de [Instalación](#instalación).

# SomosTrailer - E-commerce de Almohadones Pochocleros

SomosTrailer es una aplicación de comercio electrónico donde los usuarios pueden explorar, seleccionar y comprar almohadones pochocleros con compartimientos para bebidas y snacks. Este proyecto está construido en React y Firebase, e incluye funciones de carrito de compras, gestión de inventario y generación de factura.

## Tabla de contenidos

1. [Características](#características)
2. [Tecnologías](#tecnologías)
3. [Instalación](#instalación)
4. [Uso](#uso)
5. [Estructura del Proyecto](#estructura-del-proyecto)
6. [Contribución](#contribución)
7. [Licencia](#licencia)

## Características

- **Explorar Productos**: Los usuarios pueden explorar almohadones pochocleros con imágenes, descripciones y precios.
- **Carrito de Compras**: Funcionalidad para añadir y eliminar productos del carrito, con un resumen de precio total.
- **Gestión de Stock**: Actualización en tiempo real de la cantidad de productos en stock después de cada compra.
- **Generación de Factura**: Visualización de una factura después de la compra con detalles del pedido.
- **Información de la Empresa**: Secciones dedicadas a la misión y visión de SomosTrailer.

## Tecnologías

Este proyecto utiliza las siguientes tecnologías:

- **React**: Para la creación de la interfaz de usuario.
- **React Router**: Para la navegación entre páginas.
- **Firebase**: Para la autenticación, almacenamiento de datos y gestión de inventario.
- **CSS**: Para el diseño y estilización de los componentes.
  
## Instalación

Sigue estos pasos para clonar e instalar el proyecto localmente.

1. Clona el repositorio:
    ```bash
    git clone https://github.com/tu-usuario/somostrailer.git
    cd somostrailer
    ```

2. Instala las dependencias:
    ```bash
    npm install
    ```

3. Configura Firebase:
   - Crea un proyecto en Firebase y obtén las credenciales de configuración.
   - Crea un archivo `.env` en la raíz del proyecto y añade las credenciales:
     ```plaintext
     REACT_APP_FIREBASE_API_KEY=your_api_key
     REACT_APP_FIREBASE_AUTH_DOMAIN=your_auth_domain
     REACT_APP_FIREBASE_PROJECT_ID=your_project_id
     REACT_APP_FIREBASE_STORAGE_BUCKET=your_storage_bucket
     REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
     REACT_APP_FIREBASE_APP_ID=your_app_id
     ```

4. Inicia la aplicación en modo de desarrollo:
    ```bash
    npm start
    ```



## Uso

1. Navega por los productos y agrégalos al carrito.
2. Accede al carrito para ver los detalles de los productos seleccionados.
3. Completa el formulario de compra para realizar el pedido.
4. Después de la compra, revisa la factura generada en una nueva ventana.
5. Verifica que los productos se han descontado del stock en tiempo real.

## Estructura del Proyecto

```
├── public              # Archivos públicos, incluyendo `index.html`
├── src
│   ├── assets          # Archivos de imágenes y recursos estáticos
│   ├── components      # Componentes individuales (Cart, CartItem, Footer, etc.)
│   ├── context         # Proveedores de contexto, incluyendo CartProvider
│   ├── firebase        # Configuración de Firebase
│   ├── styles          # Archivos CSS para los estilos
│   ├── App.js          # Componente principal de la aplicación
│   ├── main.js         # Punto de entrada principal de React
│                       # Otros archivos y componentes adicionales
└── README.md           # Este archivo
```

## Contribución

Si deseas contribuir al proyecto, sigue estos pasos:

1. Realiza un fork del repositorio.
2. Crea una nueva rama (`git checkout -b feature/nueva-funcion`).
3. Realiza los cambios y haz commit (`git commit -m 'Añadir nueva función'`).
4. Haz push a la rama (`git push origin feature/nueva-funcion`).
5. Abre un Pull Request.

## Licencia

Este proyecto está bajo la Licencia MIT. Consulta el archivo `LICENSE` para obtener más detalles.

---

¡Gracias por visitar SomosTrailer! Si tienes alguna pregunta o sugerencia, no dudes en abrir una [issue](https://github.com/tu-usuario/somostrailer/issues).
