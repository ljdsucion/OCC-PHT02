/*
    VARIABLES
        let - mutable (changeable)
        const - constant (unchangeable)
*/

const my_name = "Princess";
let my_age = 18;

console.log(my_name);
console.log(my_age);

// my_name = "Ralph";
my_age = 28;

console.log(my_name);
console.log(my_age);

/*
    Primitive Data Types
        -- most basic data type in JS
*/

console.log("-- Primitive Data Types --");

//Number
let num1 = 20;
let num2 = 90.8;
let num3 = -2.8;

console.log('Number: ', num1, num2, num3);

//String
let my_string = "Hello World!";

console.log('String: ', my_string);

//Boolean -- true or false
let isStudent = false;

console.log('Boolean: ', isStudent);

//Undefined -- uninitialized or missing value
let nothing;
console.log('Undefined: ', nothing);

//Null -- intentional absence; explicitly empty
let nullVar = null;
console.log('Null: ', nullVar);

/**
    Reference Data Types
        -- holds more complex data types
 */

        console.log("-- Reference Data Types --");

        //Objects -- a collection of key-value pairs, enclosed in { }
        let person = {
            name: 'Joseph',
            age: 25,
            city: 'Vancouver'
        }
        
        console.log(person);
        console.log(person.name);
        
        //Array -- an ordered list of values, enclosed in [ ]
        let numbers = [1, 2, 3, 4, 5, "Javascript Array"];
        
        console.log(numbers);
        console.log(numbers[3]);
        
        //Function -- reusable blocks of codes that can be invoked by name
        function greet(name) {
            console.log('Hello ' + name);
        }
        
        greet('Alice');
        
        //Date
        const today = new Date();
        console.log(today);
        