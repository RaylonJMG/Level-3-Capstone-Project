import React from "react";
import { createRoot } from "react-dom/client";
import { Home } from "./Views/Home.js";
import { About } from "./Views/About.js";
import { Photos } from "./Views/Photos.js";
import { Menus } from "./Views/Menus.js";
import { Contact } from "./Views/Contact.js";

const root = createRoot(window.bodyTag);
root.render(
	<>
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/photos" element={<Photos />} />
				<Route path="/menus" element={<Menus />} />
				<Route path="/contact" element={<Contact />} />
			</Routes>
		</BrowserRouter>
	</>
);
