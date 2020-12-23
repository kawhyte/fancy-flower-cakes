import React from "react"
import man_drawing from "../images/man_drawing.jpg"
import project from "../images/project.jpg"
import drafting from "../images/drafting.jpg"
function Services() {
  return (
    
    <div className="bg-black  ">
    
      
      <section className=" text-white ">
      <div className="container max-w-5xl mx-auto  md:mt-0">
      <h1 className="container text-md py-8  sm:py-12 lg:pb-1  text-md text-white font-bold leading-none mb-3 uppercase ">
        What we do
      </h1>
            <div className="flex flex-wrap">
              <div className="w-5/6 sm:w-1/2 sm:p-6">
                <h3 className="text-2xl font-bold leading-none mb-3">
                  Project Management
                </h3>
                <p className="text-gray-400 mb-8 text-base lg:text-lg">
                  Project management is a critical practice that applies
                  knowledge of process, skills, tools, deliverables, and
                  techniques to project activities to ensure a solid path to
                  project success by meeting goals and requirements.
                  <br />
                  <br />
                </p>
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
  )
}

export default Services
