import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";

/*************************************************
 * @summary Removes the 404 error on SPA refresh
 * @param props.children The elements to render on refresh
 * @description
 * This component depends on the local storage used by redirect.js
 * In redirect.js, properly set the root path.
 */
export function HandleRefresh(props) {
	const children = props.children;
	const navigateTo = useNavigate();
	const [didMount, setDidMount] = useState(false);
	useEffect(componentDidMount, []);

	if (didMount) return <>{children}</>;
	else return <></>;

	function componentDidMount() {
		const redirectPath = localStorage.getItem("redirect");

		if (redirectPath) {
			navigateTo(redirectPath);
			localStorage.setItem("redirect", "");
			setTimeout(() => setDidMount(true), 1000);
		} else setDidMount(true);
	}
}
//HandleRefresh has all of the contents of BrowserRouter as children; when there's a pathname, navigate to the URL and clear the pathname after a short delay
