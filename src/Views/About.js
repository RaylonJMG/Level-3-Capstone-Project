import React, { useEffect } from "react";
import { ImageMap } from "./ImageMap";
import BestInAmerica from "../../assets/BestInAmerica.jpg";
import ChefTrophy from "../../assets/ChefTrophy.jpg";

export function About() {
	useEffect(componentDidMount, []);
	useEffect(componentDidUpdate, []);
	useEffect(componentDidUnmount, []);
	return (
		<main>
			<h1>About Us</h1>
			<img
				alt="America's Best Food Award logo"
				src={BestInAmerica}
				height="500px"
				width="100%"
			/>
			<h2>Philosophy: Good Food Matters!</h2>
			<p>
				Hey there, mon chere'! We live for and love to eat Good Food! It makes{" "}
				<b>ZERO</b> sense to us to plate <i>something</i> that tastes anything
				short of absolutely delicious and looks like meh...What a wasted dish!
				🙊🙉🙈 We don't do that 'round these parts!
			</p>
			<br />
			<img
				alt="chef trophy winner"
				src={ChefTrophy}
				width="100%"
			/>
			<h2>Who We Are</h2>
			<p>
				We are a multi-award winning restaurant where folks are greeted with the
				heart of the South...it's simply Good Food. Food so good, you wanna tell
				the world how darn good it is! Food so good, you'll want a second
				helping, or a third, or a fourth! No worries, we got you covered there!
			</p>
			<br />
			<p>
				As you can see, we are proud to have been supported as a local fan
				favorite for over 20 years. Thank you so much to all the people from
				around the world that have swung by to see us and share in our Good Food
				Philosophy.
			</p>
			<br />
			<br />
			<ImageMap />
			<h4>Come on back now, ya' hear?</h4>
			<br />
			<br />
			<p>
				Site Inspiration:Love of GOOD FOOD! 😍 I believe that potential
				employers will wish to hire me based on this website because it pretty
				much is a functional, informational website. Most people who have no
				idea about software development may even think that this site represents
				a real business, even though this is my imagination at work. It shows
				that I can manage projects until completion, adhering to detailed
				instruction from leadership, but allows my personality, style, and flair
				to also be showcased in the work.
			</p>
			<br />
			<p>
				Site Features: This website was created using HTML, CSS, Bootstrap, and
				Javascript. In Level 1, we learned to create and style basic websites,
				run functions, attach images/videos, create grids and cards. In Level 2
				of the course, we have expanded our knowledgebase; we can attach and
				create image maps, process forms, simulate server responses, extract
				data from REST APIs, and use SASS styling upgrades, including mixins,
				transitions and animations --all of which has been integrated into this
				website.
			</p>
		</main>
	);
}
function componentDidMount() {
	document.title = "About";
	console.log("The component has mounted on the About page.");

	return componentDidUnmount;
}
function componentDidUpdate() {
	console.log("The component has updated.");
}
function componentDidUnmount() {
	return function () {
		console.log("The component has unmounted.");
	};
}
