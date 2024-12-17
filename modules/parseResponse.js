import { outputModule } from "../utils/outputModule.js";

//PARSE :ANALYZE/CONVERT DATA TO USABLE FORMAT
export function parseResponse(resolveValue) {
        debugger;
        //JSON.PARSE: CONVERTS STRING OBJECT INTO ACTUAL OBJECT
        const response = JSON.parse(resolveValue);
        const message = response.message;
        outputModule(resolveValue);
    }