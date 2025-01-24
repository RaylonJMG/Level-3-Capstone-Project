import React from "react";
import { Home } from "../Views/Home";
import { About } from "../Views/About";
import { Photos } from "../Views/Photos";
import { Menus } from "../Views/Menus";
import { Contact } from "../Views/Contact";

export function NavBar() {
	return (
		<>
			<header>
				<nav>
					<Link to="/">HOME</Link>
					<Link to="/about">ABOUT</Link>
					<Link to="/photos">PHOTOS</Link>
					<Link to="/menus">MENUS</Link>
					<Link to="/contact">CONTACT</Link>
				</nav>
			</header>
		</>
	);
}
