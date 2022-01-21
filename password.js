// This program simulates validating a user's password against some criteria //


//include boiler plate to obtain user entered info
const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

//--- Welcome the user ---//
console.log("Welcome, user, to this password validation simulation tool! Please remember to never enter your real passwords into such a sketchy program. \n");


//--- Obtain a password from the user ---//
const minPasswordLength = 10;
const targetLenght = 30;
reader.question("Please enter a password to validate: ", function(input){
   if (input.length >= minPasswordLength) {
      
      //Determine which success message to show
      let targetMessage = "";
      if (input.length < targetLenght) { 
         targetMessage = `Honestly though, you should aim for something in the ${targetLenght}s.`;
      }
      console.log(`Great success! Your password is at least ${minPasswordLength} characters long. ${targetMessage}`);

      //--- Check if password has a number, symbol, and/or an uppercase ---//
      console.log("Your password contains ");
      
      let regExp1 = /[0-9]/;
      let hasNumber = regExp1.test(input);
      console.log("a number: " + hasNumber);

      let regExp2 = /[A-Z]/;
      let hasUpper = regExp2.test(input);
      console.log("an uppercase: " + hasUpper);

      let regExp3 = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]+/;
      let hasSymbol = regExp3.test(input);
      console.log("a symbol: " + hasSymbol);
   }
   else { 
      console.log(`Yikes! Big failure. Your password is fewer than ${minPasswordLength} characters. Honestly though, try for something closer to ${targetLenght}.`);
   }

	// This line closes the connection to the command line interface.
	reader.close()
});