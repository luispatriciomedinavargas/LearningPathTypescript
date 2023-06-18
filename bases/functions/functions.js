"use strict";
(() => {
    const hero = "Flash";
    //that is how you define a default funcrtion in js/ts
    function returnName() {
        return hero;
    }
    ;
    //that is you define an arrow function
    //ts knows that this function by default return a string, 
    const arrowFunction1 = () => {
        return "that is  an arrow function";
    };
    //but also you can define that your arrow function return a string 
    const arrowFunction = () => {
        return "that is an arrow function";
    };
    //ts put the type of const as string
    const heroName = returnName();
    //but also you can define it
    const heroName1 = returnName();
})();
