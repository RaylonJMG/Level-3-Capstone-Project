import React from "react";
import { output } from "../utils/output.js";

export function handleSubmit(event = new Event()) {
	event.preventDefault();
	const inputs = event.target;
	const emailInput = inputs[1];
	const email = emailInput.value;
	output("Submitting form for <br>" + email + "...");
	setTimeout(serverResponse, 5000);
	promise.then(parseResponse);

	function serverResponse() {
		output("Thanks! We have received your message!");
	}

	function parseResponse(resolveValue) {
		debugger;
		//JSON.PARSE: CONVERTS STRING OBJECT INTO ACTUAL OBJECT
		const response = JSON.parse(resolveValue);
		const message = response.message;
		output(resolveValue);
	}
}
