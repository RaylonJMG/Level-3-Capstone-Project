import { authenticationAWS } from "../modules/authenticationAWS";

//EXTRACTS EMAIL AND PASSWORD FROM THE FORM AND CHECKS IF THEY ARE CORRECT.  IF THEY ARE VALID, CLOSES THE FORM AND RESETS IT, OTHERWISE SETS AN ERROR MESSAGE
export async function handleSignIn(
	event = new Event(),
	setErrorMessage,
	onSignIn
) {
	event.preventDefault(); //stops the page from reloading

	const inputs = event.target; //inputs = the form element
	const closeButton = inputs[0]; //closeButton is in the 0 position of the input element
	const emailInput = inputs[1]; //emailInput is the first input element
	const passwordInput = inputs[2]; //passwordInput is the second input element
	const email = emailInput.value; //email is the value of the email input
	const password = passwordInput.value; //password is the value of the password input

	const resolveValue = await authenticationAWS(email, password); //checks if email/password are correct
	const isAuthenticated = resolveValue;

	if (isAuthenticated) {
		closeButton.click(); //closes the form
		inputs.reset(); //resets the form/modal
		onSignIn(); //activates the handler function
	} else setErrorMessage("The email and/or password is incorrect!");
	//sets the error message if the email/password are incorrect
}
