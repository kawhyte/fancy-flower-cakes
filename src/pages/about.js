import { graphql } from "gatsby";
import Img from "gatsby-image";
import React from "react";
import Layout from "../layouts/Layout";
import SiteMetadata from "../components/SiteMetadata";

const AboutPage = ({ data }) => (
	<Layout>
		<SiteMetadata title='About' description='Sample description' />

		<div className='max-h-screen bg-gray-100 '>
			<div className='container py-12 lg:pb-16'>
				<div className='flex flex-wrap'>
					<div className='w-full pb-8 md:w-1/2 xl:w-3/5 md:pb-0'>
						<h1 className='mt-20 text-3xl font-extrabold leading-tight tracking-tight text-mainBrown sm:text-4xl'>
							Our Story
						</h1>
						<div className='mt-4 leading-loose'>
							For as long as I remember, I always enjoyed cooking and baking but
							decorating cakes was something else. I remember the first time I
							observed my cousin’s wife making a wedding cake. I was fascinated
							and said to myself “I would love to do this one day.” I was just a
							teenager. She taught me to make basic roses for a cake she was
							doing and I was hooked. I continued baking basic recipes over the
							years just for family and friends who encouraged me to take this
							further. I decided to take their advice and completed cake
							decorating courses and before you know it, ‘fancyflowercakes’ was
							born.
							<br />
							<br />
							I'm happy to hear from you:
							<br />
							<a
								href='mailto:fancyflowerrprs@gmail.com'
								className='border-b border-gray-500 hover:border-blue-600 hover:text-blue-600'>
								Send us an email
							</a>
						</div>
					</div>
					<div className='w-full mt-20 md:w-1/2 xl:w-2/5 md:pl-12'>
						<Img
							fluid={data.ears.childImageSharp.fluid}
							alt=' R Smith'
							className='rounded-md shadow-md'
						/>
					</div>
				</div>
			</div>
		</div>
	
	</Layout>
);

export default AboutPage;

export const query = graphql`
	query {
		ears: file(relativePath: { eq: "ears.jpg" }) {
			childImageSharp {
				fluid(maxWidth: 600, maxHeight: 480, quality: 85) {
					...GatsbyImageSharpFluid_withWebp
				}
			}
		}
	}
`;
