import React, { useEffect } from "react";

export function Menus() {
	useEffect(componentDidMount, []);
	useEffect(componentDidUpdate, []);
	useEffect(componentDidUnmount, []);
	return (
		<>
			<main>
				<h1>Full Menu</h1>
				<br />
				ASK ABOUT OUR DAILY SPECIALS!
				{/* <button
					type="button"
					className="btn-close"
					data-bs-dismiss="alert"
					aria-label="Close">
					Close
				</button> */}
				<h3 id="soups">Soups, Salads, and Gumbos</h3>
				<p>
					All Soups/Gumbos served with Potato Salad or Side Salad and Crackers
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
					<li className="list-group-item">Creole Shrimp and Tomato Soup</li>
					<li className="list-group-item">Seafood Gumbo</li>
					<li className="list-group-item">Chicken and Sausage Gumbo</li>
				</ul>
				<hr />
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
						Seafood Platter Po-Boy: contains shrimp, crawfish, catfish and
						oysters
						<span className="badge bg-success"> Customer Rated 10/10 😍</span>
					</li>
					<li className="list-group-item">Roast Beef</li>
					<li className="list-group-item">Ham and Swiss Cheese</li>
					<li className="list-group-item">Grilled Chicken Breast</li>
					<li className="list-group-item">Hamburger</li>
					<li className="list-group-item">Cheeseburger</li>
				</ul>
				<hr />
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
						<span className="badge bg-success"> Customer Rated 10/10 😍</span>
					</li>
					<li className="list-group-item">
						Shrimp, Catfish, or Crawfish Burger
					</li>
				</ul>
				<hr />
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
				<h3
					id="drinks"
					className="text-center">
					Beverages
				</h3>
				<div className="container">
					<div className="row gap-3">
						<div className="col border border-primary text-center">Coke</div>
						<div className="col border border-primary text-center">
							Diet Coke
						</div>
						<div className="col border border-primary text-center">
							Root Beer
						</div>
					</div>
				</div>
				<div className="container">
					<div className="row gap-3">
						<div className="col border border-primary text-center">Sprite</div>
						<div className="col border border-primary text-center">
							Mr. Pibb
						</div>
						<div className="col border border-primary text-center">
							Strawberry Iced Tea
						</div>
					</div>
				</div>
				<h3>Beer</h3>
				<div className="container">
					<div className="row gap-3">
						<div className="col border border-primary text-center">
							Coors Lite
						</div>
						<div className="col border border-primary text-center">
							Miller Lite
						</div>
						<div className="col border border-primary text-center">
							Bud Lite
						</div>
					</div>
				</div>
				<div className="container">
					<div className="row gap-3">
						<div className="col border border-primary text-center">
							Budweiser
						</div>
						<div className="col border border-primary text-center">
							Heineken
						</div>
						<div className="col border border-primary text-center">Corona</div>
					</div>
				</div>
				<div className="container">
					<div className="row gap-3">
						<div className="col border border-primary text-center">
							Dos Equis
						</div>
						<div className="col border border-primary text-center">
							Stella Artois
						</div>
						<div className="col border border-primary text-center">Modelo</div>
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

<div className="container">
	<div className="row">
		<div className="col">COLUMN</div>
		<div className="col">COLUMN</div>
		<div className="col">COLUMN</div>
		<div className="col">COLUMN</div>
		<div className="col">COLUMN</div>
		<div className="col">COLUMN</div>
		<div className="col">COLUMN</div>
		<div className="col">COLUMN</div>
		<div className="col">COLUMN</div>
		<div className="col">COLUMN</div>
		<div className="col">COLUMN</div>
		<div className="col">COLUMN</div>
		<div className="col">COLUMN</div>
		<div className="col">COLUMN</div>
	</div>
</div>;
