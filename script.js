// console.log("Program Started..")
// Cloned successfully..

//? JavaScript is a single threaded (does a single work at a time),
//? non-blocking, asyncronous concurrent language
//? It has a call stack, an event loop, a callback queue + other APIs
//? It uses heap for memory allocation of objects
//? Only a certain part of JS is async but the rest of JS is syncronous

//DATA TYPES IN JAVASCRIPT:
//TWO TYPES: PRIMITIVE AND NON-PRIMITIVE

//PRIMITIVE DATA TYPES:
//STRING
//NUMBER
//BOOLEAN
//UNDEFINED
//NULL
//BIGINT
//SYMBOL

//NUMBER:::::::::::::::
//TO KNOW A DATA-TYPE IN JAVASCRIPT YOU CAN USE [ typeof ]
//eg:
// console.log(typeof 7)
//OUTPUT: number

//IF WE ENTER PLUS(+) or MINUS(-) IN FRONT OF A STRING, eg: +"100" ITS TYPE WILL BE NUMBER
//NaN IS ALSO OF TYPE NUMBER

//IF WE ADD "" + 100 , THEN IT WILL BE CONVERTED INTO STRING, eg: "100"

//BOOLEAN::::::::::::::
//true = 1
//false = 0

//UNDEFINED:::::::::::::
// undefined IS OF TYPE undefined, eg: typeof undefined = undefined

//NULL::::::::::::::
// typeof null = object

//VARIABLES IN JAVASCRIPT:
// let , const, var

//VALUE OF let CAN BE CHANGED
//eg: let a = "I am A" ALSO a = "I am changed A",
//OUTPUT: console.log(a) = I am changed A

//VALUE OF const CANNOT BE CHANGED

//DIALOG BOXES:
//THERE ARE THREE TYPES OF DIALOG BOXES IN JAVASCRIPT::::
//alert("Your message goes here!") , OUTPUT OF ALERT IS undefined
//confirm("Your message goes here!") ,OUTPUT OF CONFIRM IS true ON OK AND false OR CANCEL
//promt("Your message goes here!") , OUTPUT OF PROPMT IS THE VALUE OF INPUT AND null ON CANCEL

//STRING METHODS:
//const string = "HelloWorld"
//string.length TO GET THE LENGTH OF STRING
//string.toUpperCase() TO CAPITALIZE EVERY CHARACTER OF THE STRING
//string.toLowerCase() TO LOWERCASE EVERY CHARACTER OF THE STRING

//const string = "         Hello world          "
//string.trim() REMOVES EMPTY OR UNWANTED SPACES FROM THE STRING
//string.trimStart()
//string.trimEnd()

//STRING METHODS WITH ARGUMENTS:
//string.includes("Hello") , OUTPUT: true OR false
//string.indexOf() THIS RETURNS THE INDEX OF THE ELEMENT INSERTED INSIDE THE STRING
//string.replace("Hello", "Hey") IT TAKES TWO ARGUMENTS, NO REPLACEMENT IF NO 1ST ARG
//string.replaceAll() IT ALSO TAKES TWO ARGUMENTS AND REPLACES ALL THE CHARACTERS OF WORDS
//string.concat(", " , someAnotherStringToConcat)

// const string = "Hello World"
//string.padStart(16, "*") THIS ADDS SPECIAL CHARACTERS IN FRONT OF THE STRING,
// HERE ABOVE 16 IS THE NUMBER OF SPECIAL CHARACTERS AND "*" IS THE CHARACTER TO BE ADDED
//OUTPUT OF padStart: *****Hello World
//string.padEnd(16, "*") VICE VERSA AS padStart()
//string.charAt(0) RETURNS CHARACTER AT THE SPECIFIED INDEX OUTPUT: H
//string.charCodeAt() RETURNS CHARACTER CODE OF THE CHAR SPECIFIED IN THE ARGUMENT

//JSON.stringify() to convert an object into a string

//MATH OPERATORS IN JAVASCRIPT:::::::::::::
// 1) ADDITION OPERATOR +
// 2) SUBTRACTION OPERATOR -
// 3) MULTIPLICATION OPERATOR *
// 4) DIVISION OPERATOR /
// 5) REMAINDER or MODULUS OPERATOR %
// 6) EXPONENTIATION OPERATOR ** THIS IS KIND OF SQRT or CUBE

//Math methods:::::::::::::::
//Math.sqrt(16) GIVES THE SQUARE ROOT OF THE ARGUMENT , OUTPUT: 4
//Math.pow(2,6) RETURNS THE POWER OF THE GIVEN ARGUMENTS [2 times 6] || 2*2*2*2*2*2 , OUTPUT: 64
//Math.floor(2.9999) && Math.floor(-2.5) CONVERTS DECIMAL NUMBER BACKWARDS , OUTPUT: 2 && -3
//Math.ceil(2.2) CONVERTS DECIMAL NUMBER UPWARDS , OUTPUT: 3
//Math.round(2.3) ROUND FIGURES THE NUMBER UPWARDS IF > 5 OR BACKWARDS IF < 5
//Math.random() RETURNS ANY RANDOM NUMBER IN BETWEEN 0 and 1
//Math.random() * 20 RETURNS ANY RANDOM NUMBER BETWEEN 0 and 20

//TRUTHY AND FALSY VALUES
//CHECKING NUMBERS: Boolean(1) , OUTPUT: true || Boolean(-0) , OUTPUT: false bcs 0 & NaN is falsy val
//CHECKING STRING: Boolean("") , OUTPUT: false BECAUSE EMPTY STRING, BOOLEAN AND UNDEFINED IS FALSE
//TRUTHY AND FALSY CAN BE CHANGED BY ADDING EXCLAMATION [ ! ] IN THE START

//COMPARISION OPERATORS::::::::
// == EQUAL TO (EQUALITY)
// === EQUAL VALUE AND EQUAL TYPE
// != NOT EQUAL
// !== NOT EQUAL AND NO EQUAL TYPE
// > GREATER THAN
// < LESS THAN
// >= GREATER THAN EQUAL TO
// <= LESS THAN EQUAL TO

//LOGICAL OPERATORS:::::::
// && AND OPERATOR
// || OR OPERATOR
// ! NOT OPERATOR

// 0 && 2 , OUTPUT: 0
// 0 || 2 , OUTPUT: 2
// "" && "Hello" , OUTPUT: ""    ...[EMPTY STRING]
// "" || "Hello" , OUTPUT: "Hello"

//DESICION MAKING USING if else STATEMENT:::::::::
// NESTED if else STATEMENTS
// if("condition"){

// }else {
//     if("condition") {

//     }else {

//     }
// }

