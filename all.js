// all.js (Alpha) version 0.0.1
// Author: Bheemarasetty Bhulok Sankar
// Docs & Web: https://learnsomuch.github.io/all.js

;(function() {
  	// Initializing the main object as a window in the browser
	var main = this;
	//	defining an object
	var all = {};
  	//	Print version of this all.js
  	all.version = '0.0.1';
	//	all object set global to the main object as a window
 	main.all = all;

 	// API for Generate
 	var init_grandom = {
   		"u": "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
   		"l": "abcdefghijklmnopqrstuvwxyz",
   		"n": "0123456789",
   		"s": '~`!@#$%^&*()_+-={}[]:";\'<>?,./|\\'
	};
 	
	// Generate random alpha numeric string with a user specific length and input.
	// eg. grandom(10, "snl"); //output: 
 	all.grandom = function grandom(length, input) {
  		result = "";
  		output = "";
  
  		for (var i = 0, len = input.length; i < len; i++) {
    		result += init_grandom[input[i]];
  		}
  		for (var j=0; j<length; j++) {
	  		output = output + result.charAt(Math.floor(Math.random() * result.length));
		}
  		return output;
	}

  	// Generate random integer within a range or below a certain numner. This can be passed as an argument
  	all.gint = function gint(a, b) {
  		if (arguments.length === 1) {
    		b = a;
    		a = 0;
  		}
  		return Math.floor(Math.random() * (b - a + 1) + a);
  	}

}.call(this));
// End of all.js
