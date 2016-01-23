all.js
=====
Version 0.0.1 (Alpha) - DO NOT USE FOR PRODUCTION. This library is heavily under development and testing phase.

Official website: [all.js.org](http://all.js.org)

A JS library to create, generate, modify, identify, verify and trim stuff.

## API's Planned:

### Create 

### Generate

* To generate a alpha numeric string of length and input specified in arguments. length is the size or number of characters in a string. Whereas input can be u (Uppercase), l(Lowercase), n(Numbers), s(Symbols). You can use any combination to generate a string. For example, if you want to use Uppercase, symbols and numbers together to form a string with a length of 8. To implement this use case, all.grandom(8, "usn"); // output: "S"VV7:/X". 
 

`all.grandom(length, input);`

Example: `all.grandom(5, "u");`

=> `"PZSQL"`

Similarly, you can generate only numbers or any combination for that matter. 

`all.grandom(8, "n");`

=>  `"02469105"`

Real use case scenario for this grandom is to generate password for a user. 

* To generate a integer based on range or generate a number below the specified number in arguments.
 

`all.gint(min, max);`

Example: `all.gint(4999, 5012);`

=> `5010`


By default, min = 0 If the number of arguments passed for gint is 1. So, the range would be between 0 to max.

`all.gint(max);`

Example: `all.gint(50);`

=> `37`

### Modify

### Identify

### Verify

### Trim

####Contributing:
Thanks for considering to contribute.

####License:
MIT 2016

