import React, { useEffect, useState } from "react";
import { handleRating } from "../controllers/handleRating";
import { handleSubmit } from "../controllers/handleSubmit";
import { handleForm } from "../controllers/handleForm";

export function Contact() {
	const [didMount, setDidMount] = useState(false);
	useEffect(componentDidMount, []);
	useEffect(componentDidUpdate);
	useEffect(componentDidUnmount, []);

	return (
		<>
			<main>
				<div className="container">
					<div className="row">
						<div className="col">
							<h1>Contact Us!</h1>
							<hr />
							<p>
								We love hearing from our customers. Please feel free to leave a
								rating, comments, suggestions, or ask any inquiries in the form
								below. Thank you in advance. We look forward to serving you
								again soon.
							</p>
						</div>
						<div className="row">
							<div className="col">
								<section id="ratings">
									<h5>Rate your food experience</h5>
									<form>
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
									</form>{" "}
								</section>
								<hr />
							</div>
						</div>
						<div className="row">
							<div className="col">
								<section id="comments">
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
								</section>
								<hr />
							</div>
						</div>
						<div className="row">
							<div className="col">
								<section id="catering">
									<p>
										Looking to eat Good Food at your next family, corporate, or
										festival event?
									</p>
									<p>
										We offer catering services for events of any size!
										<br /> Schedule a phone appointment with our Good Food Hosts
										to book today!
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
								</section>
							</div>
						</div>
					</div>
				</div>
			</main>
		</>
	);
}
function componentDidMount() {
	setDidMount(true);
	console.log("The Contact component has mounted.");
	document.title = "Contact";
}
function componentDidUpdate() {
	if (didMount === true) {
		console.log("The Contact component has updated.");
	}
}
function componentDidUnmount() {
	return function () {
		console.log("The Contact component has unmounted.");
	};
}
