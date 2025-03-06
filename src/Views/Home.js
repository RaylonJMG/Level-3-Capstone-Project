import React, { useEffect, useState } from "react";
import { handleAdvice } from "../controllers/handleAdvice";
import Interior from "../../assets/Interior.jpg";
import "../../style.scss";

export function Home() {
	//destructuring reads the values of the variables stored in the useState hook
	const [didMount, setDidMount] = useState(false); //useState hook to set the component to mount using variable didMount; updates the setter function with setDidMount
	const [welcome, setWelcome] = useState(
		"Hello There Mon Chere'! Swing On By and Taste Our Good Food!"
	); //useState hook to set the welcome message using variable: welcome; updates the setter function with setWelcome

	useEffect(componentDidMount, []); //MOUNT HOOK,
	useEffect(componentDidUpdate, [welcome]); //UPDATE HOOK
	useEffect(componentDidUnmount, []); //UNMOUNT HOOK
	//using "col-12 col-md-12 col-lg-12" to set the column width to 12 for all screen sizes
	//using "img-fluid" to make the image responsive as well as "style={{ width: "100%" }}" to set the width of the image to 100% of the container
	return (
		<>
			<main id="homeMain">
				<div className="container">
					<div className="row">
						<div className="col-12 col-md-12 col-lg-12">
							<h1>Good Food Hut</h1>
							<h3>Delighting Tastebuds since 1988</h3>
							<br />
							<h4>{welcome}</h4>
							<br />
							<hr />
							<p>
								Visit our Sesame Street Location and try all that the Good Food
								Hut has to offer. We have been sharing our Good Food Philosophy
								for over 20 years and you haven't seen nor tasted anything yet!
							</p>
							<hr />
						</div>
					</div>
					<div className="row">
						<div className="col-12 col-md-12 col-lg-12">
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
						<div className="col-12 col-md-6 col-lg-6">
							<h2>Our Space</h2>
							<img
								src={Interior}
								alt="Good Food Hut Interior"
								className="img-fluid"
								style={{ width: "100%" }}
							/>
						</div>
						<div className="row">
							<div className="col-12">
								<h2>Our Vibe</h2>
								<p>
									So whether it's for some quality time with the family,
									"chillaxation" time with your friends, or decompression time
									with the colleagues...we have created a space that honors a
									relaxed and authentic vibe that'll make you feel like you
									belong here, because you do!😉
								</p>
								<h4>Welcome home, Suga'!</h4>
							</div>
						</div>
					</div>
					<hr />
				</div>
				<div className="row">
					<div className="col-12 col-md-12 col-lg-12"></div>
					<div className="text-center">
						<button
							onClick={handleAdvice}
							className="btn btn-sm rounded-3 bg-primary"
							id="mixin-button">
							Get Random Advice Here
						</button>
					</div>
				</div>
				<br />
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
