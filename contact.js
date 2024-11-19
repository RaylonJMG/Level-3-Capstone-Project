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
    output(`Thank you, ${firstName}. <br> Your phone appointment is scheduled for ${calendar}.<br> You can expect a call at ${phoneNumber}. Have a great rest of your day.`);

}

function appointmentMsg() {
    display("Appointment scheduling in progress...")
}

function asynchronous() {
    document.write();
    setTimeout(5000);
}
//CONTACT FORM PROCESSING
function handleSubmit(event) {
    const inputs = event.target;
    const emailInput = inputs[1];
    const email = emailInput.value;
    document.write("Submitting form for <br>" + email + "...");
    setTimeout(serverResponse, 3000);
    promise.then(parseResponse);
}
//CONTACT FORM PROCESSING
function serverResponse() {
    display("Thanks! We have received your message!");
}

function parseResponse(resolveValue){
    debugger;
    const response = JSON.parse(resolveValue);
    const message = response.message;
    display(resolveValue);
}

//RATING FORM PROCESSING
function handleClick() {
    setTimeout(serverResponse2, 5000);
    
    function serverResponse2() {
        display("Thanks! We have received your message!");
}
}
//SERVER SIMULATION
function getServerResponse(resolve){
    setTimeout(activateResolve, 5000);

    function activateResolve(){
        debugger;
        //SIMULATE A SERVER BY SENDING A STRINGIFIED OBJECT
        const response = { 
            message: "Successfully processed.Thanks for your rating. See you soon!"
        };
    const resolveValue = JSON.stringify(response);
    resolve(resolveValue);
    }
}

//FETCH FUNCTION
function handleClick(event){
    debugger;
    const promise = fetch("https://api.adviceslip.com/advice");
    promise.then(parseResponse);
}
function handleAdvice(){
    debugger;
    const baseURL = "https://api.adviceslip.com";
    const endPoint = "/advice";
    const URL = (baseURL + endPoint);
    const promise = fetch(URL);
    promise.then(extractResponse);
}
//<input onclick="handleAdvice()"></input>

function extractResponse(resolveValue){
    const promise = resolveValue.text();
    promise.then(parseAdviceResponse);
}
function parseAdviceResponse(resolveValue){
    debugger;
    const response = JSON.parse();
}