window.extractResponse = extractResponse;


//Resolve value is a special object created by the fetch function
//Text Method extracts stringified object
export function extractResponse(resolveValue){
    const promise = resolveValue.text();
    promise.then(viewAdviceResponse);
} 