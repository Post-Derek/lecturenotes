/**************************
FIZZ BUZZ (Conditionals Only)
**************************/
/*
    Challenge:
    Create a variable named FB that takes numbers
    Write an ELSE/IF conditional that: 
    Prints out "Fizz" if the number is divisible by 3
    Prints out "Buzz" if the number is divisible by 5
    Prints out "Fizz Buzz" if the number is divisible by BOTH 3 and 5
    Convert this to SWITCH STATEMENT and then a TERNARY
*/
//Else If Statement
var fb = 10;

if (fb % 3 == 0 && fb % 5 == 0) {    
    console.log("fizzbuzz");
}
else if (fb % 5 == 0)
{    console.log("buzz");
}else if (fb % 3 == 0 && fb % 5)
{    console.log("fizz");   
}else{    
    console.log("none");}

//Switch Statement
 let FB = 29

 switch(true) {
     case (FB % 3 == 0 && FB % 5 == 0):
         console.log('Fizzbuzz');
         break;
     case (FB % 3 == 0):
         console.log('Fizz');
         break;
    case (FB % 5 == 0):
        console.log('Buzz');
        break;
    default:
        console.log('none');
 }

//  //TERNARY

  let FB = 10;

  (FB % 3 == 0 && FB % 5 == 0) ? console.log('Fizzbuzz') 
  : (FB % 3 == 0) ? console.log('Fizz')  
  : (FB % 5 == 0) ? console.log('Buzz') 
  : console.log(FB);

 

