"use strict";
(() => {
    //you need only the frist params but sometines you need caught the rest, you can use the operator ... and
    //assign a variable as the next example
    const fullName = (fristName, ...restArgs) => {
        return `${fristName} ${restArgs.join(" ")}`;
    };
    const superman = fullName("clark", "joseph", "Kent");
})();
