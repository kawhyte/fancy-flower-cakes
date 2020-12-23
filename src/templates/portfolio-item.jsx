import { graphql } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import SiteMetadata from "../components/SiteMetadata"
import Button from "../components/Button"
import Cards from "../components/Cards"
import Carousel from "../components/Carousel"
import Newsletter from "../components/Newsletter"
import Layout from "../layouts/Layout"

export default props => {
  const {
    description,
    gallery,
    name,
    related,
    summary,
    thumbnail,
    url,
  } = props.data.item

  return (
    <Layout>
      <SiteMetadata
        title={name}
        description={summary}
        image={thumbnail.localFile.publicURL}
      />
      <div className="bg-gray-0 py-12 lg:py-16">
        <div className="container">
          <div className="flex flex-wrap">
            <div className="w-full lg:w-2/3 pb-8">
              {gallery && gallery.length === 1 && (
                <Img
                  fluid={gallery[0].localFile.childImageSharp.fluid}
                  alt={name}
                />
              )}
              {gallery && gallery.length > 1 && <Carousel images={gallery} />}
            </div>
            <div className="w-full lg:w-1/3 lg:pl-8 xl:pl-12">
              <h1 className="text-3xl leading-tight font-extrabold tracking-tight text-gray-900 sm:text-4xl mb-1 ">
                {name}
              </h1>
              <h2 className="text-xl leading-tight font-semibold tracking-tight text-blue-600 sm:text-2xl">
                {summary}
              </h2>
              {description && (
                <div className="my-4 text-base text-gray-700 whitespace-pre-line">
                  {description.description}
                </div>
              )}
              {url && (
                <div className="mt-8">
                  <Button href={url}>More info</Button>
                </div>
              )}
              {<Button href={url}>More info</Button>}
            </div>
          </div>
        </div>
      </div>
      <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 134"><defs><style></style></defs><path fill="#f4eeed" class="cls-1" d="M0,39l60-5.3C120,28,240,18,360,39s240,75,360,74.7c120,.3,240-53.7,360-80C1200,7,1320,7,1380,7h60V295H0Z"/></svg>

      {related && (
        <div className="bg-bgColor pt-6 pb-12 lg:pb-16 lg:pt-6 ">
        
        <div className="container">
        <h2 className="text-3xl sm:text-4xl text-center leading-tight font-extrabold tracking-tight text-mainBrown mb-8">
        More Cakes & Pastries
        </h2>
        <div className='mb-10 border-b-8 flex justify-start border-accentColor h-1 mx-auto gradient w-64 opacity-50 my-0 py-0 rounded-t '></div>
          </div>
          <Cards items={related} hideLastItemOnMobile={true} />
        </div>
      )}
      <Newsletter />
    </Layout>
  )
}

export const query = graphql`
  query PortfolioItemQUery($slug: String!) {
    item: contentfulPortfolio(slug: { eq: $slug }) {
      description {
        description
      }
      gallery {
        id
        localFile {
          childImageSharp {
            fluid(maxWidth: 960, quality: 85) {
              ...GatsbyImageSharpFluid_withWebp
            }
          }
        }
        title
      }
      name
      related {
        ...PortfolioCard
      }
      summary
      thumbnail {
        localFile {
          publicURL
        }
      }
      url
    }
  }
`
