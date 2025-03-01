export class DatabaseSimulation {
    secretKey = "ryj2213";
    isConnected = false;

    constructor(apiKey = "") {
        console.log(this.isConnected);
        console.log(this.secretKey); 

        const doesMatch = apiKey === this.secretKey;
        
        if (doesMatch)this.isConnected = true; //if the apiKey matches , isConnected will be true
    }
}
//A CLASS IS A TEMPLATE OF AN OBJECT, NOT THE ACTUAL OBJECT
//REQUIRES KEYWORD this TO ACCESS THE PROPERTIES