import React, { useEffect } from "react";
import { NavBar } from "../utils/NavBar.js";
import { handleRating } from "../controllers/handleRating.js";
import { handleSubmit } from "../controllers/handleSubmit.js";
import { handleForm } from "../controllers/handleForm.js";
import { Footer } from "./Footer.js";

export function Contact() {
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
				<h1>Contact Us!</h1>
				<hr />
				<p>
					We love hearing from our customers. Please feel free to leave a
					rating, comments, suggestions, or ask any inquiries in the form below.
					Thank you in advance. We look forward to serving you again soon.
				</p>
				<form>
					<h5>Rate your food experience</h5>
					<input
						id="hated it"
						type="radio"
						name="rating"
					/>
					<label for="hated it">🤢Hated it!</label>
					<br />
					<input
						id="disliked"
						type="radio"
						name="rating"
					/>
					<label for="disliked">😓Disliked it.</label>
					<br />
					<input
						id="okay"
						type="radio"
						name="rating"
					/>
					<label for="okay">😔Meh...it was just okay.</label>
					<br />
					<input
						id="liked"
						type="radio"
						name="rating"
					/>
					<label for="liked">😋Liked it.</label>
					<br />
					<input
						id="loved"
						type="radio"
						name="rating"
					/>
					<label for="loved">😍 Loved it!</label>
					<br />
					<input
						onSubmit={handleRating}
						type="submit"
						className="btn btn-sm rounded-3 bg-primary"
						id="mixin-input"
					/>
				</form>
				<hr />
				<form onSubmit={handleSubmit}>
					<label for="fullName">Full Name:</label>
					<br />
					<input
						id="fullName"
						type="text"
						placeholder="Enter First & Last Name"
					/>
					<br />
					<label for="email">Email Address:</label>
					<br />
					<input
						id="email"
						type="email"
						placeholder="Enter Email Address"
						required
					/>
					<br />
					<label for="message">Message:</label>
					<br />
					<textarea id="message"></textarea>
					<br />
					<input
						id="mixin-button"
						type="submit"
						value="Submit Message"
						className="btn btn-sm rounded-3 bg-primary"
					/>
				</form>
				<hr />
				<p>
					Looking to eat Good Food at your next family, corporate, or festival
					event?
				</p>
				<p>
					We offer catering services for events of any size!
					<br /> Schedule a phone appointment with our Good Food Hosts to book
					today!
				</p>
				<hr />
				<form onSubmit={handleForm}>
					<label for="firstName"> First Name:</label>
					<br />
					<input
						id="firstName"
						required
						name="firstName"
						type="text"
						placeholder="Enter First Name"
					/>
					<br />
					<label for="lastName"> Last Name:</label>
					<br />
					<input
						id="lastName"
						required
						name="lastName"
						type="text"
						placeholder="Enter Last Name"
					/>
					<br />
					<label for="calendar">Phone Appointment:</label>
					<br />
					<input
						id="calendar"
						required
						name="calendar"
						type="datetime-local"
					/>
					<br />
					<label for="phoneNumber">Phone Number:</label>
					<br />
					<input
						id="phoneNumber"
						required
						name="phoneNumber"
						type="tel"
						placeholder="###-###-####"
						pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
					/>
					<br />
					<label for="email">Email:</label>
					<br />
					<input
						id="email"
						required
						name="email"
						type="text"
						placeholder="Enter Email Address"
					/>
					<br />
					<label for="message">Optional Message:</label>
					<br />
					<textarea
						name="message"
						id="message"></textarea>
					<br />
					<input
						id="mixin-button"
						type="submit"
						value="Submit"
					/>
					<input
						id="mixin-button"
						type="reset"
						value="Reset form"
					/>
				</form>
				<output id="outputTag"></output>
			</main>
			<Footer id="contactFooter" />
		</>
	);
}
function componentDidMount() {
	document.title = "Contact";
	console.log("The component has mounted on the Contact page.");

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
