import React from "react";
import { Footer } from "../utils/Footer.js";
import { NavBar } from "../utils/NavBar.js";

export function Contact() {
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
			<main id="mainTag" class="m-3">
				<h1>Contact Us!</h1>
				<hr />
				<p class="p-6 m-5 fw-bold text-center">
					We love hearing from our customers. Please feel free to leave a
					rating, comments, suggestions, or ask any inquiries in the form below.
					Thank you in advance. We look forward to serving you again soon.
				</p>
				<form
					style="padding: 10px"
					class="text-center border border-5 border-dotted border-dark">
					<section id="radio-buttons">
						<h5>Rate your food experience</h5>
						<input id="hated it" type="radio" name="rating" />
						<label for="hated it">🤢Hated it!</label>
						<br />
						<input id="disliked" type="radio" name="rating" />
						<label for="disliked">😓Disliked it.</label>
						<br />
						<input id="okay" type="radio" name="rating" />
						<label for="okay">😔Meh...it was just okay.</label>
						<br />
						<input id="liked" type="radio" name="rating" />
						<label for="liked">😋Liked it.</label>
						<br />
						<input id="loved" type="radio" name="rating" />
						<label for="loved">😍 Loved it!</label>
						<br />
						<button
							onclick="handleRating()"
							class="btn btn-sm rounded-3 bg-primary"
							id="mixin-button">
							Submit Rating
						</button>
					</section>
				</form>
				<hr />
				<form onsubmit="handleSubmit(event)">
					<label for="fullName">Full Name:</label>
					<br />
					<input
						type="text"
						id="fullName"
						placeholder="Enter First & Last Name"
					/>
					<br />
					<label for="email">Email Address:</label>
					<br />
					<input
						type="email"
						id="email"
						placeholder="Enter Email Address"
						required
					/>
					<br />
					<label for="message">Message:</label>
					<br />
					<textarea id="message"></textarea>
					<br />
					<input
						type="submit"
						value="Submit Message"
						class="btn btn-sm rounded-3 bg-primary"
						id="mixin-button"
					/>
				</form>
				<hr />
				<div class="bg-image size opacity border border-5 border-groove">
					<p class="fw-bold text-center fs-4">
						Looking to eat Good Food at your next family, corporate, or festival
						event?
					</p>
					<p class="text-center fs-5 fw-bold">
						We offer catering services for events of any size!
						<br /> Schedule a phone appointment today to book with our{" "}
						<b>Good Food Hosts</b>
					</p>
				</div>
				<hr />
				<form onsubmit="processForm(event)">
					<label for="firstName"> First Name:</label>
					<br />
					<input
						required
						name="firstName"
						type="text"
						id="firstName"
						placeholder="Enter First Name"
					/>
					<br />
					<label for="lastName"> Last Name:</label>
					<br />
					<input
						required
						name="lastName"
						type="text"
						id="lastName"
						placeholder="Enter Last Name"
					/>
					<br />
					<label for="calendar">Phone Appointment:</label>
					<br />
					<input required name="calendar" type="datetime-local" id="calendar" />
					<br />
					<label for="phoneNumber">Phone Number:</label>
					<br />
					<input
						required
						name="phoneNumber"
						type="tel"
						placeholder="###-###-####"
						pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
						id="phoneNumber"
					/>
					<br />
					<label for="email">Email:</label>
					<br />
					<input
						required
						name="email"
						type="text"
						id="email"
						placeholder="Enter Email Address"
					/>
					<br />
					<label for="message">Optional Message:</label>
					<br />
					<textarea name="message" id="message"></textarea>
					<br />
					<input
						type="submit"
						value="Submit"
						class="btn btn-sm rounded-3 bg-primary"
						id="mixin-button"
					/>
					<input
						type="reset"
						value="Reset form"
						class="btn btn-sm rounded-3 bg-primary"
						id="mixin-button"
					/>
				</form>
				<output id="outputTag"></output>
			</main>
			<Footer />
		</>
	);
}
