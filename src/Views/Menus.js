import React, { useEffect } from "react";

export function Menus() {
	useEffect(componentDidMount, []);
	useEffect(componentDidUpdate, []);
	useEffect(componentDidUnmount, []);
	return (
		<>
			<main>
				<div className="container">
					<div className="row">
						<div className="col">
							<h1>Full Menu</h1>
							<p> ASK ABOUT OUR DAILY SPECIALS!</p>
						</div>
						<div className="col">
							<section>
								<h2 id="appetizers">Appetizers</h2>
								<ul className="list-group text-primary border border-5 border-primary">
									<li className="list-group-item">Fried Pickles</li>
									<li className="list-group-item">Fried Green Tomatoes</li>
									<li className="list-group-item">Fried Okra</li>
									<li className="list-group-item">Crawfish Pistolette</li>
									<li className="list-group-item">
										Shrimp Pistolette
										<span className="badge bg-success">
											Customer Rated 10/10 😍
										</span>
									</li>
								</ul>
							</section>
						</div>
						<div className="col">
							<section>
								<h3 id="soups">Soups, Salads, and Gumbos</h3>
								<p>
									All Soups/Gumbos served with Potato Salad or Side Salad and
									Crackers
								</p>
								<ul className="list-group text-primary border border-5 border-primary">
									<li className="list-group-item">Shrimp Salad</li>
									<li className="list-group-item">Grilled Chicken Salad</li>
									<li
										className="list-group-item"
										aria-current="true">
										Chef's Kiss Salad
										<span className="text-end badge bg-success">
											Customer Rated 10/10 😍
										</span>
									</li>
									<li className="list-group-item">
										Creole Shrimp and Tomato Soup
									</li>
									<li className="list-group-item">Seafood Gumbo</li>
									<li className="list-group-item">Chicken and Sausage Gumbo</li>
								</ul>
								<hr />
							</section>
						</div>
						<div className="col">
							<section>
								<h3 id="poboys">
									Overstuffed Po-Boys
									<br /> (Half or Whole)
								</h3>
								<ul className="list-group text-primary border border-5 border-primary">
									<li className="list-group-item">Oyster</li>
									<li className="list-group-item">Shrimp</li>
									<li className="list-group-item">Crawfish</li>
									<li className="list-group-item">Fish</li>
									<li className="list-group-item">
										Seafood Platter Po-Boy: contains shrimp, crawfish, catfish
										and oysters
										<span className="badge bg-success">
											{" "}
											Customer Rated 10/10 😍
										</span>
									</li>
									<li className="list-group-item">Roast Beef</li>
									<li className="list-group-item">Ham and Swiss Cheese</li>
									<li className="list-group-item">Grilled Chicken Breast</li>
									<li className="list-group-item">Hamburger</li>
									<li className="list-group-item">Cheeseburger</li>
								</ul>
								<hr />
							</section>
						</div>
						<div className="col">
							<h3 id="baskets">Baskets</h3>
							<ul className="list-group text-primary border border-5 border-primary">
								<li className="list-group-item">Shrimp Basket</li>
								<li className="list-group-item">Crawfish Basket</li>
								<li className="list-group-item">Catfish Basket</li>
								<li className="list-group-item">Oyster Basket</li>
								<li className="list-group-item">Seafood Combo Basket</li>
								<li className="list-group-item">Chicken Tender Basket</li>
								<li className="list-group-item">
									Kid's Basket (with fries and roll)
								</li>
							</ul>
							<hr />
						</div>
						<div className="col">
							<h3 id="burgers">Burgers</h3>
							<p className="text-center fs-6">
								Served with choice of Fries, Onion Rings, or Tater tots
							</p>
							<ul className="list-group text-primary border border-5 border-primary">
								<span className="badge bg-primary">
									Gluten Free Buns available by Request
								</span>
								<li className="list-group-item">Hamburger</li>
								<li className="list-group-item">Cheeseburger</li>
								<li className="list-group-item">1/4 lb Hamburger</li>
								<li className="list-group-item">
									1/4 lb Cheeseburger
									<span className="badge bg-success">
										{" "}
										Customer Rated 10/10 😍
									</span>
								</li>
								<li className="list-group-item">
									Shrimp, Catfish, or Crawfish Burger
								</li>
							</ul>
							<hr />
						</div>
						<div className="col">
							<h3
								id="snacks"
								className="text-center">
								<u>Snack Bites</u>
							</h3>
							<ul className="list-group text-primary border border-5 border-primary">
								<li className="list-group-item">Fries</li>
								<li className="list-group-item">Chicken Tenders</li>
								<li className="list-group-item">Tater Tots</li>
								<li className="list-group-item">Onion Rings</li>
							</ul>
							<hr />
						</div>
						<div className="row">
							<div className="col">
								<h3
									id="drinks"
									className="text-center">
									Soft Drinks
								</h3>
								<ul className="list-group text-primary border border-5 border-primary">
									<li className="list-group-item">Hot Tea</li>
									<li className="list-group-item">Sweet Tea</li>
									<li className="list-group-item">Unsweet Tea</li>
									<li className="list-group-item"> Strawberry Iced Tea</li>
									<li className="list-group-item">Coke</li>
									<li className="list-group-item">Diet Coke</li>
									<li className="list-group-item">Root Beer</li>
									<li className="list-group-item">Sprite</li>
									<li className="list-group-item">Mr. Pibb</li>
									<li className="list-group-item">Lemonade</li>
									<li className="list-group-item">Strawberry Lemonade</li>
								</ul>
							</div>
							<div className="col">
								<h3
									id="alcoholic"
									className="text-center">
									Beer & Wine
								</h3>
								<ul className="list-group text-primary border border-5 border-primary">
									<li className="list-group-item">Coors Lite</li>
									<li className="list-group-item">Miller Lite</li>
									<li className="list-group-item">Bud Lite</li>
									<li className="list-group-item">Budweiser</li>
									<li className="list-group-item">Heineken</li>
									<li className="list-group-item">Corona</li>
									<li className="list-group-item">Dos Equis</li>
									<li className="list-group-item">Stella Artois</li>
									<li className="list-group-item">Modelo</li>
									<li className="list-group-item">Chardonnay</li>
									<li className="list-group-item">Champagne</li>
									<li className="list-group-item">Pinot Noir</li>
								</ul>
							</div>
						</div>
					</div>
				</div>
				<hr />
			</main>
			<footer
				id="menusFooter"
				style={{ textAlign: "center", border: 5, border: "primary" }}>
				<b>Menu Map</b>
				<br />
				<nav>
					<a href="#appetizers">Appetizers</a>
					<br />
					<a href="#soups">Soups/Salads/Gumbo</a>
					<br />
					<a href="#poboys">Overstuffed Poboys</a>
					<br />
					<a href="#baskets">Baskets</a>
					<br />
					<a href="#burgers">Burgers</a>
					<br />
					<a href="#snacks">Snack Bites</a>
					<br />
					<a href="#drinks">Ice Cold Beverages</a>
				</nav>
			</footer>
		</>
	);
}
function componentDidMount() {
	document.title = "Menus";
	console.log("The component has mounted on the Menus page.");

	return componentDidUnmount;
}
function componentDidUpdate() {
	console.log("The component has updated.");
}
function componentDidUnmount() {
	return function () {
		console.log("The component has unmounted.");
	};
}
