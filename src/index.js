import React from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router";
const root = createRoot(window.bodyTag);
root.render(
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Home />} />
			<Route path="/about" element={<About />} />
			<Route path="/photos" element={<Photos />} />
			<Route path="/menus" element={<Menus />} />
			<Route path="/contact" element={<Contact />} />
		</Routes>
	</BrowserRouter>
);