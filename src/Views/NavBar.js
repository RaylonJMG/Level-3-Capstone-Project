import React from "react";

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
