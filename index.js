//FETCH FUNCTION sends request to API URL and returns a promise
function handleClickAdvice(){
    debugger;
    const promise = fetch("https://api.adviceslip.com/daily_adviceslip.rss");
    promise.then(extractResponse);
}

//Resolve value is a special object created by the fetch function
//Text Method extracts stringified object
function extractResponse(resolveValue){
    const promise = resolveValue.text();
    promise.then(viewAdviceResponse);
} 

//JSON.parse function to convert special object to a stringified object
//parse method generates an object from the string
//stringify method generates a string from an object
function viewAdviceResponse(resolveValue){
    debugger;
    const advice = JSON.stringify(resolveValue);
    output(advice);
}

function getAdvice() { 
    const promise = fetch("https://api.adviceslip.com/advice");
}
/*******************************************
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
*******************************************/