//SWITCH CASE STATEMENT::::::::::::
// const dayNumber = 0 //     BASE CASE
// switch (dayNumber) {
//   case 0:
//     console.log("It's sunday today!")
//     break
//   case 1:
//     console.log("It's monday today!")
//     break
//   case 2:
//     console.log("It's tuesday today!")
//   default:
//     console.log("Enter a valid dayNumber!")
// }
//IN THE ABOVE CODE case CAN BE CALLED AS if AND default CAN BE CALLED AS else

//TERNARY OPERATOR:::::::::::::::
// "condition is true" ? [if] "YOUR CONDITION IS TRUE" : [else] "YOUR CONDITION IS FALSE"

//CONDITIONAL TERNARY OPERATOR
// let age = 30
// const result =
//   age === 10
//     ? "Prath is 10 y/o"
//     : age === 20
//     ? "Prath is 20 y/o"
//     : "No valid age :("

//OBJECTS IN JAVASCRIPT::::::::
// const obj = {
//     firstName: "Prathamesh",
//     lastName: "Asolkar",
//     age: "20"
// } THIS IS AN OBJECT

// YOU CAN ACCESS THE VALUES INSIDE AN OBJECT USING DOTS [.] OR STRING [""] eg: obj["lastName"]
// YOU CAN UPDATE/CHANGE THE VALUES INSIDE AN OBJECT LIKE THIS: obj.age = "21" INSIDE THE CONSOLE
// BUT IT ONLY CHANGES INSIDE THE MEMORY OF YOUR CONSOLE
// THE SAME WAY YOU CAN ALSO CREATE AN OBJECT INSIDE THE MEMORY OF CONSOLE
// YOU CAN CHANGE OBJECTS DECLARED WITH const
// YOU CAN DELETE ANY VALUE INSIDE OF OBJECT WITH delete.obj.firstName

// YOU CAN ALSO NEST OBJECTS INSIDE EACH OTHER LIKE:
// const obj = {
//     name: {
//         firstName: "Prathamesh",
//         lastName: "Asolkar"
//     },
//     age: 20
// }

// TO AVOID ANY UPDATE/DELETE OF VALUES INSIDE OBJECT WE CAN USE: Object.seal(obj)
// STRICTER VERSION OF Object.seal(obj) is Object.freeze(obj)
// TO CHECK ANY VALUE INSIDE OF OBJECT WE CAN USE A STRING OF THAT VALUE LIKE:
// "mobileNumber" in obj , OUTPUT: false
// "age" in obj , OUTPUT: true

//ARRAYS IN JAVASCRIPT::::::::::::::::
// const arrOfFruits = ["apple", "orange", "banana", "watermelon"]

// typeof arrOfFruits : object ; BECAUSE ARRAYS BEHIND THE SCENES ARE OBJECTS
// BUT IF YOU TRY TO EXECUTE A FUNCTION LIKE concat, THEN typeof arrOfFruits : function
// TO ACCESS A PARTICULAR VALUE/INDEX INSIDE OF ARRAT: arrOfFruits[1] , OUTPUT: "orange"
// DATA TYPES IN ARRAY: STRING, NUMBER, NULL, UNDEFINED, BOOLEAN, OBJECT
// ADDING ELEMENTS INSIDE ARRAY: arrOfFruits[4] = "strawberry" , HERE 4 REFERS TO THE INDEX
// TO ADD ELEMENTS DYNAMICALLY: arrOfFruits[arrOfFruits.length] ,
// HERE ABOVE arrOfFruits.length IS THE INDEX OF ARR WHICH IS UPDATED CONTINUOSLY
// BETTER METHOD TO ADD ELEMENTS: arrOfFruits.push("blueberry")
// WE CAN ADD MULTIPLE VALUES WHILE USING arrOfFruits.push("asd","asdf","asdfg")
// TO REMOVE ELEMENTS FROM ARRAY: arrOfFruits.pop() THIS REMOVES LAST ELEMENT FROM THE ARRAY

// ARRAY METHODS::::::::::::::::::::
// const arrOfFruits = ["apple", "orange", "banana", "watermelon"]
// Array.at(2) , HERE 2 IS THE INDEX , OUTPUT: "banana"
// Array.pop() , REMOVES LAST ELEMENT FROM THE ARRAY
// Array.push() , ADDS NEW ELEMENT TO THE END OF THE ARRAY
// Array.shift() , REMOVES FIRST ELEMENT FROM THE ARRAY AND SHIFTS REMAINING ELEMENTS TO LEFT
// Array.unshift() , ADDS NEW ELEMENT TO THE START OF THE ARRAY
// Array.concat() , CONCATINATES TWO DIFFERENT ARRAYS
// Array.flat() , FLATTENS THE ARRAY BY REMOVING USELESS CHARACTERS OR SPACES FROM THE ARRAY
// Array.indexOf("Apple") , RETURNS THE INDEX OF APPLE i.e. 0
// Array.includes("Apple") , RETURNS true OR false IF THE ELEMENT EXISTS OR NOT
// Array.sort() , THIS SORTS THE ARRAY ALPHABETICALLY OR NUMERICALLY [ABCD or 1234]
// Array.from() , Creates an array from an array-like object.
// Array.slice(2) , SLICES THE ELEMENTS FROM AN ARRAY FROM THE GIVEN INDEX eg: 2 ,
// END VALUE IN slice IS OPTIONAL

// Array.splice() , SAME AS slice METHOD AND RETURNS A BRAND NEW ARRAY WITH UPDATED ELEMENTS
// arrOfFruits.splice(1, 2, "dates", "avocado")
// console.log(arrOfFruits)
// OUTPUT: ["apple", "dates", "avocado", "watermelon"]

// NESTED ARRAYS ARE ALSO CALLED AS MULTI-DIMENSIONAL ARRAY eg: ["Prathamesh", [age: {"20"}]]

// SHALLOW COPY vs DEEP COPY:::::::::::::::::::

// eg. of SHALLOW COPY:
// const arrOfFruits = ["apple", "orange", "banana", "watermelon"]
// const newArrOfFruits = arrOfFruits
// newArrOfFruits.push("dates", "blueberry")
// newArrOfFruits[0] = "notAnApple"

// IF WE SHALLOW COPY IN THE ABOVE METHOD THEN THE NEW OBJECT HAS THE MEMORY ADDRESS OF THE OLD OBJECT
// BETTER WAY TO SHALLOW COPY AN OBJECT IS BY USING SPREAD OPERATOR
// const newArrOfFruitss = [...arrOfFruits]

// THERE ARE OTHER WAYS AS WELL LIKE: Object.assign({}, arrOfFruits)
// SAME METHOD CAN BE USED IN THE CASE OF ARRAYS

//COMPOUND OPERATORS::::::::::::
// += ADDITION ASSIGNMENT OPERATOR
// -+ SUBTRACTION ASSIGNMENT OPERATOR
// %= REMAINDER ASSIGNMENT OPERATOR
// *= MULTIPLICATION ASSIGNMENT OPERATOR
// /= DIVISION ASSIGNMENT OPERATOR
// **= EXPONENTIATION ASSIGNMENT OPERATOR

