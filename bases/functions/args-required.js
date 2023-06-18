"use strict";
(() => {
    //you must be put type to parameters
    const fullName = (fristName, lastName) => {
        return `${fristName} ${lastName}`;
    };
    //if you need a second type you can use | as the following example 
    const fullName2 = (fristName, lastName) => {
        return `${fristName} ${lastName}`;
    };
    //the arguments here are mandatory
    const name = fullName("Tony", "Stark");
    const name2 = fullName2("Tony", true);
    console.log(name);
});
