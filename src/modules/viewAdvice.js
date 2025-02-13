import { output } from "../utils/output.js"; 

window.viewAdvice = viewAdvice;

//JSON.parse function to convert special object to a stringified object
//parse method generates an object from the string
export function viewAdvice(resolveValue){
    debugger;
    const advice = JSON.stringify(resolveValue);
    output(advice);
}
