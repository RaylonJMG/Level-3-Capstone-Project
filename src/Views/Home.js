import React, { useEffect } from "react";
// import { GrowSpinner } from "../utils/GrowSpinner.js";
import { NavBar } from "../utils/NavBar.js";
import { Footer } from "../utils/Footer.js";
import { handleAdvice } from "../controllers/handleAdvice.js";

export function Home() {
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
				<NavBar />
			</header>
			<main>
				<h1>Good Food Hut</h1>
				<div>Swing On By and Taste Our Good Food!</div>
				<h3>Delighting Tastebuds since 1988</h3>
				<br />
				{/* <GrowSpinner /> */}
				<p>
					Visit our Sesame Street Location and try all that the Good Food Hut
					has to offer. We have been sharing our Good Food Philosophy for over
					20 years and you haven't seen nor tasted anything yet!
				</p>
				<hr />
				<img
					src="https://cdn.glitch.global/82eb993a-bf96-4031-9a18-ee851469bb49/restaurant%20interior.jpg?v=1726951573166"
					width="100%"
				/>
				<hr />
				<p>
					So whether it's for some quality time with the family, "chillaxation"
					time with your friends, or decompression time with the colleagues...we
					have created a space that honors a relaxed and authentic vibe that'll
					make you feel like you belong here, because you do!😉
				</p>

				<h4>Welcome home, Suga'!</h4>
				<div className="text-center">
					<button
						onClick={handleAdvice}
						className="btn btn-sm rounded-3 bg-primary"
						id="mixin-button">
						Get Random Advice Here
					</button>
				</div>
				<output id="outputTag"></output>
			</main>
			<Footer />
		</>
	);
	function componentDidMount() {
		document.title = "Home";
		console.log("The component has mounted on the Home page.");

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
}
