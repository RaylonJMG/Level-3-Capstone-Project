import React, { useState } from "react";
import { SignInContent } from "./SignInContent";

export function SignInModal() {
	const [errorMessage, setErrorMessage] = useState(""); //state variable that sets the error message to be displayed

	return (
		<>
			<button
				type="button"
				className="btn btn-primary"
				data-bs-toggle="modal"
				data-bs-target="#signInModal">
				Sign In
			</button>

			<form
				onSubmit={handleSubmit}
				className="modal fade"
				id="signInModal"
				tabIndex="-1"
				aria-labelledby="signInModalLabel"
				aria-hidden="true">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h1
								className="modal-title fs-5"
								id="signInModalLabel">
								Sign In
							</h1>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"></button>
						</div>
						<div className="modal-body">
							<SignInContent errorMessage={errorMessage} />
						</div>
						{/* {"//the error message is passed as a prop of SignInContent "} */}
						<div className="modal-footer">
							<button
								id="signInCloseButton"
								type="button"
								className="btn btn-secondary"
								data-bs-dismiss="modal">
								Close
							</button>
							<button
								type="submit"
								className="btn btn-primary">
								Sign In
							</button>
						</div>
					</div>
				</div>
			</form>
		</>
	);

	function handleSubmit(event = new Event()) {
		debugger;
		event.preventDefault(); //stops the page from reloading

		//extracts email and password
		const inputs = event.target; //inputs is the form element
		const emailInput = inputs[1]; //emailInput is the first input element
		const passwordInput = inputs[2]; //passwordInput is the second input element
		const email = emailInput.value; //email is the value of the email input
		const password = passwordInput.value; //password is the value of the password input

		const isAuthenticated = true; //checks if email/password are correct
		if (isAuthenticated) {
			const closeButton = document.getElementById("signInCloseButton"); //gets the close button
			closeButton.click(); //closes the form
			inputs.reset(); //resets the form
		} else setErrorMessage("The email and/or password is incorrect!");
		//sets the error message if the email/password are incorrect
	}
}
