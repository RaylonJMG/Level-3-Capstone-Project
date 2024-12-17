import { outputModule } from "../utils/outputModule";

window.viewAdviceResponse = viewAdviceResponse;

//JSON.parse function to convert special object to a stringified object
//parse method generates an object from the string
export function viewAdviceResponse(resolveValue){
    debugger;
    const advice = JSON.stringify(resolveValue);
    outputModule(advice);
}