// LOOPS IN JAVASCRIPT:::::::::::::::::::

// WHILE LOOP:
// YOU CANNOT DECLARE VARIABLES INSIDE WHILE LOOP LIKE YOU DO INSIDE FOR LOOP
// DECLARE VARIABLES OUTSIDE THE WHILE LOOP LIKE BELOW,
// let num = 0;
// while(num < 10) {
//     console.log("Array Printed")
//     num++
// }

// FOR LOOP:
// YOU CAN DECLARE VARIABLES INSIDE FOR LOOP
// let friends = ["Rishabh", "Ajit", "Mukesh", "Vinay"];
// let nums = 10
// for (let i = 0; i < friends.length; i++) {
//   console.log(`${friends[i]}`)
// }

// DO WHILE LOOP:
// YOU CANNOT DECLARE VARIABLES INSIDE WHILE LOOP LIKE YOU DO INSIDE FOR LOOP
// DECLARE VARIABLES OUTSIDE THE WHILE LOOP LIKE BELOW,
// let i = 10;
// do {
//     console.log(i)
//     i++
// } while (i < 5)

// FUNCTIONS IN JAVASCRIPT:::::::::::
// THE CODE BELOW IS CALLED AS FUNCTION DEFINITION ,
// function introduceMe() {
//     console.log("Hi, Im Prathamesh!")
//     console.log("Im a web developer")
// }

// THE CODE BELOW IN CALLED AS FUNCTION CALL
// const returnValue = introduceMe()

// FUNCTION PARAMETERS:
// function introduceMe(username) {
//     console.log(`My name is ${username}!`)
// }

// introduceMe("Prathamesh")

// DEFAULT FUNCTION PARAMETERS:
// function introduceMe(username) {
// if(!usename) {
//     username = "Prathamesh"
// }
//     console.log(`My name is ${username}!`)
// }

// introduceMe()

// OR
// function introduceMe(username) {
//     console.log(`My name is ${username || "Prathamesh"}!`)
// }

// introduceMe()

// FUNCTIONS WITH RETURN VALUE
// function addTwoNumbers(a, b) {
//   return a + b
// }

// const result = addTwoNumbers(5, 6)

// EXECUTION CONTEXT::::::::::::
// JavaScript is a single-threaded interpreted language.
// Every browser has its own JavaScript engine.
// Google Chrome has the V8 engine, Mozilla Firefox has SpiderMonkey, and so on.
// They all are used for the same goal, because the browsers cannot directly understand JavaScript code.

// WHAT IS EXECUTION CONTEXT?
// When the JavaScript engine scans a script file,
// it makes an environment called the Execution Context that handles the entire transformation
// and execution of the code.

// During the context runtime, the parser parses the source code
// and allocates memory for the variables and functions.
// The source code is generated and gets executed.

// There are two types of execution contexts: global and function.
// The global execution context is created when a JavaScript script first starts to run,
// and it represents the global scope in JavaScript.
// A function execution context is created whenever a function is called,
// representing the function's local scope.

// Phases of the JavaScript Execution Context::::::::::
// There are two phases of JavaScript execution context:

// 1) Creation phase: In this phase, the JavaScript engine creates the execution context
// and sets up the script's environment. It determines the values of variables and
// functions and sets up the scope chain for the execution context.

// 2) Execution phase: In this phase, the JavaScript engine executes the code in the execution context.
// It processes any statements or expressions in the script and evaluates any function calls.

// Everything in JS happens inside this execution context.
// It is divided into two components. One is memory and the other is code.
// It is important to remember that these phases and components are applicable to both:
// global and functional execution contexts.

// EXAMPLE:
// var n = 5;

// function square(n) {
//   var ans = n * n;
//   return ans;
// }

// var square1 = square(n);
// var square2 = square(8);

// console.log(square1)
// console.log(square2)

// At the very beginning, the JavaScript engine executes the entire source code,
// creates a global execution context, and then does the following things:

// 1) Creates a global object that is window in the browser and global in NodeJs.
// 2) Sets up a memory for storing variables and functions.
// 3) Stores the variables with values as undefined and function references.

// THIS IS CALLED THE CREATION PHASE.

// After this creation phase, the execution context will move to the code execution phase.

// Now, in this phase, it starts going through the entire code line by line from top to bottom.
// As soon as it encounters n = 5, it assigns the value 5 to 'n' in memory.
// Until now, the value of 'n' was undefined by default.

// Then we get to the 'square' function. As the function has been allocated in memory,
// it directly jumps into the line var square1 = square(n);
// square() will be invoked and JavaScript once again will create a new function execution context.

// Once the calculation is done, it assigns the value of square in the 'ans' variable that was undefined before.
// The function will return the value, and the function execution context will be destroyed.

// The returned value from square() will be assigned on square1. This happens for square2 also.
// Once the entire code execution is done completely, the global context will look like this and
// it will be destroyed also.

// ARTICLE WITH EXAMPLE: https://www.freecodecamp.org/news/how-javascript-works-behind-the-scene-javascript-execution-context/

//* CALL STACK::::::::::::::::

// What is the Call Stack?

// To keep the track of all the contexts, including global and functional,
// the JavaScript engine uses a call stack.
// A call stack is also known as an 'Execution Context Stack', 'Runtime Stack', or 'Machine Stack'.

// It uses the LIFO principle (Last-In-First-Out).
// When the engine first starts executing the script,
// it creates a global context and pushes it on the stack.
// Whenever a function is invoked, similarly, the JS engine creates a function stack context
// for the function and pushes it to the top of the call stack and starts executing it.

// When execution of the current function is complete,
// then the JavaScript engine will automatically remove the context from the call stack and
// it goes back to its parent.

// EXAMPLE:
// function funcA(m,n) {
//     return m * n;
// }

// function funcB(m,n) {
//     return funcA(m,n);
// }

// ? This is called as function declaration ALSO function definition
// function getResult(num1, num2) {
//     return funcB(num1, num2)
// }

// var res = getResult(5,6);

// console.log(res); // 30

// First it allocates memory for funcA, funcB, the getResult function,
// and the res variable. Then it invokes getResult(), which will be pushed on the call stack.

// Then getResult() will call funcB(). At this point, funcB's context will be stored on the top of the stack.
// Then it will start executing and call another function funcA(). Similarly, funcA's context will be pushed.

// Once execution of each function is done, it will be removed from the call stack. [LIFO]

//* HOISTING:::::::::::::::

// What is Hoisting in JavaScript?

// Hoisting is the default behavior in JavaScript where declarations of variables and
// functions are moved to the top of their respective scopes during the compilation phase.
// This ensures that regardless of where variables and functions are declared within a scope,
// they are accessible throughout that scope.

// Features of Hoisting:

