import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
import { Home } from "./Views/Home";
import { About } from "./Views/About";
import { Photos } from "./Views/Photos";
import { Menus } from "./Views/Menus";
import { Contact } from "./Views/Contact";
import { ImageMap } from "./Views/ImageMap";
import { Header } from "./Views/Header";
import { Footer } from "./Views/Footer";

const bodyTag = document.getElementById("bodyTag");
const root = createRoot(bodyTag);
root.render(
	<BrowserRouter>
		<Header />
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
		<Footer />
	</BrowserRouter>
);
