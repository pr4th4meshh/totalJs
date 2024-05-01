console.log("Program Started..")
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
//string.padStart(16, "*") THIS ADDS SPECIAL CHARACTERS IN FRONT OF THE STRING, HERE 16 IS THE NUMBER OF SPECIAL CHARACTERS AND "*" IS THE CHARACTER TO BE ADDED
//OUTPUT OF padStart: *****Hello World
//string.padEnd(16, "*") VICE VERSA AS padStart()
//string.charAt(0) RETURNS CHARACTER AT THE SPECIFIED INDEX OUTPUT: H
//string.charCodeAt() RETURNS CHARACTER CODE OF THE CHAR SPECIFIED IN THE ARGUMENT

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

//YOU CAN ACCESS THE VALUES INSIDE AN OBJECT USING DOTS [.] OR STRING [""] eg: obj["lastName"]
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


// CALL STACK::::::::::::::::

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


// HOISTING:::::::::::::::

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

// TEMPORAL DEAD ZONE:
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
// const sayHi = function() { //* there is no compulsion to pass function name() {}
//* If the function has no name as above it is called as IIFE: Immediately Invoked Function Expression
//     console.log("Say Hi")
// }
// IT WILL THROW THE SAME ReferenceError

// THE SAME WAY IT WILL RETURN undefined IF USING THE var KEYWORD


// LOCAL SCOPE vs GLOBAL SCOPE::::::::::::
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


// HIGHER ORDER FUNCITONS::::::::::::;
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


// CLOSURES::::::::

// JavaScript variables can belong to the local or global scope.
// Global variables can be made local (private) with closures.

// NOTE:
// Variables created without a declaration keyword (var, let, or const) are always global, 
// even if they are created inside a function.