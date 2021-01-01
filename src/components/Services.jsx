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

	
	
		</div>
	);
}

export default Services;