// Only declarations are hoisted, initializations are not.
// Allows calling functions before their declarations.
// All variable and function declarations are processed before any code execution.
// Undeclared variables are implicitly created as global variables when assigned a value.

//* TEMPORAL DEAD ZONE:
// A temporal dead zone (TDZ) is the block where a variable is inaccessible until
// the moment the computer initializes it with a value.
// &&
// The Temporal Dead Zone (TDZ) is a concept in JavaScript that relates to the hoisting of the variables and
// the visibility of variables declared with let and const .

// THE CODE THROWS ReferenceError WHEN USING let AND const
// THE CODE RETURNS undefined WHEN USING var
// THE VARIABLE GOES IN Temporal Dead Zone (TDZ) WHEN USING let AND const
// THE VARIALBE GOES IN GLOBAL STATE WHEN USING var

// WHEN USING function THE CODE WILL GET EXECUTED EVEN IF IT'S CALLED BEFORE DECLARATION BECAUSE,
// THE FUNCTION GETS STORED INSIDE THE MEMORY DURING THE Global Execution Phase AND
// THEN GETS EXECUTED WHILE THE Function Execution Phase

// IF YOU TRY TO EXECUTE A FUCTION BEFORE DECLARATION BY USING THE const KEYWORD LIKE:

// ? This is called as function expression ALSO function definition
// const sayHi = function() { //? there is no compulsion to pass function name() {}
//? If the function has no name as above it is called as IIFE: Immediately Invoked Function Expression
//? An IIFE is a JavaScript function that runs as soon as it is defined. Hence, it doesnt need a name to be defined
//     console.log("Say Hi")
// }
// IT WILL THROW THE SAME ReferenceError

// THE SAME WAY IT WILL RETURN undefined IF USING THE var KEYWORD

//* LOCAL SCOPE vs GLOBAL SCOPE::::::::::::
// WHEN YOU DECLARE A VARIABLE INSIDE A FUNCTION LIKE ,
// function add() {
//     const a = 10
//     const b = 5
//     console.log(a + b)
// }

// THE SCOPE OF THE VARIABLES ARE LOCAL AS THEY ARE WITHIN THE function AND CANNOT BE USED OUTSIDE THE FUNCTION

// IF YOU DECLARE VARIABLES OUTSIDE THE FUNCTION THEN THE SCOPE OF THE VARIABLES ARE GLOBAL,
// AND THEY CAN BE USED ANYWHERE IN THE COMPONENT

// GLOBAL SCOPE IS DIVIDED INTO TWO PARTS:
// 1) WINDOW OBJECT 2) SCRIPT SCOPE

// let AND const are the examples of SCRIPT SCOPE
// var is the example of GLOBAL SCOPE

// LEXICAL SCOPE:
// WHEN SCOPES ARE NESTED INSIDE EACH OTHER , for e.g.:
// GLOBAL SCOPE INSIDE A LOCAL SCOPE AND LOCAL SCOPE INSIDE A NESTED FUNTION, IT IS CALLED AS LEXICAL SCOPE.

// BLOCK SCOPE:
// BLOCK SCOPES ARE DECLARED INSIDE CURLY BRACES { }
// let AND const ARE BLOCK SCOPED VARIABLES BECAUSE IT GOES IN // * TDZ
// var ISN'T A BLOCK SCOPED VARIABLE BECAUSE IT IS A GLOBAL STATE VARIABLE

//* HIGHER ORDER FUNCITONS::::::::::::;
// In JavaScript, a higher-order function is a function that can accept other functions as arguments,
// return functions, or both. They enable abstraction, composition, and
// the creation of more flexible and reusable code.

// function a(b) {
//     console.log(b)
//     b()
// }

// function sayHi() {
//     console.log("I am say hi")
// }

// a(sayHi)

// IN THE ABOVE EXAMPLE, fuction a() IS A HIGHER-ORDER FUNCTION and
// THE PARAMETER PASSED IN function a(b) IS A CALLBACK FUNCTION

//* CLOSURES::::::::

// JavaScript variables can belong to the local or global scope.
// Global variables can be made local (private) with closures.

// NOTE:
// Variables created without a declaration keyword (var, let, or const) are always global,
// even if they are created inside a function.

// A closure is the combination of a function bundled together (enclosed) with references
// to its surrounding state (the lexical environment). In other words, a closure gives you access to
// an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created,
// at function creation time.

// function outerFunction() {
//     const name = "Prathamesh";
//     function innerFunction() {
//       console.log(name);
//     }
//     return innerFunction;
//   }

//   const myFunc = outerFunction();
//   myFunc();

//* setTimeout() and setInterval()
// setTimeout() ALLOWS US TO RUN A function AFTER A GIVEN INTERVAL OF TIME
// let a = setTimeout(function() {
//     alert("Set time out function!")
// }, 2000)

// clearTimeout(a) // THIS PREVENTS FROM  RUNNING THE setTimeout FUNCTION

// ANOTHER WAY TO USE setTimout
// const sum = (a,b) => {
//     console.log("Im running hehe, ",(a + b))
//     a+b;
// }

// setTimeout(sum, 2000, 2, 2)

// setInterval() as a similiar syntax like setTimeout()
// setInterval(() => {
//     alert("Set Interval function!")
// }, 2000);

// setInterval() keeps running the given function inside it continously after the given interval of time

//* EVENT LOOP AND CALLBACK QUEUE::::::::

//* EVENT LOOP:
// IT IS THE MECHANISM THAT ENALBES ASYNC JAVASCRIPT CODE TO BE EXECUTED AFTER THE CALL STACK IS CLEAR
// EVENT LOOP ISNT A PART OF JS ITSELF BUT OF THE ENVIRONMENT WHERE JS IS RUNNING
//? INITIAL EXECUTION: SYNCRONOUS CODE IS EXECUTED ON THE CALL STACK
//? WEB APIs: WHEN AN ASYNC OPERATION IS ENCOUNTERED like (setTimeout), it is sent to WEB APIs
//? WEB APIs is a part of the browser
//? CALLBACK QUEUE: ONCE ASYNC OPERATION IS COMPLETED, THE CALLBACK FUNCTION IS MOVED TO THE CALLBACK QUEUE

//? CONSTANTLY CHECKS IF THE CALL STACK IS EMPTY. ONCE THE CALL STACK IS EMPTY.
//? ONCE THE CALL STACK IS CLEAR, THE EVENT LOOP MOVES THE FIRST ITEM FROM THE CALLBACK QUEUE TO THE CALL STACK

//* CALLBACK QUEUE:
// HOLDS THE CALLBACKS FROM ASYNC OPERATIONS THAT ARE WAITING TO BE EXECUTED
// IT FOLLOWS A FIFO PRINCIPLE
// THE CALLBACKS ARE ONLY MOVED TO THE CALLSTACK WHEN IT IS EMPTY

