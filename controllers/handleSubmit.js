//CONTACT FORM PROCESSING
import { serverResponse } from "../utils/serverResponse.js";
import { parseResponse } from "../modules/parseResponse.js";

window.handleSubmit = handleSubmit;

function handleSubmit(event = new Event()) {
    event.preventDefault();
    const inputs = event.target;
    const emailInput = inputs[1];
    const email = emailInput.value;
    document.write("Submitting form for <br>" + email + "...");
    setTimeout(serverResponse, 5000);
    promise.then(parseResponse);
}

