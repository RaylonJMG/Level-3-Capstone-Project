import { DynamoDB } from "@aws-sdk/client-dynamodb";
import { accessKeyId, region, secretAccessKey } from "../../.aws/credentials";
import { DynamoDBDocument } from "@aws-sdk/lib-dynamodb";

export async function authenticationAWS(email = "", password = "") {
	const apiKey = {
		region: region,
		credentials: {
			accessKeyId: accessKeyId,
			secretAccessKey: secretAccessKey,
		},
	};

	//DYNAMODB CLIENTS
	const client = new DynamoDB(apiKey); //ORIGiNAL CLIENT
	const niceClient = DynamoDBDocument.from(client); //UPDATED & NICER TO WORK WITH

	//DATA TO BE REQUESTED FROM DYNAMODB
	const request = {
		TableName: "logins",
		Key: { email: "abc@logins.com" },
	};

	//GETS REQUESTED DATA FROM DYNAMODB
	const response = await niceClient.get(request);

	//AUTHENTICATE
	const loginMatch = response.Item; //extracts login from the response
	const isAuthenticated = password === loginMatch.password; //checks if password from user matches password from the response
	return isAuthenticated; //returns authentication response
}
