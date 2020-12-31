import React from "react";
import man_drawing from "../images/cake_slice.jpg";
import project from "../images/cake_slice.jpg";
import drafting from "../images/cake_slice.jpg";
import BG from "../images/mainCake.webp";

function Services() {
	const list_style = "text-xl md:text-2xl font-medium text-gray-100 leading-tight";
	const unorderdlist = "text-gray-300  mb-8 lg:text-lg list-disc ml-6";
	const list_position = "p-8 absolute left-0 z-20";
	return (
		<div className='grid grid-cols-1 lg:grid-cols-3 gap-4 mx-8   md:mx-48'>
			<div
				class='mb-4  md:mb-0 w-full max-w-screen-md mx-auto relative'
				style={{ height: "24em" }}>
				<div
					class='absolute left-0 bottom-0 w-full h-96 z-10'
					style={{
						backgroundImage:
							"linear-gradient(180deg,transparent,rgba(0,0,0,.7)",
					}}></div>

				<img
					src={drafting}
					class='absolute left-0 top-0 w-full h-full rounded z-0 object-cover'
				/>
				<div className={list_position}>
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
			</div>
			<div
				class='mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative'
				style={{ height: "24em" }}>
				<div
					class='absolute left-0 bottom-0 w-full h-96 z-10'
					style={{
						backgroundImage:
							"linear-gradient(180deg,transparent,rgba(0,0,0,.7)",
					}}></div>

				<img
					src={BG}
					class='absolute left-0 top-0 w-full h-full rounded z-0 object-cover'
				/>
				<div className={list_position}>
					<p
						href='#'
						class='px-4 py-1 bg-accentColor inline-flex items-center justify-center mb-2'>
						Fillings
					</p>
					<ul className={unorderdlist}>
						<li className={list_style}>
							American Buttercream with a variety of added fruit flavors{" "}
						</li>
						<li className={list_style}>Italian Buttercream </li>
						<li className={list_style}>Swiss meringue buttercream</li>
						<li className={list_style}>Cream cheese frosting</li>
						<li className={list_style}>Whipped cream with fresh fruit </li>
						<li className={list_style}>Vanilla custard </li>
						<li className={list_style}>Lemon custard</li>
						<li className={list_style}>Fruit Jams or jellies </li>
					</ul>
				</div>
			</div>
			<div
				class='mb-4 md:mb-0 w-full max-w-screen-md mx-auto relative'
				style={{ height: "24em" }}>
				<div
					class='absolute left-0 bottom-0 w-full h-96 z-10'
					style={{
						backgroundImage:
							"linear-gradient(180deg,transparent,rgba(0,0,0,.7)",
					}}></div>

				<img
					src={BG}
					class='absolute left-0 top-0 w-full h-full rounded z-0 object-cover'
				/>
				<div className={list_position}>
					<p
						href='#'
						class='px-4 py-1 bg-accentColor inline-flex items-center justify-center mb-2'>
						Toppings
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
			</div>

			<section className=' text-white my-10 '>
				<div className='container max-w-5xl mx-auto  md:mt-0 '>
					<div className='flex flex-wrap'>
						<div className='w-5/6 sm:w-1/2 sm:p-6'>
							<h3 className='text-2xl text-accentColor font-bold leading-none mb-3'>
								Cake Types
							</h3>
							<ul className='text-gray-400 mb-8 text-base lg:text-lg'>
								<li>Vanilla</li>
								<li>Red velvet </li>
								<li>Chocolate</li>
								<li>Carrot and walnut</li>
								<li>Lemon</li>
								<li>Jamaican rum cake (black cake; fruit cake)</li>

								<br />
								<br />
							</ul>
						</div>
						<div className='w-full sm:w-1/2 sm:p-6'>
							<img className='w-full mx-auto' src={project} alt='Contacts' />
						</div>
					</div>

					<div className='flex flex-wrap flex-col-reverse sm:flex-row'>
						<div className='w-full sm:w-1/2 sm:p-6 sm:mt-6'>
							<img
								className='w-full mx-auto'
								src={man_drawing}
								alt='Contacts'
							/>
						</div>
						<div className='w-full sm:w-1/2 pt-5 sm:pt-0 sm:p-6 mt-6'>
							<div className='align-middle'>
								<h3 className='text-2xl font-bold leading-none mb-3'>
									Fillings{" "}
								</h3>
								<p className='text-gray-400 mb-8 text-base lg:text-lg'>
									American Buttercream with a variety of added fruit flavors
									Italian Buttercream Swiss meringue buttercream Cream cheese
									frosting Whipped cream with fresh fruit Vanilla custard Lemon
									custard Fruit Jams or jellies
									<br />
									<br />
								</p>
							</div>
						</div>
					</div>

					<div className='flex flex-wrap'>
						<div className='w-5/6 sm:w-1/2 pt-10 sm:p-6'>
							<h3 className='text-2xl font-bold leading-none mb-3'>Toppings</h3>
							<p className='text-gray-400 mb-8 text-base lg:text-lg'>
								Chopped nuts Chocolates Chocolate covered strawberries \Fresh
								fruits Fresh flowers Sugar flowers Customs decor Cookies
								<br />
								<br />
							</p>
						</div>
						<div className='w-full sm:w-1/2 sm:p-6'>
							<img
								className='w-full  mx-auto mb-10  '
								src={drafting}
								//   src="https://res.cloudinary.com/babyhulk/image/upload/w_70,h_70,f_auto/v1589318555/hero-image/avatar-01.png"
								alt='Contacts'
							/>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}

export default Services;
