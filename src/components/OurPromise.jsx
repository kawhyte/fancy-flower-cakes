import React from 'react'
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

function OurPromise() {
    const data = useStaticQuery(graphql`
    query {
        promise: file(relativePath: { eq: "promise.png" }) {
            childImageSharp {
                fluid(maxWidth: 1920, maxHeight: 120, quality: 85) {
                    ...GatsbyImageSharpFluid_withWebp
                }
            }
        }
    }
`);
    return (
        <div className='mt-10'>
			<p className='mb-10 text-center text-base leading-6 text-black font-semibold tracking-wide uppercase'>
				Our Promise
			</p>
			
			<Img
				fluid={data.promise.childImageSharp.fluid}
				alt='promise logos'
				className='bg-blue-300 mb-10 container left-0 right-0 w-full h-full object-cover z-10'
			/>
		</div>
    )
}

export default OurPromise
