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