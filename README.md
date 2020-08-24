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

### Utilizando el componente Link

Next.js nos ofrece el pre rendering ó SSR (Server Side Rendering).

Para varificar esto debemos ejecutar `npm run start` para ejecutar el servidor en modo de producción. Cuando la pagina se renderizar buscamos clickeamos ***View Page Source*** o ***ver codigo fuente de la pagina*** cuando oprimimos el boton derecho.

Si nuestro contenido principal es visto en el HTML del codigo que se nos arroja en su primera respueta. significa que es renderizado al lado del servidor.

El SSR es muy util para el SEO.

Podemos enlazar nuestras paginas para que podamos hacer una SPA para nuestros proyectos.

Para lograr eso deberemos importar **Link** desde ***next/link*** para usarlo en las rutas de navegacion que necesitan nustros componentes, por ejemplo:

./components/Navbar/Navbar.js
```JavaScript
import React from 'react'
import Link from 'next/link'

const Navbar = () => {
	return (
		<nav>
			<menu>
				<Link href="/"><a>Home</a></Link>
				<Link href="/about"><a>about</a></Link>
			</menu>
		</nav>
	)
}

export default Navbar

```

./pages/index.js
```JavaScript
import  Navbar from '../components/Navbar/Navbar'

function HomePage() {
	return <>
    <Navbar />
    <h1>Hello world!</h1>
  </>
}

export default HomePage
```

./pages/about.js
```JavaScript
import Navbar from '../components/Navbar/Navbar'

const About = () => {
	return (
		<div>
			<Navbar />
			<p>Esta es la página de About</p>
		</div>
	)
}

export default About
```

**Nota:** Next.JS requiere que dentro del componente de Link se encuentre una etiqueta <a></a>, de forma que sea amigable para el SEO. Si no la agregas, de igual forma funciona, pero verás un warning de parte de Next.JS.

Pueden ver un poco más de información de como trabajar con Styled Components o Componentes que envuelven la etiqueta <a> aquí: [next/link](https://nextjs.org/docs/api-reference/next/link "next/link")

***rafce*** shotcut para crear rapido componentes

Cuando usamos link para manejar las rutas de nuestras paginas obtenemos una gran ganancia para en optimizaciones para los usuarios.

Para este ejercicio debemos ejecutar `npm run build` y `npm run start` vamos a abrir la consola del navegador e iremos a Network; luego oprimimos la opcion de volver a cargar de manera forzada y borramos el cache en el boton 🚫 de network.

Cuando hacemos hover en una ruta que nos hace mover hacia una pagina de nuestro sitio web, esta misma hace un **prefectching** una precarga de la pagina. Es decir que Next.js va a ir al servidor y pedira la un HTML de la pagina que vamos a elegir para que este lista antes de hacer click para ir a ella.