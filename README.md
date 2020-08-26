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

Cuando hacemos Server Side Rendering, nuestros servidor responde con un status.

- **Status 200:** Todo está bien.
- **Error 404:** Todo está bien.
- **Error 503:** Todo está bien.

Se debe de hacer un manejo de control de errores en un bloque de ***try/catch.*** Además se debe de agregar un if para manejar el status que retorna el fetch.

```JavaScript
static async getInitialProps({ query }) {
  let idChannel = query.id;

  try {

    let req = await fetch('https://api.audioboom.com/channels/recommended');

    if(req.status >= 400) {
      res.statusCode = req.status;
      return { statusCode: req.status }
    }

    //más código

    return { statusCode: 200 }

  } catch(e) {
    return { statusCode: 503}
  }
}
```
Para el manejo de errores Next.js nos da un componente llamado `<Error/>`.
```JavaScript
import Error from 'next/error';
```

Luego, dentro del componente:
```JavaScript
const { statusCode } = this.props;

if(statusCode !== 200) {
  return <Error statusCode={statusCode}/>
}
```

**{ res }*** : es la respuesta que trae el servidor

Por último, se tiene que cambiar el ***res.statusCode*** para que el servidor maneje internamente el error que ocurrió debido que sur respuesta es por defecto es 200 y se debera especificar la respuesta que se quiere tener, este caso: 503.

codigo realizado en .pages/index
```JavaScript
import 'isomorphic-fetch'
import Layout from '../components/Layout'
import ChannelGrid from '../components/ChannelGrid'
import Error from 'next/error'

export default class extends React.Component {

  static async getInitialProps({ res }) {
    try {

      let req = await fetch('https://api.audioboom.com/channels/recommended')
      let { body: channels } = await req.json()
      return { channels, statusCode: 200 }

    } catch(e) {

      res.statusCode = 503
      return { channels: null, statusCode: 503 }

    }
  }

  render() {
    const { channels, statusCode } = this.props

    if( statusCode !== 200 ) {
      return <Error statusCode={ statusCode } />
    }

    return <Layout title="Podcasts">
      <ChannelGrid channels={ channels } />
    </Layout>
  }
}
```