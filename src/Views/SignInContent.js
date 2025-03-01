import React from "react";

export function SignInContent(props) {
	const errorMessage = props.errorMessage; //the error message is passed as a prop in the SignInContent component
	return (
		<>
			Email:
			<input
				type="email"
				required
				id="email"
			/>
			<br />
			Password:
			<input
				type="password"
				required
				id="password"
			/>
			<div style={{ color: "red" }}>{errorMessage}</div>
		</>
	);
}
