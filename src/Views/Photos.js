import React, { useEffect } from "react";
import { Footer } from "./Footer.js";
import { convertCard } from "../controllers/convertCard.js";
import { output } from "../utils/output.js";
import { NavCollapse } from "./NavCollapse.js";

export function Photos() {
	useEffect(componentDidMount, []);
	useEffect(componentDidUpdate, []);
	useEffect(componentDidUnmount, []);
	return (
		<>
			<header>
				<img
					width="100%"
					alt="fried seafood platter"
					src="https://cdn.glitch.global/cbca519c-2e2c-44e5-a058-374e1c8be1a2/Screenshot%202024-08-03%20021209.jpg?v=1722669203847"
				/>
				<NavCollapse />
			</header>
			<main>
				<h1>Good Food Hall of Fame</h1>
			</main>
			<Footer id="photosFooter" />
		</>
	);
	function componentDidMount() {
		document.title = "Photos";
		console.log("The component has mounted on the Photos page.");

		return componentDidUnmount;

		//OBJECTS WITH PROPERTIES IN A CARD W / IMAGE
		// 	const card1 = { ""}
		// 		{{
		// 	src: "https://preview.redd.it/i-ate-fried-seafood-platter-v0-7747apv88fta1.jpg?width=1080&crop=smart&auto=webp&s=e08c9217fed766d3a6cabb738cb0ef3f5e52787e",
		// 	title: "Fried Fish Basket"
		// 	alt: "fried fish basket"
		// 	summary:"Local, Wild-caught Catfish and Soft-Shelled Crabs fried to perfection. ",
		// 		}}
		// 		; const card2 ={""}
		// 		{{
		// 			src: "https://preview.redd.it/homemade-cheese-burger-v0-pmd5oy5t8zi81.jpg?width=1080&crop=smart&auto=webp&s=f49ce6cd57bbc114321f28a7cbeecb9f6c046b84",
		// 			title: "1/4 lb Cheeseburger",
		// 			alt: "cheeseburger",
		// 			summary:
		// 				"Juicy 1/4-lb Joseph Farms cheeseburger with roasted garlic aioli on a brioche bun. Ask for it with 'All The Fixin's' for an extra special treat!",
		// 		}}
		// 		; const card3 ={" "}
		// 		{{
		// 			src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSybPdO2LAoxRLzN5P2nAk-K6BIf7dnxvtTgQ&s"
		// 			title: "Chef's Kiss Salad"
		// 			alt: "salad"
		// 			summary:
		// 				"House-grown greens with spring vegetables and tangy Meyer lemon vinaigrette. Extra Avocado is the chef's kiss!"
		// 		}}
		// 		; const card4 ={" "}
		// 		{{
		// 			src: "https://cdn.glitch.global/82eb993a-bf96-4031-9a18-ee851469bb49/shrimp%20poboy%20pic.jpg?v=1726040746520"
		// 			title: "Overstuffed Shrimp PoBoy"
		// 			alt: "shrimp poboy"
		// 			summary:
		// 				"Big, juicy, fresh-caught Gulf shrimp, fried light and crisp on a homemade french bread bun from local world-renown Lejuene's Bakery. Serving sizes large enough for now and some for later. "
		// 		}}
		// ; const card5 = { " "}
		// 		{{
		// 			src: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRb7qgRRm6zENkt-O4EcLq0bwS0ZDAI28IUFA&s"
		// 			title: "Chicken Tender Basket"
		// 			alt: "chicken tenders and fries"
		// 			summary:
		// 				"Crispy, juicy chicken tenders seasoned to perfection and freshly breaded by our chef daily. Served with hand-cut fries made from Yukon Gold potatoes, because only the best for our family and friends. "
		// 		}}
		// 		; const card6 ={" "}
		// 		{{
		// 			src: "https://preview.redd.it/homemade-gumbo-v0-k3pras89rxxb1.jpg?width=640&crop=smart&auto=webp&s=64d1effcf4bee4295146cc95f7263a013bb8e8ab"
		// 			title: "Seafood Gumbo"
		// 			alt: "bowl of seafood gumbo"
		// 			summary:
		// 				"Our Ragin' Cajun rendition of the classic NOLA staple made in-house. Think HUGE Gulf Shrimp, Chicken, and Andouille Sausage over seasoned, steamed rice. Even better with a piece of Sweet Potato Corn Bread. Thank us later."
		// 		}}
		// 	 const cardsArray = [card1, card2, card3, card4, card5,
		// 				card6]
		// 				for (position = 0; position < cardsArray.length; position++) {
		// 		const card = cardsArray[position];
		//             const cardString = convertCard(card);
		//             output(cardString);
		//         }
	}
}
function componentDidUpdate() {
	console.log("The component has updated.");
}
function componentDidUnmount() {
	return function () {
		console.log("The component has unmounted.");
	};
}
