import React from "react";

export function SignOutModal(props) {
	const onSignOut = props.onSignOut; //gives access to handleSignOut function that will allow the site to know if a user is signed out

	return (
		<>
			<button
				type="button"
				className="btn btn-secondary"
				data-bs-toggle="modal"
				data-bs-target="#signOutModal">
				Sign Out
			</button>

			<form
				onSubmit={handleSubmit}
				className="modal fade"
				id="signOutModal"
				tabIndex="-1"
				aria-labelledby="signInModalLabel"
				aria-hidden="true">
				<div className="modal-dialog">
					<div className="modal-content">
						<div className="modal-header">
							<h1
								className="modal-title fs-5"
								id="signOutModalLabel">
								Sign Out
							</h1>
							<button
								type="button"
								className="btn-close"
								data-bs-dismiss="modal"
								aria-label="Close"></button>
						</div>
						<div className="modal-body">Are you sure you want to sign out?</div>
						{/* {"//the error message is passed as a prop of SignInContent "} */}
						<div className="modal-footer">
							<button
								id="signOutCloseButton"
								type="button"
								className="btn btn-secondary"
								data-bs-dismiss="modal">
								Close
							</button>
							<button
								type="submit"
								className="btn btn-primary">
								Sign Out
							</button>
						</div>
					</div>
				</div>
			</form>
		</>
	);

	function handleSubmit(event = new Event()) {
		event.preventDefault();
		const inputs = event.target;
		const closeButton = inputs[1];
		closeButton.click();
		onSignOut();
		debugger;
	}
}
