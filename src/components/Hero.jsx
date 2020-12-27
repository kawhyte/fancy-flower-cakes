import React from "react"
import { Link } from "gatsby";

import BG from "../images/mainCake.webp";

const Hero = () => (
  <div>
  <main>
    <div
      className='relative pt-16 pb-32 flex content-center items-center justify-center'
      style={{
        minHeight: "75vh",
      }}>
      <div
        className='absolute top-0 w-full h-full bg-center bg-cover'
        style={{
          backgroundImage: `url('${BG}')`,
        }}>
        <span
          id='blackOverlay'
          className='w-full h-full absolute opacity-25 bg-black'></span>
      </div>
      <div className='container relative mx-auto'>
        <div className='items-center flex flex-wrap sm:px-24 '>
          <div className='w-full lg:w-9/12 px-4 ml-auto mr-auto text-center'>
            <div className='pr-12'>
              <h2 className=' bg-accentColor p-2 text-4xl tracking-tight leading-10 font-extrabold text-mainBrown sm:text-4xl sm:leading-none md:text-6xl lg:text-7xl'>
               Fancyflower Cakes
              </h2>

              <p className='mt-4 mb-4 text-base md:text-2xl text-gray-300 '>
                Cakes for all your special occasions. 
              </p>
              <a  href="mailto:fancyflowerrprs@gmail.com?subject=More Info">
                <button
                  className={
                    "bg-accentColor text-black  active:bg-gray-100" +
                    " text-xs sm:text-sm font-bold uppercase px-4 py-4 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3"
                  }
                  type='button'
                  style={{ transition: "all .15s ease" }}>
                  <i className='fas fa-arrow-alt-circle-down'></i>Contact Us
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
 
    </div>


  </main>
</div>
)

export default Hero
