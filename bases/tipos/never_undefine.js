"use strict";
(() => {
    //strickNullCheck
    let nada = undefined;
    //you can not set undefined a type 
    // let nada1:number=undefined;
    let nada1 = undefined;
    let nada2 = null;
    //you can not set null a type 
    // let nada1:number=undefined;
    let nada3 = null;
    if (null !== undefined) {
        console.log("they are not equals");
    }
    else {
        console.log("they are equals");
    }
    console.log(undefined);
})();
