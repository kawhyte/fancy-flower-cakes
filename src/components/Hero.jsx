import React from "react";

import BG from "../images/mainCake2.webp";

const Hero = () => (
	<div>
		<main>
			<div
				className='relative flex items-center content-center justify-center min-h-full pt-16 pb-20'
				style={{
					minHeight: "49vh",
					height: "65vh",
					maxHeight: "65vh",
				}}>
				<div
					className='absolute top-0 w-full h-full bg-center bg-cover'
					style={{
						backgroundImage: `url('${BG}')`,
					}}>
					<span
						id='blackOverlay'
						className='absolute w-full h-full bg-black opacity-25'></span>
				</div>





				
				<div className='container relative mx-auto'>
					<div className='flex flex-wrap items-center sm:px-24 '>
						<div className='w-full px-4 ml-auto mr-auto text-center lg:w-9/12'>
							<div className='pr-12'>
								<h2 className='p-4 font-serif text-4xl font-extrabold tracking-tight text-white leading-10 md:pt-12 sm:text-4xl sm:leading-none md:text-6xl lg:text-7xl'>
									Cakes for all your special occasions.
								</h2>

								<div className='flex justify-start w-40 py-0 mx-auto my-0 border-b-4 rounded-t opacity-50 border-accentColor gradient sm:w-96 '></div>

								<p className='mt-4 mb-4 text-lg text-gray-100 md:text-2xl '>
									Available for pick-up or delivery within a 10 km radius.
									Contact us to discuss.
								</p>
								<a href='mailto:fancyflowerrprs@gmail.com?subject=More Info'>
									<button
										className={
											"bg-accentColor text-black  active:bg-gray-100" +
											" text-xs sm:text-sm font-bold uppercase px-4 py-3 rounded shadow hover:shadow-md outline-none focus:outline-none lg:mr-1 lg:mb-0 ml-3 mb-3"
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
);

export default Hero;
