import React from "react";
import src from "../../assets/FriedSeafoodPlatter.jpg";
import { NavCollapse } from "./NavCollapse";

export function Header() {
	return (
		<header>
			<img
				width="100%"
				alt="fried seafood platter"
				src={src}
			/>
			<NavCollapse />
		</header>
	);
}
