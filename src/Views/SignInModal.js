import React, { useState } from "react";
import { SignInContent } from "./SignInContent";
import { handleSignIn } from "../controllers/handleSignIn";

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

	function handleSubmit(event) {
		debugger;
		handleSignIn(event, setErrorMessage); //passes the event and setErrorMessage function to handleSignIn
	}
}
