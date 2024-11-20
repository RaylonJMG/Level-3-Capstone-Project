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

//CONTACT FORM PROCESSING
function handleSubmit(event) {
    event.preventDefault();
    const inputs = event.target;
    const emailInput = inputs[1];
    const email = emailInput.value;
    document.write("Submitting form for <br>" + email + "...");
    setTimeout(serverResponse, 5000);
    promise.then(parseResponse);
}

//PARSE :ANALYZE/CONVERT DATA TO USABLE FORMAT
function serverResponse() {
    display("Thanks! We have received your message!");
}
    //PARSE RESPONSE: 
    function parseResponse(resolveValue) {
        debugger;
        //JSON.PARSE: CONVERTS STRING OBJECT INTO ACTUAL OBJECT
        const response = JSON.parse(resolveValue);
        const message = response.message;
        display(resolveValue);
    }

//RATING FORM PROCESSING
function handleRating() {
    setTimeout(serverResponse, 5000);
    display("Submitting Rating now...");
}

//SERVER SIMULATION
function getServerResponse(resolve){
   setTimeout(activateResolve, 5000);
    //RESOLVE FUNCTION:CHANGES THE PROMISE STATUS TO FULFILLED
    function activateResolve(){
        debugger;
        //SIMULATE A SERVER BY SENDING A STRINGIFIED OBJECT
        const response = { 
            message: "Successfully processed.Thanks for your rating. See you next time!"
        };
        //JSON.STRINGIFY: CONVERTS STRING OBJ TO ACTUAL OBJ
    const resolveValue = JSON.stringify(response);
    resolve(resolveValue);
    }
}

//FETCH FUNCTION
function handleAdvice1(){
    debugger;
    const promise = fetch("https://api.adviceslip.com/daily_adviceslip.rss");
    display(promise);
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
