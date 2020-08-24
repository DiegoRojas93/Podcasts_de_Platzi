# Curso de Next.JS

[Next.js](https://nextjs.org/ "Next.js") es un framework para construir aplicaciones web modernas en React. Una de sus principales características es que pensado para tener una excelente experiencia como desarrollador.

Next.js le brinda la mejor experiencia de desarrollador con todas las funciones que necesita para la producción: renderizado híbrido estático y de servidor, compatibilidad con TypeScript, agrupación inteligente, búsqueda previa de rutas y más. No se necesita configuración.

### Creando nuestra primera página

Vamos a crear nuestra primera página en Next.js, más que nada para tener una muy buena idea de cómo funciona el router de Next, cómo crear un pequeño componente en React, y sobre todo cómo hacer para crear un buen entorno de desarrollo en un proyecto de Node.
Esto no es solamente para Next, puede aplicar para cualquier proyecto que hagamos en Javascript.

Para ello deberemos instalar los siguientes paquetes en nustro proyecto:

`npm add next react react-dom -S -E`

Luego agragamos los script que vamos a utilizar en nuestro package.json

```
{
  "scripts": {
  "dev": "next",
  "build": "next build",
  "start": "next start"
  },
}
```

- next inicia la aplicación en modo desarrollo
- next build construye los archivos para producción
- next start uso los archivos del build para iniciar la aplicación en modo producción.

Usando next build podrías hacer el build en tu computadora por ejemplo o en un sistema de CI/CD y luego subir los archivos a un servidor y ahí ejecutar next start