import React from "react"
import Layout from "../layouts/Layout"
import SiteMetadata from "../components/SiteMetadata"

const ErrorPage = () => (
  <Layout>
    <SiteMetadata title="Error 404" description="The page doesn't exists" />

    <div className="bg-gray-100">
      <div className="container py-12 pb-64 lg:pb-128">
        <div className="w-full pb-8 md:w-1/2 xl:w-3/5 md:pb-0">
          <h1 className="text-3xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-4xl">
            Error 404
          </h1>

          <h2 className="text-xl font-semibold leading-tight tracking-tight text-blue-600 sm:text-2xl">
            The page doesn't exists.
          </h2>
        </div>
      </div>
    </div>
  </Layout>
)

export default ErrorPage
