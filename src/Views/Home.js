import React, { useEffect, useState } from "react";
import { handleAdvice } from "../controllers/handleAdvice";
import { Footer } from "./Footer";

export function Home() {
	const [welcome, setWelcome] = useState(
		"Hello There Mon Chere'! Swing On By and Taste Our Good Food!"
	);
	useEffect(componentDidMount, []);
	useEffect(componentDidUpdate, [welcome]);
	useEffect(componentDidUnmount, []);
	return (
		<>
			<header id="homeHeader">
				<img
					width="100%"
					alt="fried seafood platter"
					src="../assets/FriedSeafoodPlatter.jpg"
				/>
				<NavBar />
			</header>
			<main id="homeMain">
				<h1>Good Food Hut</h1>
				<div>{welcome}</div>
				<h3>Delighting Tastebuds since 1988</h3>
				<br />
				<p>
					Visit our Sesame Street Location and try all that the Good Food Hut
					has to offer. We have been sharing our Good Food Philosophy for over
					20 years and you haven't seen nor tasted anything yet!
				</p>
				<hr />
				<img
					src="../assets/interior.jpg"
					width="100%"
					alt="Comfy restaurant Interior"
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
			<Footer id="homeFooter" />
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
