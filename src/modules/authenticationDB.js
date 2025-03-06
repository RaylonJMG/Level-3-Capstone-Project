import { logins } from "./logins";
import { Database } from "./Database";

//RETURNS TRUE IF EMAIL & PASSWORD MATCH A LOGIN
//RETURNS FALSE IF EMAIL & PASSWORD DON'T MATCH A LOGIN
export async function authenticationDB(email = "", password = "") {
	const apiKey = "";
	const client = new Database(apiKey);
	const resolveValue = await client.getData(logins, email);
	const loginMatch = resolveValue;
	const isAuthenticated = password === loginMatch.password;
	return isAuthenticated;
}
//The apikey is passed to the database and gives a client, then waits to get the data, which IS the resolveValue, in this case the loginMatch; then used to check verify if the login that came from the data matches the login that came from the user. If so, it is authenticated and can then return isAuthenticated(true or false)

//ASYNC : enables use of keyword AWAIT; returns a promise
//AWAIT: allows the function to wait until a promise is resolved; can also get the  directly access the resolveValue by storing it in a variable(instead of getting the promise)
