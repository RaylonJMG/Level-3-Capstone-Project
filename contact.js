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
    setTimeout(serverResponse3, 3000);
    
    function serverResponse3() {
        display("Appointment scheduling in progress...")
    }
    output(`Thank you, ${firstName}. <br> Your phone appointment is scheduled for ${calendar}.<br> You can expect a call at ${phoneNumber}. Have a great rest of your day.`);
}



//CONTACT FORM PROCESSING
function handleSubmit(event) {
    event.preventDefault();
    const inputs = event.target;
    const emailInput = inputs[1];
    const email = emailInput.value;
    document.write("Submitting form for <br>" + email + "...");
    setTimeout(serverResponse, 3000);
    promise.then(parseResponse);
}

//PARSE :ANALYZE/CONVERT DATA TO USABLE FORMAT
function serverResponse() {
    display("Thanks! We have received your message!");
    //PARSE RESPONSE: 
    function parseResponse(resolveValue) {
        debugger;
        //JSON.PARSE: CONVERTS STRING OBJECT INTO ACTUAL OBJECT
        const response = JSON.parse(resolveValue);
        const message = response.message;
        display(resolveValue);
    }
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
    //RESOLVE FUNCTION:CHANGES THE PROMISE STATUS TO FULFILLED
    function activateResolve(){
        debugger;
        //SIMULATE A SERVER BY SENDING A STRINGIFIED OBJECT
        const response = { 
            message: "Successfully processed.Thanks for your rating. See you soon!"
        };
        //JSON.STRINGIFY: CONVERTS STRING OBJ TO ACTUAL OBJ
    const resolveValue = JSON.stringify(response);
    resolve(resolveValue);
    }
}
