import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

function OurPromise() {
	const data = useStaticQuery(graphql`
		query {
			cake: file(relativePath: { eq: "cake.png" }) {
				childImageSharp {
					fluid(maxWidth: 120, maxHeight: 120, quality: 85) {
						...GatsbyImageSharpFluid_withWebp
					}
				}
			}
			muffin: file(relativePath: { eq: "muffin.png" }) {
				childImageSharp {
					fluid(maxWidth: 120, maxHeight: 120, quality: 85) {
						...GatsbyImageSharpFluid_withWebp
					}
				}
			}
		}
	`);
	return (
		<div className='mt-20 mb-10 '>
			<p className='mb-2 mt-2 text-3xl text-center leading-8 font-extrabold tracking-tight text-mainBrown py-2 sm:text-4xl sm:leading-10'>
				What We Offer
			</p>

			<div class='mt-10 flex justify-center container'>
				<dl class='space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10'>
					<div class='flex flex-col items-center'>
						<div class='flex-shrink-0'>
							<div class='flex items-center justify-center h-20 w-20 rounded-md text-white'>
								<Img
									fluid={data.cake.childImageSharp.fluid}
									alt='cake'
									className='mb-10 container left-0 right-0 w-full h-full object-cover z-10'
								/>
							</div>
						</div>
						<div class=''>
							<dt class='text-lg text-center leading-6 font-medium text-gray-900'>
								Custom cake sizes
							</dt>
							<dd class='mt-2 text-center text-base text-gray-500'>
							Send us a photo and we will create what you need.
							</dd>
						</div>
					</div>
					<div class='flex flex-col items-center'>
						<div class='flex-shrink-0'>
							<div class='flex items-center justify-center h-20 w-20 rounded-md text-white'>
								<Img
									fluid={data.muffin.childImageSharp.fluid}
									alt='muffin'
									className='mb-10 container left-0 right-0 w-full h-full object-cover z-10'
								/>
							</div>
						</div>
						<div class=''>
							<dt class='text-lg text-center leading-6 font-medium text-gray-900'>
							Cupcakes
							</dt>
							<dd class='mt-2 text-center text-base text-gray-500'>
							With buttercream frosting with or without custom cake toppers 
							</dd>
						</div>
					</div>
					<div class='flex flex-col items-center'>
						<div class='flex-shrink-0'>
							<div class='flex items-center justify-center h-20 w-20 rounded-md text-white'>
								<Img
									fluid={data.muffin.childImageSharp.fluid}
									alt='muffin'
									className='mb-10 container left-0 right-0 w-full h-full object-cover z-10'
								/>
							</div>
						</div>
						<div class=''>
							<dt class='text-lg text-center leading-6 font-medium text-gray-900'>
							Special occasion cakes
							</dt>
							<dd class='mt-2 text-center text-base text-gray-500'>
							Covered with buttercream, ganache or fondant.
							</dd>
						</div>
					</div>
					{/*<div class='flex flex-col items-center'>
						<div class='flex-shrink-0'>
							<div class='flex items-center justify-center h-20 w-20 rounded-md text-white'>
								<Img
									fluid={data.cake.childImageSharp.fluid}
									alt='cake'
									className='mb-10 container left-0 right-0 w-full h-full object-cover z-10'
								/>
							</div>
						</div>
						<div class=''>
							<dt class='text-lg text-center leading-6 font-medium text-gray-900'>
								Delivery options
							</dt>
							<dd class='mt-2 text-center text-base text-gray-500'>
								Made locally in Toronto. Only available for pick-up.
							</dd>
						</div>
	</div>*/}
				</dl>
            </div>
            
            
		</div>
	);
}

export default OurPromise;
