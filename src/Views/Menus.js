import React from "react";
import { NavBar } from "../utils/NavBar";
import { Footer } from "../utils/Footer";
import { ListGroup } from "../utils/ListGroup.js";
import { ListGroupItem } from "../utils/ListGroupItem.js";

export function Menus() {
	return (
		<>
			<header>
				<img
					width="100%"
					alt="fried seafood platter"
					src="https://cdn.glitch.global/cbca519c-2e2c-44e5-a058-374e1c8be1a2/Screenshot%202024-08-03%20021209.jpg?v=1722669203847"
				/>
				<NavBar />
			</header>
			<main>
				<h1>Full Menu</h1>
				<br />
				<div class="alert alert-primary alert-dismissible " role="alert">
					ASK ABOUT OUR DAILY SPECIALS!
					<button
						type="button"
						class="btn-close"
						data-bs-dismiss="alert"
						aria-label="Close">
						Close
					</button>
				</div>

				<h3 id="soups">Soups, Salads, and Gumbos</h3>
				<p class="text-center fs-6">
					All Soups/Gumbos served with Potato Salad or Side Salad and Crackers
				</p>
				<ul class="list-group text-primary border border-5 border-primary">
					<li class="list-group-item">Shrimp Salad</li>
					<li class="list-group-item">Grilled Chicken Salad</li>
					<li class="list-group-item" aria-current="true">
						Chef's Kiss Salad{" "}
						<span class="text-end badge bg-success">
							{" "}
							Customer Rated 10/10 😍
						</span>
					</li>
					<li class="list-group-item">Creole Shrimp and Tomato Soup</li>
					<li class="list-group-item">Seafood Gumbo</li>
					<li class="list-group-item">Chicken and Sausage Gumbo</li>
				</ul>
				<hr />
				<h3 id="poboys">
					Overstuffed Po-Boys
					<br /> (Half or Whole)
				</h3>
				<ul class="list-group text-primary border border-5 border-primary">
					<li class="list-group-item">Oyster</li>
					<li class="list-group-item">Shrimp</li>
					<li class="list-group-item">Crawfish</li>
					<li class="list-group-item">Fish</li>
					<li class="list-group-item">
						Seafood Platter Po-Boy: contains shrimp, crawfish, catfish and
						oysters
						<span class="badge bg-success"> Customer Rated 10/10 😍</span>
					</li>
					<li class="list-group-item">Roast Beef</li>
					<li class="list-group-item">Ham and Swiss Cheese</li>
					<li class="list-group-item">Grilled Chicken Breast</li>
					<li class="list-group-item">Hamburger</li>
					<li class="list-group-item">Cheeseburger</li>
				</ul>
				<hr />

				<h3 id="baskets">Baskets</h3>
				<ul class="list-group text-primary border border-5 border-primary">
					<li class="list-group-item">Shrimp Basket</li>
					<li class="list-group-item">Crawfish Basket</li>
					<li class="list-group-item">Catfish Basket</li>
					<li class="list-group-item">Oyster Basket</li>
					<li class="list-group-item">Seafood Combo Basket</li>
					<li class="list-group-item">Chicken Tender Basket</li>
					<li class="list-group-item">Kid's Basket (with fries and roll)</li>
				</ul>
				<hr />
				<h3 id="burgers">Burgers</h3>
				<p class="text-center fs-6">
					Served with choice of Fries, Onion Rings, or Tater tots
				</p>
				<ul class="list-group text-primary border border-5 border-primary">
					<span class="badge bg-primary">
						Gluten Free Buns available by Request
					</span>
					<li class="list-group-item">Hamburger</li>
					<li class="list-group-item">Cheeseburger</li>
					<li class="list-group-item">1/4 lb Hamburger</li>
					<li class="list-group-item">
						1/4 lb Cheeseburger
						<span class="badge bg-success"> Customer Rated 10/10 😍</span>
					</li>
					<li class="list-group-item">Shrimp, Catfish, or Crawfish Burger</li>
				</ul>
				<hr />
				<h3 id="snacks" class="text-center">
					<u>Snack Bites</u>
				</h3>
				<ul class="list-group text-primary border border-5 border-primary">
					<li class="list-group-item">Fries</li>
					<li class="list-group-item">Chicken Tenders</li>
					<li class="list-group-item">Tater Tots</li>
					<li class="list-group-item">Onion Rings</li>
				</ul>
				<hr />
				<h3 id="drinks" class="text-center">
					Beverages
				</h3>
				<div class="container">
					<div class="row gap-3">
						<div class="col border border-primary text-center">Coke</div>
						<div class="col border border-primary text-center">Diet Coke</div>
						<div class="col border border-primary text-center">Root Beer</div>
					</div>
				</div>
				<div class="container">
					<div class="row gap-3">
						<div class="col border border-primary text-center">Sprite</div>
						<div class="col border border-primary text-center">Mr. Pibb</div>
						<div class="col border border-primary text-center">
							Strawberry Iced Tea
						</div>
					</div>
				</div>
				<h3>Beer</h3>
				<div class="container">
					<div class="row gap-3">
						<div class="col border border-primary text-center">Coors Lite</div>
						<div class="col border border-primary text-center">Miller Lite</div>
						<div class="col border border-primary text-center">Bud Lite</div>
					</div>
				</div>
				<div class="container">
					<div class="row gap-3">
						<div class="col border border-primary text-center">Budweiser</div>
						<div class="col border border-primary text-center">Heineken</div>
						<div class="col border border-primary text-center">Corona</div>
					</div>
				</div>
				<div class="container">
					<div class="row gap-3">
						<div class="col border border-primary text-center">Dos Equis</div>
						<div class="col border border-primary text-center">
							Stella Artois
						</div>
						<div class="col border border-primary text-center">Modelo</div>
					</div>
				</div>
				<hr />
			</main>
			<Footer style={{ textAlign: "center", border: 5, border: "primary" }}>
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
			</Footer>
		</>
	);
}
