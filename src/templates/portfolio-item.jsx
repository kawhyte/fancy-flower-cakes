import { graphql } from "gatsby"
import Img from "gatsby-image"
import React from "react"
import SiteMetadata from "../components/SiteMetadata"
import Button from "../components/Button"
import Cards from "../components/Cards"
import Carousel from "../components/Carousel"
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
      <div className="py-12 bg-gray-0 lg:py-16 ">
        <div className="container">
          <div className="flex flex-wrap mt-14">
            <div className="w-full max-w-2xl pb-8 lg:w-2/3">
              {gallery && gallery.length === 1 && (
                <Img
                  fluid={gallery[0].localFile.childImageSharp.fluid}
                  alt={name}
                />
              )}
              {gallery && gallery.length > 1 && <Carousel images={gallery} />}
            </div>
            <div className="w-full lg:w-1/3 lg:pl-8 xl:pl-12">
              <h1 className="mb-1 text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl ">
                {name}
              </h1>
              <h2 className="text-xl font-semibold leading-tight tracking-tight text-mainBrown sm:text-2xl">
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
              {<Button href={"mailto:fancyflowerrprs@gmail.com?subject=More Info"}>Contact Us</Button>}
             
            </div>
          </div>
        </div>
      </div>
      <svg id="Layer_1" data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 134"><defs><style></style></defs><path fill="#F8F5F0" class="cls-1" d="M0,39l60-5.3C120,28,240,18,360,39s240,75,360,74.7c120,.3,240-53.7,360-80C1200,7,1320,7,1380,7h60V295H0Z"/></svg>

      {related && (
        <div className="pt-6 pb-12 bg-bgColor lg:pb-16 lg:pt-6 ">
        
        <div className="container">
        <h2 className="mb-8 text-3xl font-extrabold leading-tight tracking-tight text-center sm:text-4xl text-mainBrown">
        More Cakes & Pastries
        </h2>
        <div className='flex justify-start w-64 h-1 py-0 mx-auto my-0 mb-10 border-b-8 rounded-t opacity-50 border-accentColor gradient '></div>
          </div>
          <Cards items={related} hideLastItemOnMobile={true} />
        </div>
      )}
     
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
