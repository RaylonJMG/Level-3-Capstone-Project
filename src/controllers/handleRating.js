import { outputModule } from "../utils/outputModule.js";
import { serverResponse } from "../utils/serverResponse.js";

export function handleRating() {
    setTimeout(serverResponse, 5000);
    outputModule("Submitting Rating now...");
}