//? THERE ARE TWO TYPES OF CALLBACK QUEUE:
//? 1) MICRO-TASK QUEUE [High Priority Queue]
// IF SOME FUNCTION IS GIVEN FOR EXECUTION LIKE: Promise. THEN IT IS SENT TO MICRO TASK QUEUE
//? 2) TASK QUEUE / CALLBACK QUEUE [Low Priority Queue]

//* METHODS IN JS::::::
// A METHOD EXAMPLE CAN BE THE INBUILT Math FUNCTION PROVIDED BY JS
// Math HAS MANY METHODS like, (Math.floor(), Math.random, Math.sqrt() )

// EG OF A SELF CREATED METHOD:
// const MathMethod = {
//     add: function(a,b) {
//         return a+b;
//     },
//     subtract: function(a,b) {
//         return a-b
//     },
//     sqr: function(a) {
//         return a*a;
//     }
// }

// console.log(MathMethod.add(10, 10))
// console.log(MathMethod.sqr(26))

//* ARROW FUNCTIONS:::::::::
// const arrowFunction = (a,b) => {
//     return a+b;
// }

//* FOR OF LOOP::::
// const arrOfFruits = ["apple", "orange", "banana", "watermelon"]
// for(const fruit of arrOfFruits) {
//     console.log(fruit)
// }

//* FOR IN LOOP::::
// YOU CANNOT ACCESS AN OBJECT AND IT'S VALUE BECAUSE IT IS iteralble USING FOR OF LOOP THAT'S WHY WE USE FOR IN LOOP
//? FOR LOOP IS USED FOR LOOPING INSIDE AN ARRAY AND for in LOOP IS USED FOR LOOPING INSIDE AN OBJECT
// const person = {
//     firstName: "Prathamesh",
//     lastName: "Asolkar",
//     age: 20
// }

// for(key in person) {
//     console.log(key, ":", person[key])
// }

//* FOR EACH LOOP::::
// IT IS AN ARRAY METHOD
// You should use a forEach loop when you want to do something for each element of an array,
//  array you don’t want to edit. If you want to create a new array to perform a specific task then you would use the map method.
// const arrOfFruits = ["apple", "orange", "banana", "watermelon"]
// const arr =  arrOfFruits.forEach((fruit) => {
//     console.log(fruit) // OUTPUT: apple, orange, banana, watermelon
// })

// console.log("***************")

// const lengthOfArr = arrOfFruits.map((fruit) => {
//   return fruit.length
// })

// console.log(lengthOfArr) // OUTPUT: [5, 6, 6, 10]

//* HIGHER ORDER ARRAY METHODS::::::::
//? map() ::::::
// CREATES A NEW ARRAY BY PERFORMING SOME OPERATIONS ON EACH ARRAY ELEMENT
// const arrOfFruits = ["apple", "orange", "banana", "watermelon"]
// const lengthOfArr = arrOfFruits.map((fruit, index, array) => {
//     console.log(fruit, index, array)
//   return fruit.length
// })

// console.log(lengthOfArr)
// OUTPUT
// apple 0 (4) ['apple', 'orange', 'banana', 'watermelon']
// orange 1 (4) ['apple', 'orange', 'banana', 'watermelon']
// banana 2 (4) ['apple', 'orange', 'banana', 'watermelon']
// watermelon 3 (4) ['apple', 'orange', 'banana', 'watermelon']

//? filter() :::::::::
// const arrOfFruits = ["apple", "orange", "banana", "watermelon", "ananas"]
// const filteredArray = arrOfFruits.filter((fruit) => {
//     return fruit.startsWith("a")
// })

// console.log(filteredArray)

//? reduce() :::::::::
// reduce() REDUCES AN ARRAY TO A SINGLE VALUE i.e THE SUM OF THE ARRAY AND THE ARGS PASSED WITHIN IT
const arrOfNumbers = [0, 1, 2, 3, 4, 5, 6]
const newArr = arrOfNumbers.reduce((a, b) => {
  return a + b
})

const arr = newArr
console.log(arr)

//* SOME AND EVERY ARRAY METHOD:::::
//? some() :::::::
// CHECKS IF ANY VALUE EVEN ONE IS TRUE AS PER THE GIVEN ARGUMENT AND RETURNS true OR false
// const ages = [10, 16, 18, 23, 25]
// const isAdult = ages.some((age) => {
//     return age>=18
// })
// console.log(isAdult)

//? every() ::::::::
// CHECKS IF EVERY VALUE INSIDE THE ARRAY IS THE SAME AS GIVEN IN THE ARGUMENT
// const ages = [10, 16, 18, 23, 25]
// const whetherAllAreAdult = ages.every((age) => {
//   return age >= 18
// })

// console.log(whetherAllAreAdult)

//* ARGUMENTS and PARAMETERS
// function sum(a, b) { //? HERE a AND b ARE PARAMETERS
//   return a + b
// }
//  console.log(10, 10) //? HERE a AND b ARE ARGUMENTS

//* DESTRUCTURING, SPREAD & REST OPERATOR:::::
// DESTUCTURING IS USED TO UNPACK VALUES FROM AN ARRAY OR PROPERTIES FROM AN OBJECT INTO DISTINCT VARIABLES
// EG of DESTRUCTURING:
// let {a ,b} = {a: 2, b: 2}
// console.log(a+b)

//? SPREAD OPR:
// const arr1 = [0,1,2,3]
// const arr2 = [4,5,6,7]
// const joinedBySpreadOpr = [...arr1, ...arr2]

//? REST OPR:
// const arrOfNumbers = [3, 5, 6, 0, 8]
// let [a, b, c, ...rest] = arrOfNumbers
// console.log(a, b, c, rest)

//* BOM AND DOM
//* BOM: Browser Object Model:
// THE BOM REPRESENTS ADDITIONAL OBJECTS PROVIDED BY THE BROWSER FOR WORKING WITH EVERYTHING EXCEPT THE DOCUMENT
// THE FUNCTIONS alert/confirm/prompt are also a part of BOM
// location.href = "https://amazon.in" //? this is an example of BOM

//* DOM: Document Object Model:
// DOM REPRESENTS THE PAGE CONTENT AS HTML

//? EG:
// document.body // This returns page body as a JS object
// document.body.style.background = "red" // This changes the backgroundColor of the window to red

//* BROWSER EVENTS::::::::::
// AN EVENT IS AN INDICATION THAT SOMETHING HAS HAPPENED
// ALL THE DOM NODES GENERATE SUCH SIGNALS

//? SOME IMPORTANT DOM EVENTS ARE:

//? MOUSE EVENTS: click, context menu(right click), mouseover/mouseout, mouseup/mousedown, etc.
//? KEYBOARD EVENTS: keydown, keyup, enter, etc.
//? FORM EVENTS: submit, focus, etc.
//? DOCUMENT EVENTS: DOMContentLoaded

