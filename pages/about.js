import React from 'react'

function about() {
	return (
		<>
			<h1>NextJS</h1>
			<img src="/Next.png" alt="Next"/>
			<h3>Next.js gives you the best developer experience with all the features you need for production: hybrid static & server rendering, TypeScript support, smart bundling, route pre-fetching, and more. No config needed.</h3>

			<style jsx>{`
				h1, h3{
					text-align: center;
				}

				img {
					margin: 0 auto;
					display: flex;
					justify-content: center;
				}
			`}</style>
		</>
	)
}

export default about
