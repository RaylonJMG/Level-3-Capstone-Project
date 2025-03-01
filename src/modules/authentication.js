import { logins } from "./logins.js";

export function authentication(email = "", password = "") {
	for (let position = 0; position < logins.length; position++) {
		const login = logins[position]; //
		const currentEmail = login.email;
		const currentPassword = login.password;
		if (email === currentEmail && password === currentPassword) {
			return true;
		} else {
			return false;
		}
	}
}
