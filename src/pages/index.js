import { graphql } from "gatsby";
import React from "react";
import Cards from "../components/Cards";
import Hero from "../components/Hero";
import OurPromise from "../components/OurPromise";
import Layout from "../layouts/Layout";

import SiteMetadata from "../components/SiteMetadata";
import Services from "../components/Services";
import CakeType from "../components/CakeType";

const IndexPage = ({ data }) => {
	return (
		<Layout>
			<SiteMetadata title='Home' description='Portfolio of John Doe' />

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

			<div className='bg-bgColor   pb-1 lg:pb-2'>
				<div className='flex justify-center'>
					<p className='mb-2 bg-accentColor p-2 my-8  text-2xl text-center leading-8 font-extrabold tracking-tight text-black sm:text-4xl sm:leading-10'>
						Cakes & Pastries
					</p>
				</div>

				{/*<div className=' border-b-8 flex mb-10  border-accentColor h-1 mx-auto gradient w-64 opacity-50 my-0 py-0 rounded-t '></div>*/}
				{data.portfolio && data.portfolio.nodes.length > 0 ? (
					<Cards items={data.portfolio.nodes} />
				) : (
					<div className='container'>No projects found.</div>
				)}
			</div>

			<CakeType />

			<Services />
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
