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

### ¿Cómo diseñar URLs?

En esta clase vamos a ver algo mucho más relacionado a experiencia de usuario de lo que venimos viendo, y tiene que ver con repensar cómo están armadas las URLs de nuestra aplicación, que es lo que mucha gente no le presta atención, pero que es muy importante, tanto para nuestros usuarios como para motores de búsqueda, incluso para posicionamiento en buscadores como Google.

En este sentido, hay un par de principios que debemos considerar: Legibilidad y Consistencia.

1. **Legibilidad:** Deben ser entendibles por nuestros usuarios.

    //Esto no es legible
    /channel?id=156486
    //Esto si
    /Posta

2. **Consistencia:** Deberíamos poder borrar cualquier fragmento.

    /podcast/un-buen-dia
    /channel/posta
    /channel
    /

En el caso anterior, no se cumple con la consistencia en las urls. Por ejemplo, `/podcast` no tendría sentido puesto que siempre se necesita de un posdcast para reproducirlo. Por otro lado, `/channel` tampoco tendría sentido ya que `/` muestra lo mismo.

Una mejor propuesta sería:
`/nombre-serie/nombre-podcast`

    /posta/un-buen-dia
    /posta
    /

Con esta estructura, si se usa solo el primer fragmento de urls, `/posta` , se mostraría todos los podcast de la serie posta. Del mismo modo, si se ingresa a `/posta/un-buen-dia` , se estaría mostrando el podcast *un buen día* de la seria *posta.*