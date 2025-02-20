import React, { useEffect } from "react";
import { handleRating } from "../controllers/handleRating";
import { handleSubmit } from "../controllers/handleSubmit";
import { handleForm } from "../controllers/handleForm";

export function Contact() {
	useEffect(componentDidMount, []);
	useEffect(componentDidUpdate, []);
	useEffect(componentDidUnmount, []);

	return (
		<main>
			<h1>Contact Us!</h1>
			<hr />
			<p>
				We love hearing from our customers. Please feel free to leave a rating,
				comments, suggestions, or ask any inquiries in the form below. Thank you
				in advance. We look forward to serving you again soon.
			</p>
			<form>
				<h5>Rate your food experience</h5>
				<input
					id="hated it"
					type="radio"
					name="rating"
				/>
				<label htmlFor="hated it">🤢Hated it!</label>
				<i className="bi bi-emoji-tear"></i>
				<br />
				<input
					id="disliked"
					type="radio"
					name="rating"
				/>
				<label htmlFor="disliked">😓Disliked it.</label>
				<i className="bi bi-emoji-frown"></i>
				<br />
				<input
					id="okay"
					type="radio"
					name="rating"
				/>
				<label htmlFor="okay">😔Meh...it was just okay.</label>
				<i className="bi bi-emoji-neutral"></i>
				<br />
				<input
					id="liked"
					type="radio"
					name="rating"
				/>
				<label htmlFor="liked">😋Liked it.</label>
				<i className="bi bi-emoji-smile"></i>
				<br />
				<input
					id="loved"
					type="radio"
					name="rating"
				/>
				<label htmlFor="loved">😍 Loved it!</label>
				<i className="bi bi-emoji-heart-eyes"></i>
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
				<label htmlFor="fullName">Full Name:</label>
				<br />
				<input
					id="fullName"
					type="text"
					placeholder="Enter First & Last Name"
				/>
				<br />
				<i className="bi bi-envelope-at"></i>
				<label htmlFor="email">Email:</label>
				<br />
				<input
					id="email"
					type="email"
					placeholder="Enter Email Address"
					required
				/>
				<br />
				<label htmlFor="message">Message:</label>
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
				<label htmlFor="firstName"> First Name:</label>
				<br />
				<input
					id="firstName"
					required
					name="firstName"
					type="text"
					placeholder="Enter First Name"
				/>
				<br />
				<label htmlFor="lastName"> Last Name:</label>
				<br />
				<input
					id="lastName"
					required
					name="lastName"
					type="text"
					placeholder="Enter Last Name"
				/>
				<br />
				<i className="bi bi-calendar4-week"></i>
				<label htmlFor="calendar">Phone Appointment:</label>
				<br />
				<input
					id="calendar"
					required
					name="calendar"
					type="datetime-local"
				/>
				<br />
				<i className="bi bi-telephone"></i>
				<label htmlFor="phoneNumber">Phone Number:</label>
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
				<i className="bi bi-envelope-at"></i>
				<label htmlFor="email">Email:</label>
				<br />
				<input
					id="email"
					required
					name="email"
					type="text"
					placeholder="Enter Email Address"
				/>
				<br />
				<label htmlFor="message">Optional Message:</label>
				<br />
				<textarea
					name="message"
					id="message"></textarea>
				<br />
				<input
					id="mixin-button"
					type="submit"
					value="Submit"
					className="btn btn-sm rounded-3 bg-primary"
				/>
				<input
					id="mixin-button"
					type="reset"
					value="Reset form"
					className="btn btn-sm rounded-3 bg-primary"
				/>
			</form>
			<output id="outputTag"></output>
		</main>
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
