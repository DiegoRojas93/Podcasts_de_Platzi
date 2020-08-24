export default class extends React.Component {
  render(){
    return <>
      <h1>Hola mundo!</h1>
      <p>Bienvenidos al curso de NextJS</p>


      <img src='/platzi-logo.png' alt='platzi-logo'/>
      <img src='/platzi-logo.png' alt='platzi-logo'/>
      <img src='/platzi-logo.png' alt='platzi-logo'/>

      <style jsx>{`
        h1 {
          color: red;
          text-align: center;
        }

        div :global (p) {
          color: green;
          text-align: center;
        }

        img {
          max-width: 50%;
          display: block;
          margin 0 auto;
        }
      `}</style>

      <style jsx global>{`
        body {
          background: white;
        }
      `}</style>
    </>
  }
}