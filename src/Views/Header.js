import React from "react";
import src from "../../assets/FriedSeafoodPlatter.jpg";

export function Header() {
	return (
		<header>
			<img
				width="100%"
				alt="fried seafood platter"
				src={src}
			/>
		</header>
	);
}
