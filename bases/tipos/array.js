"use strict";
(() => {
    //this is a array only of numbers
    const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    //this is a array only of numbers or strings
    let numbers2 = [1, 2, 3, 4, "5", 6, 7, 8, 9, 10];
    //remove the last element
    numbers2.pop();
    //add a new element
    numbers2.push(1);
    //check if the array has the value beetween ()
    numbers2.includes("5");
    //this is a array only of numbers or strings or booleans
    let numbers3 = [1, 2, 3, 4, "5", 6, 7, 8, 9, 10];
    numbers3.push(true);
    const villans = ["Omega Red", "Dormammu", "green goblin"];
})();
