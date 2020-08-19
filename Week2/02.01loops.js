/*
************
 FOR LOOPS
************
    - Loops offer us a quick and easy way to do something repeadetly
*/
/*
    Challenge: 
        - Add the even indexes from the alphabet array to a new array using a for loop
*/
/* BRONZE
    - Write a for loop that runs until it's reached the end of the alphabet array, and prints each letter to the console.
*/
// let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// for (let i = 0; i < alphabet.length; i++){
//     console.log(alphabet[i]);
// }

/* SILVER
    - Write a conditional that is nested inside of the for loop that checks if the index of each character in the alphabet array is even or odd. If the index is even, console.log the letter. If the index is odd, console.log 'the index is an odd number'.
*/

// let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// for (let i = 0; i < alphabet.length; i++){
//     if(i % 2 == 0){
//         console.log(alphabet[i]);
//     }
//     else {
//         console.log('the index is an odd number');
// }
// }
/* GOLD
    - Declare a variable of arr that is initialized as an empty array. If the index of the character in the alphabet array is even, add that character to the variable of arr, and console.log arr. If the index is odd - using string interpolation - console.log 'the index ___ is an odd number'.
    - Use Google to search for an array method that allows you to add one or more elements to an array
*/

// let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];

// let arr = [];
// //making a new empty array
// for(let i = 0; i < alphabet.length; i++){
// //setting the index to 0.  While the index is less then the length of the alphabet, interate up by one
//     if (i % 2 == 0){
// //if the current index number % by 2.  Then do this
//         arr.push(alphabet[i]); 
// //Push the current letter into the new array
//         console.log(arr);
// //console.log the array
//     } else {
// //else console.log 
//         console.log(`the index ${i} is an odd number`);

//     }
// }

let derek = {
    firstName: 'Derek',   
    lastName: 'Vorndran',
    tall: true,

}

let isaiah = {
    firstName: 'Isaiah',
    lastName: 'Murray',
    tall: true,
}

let people = [derek,isaiah]
for(person of people) {
    console.log(person.lastName)
}

people.forEach(function(person){
    console.log(person.firstName)
})
/* Ternary
*/

// let alphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
// let arr = [];

// for (let i = 0; i < alphabet.length; i++){
//     (i % 2 -- 0) ? (arr.push(alphabet[i]), console.log(arr)) 
//     : console.log(`the index ${i} is an odd number`)
//}
