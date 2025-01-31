import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "./Views/Home.js";
import { About } from "./Views/About.js";
import { Photos } from "./Views/Photos.js";
import { Menus } from "./Views/Menus.js";
import { Contact } from "./Views/Contact.js";
import { ImageMap } from "./Views/ImageMap.js";

const root = createRoot(window.bodyTag);
root.render(
	<BrowserRouter>
		<Routes>
			<Route
				path="/"
				element={<Home />}
			/>
			<Route
				path="/index.html"
				element={<Home />}
			/>
			<Route
				path="/Level-3-Capstone-Project/"
				element={<Home />}
			/>
			<Route
				path="/photos"
				element={<Photos />}
			/>
			<Route
				path="/about"
				element={<About />}
			/>
			<Route
				path="/contact"
				element={<Contact />}
			/>
			<Route
				path="/menus"
				element={<Menus />}
			/>
			<Route
				path="/imagemap"
				element={<ImageMap />}
			/>
		</Routes>
	</BrowserRouter>
);
