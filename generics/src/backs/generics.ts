import { printObject, genericFunction, genericFunctionArrow } from "../generics/generics";
import { Hero,Villain } from "../interfaces";
// import { Hero } from "./interfaces/hero";
// import { Villain } from "./interfaces/villain";

// printObject(123);
// printObject("123");
// printObject("hola mundo");
// printObject(new Date());
// printObject({ a: 1, b: 2, c: 3 });
// printObject([1,2,3,4,5,6,7,8]);


//here the problem is that you try to use a method that is only allow in numbers (toFixed) and when you
//also try to make something generic for all kind of type

// const name: string = "Patricio";
// console.log(genericFunction(3.141518).toFixed(2))
// console.log(genericFunction(name).toUpperCase())
// console.log(genericFunction(new Date()).getDate)

// console.log(genericFunctionArrow(3.141518).toFixed(2))
// console.log(genericFunctionArrow(name).toUpperCase())
// console.log(genericFunctionArrow(new Date()).getDate)


const deadpool = {
    name: "Deadpool",
    realName: "Wade Winston Wilson",
    dangerLevel: 130
}

console.log(genericFunctionArrow<Hero>(deadpool))
console.log(genericFunctionArrow<Villain>(deadpool).dangerLevel)