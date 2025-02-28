import React, { useEffect, useState } from "react";
// import { convertCard } from "../controllers/convertCard";
// import { output } from "../utils/output";
// import FriedFishBasket from "../../assets/FriedFishBasket.jpg";
// import CheeseBurger from "../../assets/CheeseBurger.jpg";
// import ChefsKissSalad from "../../assets/ChefsKissSalad.jpg";
// import SeafoodGumbo from "../../assets/SeafoodGumbo.jpg";
// import ChickenBasket from "../../assets/ChickenBasket.jpg";
// import ShrimpPoboy from "../../assets/ShrimpPoboy.jpg";
import { Carousel } from "./Carousel";

export function Photos() {
	const [didMount, setDidMount] = useState(false);
	useEffect(componentDidMount, []);
	useEffect(componentDidUpdate);
	useEffect(componentDidUnmount, []);
	return (
		<main>
			<h1>Good Food Hall of Fame</h1>

			<div className="container">
				<div className="row">
					<div className="col-8 col-md-10 col-lg-12">
						<Carousel />
					</div>
				</div>
				<div className="row">
					<div className="col-6 col-md-6 col-lg-12">CARD1</div>
				</div>
				<div className="row">
					<div className="col-6 col-md-6 col-lg-12">CARD2</div>
				</div>
				<div className="row">
					<div className="col-6 col-md-6 col-lg-12">CARD3</div>
				</div>
				<div className="row">
					<div className="col-6 col-md-6 col-lg-12">CARD4</div>
				</div>
				<div className="row">
					<div className="col-6 col-md-6 col-lg-12">CARD5</div>
				</div>
				<div className="row">
					<div className="col-6 col-md-6 col-lg-12">CARD6</div>
				</div>
			</div>
		</main>
	);

	function componentDidMount() {
		setDidMount(true);
		console.log("The Photos component has mounted.");
		document.title = "Photos";

		//OBJECTS WITH PROPERTIES IN A CARD W / IMAGE
		// 	const card1 = { ""}
		// 		{{
		// 	src: {FriedFishBasket},
		// 	title: "Fried Fish Basket"
		// 	alt: "fried fish basket"
		// 	summary:"Local, Wild-caught Catfish and Soft-Shelled Crabs fried to perfection. ",
		// 		}}
		// 		; const card2 ={""}
		// 		{{
		// 			src: "{CheeseBurger}",
		// 			title: "1/4 lb Cheeseburger",
		// 			alt: "cheeseburger",
		// 			summary:
		// 				"Juicy 1/4-lb Joseph Farms cheeseburger with roasted garlic aioli on a brioche bun. Ask for it with 'All The Fixin's' for an extra special treat!",
		// 		}}
		// 		; const card3 ={" "}
		// 		{{
		// 			src: "{ChefsKissSalad}"
		// 			title: "Chef's Kiss Salad"
		// 			alt: "salad"
		// 			summary:
		// 				"House-grown greens with spring vegetables and tangy Meyer lemon vinaigrette. Extra Avocado is the chef's kiss!"
		// 		}}
		// 		; const card4 ={" "}
		// 		{{
		// 			src: "{ShrimpPoboy}"
		// 			title: "Overstuffed Shrimp PoBoy"
		// 			alt: "shrimp poboy"
		// 			summary:
		// 				"Big, juicy, fresh-caught Gulf shrimp, fried light and crisp on a homemade french bread bun from local world-renown Lejuene's Bakery. Serving sizes large enough for now and some for later. "
		// 		}}
		// ; const card5 = { " "}
		// 		{{
		// 			src: "{ChickenBasket}"
		// 			title: "Chicken Tender Basket"
		// 			alt: "chicken tenders and fries"
		// 			summary:
		// 				"Crispy, juicy chicken tenders seasoned to perfection and freshly breaded by our chef daily. Served with hand-cut fries made from Yukon Gold potatoes, because only the best for our family and friends. "
		// 		}}
		// 		; const card6 ={" "}
		// 		{{
		// 			src: "{SeafoodGumbo}"
		// 			title: "Seafood Gumbo"
		// 			alt: "bowl of seafood gumbo"
		// 			summary:
		// 				"Our Ragin' Cajun rendition of the classic NOLA staple made in-house. Think HUGE Gulf Shrimp, Chicken, and Andouille Sausage Gumbo over seasoned, steamed rice. Even better with a piece of Sweet Potato Corn Bread. Thank us later."
		// 		}}
		// 	 const cardsArray = [card1, card2, card3, card4, card5,
		// 				card6]
		// 				for (position = 0; position < cardsArray.length; position++) {
		// 		const card = cardsArray[position];
		//             const cardString = convertCard(card);
		//             output(cardString);
		//         }
	}

	function componentDidUpdate() {
		if (didMount === true) {
			console.log("The Photos component has updated.");
		}
	}
	function componentDidUnmount() {
		return function () {
			console.log("The Photos component has unmounted.");
		};
	}
}
