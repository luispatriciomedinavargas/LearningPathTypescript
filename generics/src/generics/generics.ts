export const printObject = (argument: any) => {

    console.log(argument);
}

// export function genericFunction(argument: any) {

//     return argument;
// }


//this is how you make something generic, the T only means generic also is the standar. You can use any letter as you want.
// export function genericFunction<T,Y,B,C>(argument: any) {
// AGAIN it can be anything as you want, letter,words,anything just one requeriments it should be beetween <>

//The logit is the follow,
//in the section where is the argument i mean | (argument: T) | the next at colon means that is kind of type THEN <T> and the last :T also know because the | argument(: T)
//has the type
export function genericFunction<T>(argument: T): T {

    return argument;
}

export const genericFunctionArrow = <T>(argument: T) => {return argument}