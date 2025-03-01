import { authentication } from "../modules/authentication";

export function handleSignIn(event = new Event(), setErrorMessage) {
	debugger;
	event.preventDefault(); //stops the page from reloading

	//EXTRACTS EMAIL AND PASSWORD FROM THE FORM AND CHECKS IF THEY ARE CORRECT.  IF THEY ARE VALID, CLOSES THE FORM AND RESETS IT, OTHERWISE SETS AN ERROR MESSAGE

	const inputs = event.target; //inputs = the form element
	const emailInput = inputs[1]; //emailInput is the first input element
	const passwordInput = inputs[2]; //passwordInput is the second input element
	const email = emailInput.value; //email is the value of the email input
	const password = passwordInput.value; //password is the value of the password input

	const isAuthenticated = authentication(email, password); //checks if email/password are correct
	if (isAuthenticated) {
		closeButton.click(); //closes the form
		inputs.reset(); //resets the form
	} else setErrorMessage("The email and/or password is incorrect!");
	//sets the error message if the email/password are incorrect
}
