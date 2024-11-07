//PHONE APPOINTMENT FORM PROCESSING
function processForm(event) {
    debugger;
    event.preventDefault();
    const form = event.target;
    const phoneNumberInput = form[3];
    const firstNameInput = form[0];
    const calendarInput = form[2];
    const phoneNumber = phoneNumberInput.value;
    const firstName = firstNameInput.value;
    const calendar = calendarInput.value;
    output(`Thank you, ${firstName}. <br> Your phone appointment is scheduled for ${calendar}.<br> You can expect a call at ${phoneNumber}. Have a great day.`);

}

function appointmentMsg() {
    display("Appointment scheduling in progress...")
}

function asynchronous() {
    document.write();
    setTimeout(5000);
}
//CONTACT FORM PROCESSING
function submitForm(event) {
    const inputs = event.target;
    const emailInput = inputs[1];
    const email = emailInput.value;
    document.write("Submitting form for <br>" + email + "...");
    setTimeout(serverResponse, 3000);
}
//CONTACT FORM PROCESSING
function serverResponse() {
    display("Thanks! We have received your message!");
}
//RATING FORM PROCESSING
function ratingForm() {
    display("Thanks for your rating. See you soon!");
}