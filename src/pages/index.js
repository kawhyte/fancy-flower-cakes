import { graphql } from "gatsby";
import React from "react";
import Cards from "../components/Cards";
import Hero from "../components/Hero";
import OurPromise from "../components/OurPromise";
import Layout from "../layouts/Layout";

import SiteMetadata from "../components/SiteMetadata";

import CakeType from "../components/CakeType";
import PhotoGallery from "../components/PhotoGallery";

const IndexPage = ({ data }) => {
	return (
		<Layout>
			<SiteMetadata title='Home' description='Fancyflower Cakes' />

			<Hero />

			<OurPromise />
		

			<svg
				id='Layer_1'
				data-name='Layer 1'
				xmlns='http://www.w3.org/2000/svg'
				viewBox='0 0 1440 134'>
				<defs>
					<style></style>
				</defs>
				<path
					fill='#F8F5F0'
					class='cls-1'
					d='M0,39l60-5.3C120,28,240,18,360,39s240,75,360,74.7c120,.3,240-53.7,360-80C1200,7,1320,7,1380,7h60V295H0Z'
				/>
			</svg>

			<div className='pb-1 bg-bgColor lg:pb-20'>
		

				<div className="flex justify-center">
				<p className='p-2 mb-2 text-xl font-extrabold leading-8 tracking-tight text-center text-black sm:text-4xl sm:leading-10'>
				Cakes & Pastries Photo Gallery
							<div className='flex justify-start w-40 py-0 mx-auto my-0 border-b-4 rounded-t opacity-50 border-accentColor gradient sm:w-72 '></div>
						</p>
			
			
				</div>

				<PhotoGallery className='flex w-64 h-1 py-0 mx-auto my-0 mb-10 border-b-8 rounded-t opacity-50 border-accentColor gradient' />

				{/*<div className='flex w-64 h-1 py-0 mx-auto my-0 mb-10 border-b-8 rounded-t opacity-50 border-accentColor gradient'></div>
				{data.portfolio && data.portfolio.nodes.length > 0 ? (
					<Cards items={data.portfolio.nodes} />
				) : (
					<div className='container'>No projects found.</div>
				)}*/}
			</div>

<svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 134"><defs><style></style></defs><path fill='#F8F5F0' class="cls-1" d="M1440,99l-60,5.3c-60,5.7-180,15.7-300-5.3S840,24,720,24.3C600,24,480,78,360,104.3,240,131,120,131,60,131H0V-157H1440Z"/></svg>

			<CakeType />

		
		</Layout>
	);
};

export default IndexPage;

export const query = graphql`
	query HomeQuery {
		portfolio: allContentfulPortfolio {
			nodes {
				...PortfolioCard
			}
		}
	}
`;
