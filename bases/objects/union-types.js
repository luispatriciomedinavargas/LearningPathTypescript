"use strict";
(() => {
    let myCustomVariable = "Superman";
    console.log(typeof myCustomVariable);
    myCustomVariable = 20;
    console.log(typeof myCustomVariable);
    myCustomVariable = {
        name: "Bruce",
        powers: [0]
    };
    console.log(typeof myCustomVariable);
})();
