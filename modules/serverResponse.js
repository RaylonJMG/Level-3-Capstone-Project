import { outputModule } from "../utils/outputModule.js";

window.serverResponse = serverResponse;

export function serverResponse() {
    outputModule("Thanks! We have received your message!");
}