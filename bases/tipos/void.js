"use strict";
(() => {
    //void is a some way to says to typescript
    //that here is not a value return
    function callBatman() {
    }
    const callSuperman = () => {
    };
    const a = callBatman();
    console.log(a); //here our A has the value undefine because callBatman does not have anything
})();
