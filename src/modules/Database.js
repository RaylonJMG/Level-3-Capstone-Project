export class Database {
	secretKey = "";
	isConnected = false;

	constructor(apiKey = "") {
		console.log(this.secretKey);
		console.log(this.isConnected);

		const doesMatch = apiKey === this.secretKey;

		if (doesMatch) this.isConnected = true; //if the apiKey matches , isConnected will be true
	}
	//WILL ONLY GET THE DATA IF isConnect IS TRUE
	async getData(logins = [], email = "") {
		const loginMatch = {};
		if (this.isConnected) {
			console.log(`I promise to find ${email} in ${logins}...`);
			console.log("getting data...");
			for (const login of logins) {
				const doesMatch = email === login.email;
				if (doesMatch) {
					loginMatch.email = login.email;
					loginMatch.password = login.password;
				}
			}
		} else {
			console.log("Database is not connected.");
		}
		return loginMatch;
	}
}
//A CLASS IS A TEMPLATE/BLUEPRINT OF AN OBJECT, NOT THE ACTUAL OBJECT
//REQUIRES KEYWORD this TO ACCESS THE ACTUAL VALUES OF THE PROPERTIES
