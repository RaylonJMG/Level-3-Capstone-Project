function processForm(event) {
    event.preventDefault();
    const form = event.target;
    const phoneNumberInput = form[2];
    const phoneNumber = phoneNumberInput.value;
    output(`You can expect a call at the scheduled time at ${phoneNumber}.<br>`);
}