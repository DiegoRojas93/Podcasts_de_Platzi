# Curso de Next.JS

Construir una aplicaicones en React no es facil. ¿como lo desarrollamos? ¿que hay de los archivos estaticos?¿como lo llevamos a produccion? ¿Sera que es optimo para produccion cuando desarrollamos en wepkack o rolup?

Esto no es bueno para la empresa si estamos configurarndo la arquetectura de nuestro proyecto, react nos da toda la responsabilidad de configurar el entorno de trabajo de nuestro proyecto pero ¿como sabremos que nuestro entorno es el correcto?.

[Next.js](https://nextjs.org/ "Next.js") es un framework creado por vercel que ha tomado las mejores deciciones para crear un entorno de trabajo optimo y hacer deploy para producion de nuestro proyecto.

Next.js tiene la mejor "Experiencia de desarrollador" de su clase y muchas funciones integradas; una muestra de ellos son:

- Un sistema de enrutamiento intuitivo basado en páginas (con soporte para rutas dinámicas )
- La representación previa , tanto la generación estática (SSG) como la representación del lado del servidor (SSR) son compatibles por página
- División automática de código para cargas de página más rápidas
- Enrutamiento del lado del cliente con captura previa optimizada
- Compatibilidad con CSS y Sass incorporada , y compatibilidad con cualquier biblioteca CSS-in-JS
- Entorno de desarrollo con soporte Fast Refresh
- Rutas de API para crear puntos finales de API con funciones sin servidor
- Totalmente ampliable

### Manejo de Errores

El componente error se puede modificar creando una página _error.js.

.pages/_error.js
```JavaScript
import React from 'react'

export default class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode }
  }

  render() {
    return (
      <p>
        {this.props.statusCode
          ? `An error ${this.props.statusCode} occurred on server`
          : 'An error occurred on client'}
      </p>
    )
  }
}
```

### Personalizar Document

Las páginas en Next saltan la definición de markup de un documento. Por ejemplo, nunca se usa `<html>` o `<body>` . Para modificar este comportamiento, se crea se crea una página **_document.js.**

Document maneja los componentes básicos que devuelve Next cuando hace Server Side Rendering. Esto solo debe de hacerse cuando es necesario.

Document solo se usa para renderizar Server Side y no debería tener nada funcional.

**¿cuando modficarlo?**

- Google AMP
- Facebook Instant Pagees
- Plugins como styles Components

./pages/_document.js
```JavaScript
import Document, { Head, Main, NextScript } from 'next/document'

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps(ctx)
    return { ...initialProps }
  }

  render() {
    return (
      <html>
        <Head>
          <style>{`body { margin: 0 } /* custom! */`}</style>
        </Head>
        <body className="custom_class">
          <Main />
          <NextScript />
        </body>
      </html>
    )
  }
}
```