all.js
=====
Version 0.0.1 (Alpha)
Official website: learnsomuch.github.io/all.js

A JS library to create, generate, modify, identify, verify and trim stuff.

## API's Planned:

### Create 

### Generate

* To generate a string of length specified in arguments.
 

`all.gstring(length);`

Example: `all.gstring(5);`

=> `"pzsPl"`



* To generate a number of length specified in arguments. You can specify upto 21 for now.


`all.gnum(length);`

Example: `all.gnum(20);`

=> `99695065775886170000`


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

