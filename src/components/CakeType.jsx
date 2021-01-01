import React from 'react'
import man_drawing from "../images/cake_slice.jpg"
import project from "../images/cake_slice.jpg"
import drafting from "../images/cake_slice.jpg"
function CakeType() {

	const list_style = "text-lg md:text-2xl font-medium text-gray-700 leading-tight";
	const unorderdlist = "text-gray-300  mb-8 lg:text-lg list-disc ml-6";
	const list_position = "p-8 absolute left-0 z-20";

    return (
        <div>
        <div className="bg-bgColor p-4 m-8 container  ">
    
      
        <section className=" text-gray-900 ">
        <div className="container max-w-5xl mx-auto  md:mt-0">

              <div className="flex flex-wrap">
                <div className="w-5/6 sm:w-1/2 sm:p-6">
                <p
                class='px-4 py-1 bg-accentColor inline-flex items-center justify-center mb-2'>
                Cake Types
            </p>

            <ul className={unorderdlist}>
            <li className={list_style}>Vanilla</li>
            <li className={list_style}>Red velvet </li>
            <li className={list_style}>Chocolate</li>
            <li className={list_style}>Lemon</li>
            <li className={list_style}>Carrot & walnut </li>
            <li className={list_style}>
                Jamaican rum cake (black cake; fruit cake){" "}
            </li>
        </ul>
                </div>
                <div className="w-full sm:w-1/2 sm:p-6">
                  <img className="w-full mx-auto" src={project} alt="Contacts" />
                </div>
              </div>
  
              <div className="flex flex-wrap flex-col-reverse sm:flex-row">
                <div className="w-full sm:w-1/2 sm:p-6 sm:mt-6">
                  <img
                    className="w-full mx-auto"
                    src={man_drawing}
                    alt="Contacts"
                  />
                </div>
                <div className="w-full sm:w-1/2 pt-5 sm:pt-0 sm:p-6 mt-6">
                  <div className="align-middle">
                    <h3 className="text-2xl font-bold leading-none mb-3">
                      Working Drawing{" "}
                    </h3>
                    <p className="text-gray-400 mb-8 text-base lg:text-lg">
                      Working drawings provide graphical, and dimensioned
                      information. This data is used by the contractors to build
                      their work. Working drawing can be in the form of structural
                      drawings, architectural drawings, civil drawings, electrical
                      drawings and mechanical drawings.
                      <br />
                      <br />
                    </p>
                  </div>
                </div>
              </div>
  
              <div className="flex flex-wrap">
                <div className="w-5/6 sm:w-1/2 pt-10 sm:p-6">
                  <h3 className="text-2xl font-bold leading-none mb-3">
                    Drafting
                  </h3>
                  <p className="text-gray-400 mb-8 text-base lg:text-lg">
                    Drafting is the visual language of industry, construction and
                    engineering. Drafting services will be able to provide
                    technical drawings for any purpose, including unit
                    developments, extensions, alterations, and Local permit
                    applications and will work across many industries including
                    industrial design, surveying, engineering, construction,
                    mining, and materials handling.
                    <br />
                    <br />
                  </p>
                </div>
                <div className="w-full sm:w-1/2 sm:p-6">
                  <img
                    className="w-full  mx-auto mb-10  "
                    src={drafting}
                    //   src="https://res.cloudinary.com/babyhulk/image/upload/w_70,h_70,f_auto/v1589318555/hero-image/avatar-01.png"
                    alt="Contacts"
                  />
                </div>
              </div>
            </div>
          </section>
       
      </div>
        </div>
    )
}

export default CakeType
