// Singleton Object: They are created using object literals and are used when we need to create only one instance of an object. They are useful for managing global state or providing a single point of access to certain functionality. They are created through constructor functions or classes and can be instantiated multiple times. They are useful for creating multiple instances of an object with similar properties and methods.

//Object literals

const mySym = Symbol("key1")

const jsUser ={     // This is a singleton object created using an object literal
    name: "John",
    age: 30,
    [mySym]: "key1",    ///Symbols are written in square brackets when used as property keys in an object literal.

    email: "john@example.com"
}
console.log(jsUser.age)  // Output: 30

//Another Method for accessing the properties of the onjects:
console.log(jsUser['email'])  // Output: john@example.com

console.log(jsUser[mySym])  // Output: key1

jsUser.email = "rijalbivek@gmail.com"
//Object.freeze(jsUser)  // This will prevent any further modifications to the jsUser object


jsUser.email = "bscbajb@"  // This will not change the email property of the jsUser object because it is frozen


console.log(jsUser['email'])  // Output: rijalbivek@gmail.com


//function Using........
jsUser.greet = function(){
    console.log("Hello coder! Como Estas?")
}
console.log(jsUser.greet())

jsUser.greeting = function(){
    console.log(`Como estas senor${jsUser.name}?`)  // This is a method added to the jsUser object that uses the name property of the object to greet the user.
}
console.log(jsUser.greeting())
