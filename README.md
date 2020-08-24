# Curso de Next.JS

[Next.js](https://nextjs.org/ "Next.js") es un framework para construir aplicaciones web modernas en React. Una de sus principales características es que pensado para tener una excelente experiencia como desarrollador.

Next.js le brinda la mejor experiencia de desarrollador con todas las funciones que necesita para la producción: renderizado híbrido estático y de servidor, compatibilidad con TypeScript, agrupación inteligente, búsqueda previa de rutas y más. No se necesita configuración.

### Styled JSX

Styled JSX que es el sistema de estilos que maneja Next.js

¿Por que usar Style JSX?

- Es más acorde a React.
- Evitamos problemas al escalar

Los Styled JSX se escribe igual que CSS3 pero solo aplica al componente y no para componentes padres o hijos

```html
<style jsx>{`
  h1 {
    color: red;
  }

  .clase {
    background: black;
  }
`}</style>
```

**¿Cómo se pueden romper estas reglas?**

***Atributos Globales***

Estos atributos se van a aplicar a toda la aplicación. No se recomienda usar atributos globales.

```html
<style jsx global>{`
  body {background: red}
`}<style>
```

***Operador :global()***

Este nos permite aplicar un atributo de css de manera global.

En este caso, todas las etiquetas p de toda la aplicacion van a tener el estilo color:green.

```html
<style jsx>{`
  :global(p) {color: green}
`}</style>
```

Si se quiere aplicar un estilo a todos los hijos de ***Este componente***, se puede hacer de la siguiente manera:

```html
<style jsx>{`
  div :global(p) {color: green}
`}<style>
```

El cual es diferente a 

```html
<style jsx>{`
  :global(div p) {color: green}
`}<style>
```

Que significa que todos los div que contengan hijos p de ***toda la aplicacion*** tendran estos estilos.


### Images

Para incluir images deberemos guardar las imagenes en la carpeta ***public*** y se deberan llamar en el atributo src solamente como el nombre de la imagen

```html
<img src='/platzi-logo.png' alt='platzi-logo'/>
```