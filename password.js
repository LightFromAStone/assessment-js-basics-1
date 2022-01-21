// This program simulates validating a user's password against some criteria //


//include boiler plate to obtain user entered info
const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//--- Welcome the user ---//
console.log("Welcome, user, to this password validation simulation tool! Please remember to never enter your real passwords into such a sketchy program.");


//--- Obtain a password from the user ---//
const minPasswordLength = 10;
reader.question("Please enter a password to validate: ", function(input){
   if (input.length >= minPasswordLength) { 
      console.log(`Great success! Your password is at least ${minPasswordLength} characters long. Honestly though, you should aim for something in the 30s.`);
   }
   else { 
      console.log(`Yikes! Big failure. Your password is fewer than ${minPasswordLength} characters. Honestly though, try for something closer to 30.`);
   }

	// This line closes the connection to the command line interface.
	reader.close()
});