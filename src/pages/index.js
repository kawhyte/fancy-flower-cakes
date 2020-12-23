import { graphql } from "gatsby"
import React from "react"
import Cards from "../components/Cards"
import Hero from "../components/Hero"
import OurPromise from "../components/OurPromise"
import Layout from "../layouts/Layout"
import Newsletter from "../components/Newsletter"
import SiteMetadata from "../components/SiteMetadata"

const IndexPage = ({ data }) => {
  return (
    <Layout>
      <SiteMetadata title="Home" description="Portfolio of John Doe" />

      <Hero />

      <OurPromise />

      <div className="bg-bgColor py-12 lg:py-16">
      <h3 className='mt-2 text-3xl text-center leading-8 font-extrabold tracking-tight text-mainBrown py-2 sm:text-4xl sm:leading-10'>
      Cakes & Pastries 
    </h3>
    <div className='mb-10 border-b-8 flex justify-start border-accentColor h-1 lg:mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t '></div>
        {data.portfolio && data.portfolio.nodes.length > 0 ? (
          <Cards items={data.portfolio.nodes} />
        ) : (
          <div className="container">No projects found.</div>
        )}
      </div>
      <Newsletter />
    </Layout>
  )
}

export default IndexPage

export const query = graphql`
  query HomeQuery {
    portfolio: allContentfulPortfolio {
      nodes {
        ...PortfolioCard
      }
    }
  }
`
