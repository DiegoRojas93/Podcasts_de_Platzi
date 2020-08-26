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

### ### Despliegue con Now

Para desplegar la aplicación en Now.sh se va a instalar now de manera global.

`npm install -g now`

Se puede hacer un deploy en el plan gratuito. El plan gratuito hace que el código fuente de tu aplicación sea libre.

`now --public`