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

### Enlazando páginas con Next Routes

**Next Routes** usa otro tipo de componente `<Link>` para enlazar página.

```
import {Link} from '../routes';

<Link route='channel' params={{
  slug: slug(channel.title),
  id: channel.id }}>
  <a>Enlace</a>
</Link>
```

- **route:** es el nombre del enlace definido en routes.js
- **params:** son los parámetros definidos en routes.js. Nótese las doble {{}}

### Transformación de textos para urls

Para transformar un texto en un formato que sea compatible con las urls, por ejemplo, para transformar un título, se va a usar una librería llamada slugify.

`npm add slugify`

Luego, para implementarlo, se puede realizar de la siguiente manera:

./helpets/slug.js
```JavaScript
import slugify from 'slugify';

export default function slug(name) {
  return slugify(name, { lower: true }).replace(/[^\w\-]+/g, '')
}
```

Por ultimo lo vamos a usar, por ejemplo.

./components/ChannelGrid.jsx
```JavaScript
import {Link} from '../routes'
import slug from '../helpers/slug'


export default class ChannelGrid extends React.Component {
	render() {

		const { channels } = this.props
		return (
			<div className="channels">
        { channels.map((channel) => (
          <Link route='channel'
						params={{
							slug: slug(channel.title),
							id: channel.id
						}}
						prefetch
						key={ channel.id }>
            <a className="channel">
              <img src={ channel.urls.logo_image.original } alt="Logo"/>
              <h2>{ channel.title }</h2>
            </a>
          </Link>
        )) }

					<style jsx>{`
					.channels {
						display: grid;
						grid-gap: 15px;
						padding: 15px;
						grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
					}
					a.channel {
						display: block;
						margin-bottom: 0.5em;
						color: #333;
						text-decoration: none;
					}
					.channel img {
						border-radius: 3px;
						box-shadow: 0px 2px 6px rgba(0,0,0,0.15);
						width: 100%;
					}
					h2 {
						padding: 5px;
						font-size: 0.9em;
						font-weight: 600;
						margin: 0;
						text-align: center;
					}
				`}</style>
      </div>
		)
	}
}
```