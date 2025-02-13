import { extractAdvice } from "../controllers/handleAdvice.js";
import { viewAdvice } from "./viewAdvice.js";

window.extractAdvice = extractAdvice;

//Resolve value is a special object created by the fetch function
//Text Method extracts stringified object
export function extractAdvice(resolveValue){
    const promise = resolveValue.text();
    promise.then(viewAdvice);
} 