"use strict";
(() => {
    //with any you are saying hey ts, leave avenger to its own.
    let avenger = 123;
    //if you don´t specify an value it por default is any
    let exists;
    let power;
    avenger = "Dr Strange";
    //here we don´t have help from ts because the variable is any
    console.log(avenger.CharAt(0));
    //how to do a cast
    console.log(avenger.charAt(0));
    //it is ok, because is any
    avenger = 125.23456;
    //its ok because toFix is a method from numbers
    console.log(avenger.toFix(2));
    //another kind of cast
    console.log(avenger.toFix(2));
    //undefine
    console.log(exists);
    console.log(power);
})();
