import React from "react";
import jam from "../images/jam.webp";
import slice from "../images/slice.webp";
import nuts from "../images/nuts.webp";
function CakeType() {
	const list_style =
		"text-lg md:text-xl font-medium text-gray-700 leading-tight";
	const unorderdlist = "text-gray-300  mb-8 lg:text-lg list-disc ml-6";
	const list_position = "p-8 absolute left-0 z-20";

	
	return (
		<div className=" grid">
			<div className='container p-4 m-8 '>
				<section className='text-gray-900 '>
					<div className='container max-w-5xl mx-auto  md:mt-0'>
						<div className='flex flex-wrap  bg-bgColor'>
							<div className='w-5/6 sm:w-1/2 sm:p-6 '>
								<p className='p-2 mb-2 text-xl font-extrabold tracking-tight text-center text-black sm:my-0  leading-8 sm:text-3xl sm:leading-10'>
									Cake Types
									<div className='flex justify-start w-40 py-0 mx-auto my-0 border-b-4 rounded-t opacity-50 border-accentColor gradient sm:w-64 '></div>
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
							<div className='w-full sm:w-5/12 sm:p-6'>
								<img className='w-full mx-auto' src={slice} alt='Contacts' />
							</div>
						</div>
						<div className='flex flex-wrap sm:flex-row-reverse'>
							<div className='w-5/6 sm:w-1/2 sm:p-6'>
								<p className='p-2 mb-2 text-xl font-extrabold tracking-tight text-center text-black my-9 sm:my-0  leading-8 sm:text-3xl sm:leading-10'>
									Fillings
									<div className='flex justify-start w-40 py-0 mx-auto my-0 border-b-4 rounded-t opacity-50 border-accentColor gradient sm:w-64 '></div>
								</p>

								<ul className={unorderdlist}>
									<li className={list_style}>
										American Buttercream with a variety of added fruit flavors{" "}
									</li>
									<li className={list_style}>Italian Buttercream </li>
									<li className={list_style}>Swiss meringue buttercream</li>
									<li className={list_style}>Cream cheese frosting</li>
									<li className={list_style}>
										Whipped cream with fresh fruit{" "}
									</li>
									<li className={list_style}>Vanilla custard </li>
									<li className={list_style}>Lemon custard</li>
									<li className={list_style}>Fruit Jams or jellies </li>
								</ul>
							</div>
							<div className='w-full sm:w-5/12 sm:p-6'>
								<img className='w-full mx-auto' src={jam} alt='Contacts' />
							</div>
						</div>
						<div className='flex flex-wrap bg-bgColor'>
							<div className='w-5/6 sm:w-1/2 sm:p-6 '>
								<p className='p-2 mb-2 text-xl font-extrabold tracking-tight text-center text-black my-9 sm:my-0 leading-8 sm:text-3xl sm:leading-10'>
									Toppings
									<div className='flex justify-start w-40 py-0 mx-auto my-0 border-b-4 rounded-t opacity-50 border-accentColor gradient sm:w-64 '></div>
								</p>

								<ul className={unorderdlist}>
									<li className={list_style}>Chopped nuts </li>
									<li className={list_style}>Chocolates </li>
									<li className={list_style}>
										Chocolate covered strawberries\Fresh fruits{" "}
									</li>
									<li className={list_style}>Fresh flowers</li>
									<li className={list_style}>Sugar flowers </li>
									<li className={list_style}>Customs decor </li>
									<li className={list_style}>Cookies</li>
								</ul>
							</div>
							<div className='w-full sm:w-5/12 sm:p-6'>
								<img className='w-full mx-auto' src={nuts} alt='Contacts' />
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}

export default CakeType;
