"use strict";
(() => {
    //this is a tuple, not a array, so then, it awalys the frist value 
    //will be string and the second will be a number
    const hero = ["Dr strange", 100];
    //here you can not assign a number to string
    //here you can not assign a string to number
    //hero[0] = 59
    //hero[1]= "string"
    hero[0] = "Thor";
    hero[1] = 1000;
    console.log(hero);
})();
