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

### Vistas Híbridas

En esta clase vamos a ver algo muy particular, y tiene que ver con cómo implementar vistas híbridas. Conoceremos una de las funcionalidaes de React que es: setState(), que nos permite cambiar el estado de los componentes.

El **State** se usa para definir el estado interno de un componente. A diferencia de los props, estate puede ser modificado.

Para usar state, primero debe de inicializarse en un constructor:

```JavaScript
constructor(props) {
  super(props);
  this.state = { openPodcast: null }
}
```

`this.setState()` cambia el estado interno de un componente.

```JavaScript
this.setState({
  openPodcast: podcast
})
```

Para obtener un estado, se puede hacer de la siguiente manera:

```JavaScript
const { openPodcast } = this.state;
```