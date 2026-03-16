// #Primitive Data Types

// 7 types of primitive data types in JavaScript: 1. String 2. Number 3. Boolean 4. Undefined 5. Null 6. Symbol 7. BigInt


    // Symbol: 

    // const id = Symbol("id")  //Symbol is a unique and immutable primitive value that can be used as an identifier for object properties. It is often used to create private properties or to avoid name collisions in objects.
    // const anotherid =Symbol("123");
    // console.log(id===anotherid)  //false



// Js is a dynamically typed language, which means that we don't have to specify the data type of a variable when we declare it. The data type is determined automatically based on the value assigned to the variable.

// Reference type Data Types or Non Primitive Data Types:
        // 1. Object 2. Array 3. Functions

const pronouns =[ "he", "she", "it", "they", "we", "you", "I"] //Array created using array literal syntax

let name = {      //Object created using object literal syntax
    name: "Rijal",
    age : 22,
}
const afunction = function(){       //Function created using function expression syntax
    console.log("Greetings Mate!")
}

console.log(pronouns)   // displaying the data present in the pronouns array
console.log(name)     // displaying the data present in the object
console.log(afunction()) // displaying the result of the function call