// import React from "react";

// window.getServerResponse = getServerResponse;

//SERVER SIMULATION
export function getServerResponse(resolve) {
	setTimeout(activateResolve, 5000);
	//RESOLVE FUNCTION:CHANGES THE PROMISE STATUS TO FULFILLED
	function activateResolve() {
		debugger;
		//SIMULATE A SERVER BY SENDING A STRINGIFIED OBJECT
		const response = {
			message:
				"Successfully processed.Thanks for your rating. See you next time!",
		};
		//JSON.STRINGIFY: CONVERTS STRING OBJ TO ACTUAL OBJ
		const resolveValue = JSON.stringify(response);
		resolve(resolveValue);
	}
}
