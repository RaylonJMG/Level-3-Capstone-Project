import { describe, expect, it } from "@jest/globals";
import { authenticationAWS } from "./authenticationAWS";

describe("The authenticationAWS function", () => {
	it("authenticates when email and password are correct", async () => {
		//ARRANGE
		const email = "abc@logins.com";
		const password = "aaa";
		//ACT
		const isAuthenticated = await authenticationAWS(email, password);
		//ASSERT
		expect(isAuthenticated).toBe(true);
	});
	it("does not authenticate when email and password are incorrect", async () => {
		//ARRANGE
		const email = "acb@logins.com";
		const password = "acb";
		//ACT
		const isAuthenticated = await authenticationAWS(email, password);
		//ASSERT
		expect(isAuthenticated).toBe(false);
	});
	it("does not authenticate when email is correct, but the password is incorrect", async () => {
		//ARRANGE
		const email = "abc@logins.com";
		const password = "acb";
		//ACT
		const isAuthenticated = await authenticationAWS(email, password);
		//ASSERT
		expect(isAuthenticated).toBe(false);
	});
	it("does not authenticate when email is incorrect, but the password is correct", async () => {
		//ARRANGE
		const email = "acb@logins.com";
		const password = "aaa";
		//ACT
		const isAuthenticated = await authenticationAWS(email, password);
		//ASSERT
		expect(isAuthenticated).toBe(false);
	});
	it("does not authenticate when email is empty, but the password is correct", async () => {
		//ARRANGE
		const email = "";
		const password = "aaa";
		//ACT
		const isAuthenticated = await authenticationAWS(email, password);
		//ASSERT
		expect(isAuthenticated).toBe(false);
	});
	it("does not authenticate when email is correct, but the password is empty", async () => {
		//ARRANGE
		const email = "abc@logins.com";
		const password = "";
		//ACT
		const isAuthenticated = await authenticationAWS(email, password);
		//ASSERT
		expect(isAuthenticated).toBe(false);
	});
	it("does not authenticate when email is not in the list", async () => {
		//ARRANGE
		const email = "lmnop@logins.com";
		const password = "lmnop";
		//ACT
		const isAuthenticated = await authenticationAWS(email, password);
		//ASSERT
		expect(isAuthenticated).toBe(false);
	});
	it("does not authenticate when email is not in the list, but the password is in the list", async () => {
		//ARRANGE
		const email = "lmnop@logins.com";
		const password = "aaa";
		//ACT
		const isAuthenticated = await authenticationAWS(email, password);
		//ASSERT
		expect(isAuthenticated).toBe(false);
	});
	it("does not authenticate when email is in the list, but the password is empty", async () => {
		//ARRANGE
		const email = "abc@logins.com";
		const password = "";
		//ACT
		const isAuthenticated = await authenticationAWS(email, password);
		//ASSERT
		expect(isAuthenticated).toBe(false);
	});
	it("does not authenticate when email is in the list, but the password is a Number", async () => {
		//ARRANGE
		const email = "abc@logins.com";
		const password = "12345678";
		//ACT
		const isAuthenticated = await authenticationAWS(email, password);
		//ASSERT
		expect(isAuthenticated).toBe(false);
	});
});

//still need to import authentication file from DynamoDB branch

//need to run the tests npx jest to make sure they work properly
