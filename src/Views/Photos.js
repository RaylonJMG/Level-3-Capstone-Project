import React, { useEffect, useState } from "react";
import FriedFishBasket from "../../assets/FriedFishBasket.jpg";
import CheeseBurger from "../../assets/CheeseBurger.jpg";
import ChefsKissSalad from "../../assets/ChefsKissSalad.jpg";
import SeafoodGumbo from "../../assets/SeafoodGumbo.jpg";
import ChickenBasket from "../../assets/ChickenBasket.jpg";
import ShrimpPoboy from "../../assets/ShrimpPoboy.jpg";

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
					<div className="col-12 col-md-6 col-lg-6">
						<div
							className="card"
							id="card1">
							<img
								src={FriedFishBasket}
								className="card-img-top"
								alt="Card image"
							/>
							<div className="card-body">
								<h5 className="card-title">Fried Fish Basket</h5>
								<p className="card-text">
									Local, Wild-caught Catfish and Soft-Shelled Crabs fried to
									perfection.
								</p>
								<br />
							</div>
						</div>
					</div>
					<div className="col-12 col-md-6 col-lg-6">
						<div
							className="card"
							id="card2">
							<img
								src={ChefsKissSalad}
								className="card-img-top"
								alt="Chef's Kiss Salad"
							/>
							<div className="card-body">
								<h5 className="card-title">Chef's Kiss Salad</h5>
								<p className="card-text">
									House-grown greens with spring vegetables and tangy Meyer
									lemon vinaigrette. Extra Avocado is the chef's kiss!
								</p>
								<br />
							</div>
						</div>
					</div>
					<div className="col-12 col-md-6 col-lg-6">
						<div
							className="card"
							id="card3">
							<img
								src={CheeseBurger}
								className="card-img-top"
								alt="CheeseBurger"
							/>
							<div className="card-body">
								<h5 className="card-title">CheeseBurger</h5>
								<p className="card-text">
									Juicy 1/4-lb Joseph Farms cheeseburger with roasted garlic
									aioli on a brioche bun. Ask for it with 'All The Fixin's' for
									an extra special treat!
								</p>
								<br />
							</div>
						</div>
					</div>
					<div className="col-12 col-md-6 col-lg-6">
						<div
							className="card"
							id="card1">
							<img
								src={SeafoodGumbo}
								className="card-img-top"
								alt="Seafood Gumbo"
							/>
							<div className="card-body">
								<h5 className="card-title">Seafood Gumbo</h5>
								<p className="card-text">
									Our Ragin' Cajun rendition of the classic NOLA staple made
									in-house. Think HUGE Gulf Shrimp, Chicken, and Andouille
									Sausage Gumbo over seasoned, steamed rice. Even better with a
									piece of Sweet Potato Corn Bread. Thank us later.
								</p>
								<br />
							</div>
						</div>
					</div>
					<div className="col-12 col-md-6 col-lg-6">
						<div
							className="card"
							id="card5">
							<img
								src={ShrimpPoboy}
								className="card-img-top"
								alt="Shrimp Poboy"
							/>
							<div className="card-body">
								<h5 className="card-title">ShrimpPoboy</h5>
								<p className="card-text">
									Big, juicy, fresh-caught Gulf shrimp, fried light and crisp on
									a homemade french bread bun from local world-renown Lejuene's
									Bakery. Serving sizes large enough for now and some for later.
								</p>
								<br />
							</div>
						</div>
					</div>
					<div className="col-12 col-md-6 col-lg-6">
						<div
							className="card"
							id="card6">
							<img
								src={ChickenBasket}
								className="card-img-top"
								alt="Chicken Basket"
							/>
							<div className="card-body">
								<h5 className="card-title">Chicken Basket</h5>
								<p className="card-text">
									Crispy, juicy chicken tenders seasoned to perfection and
									freshly breaded by our chef daily. Served with hand-cut fries
									made from Yukon Gold potatoes, because only the best for our
									family and friends.
								</p>
								<br />
							</div>
						</div>
					</div>
				</div>
			</div>
		</main>
	);

	function componentDidMount() {
		setDidMount(true);
		console.log("The Photos component has mounted.");
		document.title = "Photos";
		// for (let card of cardsArray) {
		// 	//const cardString = convertCard(card);
		// 	output(`${card}<br/>`);
	}

	function componentDidUpdate() {
		if (didMount) console.log("The Photos component has updated.");
	}

	function componentDidUnmount() {
		return function () {
			console.log("The Photos component has unmounted.");
		};
	}
}

//BOOTSTRAP CARD TEMPLATE
/* <div className="container">
				<div className="row">
					<div className="col-12 col-md-6 col-lg-6">
						<div className="card">
							<img
								className="card-img-top"
								alt={card.alt}
								src={card.src}
								height="500px"
								width="500px"
							/>
							<div className="card-body">
								<h3 class="card-title">{card.title}</h3>
								<h4 class="card-summary">{card.summary}</h4>
							</div>
						</div>
					</div>
				</div>
			</div> */

//CARDS ARRAY INFORMATION
// let card;
// const cardsArray = [
// 	{
// 		src: FriedFishBasket,
// 		title: "Fried Fish Basket",
// 		alt: "fried fish basket",
// 		summary:
// 			"Local, Wild-caught Catfish and Soft-Shelled Crabs fried to perfection. ",
// 	},
// 	{
// 		src: CheeseBurger,
// 		title: "1/4 lb Cheeseburger",
// 		alt: "cheeseburger",
// 		summary:
// 			"Juicy 1/4-lb Joseph Farms cheeseburger with roasted garlic aioli on a brioche bun. Ask for it with 'All The Fixin's' for an extra special treat!",
// 	},
// 	{
// 		src: { ChefsKissSalad },
// 		title: "Chef's Kiss Salad",
// 		alt: "salad",
// 		summary:
// 			"House-grown greens with spring vegetables and tangy Meyer lemon vinaigrette. Extra Avocado is the chef's kiss!",
// 	},
// 	{
// 		src: { ShrimpPoboy },
// 		title: "Overstuffed Shrimp PoBoy",
// 		alt: "shrimp poboy",
// 		summary:
// 			"Big, juicy, fresh-caught Gulf shrimp, fried light and crisp on a homemade french bread bun from local world-renown Lejuene's Bakery. Serving sizes large enough for now and some for later. ",
// 	},
// 	{
// 		src: { ChickenBasket },
// 		title: "Chicken Tender Basket",
// 		alt: "chicken tenders and fries",
// 		summary:
// 			"Crispy, juicy chicken tenders seasoned to perfection and freshly breaded by our chef daily. Served with hand-cut fries made from Yukon Gold potatoes, because only the best for our family and friends. ",
// 	},
// 	{
// 		src: { SeafoodGumbo },
// 		title: "Seafood Gumbo",
// 		alt: "bowl of seafood gumbo",
// 		summary:
// 			"Our Ragin' Cajun rendition of the classic NOLA staple made in-house. Think HUGE Gulf Shrimp, Chicken, and Andouille Sausage Gumbo over seasoned, steamed rice. Even better with a piece of Sweet Potato Corn Bread. Thank us later.",
// 	},
// ];
