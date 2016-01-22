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

 	// Initialising uppercase, lowercase chars, numbers, symbols and combination of others.
 	var u = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
 	var l = 'abcdefghijklmnopqrstuvwxyz';
 	var n = '0123456789';
 	var s = '~`!@#$%^&*()_+-={}[]:";\'<>?,./|\\';
 	var ul =  lu = u + l;
 	var un =  nu = u + n;
 	var us =  su = u + s;
 	var ln =  nl = l + n;
 	var ls =  sl = l + s;
 	var ns =  sn = n + s;
 	var uln = lnu = nlu = u + l + n;
 	var uls = lsu = slu = u + l + s;
 	var uns = nsu = sun =  u + n + s;
 	var lns = nsl = sln = l + n + s;
 	var ulns = lnsu = nsul = suln = u + l + n + s;

  	// Generate random string with the length and input passed as an arugement to function
  	// For eg. all.gstring(21, all.ulns); // output will be "D*Iz?'LfLM"fW\d%`iSE"" input can be single or combination of others
	all.gstring = function grandom(length, input) {
    	var output = "";
	    for (var i=0; i<length; i++) {
	      output = output + input.charAt(Math.floor(Math.random() * input.length));
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

  	// Generate random alpha-numberic string with the length passed as an argument.
  	// Considering strings with uppercase lowe

}.call(this));
// End of all.js