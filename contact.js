function myProcessForm(event) {
    debugger;
    event.preventDefault(); //prevents the page from refreshing
    const form = event.target;
    const phoneNumber = phoneNumber.value;
    output(`Your phone number is ${phoneNumber}.<br>`);
}