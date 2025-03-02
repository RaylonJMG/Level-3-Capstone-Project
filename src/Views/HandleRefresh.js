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
//local storage object contains methods, getItem and setItem
//getItem method returns the value of the key into the browser
//setItem stores the key and value into the browser
