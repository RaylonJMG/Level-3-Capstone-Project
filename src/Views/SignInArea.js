import React, { useEffect, useState } from "react";
import { SignInModal } from "./SignInModal";
import { SignOutModal } from "./SignOutModal";

export function SignInArea() {
	const [didMount, setDidMount] = useState(false);
	const [button, setButton] = useState(<></>);
	const [isSignedIn, setIsSignedIn] = useState(true);

	useEffect(componentDidMount, []);
	useEffect(componentDidUpdate, [isSignedIn]);

	return <>{button}</>;

	//TOGGLE BUTTONS: IF SIGNED IN, THE SIGNOUT BUTTON WILL RENDER; IF SIGNED OUT, THE SIGN IN BUTTON WILL RENDER
	function componentDidMount() {
		console.log("MOUNT PHASE: SignInArea");

		if (isSignedIn) setButton(<SignOutModal onSignOut={handleSignOut} />);
		else setButton(<SignInModal onSignIn={handleSignIn} />);

		setDidMount(true);
	}
	function componentDidUpdate() {
		if (didMount) {
			console.log("UPDATE PHASE: SignInArea");
			if (isSignedIn) setButton(<SignOutModal onSignOut={handleSignOut} />);
			else setButton(<SignInModal onSignIn={handleSignIn} />);
		}
	}
	//The handleSignIn/handleSignOut functions let SignInModal know if the user is signed in or not

	function handleSignIn() {
		setIsSignedIn(true);
	}
	function handleSignOut() {
		setIsSignedIn(false);
	}
}
