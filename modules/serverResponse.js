import { output } from "../utils/output.js";

window.serverResponse = serverResponse;

export function serverResponse() {
    output("Thanks! We have received your message!");
}