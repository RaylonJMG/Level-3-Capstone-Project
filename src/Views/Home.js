import React from "react";

export function Home() {
	return (
		<body
			id="bodyTag"
			class="m-5 p-4 border border-5 border-danger border-ridge">
			<header>
				<img
					width="100%"
					alt="fried seafood platter"
					src="https://cdn.glitch.global/cbca519c-2e2c-44e5-a058-374e1c8be1a2/Screenshot%202024-08-03%20021209.jpg?v=1722669203847"
				/>
				<nav class="nav nav-fill nav-pills">
					<a class="nav-link active" aria-current="page" href="index.html">
						HOME
					</a>
					<a class="nav-link" href="about.html">
						ABOUT
					</a>
					<a class="nav-link" href="menus.html">
						MENU
					</a>
					<a class="nav-link" href="photos.html">
						PHOTOS
					</a>
					<a class="nav-link" href="contact.html">
						CONTACT
					</a>
				</nav>
			</header>
			<main>
				<article class="container">
					<h1 class="p-1 fs-1 text-center">Good Food Hut</h1>
					<div class="p-1 fs-2 text-center">
						Swing On By and Taste Our Good Food!
					</div>
					<h3 class="p-1 text-center">Delighting Tastebuds since 1988</h3>
					<br />
					<div class="spinner-grow text-primary"></div>
					<p class="text-start fs-3">
						Visit our Sesame Street Location and try all that the Good Food Hut
						has to offer. We have been sharing our Good Food Philosophy for over
						20 years and you haven't seen nor tasted anything yet!
					</p>
					<hr />
					<img
						src="https://cdn.glitch.global/82eb993a-bf96-4031-9a18-ee851469bb49/restaurant%20interior.jpg?v=1726951573166"
						width="100%"
					/>
					<hr />
					<p class="text-start fs-3">
						So whether it's for some quality time with the family,
						"chillaxation" time with your friends, or decompression time with
						the colleagues...we have created a space that honors a relaxed and
						authentic vibe that'll make you feel like you belong here, because
						you do!😉
					</p>

					<h4>Welcome home, Suga'!</h4>
				</article>
				<div class="text-center" style="padding: 10px">
					<button
						onclick="handleAdvice()"
						class="btn btn-sm rounded-3 bg-primary"
						id="mixin-button">
						Get Random Advice Here
					</button>
				</div>
				<div id="outputTag"></div>
			</main>
			<h6>
				<footer class="text-center">
					<br />
					<br />
					Good Food Hut❃12345 Big Bird Ave, Sesame Street, LA 12345❃
					337-555-4321❃
					<br />
					Website Created by RaylonJMG 2024
				</footer>
			</h6>
		</body>
	);
}