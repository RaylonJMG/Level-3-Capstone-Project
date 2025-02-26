import React, { useEffect, useState } from "react";
import { handleAdvice } from "../controllers/handleAdvice";
import Interior from "../../assets/Interior.jpg";

export function Home() {
	const [didMount, setDidMount] = useState(false);
	const [welcome, setWelcome] = useState(
		"Hello There Mon Chere'! Swing On By and Taste Our Good Food!"
	);
	useEffect(componentDidMount, []); //MOUNT PHASE
	useEffect(componentDidUpdate, [welcome]); //UPDATE PHASE
	useEffect(componentDidUnmount, []); //UNMOUNT PHASE
	return (
		<>
			<main id="homeMain">
				<div className="container">
					<div className="row">
						<div className="col">
							{" "}
							<h1>Good Food Hut</h1>
							<div>{welcome}</div>
							<h3>Delighting Tastebuds since 1988</h3>
							<br />
							<p>
								Visit our Sesame Street Location and try all that the Good Food
								Hut has to offer. We have been sharing our Good Food Philosophy
								for over 20 years and you haven't seen nor tasted anything yet!
							</p>
							<hr />
						</div>
					</div>
					<div className="row">
						<div className="col">
							<h2>Our Mission</h2>
							<p>
								Our mission is to provide a comfortable, fun, and welcoming
								environment for our guests to enjoy good food, good music, and
								good vibes. We are committed to providing the best service and
								quality food that will keep you coming back for more.
							</p>
						</div>
					</div>
				</div>

				<div className="container">
					<div className="row">
						<div className="col">
							<img
								src={Interior}
								alt="Good Food Hut Interior"
								className="img-fluid"
							/>
							<p>
								So whether it's for some quality time with the family,
								"chillaxation" time with your friends, or decompression time
								with the colleagues...we have created a space that honors a
								relaxed and authentic vibe that'll make you feel like you belong
								here, because you do!😉
							</p>
							<h4>Welcome home, Suga'!</h4>
						</div>
					</div>
					<hr />
				</div>
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
		</>
	);

	function componentDidMount() {
		setDidMount(true);
		console.log("The Home component has mounted.");
		document.title = "Home";
	}

	function componentDidUpdate() {
		if (didMount === true) {
			console.log("The Home component has updated.");
		}
	}
	function componentDidUnmount() {
		return function () {
			console.log("The Home component has unmounted.");
		};
	}
}
