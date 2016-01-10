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

  // Generate random string with the length passed as an arugement to function
	all.gstring = function gstring(length) {
    var output = "";
    var available = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

    for (var i=0; i<length; i++) {
      output = output + available.charAt(Math.floor(Math.random() * available.length));
    }
    return output;
  }

  // Generate random integer with the length passed as an argument to function (max. 21)
  all.gnum = function gnum(length) {
    return Math.floor(Math.pow(10, length-1) + Math.random() * (Math.pow(10, length) - Math.pow(10, length-1) - 1));
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
