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
		<div className='m-4 mt-10 mb-10  sm:p-10'>
		{/*<h2 className='font-serif text-xl font-extrabold tracking-tight text-center text-white leading-10 sm:text-4xl sm:leading-none md:text-6xl lg:text-7xl'>
               Cakes for all occasions
              </h2>
	<div className='flex justify-start w-40 py-0 mx-auto my-0 border-b-4 rounded-t opacity-50 border-accentColor gradient '></div>*/}
			
	<div className="flex justify-center">
	<p className='p-2 mb-2 text-xl font-extrabold tracking-tight text-center text-black  leading-8 sm:text-4xl sm:leading-10'>
				What We Offer
				<div className='flex justify-start w-40 py-0 mx-auto my-0 border-b-4 rounded-t opacity-50 border-accentColor gradient  sm:w-72'></div>
			</p>


	</div>
			  

			<div class='container flex justify-center mt-10'>
				<dl class='space-y-10 md:space-y-0 md:grid md:grid-cols-3 md:gap-x-8 md:gap-y-10'>
					<div class='flex flex-col items-center'>
						<div class='flex-shrink-0'>
							<div class='flex items-center justify-center w-20 h-20 text-white rounded-md'>
								<Img
									fluid={data.cake.childImageSharp.fluid}
									alt='cake'
									className='container left-0 right-0 z-10 object-cover w-full h-full mb-10'
								/>
							</div>
						</div>
						<div class=''>
							<dt class='text-lg font-medium text-center text-gray-900 leading-6'>
							Custom Cakes
							</dt>
							<dd class='mt-2 text-base text-center text-gray-600'>
							Send us a photo and we will create what you need.
							</dd>
						</div>
					</div>
					<div class='flex flex-col items-center'>
						<div class='flex-shrink-0'>
							<div class='flex items-center justify-center w-20 h-20 text-white rounded-md'>
								<Img
									fluid={data.muffin.childImageSharp.fluid}
									alt='muffin'
									className='container left-0 right-0 z-10 object-cover w-full h-full mb-10'
								/>
							</div>
						</div>
						<div class=''>
							<dt class='text-lg font-medium text-center text-gray-900 leading-6'>
							Cupcakes
							</dt>
							<dd class='mt-2 text-base text-center text-gray-600'>
							With buttercream frosting with or without custom cake toppers 
							</dd>
						</div>
					</div>
					<div class='flex flex-col items-center'>
						<div class='flex-shrink-0'>
							<div class='flex items-center justify-center w-20 h-20 text-white rounded-md'>
								<Img
									fluid={data.cake.childImageSharp.fluid}
									alt='muffin'
									className='container left-0 right-0 z-10 object-cover w-full h-full mb-10'
								/>
							</div>
						</div>
						<div class=''>
							<dt class='text-lg font-medium text-center text-gray-900 leading-6'>
							Special occasion cakes
							</dt>
							<dd class='mt-2 text-base text-center text-gray-600'>
							Covered with buttercream, ganache or fondant.
							</dd>
						</div>
					</div>
					{/*<div class='flex flex-col items-center'>
						<div class='flex-shrink-0'>
							<div class='flex items-center justify-center w-20 h-20 text-white rounded-md'>
								<Img
									fluid={data.cake.childImageSharp.fluid}
									alt='cake'
									className='container left-0 right-0 z-10 object-cover w-full h-full mb-10'
								/>
							</div>
						</div>
						<div class=''>
							<dt class='text-lg font-medium text-center text-gray-900 leading-6'>
								Delivery options
							</dt>
							<dd class='mt-2 text-base text-center text-gray-500'>
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
