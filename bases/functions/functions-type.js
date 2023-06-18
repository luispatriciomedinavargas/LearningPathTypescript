"use strict";
(() => {
    //if the function has only 1 line of code you can also define like next 
    const addNumber = (a, b) => a + b;
    const greet = (name) => `Hi ${name}`;
    const saveTheWorld = () => `the world is save`;
    let myFunction;
    //let myFunction:Function, it will be cause error because is type as function not a number.
    // myFunction=10;
    // console.log(myFunction)
    //============================================
    //============================================
    //============================================
    //here you are assing the function addNumber to myfunction;
    //if you want call the funciton need put ()
    //with next example you can define Function as type (number this example and the return)
    // let myFunction : (number1:number,number2:number) => number;
    myFunction = addNumber;
    console.log(myFunction(1, 2));
    //============================================
    //============================================
    //============================================
    //again not ejecution only pass the reference.
    //with next example you can define Function as type (string this example and the return)
    // let myFunction : (string1:string) => string;
    myFunction = greet;
    console.log(myFunction("Superman"));
    //============================================
    //============================================
    //============================================
    // with next example you can define Function without arguments and return a string
    // let myFunction : () => string;
    myFunction = saveTheWorld;
    console.log(myFunction());
    //============================================
    //============================================
    //============================================
})();
