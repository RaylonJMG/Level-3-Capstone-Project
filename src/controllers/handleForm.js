import React from "react";
import { output } from "../utils/output";

export function handleForm(event) {
	debugger;
	event.preventDefault();
	const form = event.target;
	const phoneNumberInput = form[3];
	const firstNameInput = form[0];
	const calendarInput = form[2];
	const phoneNumber = phoneNumberInput.value;
	const firstName = firstNameInput.value;
	const calendar = calendarInput.value;
	output(
		`Thank you, ${firstName}. <br> Your phone appointment is scheduled for ${calendar}.<br> You can expect a call at ${phoneNumber}. Have a great rest of your day.`
	);
}
