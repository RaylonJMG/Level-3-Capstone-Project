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
import { HandleRefresh } from "./Views/HandleRefresh";

const domain = window.location.hostname;
let rootPath = "";
if (domain === "raylonjmg.github.io") rootPath = "/Level-3-Capstone-Project/";

const bodyTag = document.getElementById("bodyTag");
const root = createRoot(bodyTag);
root.render(
	<BrowserRouter>
		<HandleRefresh>
			<Header />
			<Routes>
				<Route
					path={`${rootPath}/`}
					element={<Home />}
				/>
				<Route
					path={`${rootPath}/index.html`}
					element={<Home />}
				/>
				<Route
					path={`${rootPath}/home`}
					element={<Home />}
				/>
				{/* <Route
				path="/Level-3-Capstone-Project/"
				element={<Home />}
			/> */}
				<Route
					path={`${rootPath}/photos`}
					element={<Photos />}
				/>
				<Route
					path={`${rootPath}/about`}
					element={<About />}
				/>
				<Route
					path={`${rootPath}/contact`}
					element={<Contact />}
				/>
				<Route
					path={`${rootPath}/menus`}
					element={<Menus />}
				/>
				<Route
					path="/imagemap"
					element={<ImageMap />}
				/>
			</Routes>
			<Footer />
		</HandleRefresh>
	</BrowserRouter>
);
