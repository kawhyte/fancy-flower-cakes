import { graphql, Link, useStaticQuery } from "gatsby"
import React, { useState } from "react"
import MenuMobile from "./MenuMobile"
import { FaBars } from "react-icons/fa"


const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const { site } = useStaticQuery(graphql`
    query {
      site {
        data: siteMetadata {
          menu {
            name
            to
          }
        }
      }
    }
  `)

  return (
    <div className="fixed z-30 w-full px-8 pt-2 pb-2 bg-white border-b-2 border-gray-200  md:pt-2">
      <div className="flex items-center justify-between">
        <Link to="/">
          <img alt="Logo" className=" w-32  md:w-32 lg:w-48" src="logo9.png" />
        </Link>

        <button
          className="sm:hidden"
          onClick={() => setIsMenuOpen(true)}
          aria-label="Open Menu"
        >
          <FaBars className="w-auto h-6 -mt-1 text-gray-900 fill-current" />
        </button>

        <div className="hidden sm:block">
          {site.data.menu.map((link, key) => (
            <Link
              key={`menu_desktop_link${key}`}
              className=" pb-2 ml-6 font-medium text-gray-700 uppercase border-b-2 border-transparent sm:ml-8  sm:text-xs lg:text-base hover:text-gray-800 hover:border-gray-200 transition duration-150 ease-in-out"
              activeClassName="border-yellow-500 text-gray-900 hover:border-yellow-500"
              to={link.to}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>
      <MenuMobile
        isOpen={isMenuOpen}
        setIsOpen={setIsMenuOpen}
        links={site.data.menu}
      />
    </div>
  )
}

export default Header
