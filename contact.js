function processForm(event) {
    debugger;
    event.preventDefault();
    const form = event.target;
    const input = form;
    const value = input.value;
    output("Your appointment has been scheduled!");
}