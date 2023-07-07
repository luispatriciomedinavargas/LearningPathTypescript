"use strict";
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
(() => {
    const avengers = {
        nick: "Samuel L. Jackson",
        ironman: "Robert Downey Jr.",
        vision: "Paul Bettany",
        active: true,
        power: 1500.1239041
    };
    //avengers is an object, them you can catch the propeties by {} and its name, like the following example
    // const {power,nick,vision,active,ironman}= avengers;
    // console.log(power.toFixed(2),vision.toUpperCase())
    // const printAvenger= (avengers: Avengers)=>{
    //     console.log(avengers.vision )
    // }
    //also you can make a destructuring in the params of a method
    const printAvenger = (_a) => {
        var { vision } = _a, resto = __rest(_a, ["vision"]);
        console.log(vision);
        console.log(resto);
    };
    printAvenger(avengers);
});
