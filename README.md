# Curso de Next.JS

[Next.js](https://nextjs.org/ "Next.js") es un framework para construir aplicaciones web modernas en React. Una de sus principales características es que pensado para tener una excelente experiencia como desarrollador.

Next.js le brinda la mejor experiencia de desarrollador con todas las funciones que necesita para la producción: renderizado híbrido estático y de servidor, compatibilidad con TypeScript, agrupación inteligente, búsqueda previa de rutas y más. No se necesita configuración.

### Data fetching: obteniendo datos con getServerSideProps

Vamos a ver la función **[getserversideprops](https://nextjs.org/docs/basic-features/data-fetching#getserversideprops-server-side-rendering "getserversideprops")** de Next, que nos permite cargar el contenido principal de la página cuando tenemos que recurrir a una API.

para utilizarla se nesecita agregar esta funcion por en el archivo por fuera del componente

```javascript
export async function getServerSideProps(context) {
  return {
    props: {}, // se pasará al componente de la página como accesorios props
  }
}
```

***Ejemplo***

```JavaScript
export default class extends React.Component {


  render(){

    const { channels } = this.props


    return <>

      <header>Podcast</header>

      <div className="channels">
        { channels.map((channel) =>(
          <div className="channel">
            <img src={channel.urls.logo_image.original } alt=''/>
            <h2>{ channel.title }</h2>
          </div>
        )) }
      </div>

      <style jsx>{`
        header {
          color: #fff;
          background: #8756ca;
          padding: 15px;
          text-align: center;
        }

        .channels{
          display: grid;
          gap: 15px;
          padding: 15px;
          grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
        }

        .channel {
          display: block;
          border-radius: 3px;
          box-shadow: 0px 2px 6px rgba(0,0,0,0.15);
          margin-bottom: 0.5em;
        }

        .channel img {
          width: 100%;
        }

        .channel h2 {
          padding: 5px;
          font-size: 0.9em;
          font-weight: 600;
          margin: 0;
          text-align: center;
        }
      `}</style>

      <style jsx global>{`
        body {
          margin: 0;
          font-family: system-ui;
          background: white;
        }
      `}</style>
    </>
  }
}


export async function getServerSideProps() {
  let req = await fetch('https://api.audioboom.com/channels/recommended');
  let { body: channels } = await req.json();

  return { props: { channels: channels } };
}

```