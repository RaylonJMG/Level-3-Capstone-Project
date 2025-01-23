export default {
	module: {
		//MODULES ARE FILES THAT ARE IMPORTED
		rules: [
			//RULES ARE A LIST OF WAYS TO PROCESS THE MODULES
			{
				test: /\. (js|jsx) /, //COMPILE JS FILES
				exclude: /\. (scss|css) /, //DON'T COMPILE STYLE MODULES
				use: "babel-loader", //USE THIS LOADER TO COMPILE ALL OTHER MODULES
			},
			{
				test: /\. (scss|css) /, //COMPILE STYLE MODULES
				use: ["style-loader", "css-loader", "sass-loader"], //USE THESE LOADERS TO STYLE MODULES
			},
		],
	},
	watch: true, //WATCH FOR CODE CHANGES, PRESS CTRL +C TO CXL
	watchOptions: { aggregateTimeout: 1000 }, //GIVES WEBPACK MORE TIME TO COMPILE
	mode: "development", //ENABLES THE DEBUGGER
	devtool: "source-map", //ENABLES DEBUGGER CODE TO MATCH ACTUAL CODE
};