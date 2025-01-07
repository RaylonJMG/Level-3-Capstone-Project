import { output } from "../utils/output.js";

window.processForm = processForm;

//PHONE APPOINTMENT FORM PROCESSING
export function processForm(event = new Event()) {
    debugger;
    event.preventDefault();
    const form = event.target;
    const firstNameInput = form[0];
    const calendarInput = form[2];const phoneNumberInput = form[3];
    const phoneNumber = phoneNumberInput.value;
    const firstName = firstNameInput.value;
    const calendar = calendarInput.value;
    output(`Thank you, ${firstName}. <br> Your phone appointment is scheduled for ${calendar}.<br> You can expect a call at ${phoneNumber}. Have a great rest of your day.`);
}







