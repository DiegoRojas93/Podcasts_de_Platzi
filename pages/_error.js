import React from 'react'
import Layout from '../components/Layout';
import Link from 'next/link'

export default class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null;
    return { statusCode }
	}

  render() {
		const  { statusCode } = this.props
    return (
			<Layout tittle='Oh no :('>
				{ statusCode === 404 ?
					<div className='message'>
						<h1>Esta página no exite :(</h1>
						<p><Link href='/'><a>Volver a la home</a></Link></p>
					</div>
					:
					<div className="message">
						<h1>Hubo un Problema :(</h1>
						<p>Intenta nuevamente en unos segundos</p>
					</div>
				}

				<style jsx>{`
					.message {
						padding: 110px 30px;
					}
					h1 {
						margin-bottom: 2em;
					}
					a {
						color: #8756ca;
					}
				`}</style>
			</Layout>
    )
  }
}