/* let - is used to declare a block-scope local variables, optionally setting up its value.
--The scope of let is block-scope ({}).
--It can be reassigned but cannot be re-declared inside the same scope.
--The best use of let is when reassigning variable in loops or conditions.
*/
//Example of Utilization of let

let courseName = 'Jerome V Giray'; // Let

if (true) { // This is the block that uses the value declared in the let.
    let courseName = 'Jerome V. Giray';
    console.log(courseName); 
}
console.log("Hello", courseName);



/*const - is used to create variables that cannot be redeclared or changed after their first assignment. The value of the variables is fixed.
-- The scope of const is only limited to the block, statement, or expression in which they are defined and cannot be accessed outside of it.
-- Const cannot be redeclared or reassigned.
-- Use const when declaring new array, new object, new function, and new RegExp(Regular Expression).

*/
//Example of Utilization of const
const person = {
    first_name: "Gray",
    last_name: "Abdul",
    Age: 19,
    About: "ComSci Student"
}; 





/*var - is used to declare variables in JavaScript.
-- The scope of var is function-scope meaning even though var is declared outside the block where they are defined, they are still accessible as long as they are inside the same function..
-- It can be reassigned and re-declared within the same scope withou errors showing. 
-- The best practice for it is it should only be used in code written for older browsers. 


*/
//Example of Utilization of var


var a = 5;
var a = 10;
console.log(a); //Output "10"
 


var x = 5;
var y = 6;
var z = x + y; 
console.log(z); // Output = 11


var x = 1;

if( x === 1 ){
  var x = 2; 

  console.log(x)
};
console.log(x);// The expected output is there are two 2 going to display as it said, as long as it was defined inside a function, it's still accessible.



/* REFERENCES
--https://www.shiksha.com/online-courses/articles/javascript-let/#:~:text=What%20is%20let%20in%20JavaScript,expression%20where%20it%20is%20used.
--https://www.geeksforgeeks.org/javascript-let/
--https://www.geeksforgeeks.org/javascript-const/ 
--https://www.w3schools.com/js/js_const.asp
--https://www.geeksforgeeks.org/javascript-var/
--https://www.w3schools.com/js/js_variables.asp




*/