//? EXAMPLES ON index.html
// const input = document.querySelector("input")
// input.addEventListener('keypress', (e) => {
//     console.log(e.target.value)
// })

//* EVENT PROPAGATION::::::::
// EVENT PROPAGATION MAINLY HAS 3 PARTS AS FOLLOWS:
//* EVENT BUBBLING, EVENT CAPTURING AND EVENT DELEGATION::::::

//? EVENT BUBBLING:
// EVENTS THAT DO NOT BUBBLE: focus, blur

// Event Bubbling is a concept in the DOM.
// It happens when an element[button, span, div] receives an event, and that event bubbles up
// to its parent and ancestor elements in the DOM tree until it gets to the root element[body].

// To prevent event bubbling, you use the stopPropagation() method of the event object:
// body.addEventListener('click', () => {
//     console.log("body was clicked")
//   })

//   div.addEventListener('click', () => {
//     console.log("div was clicked")
//   })

//   span.addEventListener('click', () => {
//     console.log("span was clicked")
//   })

//   button.addEventListener('click', (event) => {
//     //? event.stopPropagation()
//     console.log("button was clicked")
//   })

//? EVENT CAPTURING / TRICKLING:
// Event capturing occurs when a nested element gets clicked.
// The click event of its parent elements must be triggered before the click of the nested element.
// This phase trickles down from the top of the DOM tree to the target element.
// You can capture an event first from TOP to BOTTOM is by adding: { capture: true } after the function call as below:

// body.addEventListener('click', () => {
//     console.log("body was clicked")
//   }, {
//     capture: true,
//   })

//   div.addEventListener('click', () => {
//     console.log("div was clicked")
//   }, {
//     capture: true,
//   })

//   span.addEventListener('click', () => {
//     console.log("span was clicked")
//   }, {
//     capture: true,
//   })

//   button.addEventListener('click', (event) => {
//     //? event.stopPropagation()
//     console.log("button was clicked")
//   })

//? EVENT DELEGATION:
// Event delegation is a technique in JavaScript where we delegate the responsibility of
// handling an event to a parent element. By doing so, we avoid attaching multiple event listeners to
// individual elements, especially when dealing with a large number of similar elements, such as a list or a table.

// EXAMPLE:
{
  /* <ul id="myList">
  <li>Item 1</li>
  <li>Item 2</li>
  <li>Item 3</li>
</ul> */
}

// Instead of adding an event listener to each <li> element, we'll add a single event listener to the parent <ul> element.

// document.getElementById('myList').addEventListener('click', function(e) {
//   console.log(`You clicked on item: ${e.target.innerHTML}`);
// });

// Benefits of Event Delegation:
// 1) Performance Improvement
// 2) Dynamic Elements
// 3) Code Simplification

//* LOCAL STORAGE::::::
// localStorage() IS A WEB STORAGE OBJECT WHICH ARE NOT SENT TO THE SERVER WITH EACH REQUEST
// THE DATA STORED INSIDE OF localStorage SURVIVES A FULL PAGE REFESH AND EVEN A FULL BROWSER RESTART

//? METHODS PROVIDED BY localStorage:
// localStorage.setItem("name", "prathamesh") //this takes 2 args [key & value]
// localStorage.getItem("name")
// localStorage.removeItem("name")
// localStorage.clear()
// localStorage.length
// localStorage.key(index) // this requires the index of the key

// WE CAN ALSO SET AND GET VALUES LIKE AN OBJECT

//* COOKIES:::::::
//? What are Cookies?
// Cookies are data, stored in small text files, on your computer.

// When a web server has sent a web page to a browser, the connection is shut down, and the server forgets everything about the user.

// Cookies were invented to solve the problem "how to remember information about the user":

// When a user visits a web page, his/her name can be stored in a cookie.
// Next time the user visits the page, the cookie "remembers" his/her name.

//? Cookies are saved in name-value pairs like:
// username = John Doe

//? You can create cookies in JavaScript like this:
// document.cookie = "username=John Doe";

//? You can also add an expiry date (in UTC time). By default, the cookie is deleted when the browser is closed:
// document.cookie = "username=John Doe; expires=Thu, 18 Dec 2013 12:00:00 UTC";

//? Read a Cookie with JavaScript
// With JavaScript, cookies can be read like this:

// let x = document.cookie;
// document.cookie will return all cookies in one string much like: cookie1=value; cookie2=value; cookie3=value;

//* HTTP/HTTPS REQUESTS [ Hypertext Transfer Protocol Secure ]::::::::
// HTTP requests in JavaScript are a set of predefined methods used for interacting with data stored on servers.

// When building web applications — both frontend and full stack web apps — we often interact with data stored
// on different databases and servers. These servers may belong to third parties or may be created by the developers of a project.
// To interact with these servers, we can make use of different HTTP methods to request for data.
// We can create, read, update, and delete (or CRUD) data on servers using dedicated HTTP verbs like POST, GET, PUT/PATCH, and DELETE

// Responses sent back by the server are usually associated with status codes.
//? 100–199 denotes an informational response.
//? 200–299 denotes a successful request.
//? 300–399 denotes redirection.
//? 400–499 denotes client error.
//? 500–599 denotes server error.

//? How To Make an HTTP Request in JavaScript Using XMLHttpRequest (AJAX) :
// XMLHttpRequest is a built-in JavaScript object used for interacting with servers and loading content
// in web pages without reloading the browse

// XMLHttpRequest //* [GET]
// const xhr = new XMLHttpRequest();
// xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
// xhr.send();
// xhr.responseType = "json";
// xhr.onload = () => {
//   if (xhr.readyState == 4 && xhr.status == 200) {  //? 4 resembles DONE && 200 resembles SUCCESSFUL
//     const data = xhr.response;
//     console.log(data);
//   } else {
//     console.log(`Error: ${xhr.status}`);
//   }
// };

// XMLHttpRequest //* [POST]
// const xhr = new XMLHttpRequest();
// xhr.open("POST", "https://jsonplaceholder.typicode.com/posts");
// xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
// const body = JSON.stringify({
//   title: "Hello World",
//   body: "My POST request",
//   userId: 900,
// });
// xhr.onload = () => {
//   if (xhr.readyState == 4 && xhr.status == 201) {
//     console.log(JSON.parse(xhr.responseText));
//   } else {
//     console.log(`Error: ${xhr.status}`);
//   }
// };
// xhr.send(body);

// XMLHttpRequest //* [PATCH]
// const xhr = new XMLHttpRequest();
// xhr.open("PATCH", "https://jsonplaceholder.typicode.com/posts/101");
// xhr.setRequestHeader("Content-type", "application/json; charset=utf-8");
// const body = JSON.stringify({
//   body: "My PATCH request",
// });
// xhr.onload = () => {
//   var data = JSON.parse(xhr.responseText);
//   if (xhr.readyState == 4 && xhr.status == "200") {
//     console.log(data);
//   } else {
//     console.log(`Error: ${xhr.status}`);
//   }
// };
// xhr.send(body);

