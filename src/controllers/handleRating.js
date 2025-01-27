import { output } from "../utils/output.js";

export function handleRating() {
	setTimeout(serverResponse, 5000);
	output("Submitting Rating now...");

	function serverResponse() {
		output("Thanks! We have received your message!");
	}
}
