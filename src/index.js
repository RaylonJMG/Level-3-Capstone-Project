import React from "react";
import { createRoot } from "react-dom/client";

const root = createRoot(window.bodyTag);
root.render(
	/*#
    _ PURE_
    */ React.createElement("h1", null, "React is amazing!")
);