// XMLHttpRequest //* [DELETE]
// const xhr = new XMLHttpRequest();
// xhr.open("DELETE", "https://jsonplaceholder.typicode.com/posts/3");
// xhr.onload = function () {
//   var data = JSON.parse(xhr.responseText);
//   if (xhr.readyState == 4 && xhr.status == "200") {
//     console.log(data);
//   } else {
//     console.log(`Error: ${xhr.status}`);
//   }
// };
// xhr.send();

//* JSON [ JavaScript Object Notation ] ::::::::
// JSON syntax: //? DOUBLE QUOTES ON key
// const user = {
//     "userId": 213798,
//     "name": "Prathamesh",
//     "email": "prathamesh@gmail.com",
//     "age": 20
// }

//* SYNCRONOUS vs ASYNCRONOUS JavaScript:::::::::
//? Asynchronous is a non-blocking architecture, so the execution of one task isn’t dependent on another. Tasks can run simultaneously.
//? Synchronous is a blocking architecture, so the execution of each operation depends on completing the one before it.

//? Asynchronous programming enhances the user experience by decreasing the lag time between when a function
//? Synchronous programming, on the other hand, is advantageous for developers. Synchronous programming is much easier to code.

// As we know that JavaScript is a single threaded language which means it can run only one function at a time
// We also know that setTimeout() is a async function
// Our browser is multiple threaded so JavaScript hands over our async functions to the browser
// We can block the main thread by using alert("HEHE") which is a browser event and hence it will be called before the main event

//? A VERY GOOD WAY TO EXPLAIN SYNC AND ASYNC IS THE EVENT LOOP AND CALLBACK QUEUE AS STUDIED BEFORE

//* CALLBACK HELL / PYRAMID OF DOOM ::::::::
// Callback Hell is essentially nested callbacks stacked below one another forming a pyramid structure.
// Every callback depends/waits for the previous callback, thereby making a pyramid structure that affects the readability
// and maintainability of the code.

//* PROMISES::::::
// A PROMISE IS A PROMISE OF CODE EXECUTION, THE CODE EITHER EXECUTES OR FAILS.
// IN BOTH CASES THE SUBSCRIBER WILL BE NOTIFIED

//? SYNTAX OF PROMISE:
// let promise = new Promise((resolve, reject) => {
//     //? executor
// })

//? resolve AND reject ARE TWO CALLBACKS PROVIDED BY JS ITSELF, THEY ARE CALLED LIKE THIS:
//? resolve(value)
//? reject(error)

//? THE PROMISE OBJECT RETURNED BY THE NEW PROMISE RETURNS THESE PROPERTIES:
// state: INITIALLY PENDING THEN CHANGES TO EITHER "fulfilled" WHEN RESOLVE IS CALLED OR, "rejected" WHEN reject IS CALLED
// result: INITIALLY undefined THEN CHANGES THE VALUE IF RESOLVED [resolve(value)] OR ERROR IF REJECTED [reject(error)]

// WHATEVER YOU PASS INSIDE THE PROMISE WILL GET EXECUTED IN THE BACKGROUND

//? THERE ARE TWO MAJOR METHODS OF PROMISES: .then() && .catch()
// let p1 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     console.log("Timeout executed after 2s")
//     resolve("VALUE")
//   }, 2000)
// })

// p1.then((value) => {
//   console.log(value)
// })

//? REFER REPLIT: https://replit.com/@pr4th4meshh/JSPromises#script.js

//? PROMISE CHAINING:
// WE CAN CHAIN PROMISES AND MAKE THEM PASS THE RESOLVED VALUES TO ONE ANOTHER LIKE

// EXAMPLE:
// p.then(() => {
//     alert("result0")
// }).then(() => {
//     console.log("result1")
// }).then(() => {
//     console.log("result2")
// })

//? ATTACHING MULTIPLE PROMISE HANDLERS:
// WE CAN ATTACH MULTIPLE HANDLERS TO ONE PROMISE, THEY DONT PASS THE RESULT TO EACH OTHER LIKE CHAINING,
// INSTEAD THEY PROCESS IT INDEPENDENTLY

//EXAMPLE:
// p.then(handler1)
// p.then(handler2)
// p.then(handler3)

//* PROMISE API:::::::
//? 1) promise.all([promises]) : WAITS FOR ALL PROMISES TO GET RESOLVED AND RETURNS A NEW ARRAY OF ALL THOSE VALUES COMING FROM DIFF PROMISES
//? IF ANY ONE PROMISE FAILS TO EXECUTE THEN IT BECOMES AN ERROR AND ALL THE OTHER VALUES ARE IGNORED.

//? EXAMPLE:
// let p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Value 1")
//     }, 1000)
// })

// let p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Value 2")
//     }, 2000)
// })

// let p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Value 3")
//     }, 3000)
// })

// let promise_all = Promise.all([p1,p2,p3])
// promise_all.then((value) => {
//     console.log(value)
// })

//? 2) promise.allSettled([promises]) : WAITS FOR ALL PROMISES TO GET SETTLED AND THEN RETURNS THEIR RESULT AS AN ARRAY
//? THE ARRAY THAT IS BEING RETURNED HAS THE RETULTS OF OBJECT WITH THEIR status AND value

//? EXAMPLE:
// let p1 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Value 1")
//     }, 1000)
// })

// let p2 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         reject(new Error("Error!"))
//     }, 2000)
// })

// let p3 = new Promise((resolve, reject) => {
//     setTimeout(() => {
//         resolve("Value 3")
//     }, 3000)
// })

// let promise_all = Promise.allSettled([p1,p2,p3])
// promise_all.then((value) => {
//     console.log(value)
// })

//? promise.race([promises]) : WAITS FOR THE FIRST PROMISE TO SETTLE AND RETURNS THE result/error OF THAT PARTICULAR PROMISE.
//! NOTE: THIS RETURNS THE FIRST PROMISE THAT IS RESOLVED NOT THE FIRST PROMISE ON THE CODE FILE.
// let promise_all = Promise.race([p1,p2,p3])
// promise_all.then((value) => {
//     console.log(value)
// })

//? promise.any([promises]) : WAITS FOR THE FIRST PROMISE TO GET RESOLVED [& NOT REJECTED] AND ITS RESULT BECOMES THE OUTPUT
//? IF ALL PROMISES ARE REJECTED THEN IT THROWS AN AggregateError

//? promise.resolve(value) : MAKES A RESOLVED PROMISE WITH THE GIVEN VALUE
//? promise.reject(error) : MAKES A REJECTED PROMISE WITH THE GIVEN ERROR

