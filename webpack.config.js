export default {
	module: {
		//MODULES ARE FILES THAT ARE IMPORTED
		rules: [
			//RULES ARE A LIST OF WAYS TO PROCESS THE MODULES
			{
				test: /\.(js|jsx)$/, //COMPILE JS FILES
				exclude: /node_modules/,
				//exclude: /\.(scss|css|otf|ttf|jpg|jpeg|json)/, //DON'T COMPILE THESE NON-JAVASCRIPT FILES/STYLE MODULES
				use: "babel-loader", //USE THIS LOADER TO COMPILE OTHER MODULES
			},
			{
				test: /\.(scss|css)/, //COMPILE STYLE MODULES
				use: ["style-loader", "css-loader", "sass-loader"], //USE THESE LOADERS TO STYLE MODULES
			},
			{
				test: /\.(jpg|png|mp4)/, //EXAMINE ASSET FILES
				type: "asset/resource", // SPECIFIES THAT THESE FILES ARE ASSETS; USE THIS BUILT-IN FEATURE TO HANDLE ASSETS;
			},
		],
	},
	watch: true, //WATCH FOR CODE CHANGES, PRESS CTRL +C TO CXL
	watchOptions: { aggregateTimeout: 2000 }, //GIVES WEBPACK MORE TIME TO COMPILE
	mode: "development", //ENABLES THE DEBUGGER
	devtool: "source-map", //ENABLES DEBUGGER CODE TO MATCH ACTUAL CODE
};
