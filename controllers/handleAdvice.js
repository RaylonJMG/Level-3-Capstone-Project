import { output } from "../utils/output.js"; 
import { extractAdvice } from "../modules/extractAdvice.js"; 

window.handleAdvice = handleAdvice;

//FETCH FUNCTION sends request to API URL and returns a promise
export function handleAdvice(){
    debugger;
    const promise = fetch("	https://api.adviceslip.com/advice");
    promise.then(extractAdvice);
}

//Resolve value is a special object created by the fetch function
//Text Method extracts stringified object
function extractAdvice(resolveValue){
    const promise = resolveValue.text(); 
    promise.then(viewAdvice);
} 

//JSON.parse function to convert special object to a stringified object
//JSON.parse method generates an object from the string
//JSON.stringify method generates a string from an object
function viewAdvice(resolveValue){
    debugger;
    const result = JSON.parse(resolveValue);
    const advice = result.slip.advice;
    output(advice);
}