//* ASYNC / AWAIT ::::::::::
// THERE IS A SPECIAL SYNTAX TO WORK WITH PROMISES IN JavaScript
// A FUNCTION CAN BE MADE ASYNCRONOUS USING THE async KEYWORD
// AN async FUNCTION ALWAYS RETURNS A PROMISE, OTHER VALUES ARE WRAPPED INSIDE A PROMISE AUTOMATICALLY

//? EXAMPLE:
// async function weatherApp() {
//   let mumbaiWeather = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("32deg")
//     }, 2000)
//   })
//   let delhiWeather = new Promise((resolve, reject) => {
//     setTimeout(() => {
//       resolve("35deg")
//     }, 5000)
//   })

//   console.log("Welcome to waather app")
//   console.log("Fetching Mumbai weather")
//   let mumbaiW = await mumbaiWeather
//   console.log("Fetched Mumbai weather:", mumbaiW)

//   console.log("Fetching Delhi weather")
//   let delhiW = await delhiWeather
//   console.log("Fetched Mumbai weather:", delhiW)
//   return [mumbaiW, delhiW]
// }

// let wApp = weatherApp()
// wApp.then((value) => {
//   console.log(value)
// })

//* ERROR HANDLING::::::
//? ERROR OBJECT: FOR ALL THE ERRORS THERE ARE TWO MAIN PROPERTIES: err.name & err.message ALSO err.stack

//? TRYCATCH BLOCK: THE TRY CATCH BLOCK ALLOWS YOU TO CATCH THE ERROR SO THAT THE SCRIPT DOES SOMETHING MEANINGFUL INSTEAD OF DYING
// FIRST THE CODE INSIDE OF try IS EXECUTED AND IF NO ERROR FOUND catch IS IGNORED AND THE SCRIPT RUNS AS USUAL
// try {
//     console.log(PRATHAMESH) //? this doesnt makes sense lol
// } catch (error) {
//     console.log(error)
// }

//? finally { } : WHEN WE USE finally AFTER THE trycatch BLOCK THE CODE STILL GETS EXECUTED AFTER AN ERROR IN try{} STATEMENT
// WHEN WE GET AN ERROR INSIDE THE catch{} STATEMENT, finally COMES TO USE

//* OPTIONAL CHAINING (?.) :::::::::::
// The optional chaining (?.) operator accesses an object's property or calls a function.
// If the object accessed or function called using this operator is undefined or null, the expression short circuits
// and evaluates to undefined instead of throwing an error.

//? EXAMPLE:
// const adventurer = {
//   name: 'Alice',
//   cat: {
//     name: 'Dinah',
//   },
// };

// const dogName = adventurer.dog?.name;
// console.log(dogName);
// Expected output: undefined

//* FETCH API::::::::::
// FETCH IS USED TO GET DATA OVER THE NETWORK
// let promise0 = fetch("https://yourjsonapi.com/endpoint", options) //? when no options are passed it is by default a GET request
//? options / { method: "POST", headers: { "Content-Type": "application/json" } }

//? WHEN USING REACT USE const [data, seData] = useState() TO USE THE DATA ANYWHERE IN THE APP
// let promise1 = fetch("https://fakestoreapi.com/products")
//   .then((response) => {
//     console.log(response.status) //? 200 because SUCCESSFUL
//     return response.json()
//   })
//   .then((response) => console.log("DATA:", response))
//   console.log("DATA:", promise1)

//? USING async / await:
// You use async/await with fetch API when you want to simplify asynchronous code and handle promises more elegantly.

// async function fetchData() {
//     try {
//       const response = await fetch('https://api.example.com/data');
//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }
//       const data = await response.json();
//       console.log(data);
//       return data;
//     } catch (error) {
//       console.error('There was a problem with the fetch operation:', error);
//       throw error;
//     }
//   }

//   // Call the function
//   fetchData()
//     .then(data => {
//       // Handle the fetched data
//     })
//     .catch(error => {
//       // Handle any errors
//     });

//* Object Oriented Programming [OOP] :::::::::
// Object-Oriented Programming is a programming style based on classes and objects.
// These group data (properties) and methods (actions) inside a box.
// OOP was developed to make code more flexible and easier to maintain.
// JavaScript is prototype-based procedural language, which means it supports both functional and object-oriented programming.

//? There are 4 main principles in OOP, and they are:

//? 1) Abstraction [Hiding functions]: Abstraction means hiding certain details that don't matter to the user and
//? only showing essential features or functions.

//? 2) Encapsulation [Combining entities]: Encapsulation means keeping properties and methods private inside a class,
//? so that they are not accessible from outside that class.

//? 3) Inheritance [Reusablility]: Inheritance makes all properties and methods available to a child class.
//?  This allows us to reuse common logic and to model real-world relationships.

//? 4) Polymorphism [Multiple Uses]: Polymorphism means having different and many forms.
// ?We can overwrite a method inherited from a parent class.

//* CLASSES AND OBJECTS:::::::::
// What are Classes and Objects in JavaScript?

//? What is a Class?
// You can think of a class like a blueprint of a house. A class is not a real world object but we can create objects from a class.
// It is like an template for an object.

// We can create classes using the class keyword which is reserved keyword in JavaScript.
// Classes can have their own properties and methods.

//? What is an Object?
// An object is an instance of a class. Now with the help of the house class we can construct a house.
// We can construct multiple houses with the help of same house class.

//? Example of Classes and Objects in Action:
// class Student {
// Data (Properties)
//   Name
//   Age
//   Standard

// Methods (Action)
//   study() {
// Study
//   }

//   Play() {
// Play
//   }

//   doHomeWork() {
// Do Home Work
//   }
// }

//? With the help of the above class, we can have multiple students or instances.

// Here's info for Student - 01:

// Student 1
// {
// Name = "John"
// Age = 15
// Standard = 9

// study(){
// Study
//  }

//  Play(){
// Play
//  }

//  doHomeWork(){
// Do Home Work
//  }

// }

//* What are Setters and Getters?
// These are simple methods of classes which will get and set a value.
// But from the outside they look like simple methods. Let's take a look at the below example.

// class User{
// 	constructor(name){
//     	this._name = name
//     }

//     get getName(){
//         console.log(this._name)
//     }

//     set setName(newName){
//         this._name = newName
//     }
// }

// const kedar = new User("kedar")
// kedar.setName = "John"
// kedar.getName

//* DATE METHODS:::::::::::
// let date = new Date()
// console.log(date.toDateString()) //? Wed May 15 2024
// console.log(date.toLocaleString()) //? 5/15/2024, 5:52:06 PM
// console.log(date.toLocaleDateString()) //? 5/15/2024
// console.log(date.toLocaleTimeString()) //? 5:52:06 PM
// console.log(date.toTimeString()) //? 17:52:06 GMT+0530 (India Standard Time)

//* END OF JavaScript NOTES.
