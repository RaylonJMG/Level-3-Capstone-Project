import React from "react";
import CheeseBurger from "../../assets/CheeseBurger.jpg";
import ChefsKissSalad from "../../assets/ChefsKissSalad.jpg";
import FriedFishBasket from "../../assets/FriedFishBasket.jpg";

export function Carousel() {
	return (
		<div
			id="myPictures"
			className="carousel slide">
			<div className="carousel-indicators">
				<button
					type="button"
					data-bs-target="#myPictures"
					data-bs-slide-to="0"
					className="active"
					aria-current="true"
					aria-label="Slide 1"></button>
				<button
					type="button"
					data-bs-target="#myPictures"
					data-bs-slide-to="1"
					aria-label="Slide 2"></button>
				<button
					type="button"
					data-bs-target="#myPictures"
					data-bs-slide-to="2"
					aria-label="Slide 3"></button>
			</div>
			<div className="carousel-inner">
				<div className="carousel-item active">
					<img
						src={CheeseBurger}
						className="d-block w-100"
						alt="CheeseBurger"
					/>
				</div>
				<div className="carousel-item">
					<img
						src={ChefsKissSalad}
						className="d-block w-100"
						alt="ChefsKissSalad"
					/>
				</div>
				<div className="carousel-item">
					<img
						src={FriedFishBasket}
						className="d-block w-100"
						alt="FriedFishBasket"
					/>
				</div>
				<button
					className="carousel-control-prev"
					type="button"
					data-bs-target="#myPictures"
					data-bs-slide="prev">
					<span
						className="carousel-control-prev-icon"
						aria-hidden="true"></span>
					<span className="visually-hidden">Previous</span>
				</button>
				<button
					className="carousel-control-next"
					type="button"
					data-bs-target="#myPictures"
					data-bs-slide="next">
					<span
						className="carousel-control-next-icon"
						aria-hidden="true"></span>
					<span className="visually-hidden">Next</span>
				</button>
			</div>
		</div>
	);
}
