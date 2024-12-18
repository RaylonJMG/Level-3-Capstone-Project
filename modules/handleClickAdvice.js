import { extractResponse } from "../utils/extractResponse.js";

window.handleClickAdvice = handleClickAdvice;

//FETCH FUNCTION sends request to API URL and returns a promise
export function handleClickAdvice(){
    debugger;
    const promise = fetch("https://api.adviceslip.com/advice");
    promise.then(extractResponse);
}