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