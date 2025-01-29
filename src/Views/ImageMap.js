import React, { useEffect } from "react";

export function ImageMap() {
	useEffect(componentDidMount, []);
	return (
		<>
			<header></header>
			<main>
				<img
					width="100%"
					usemap="#my-image-map"
					src="../assets/Seasonings.jpg"
					alt="Cajun Seasoning Blends"
				/>
				<map name="my-image-map">
					<area
						shape="rect"
						title="Tony Chachere's Creole Seasoning"
						coords="46,151, 149,324"
						href="https://www.tonychachere.com/"
						target="_blank"
					/>
					<area
						shape="rect"
						title="Zatarain's Creole Seasoning"
						coords="290,123, 386,290"
						href="https://www.mccormick.com/zatarains/products/spices-and-seasonings/spices-and-extracts/creole-seasoning"
						target="_blank"
					/>
				</map>
			</main>
		</>
	);

	function componentDidMount() {
		imageMapResize();
	}
}
