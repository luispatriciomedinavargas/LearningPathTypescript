(()=>{
const avengers={
    nick: "Samuel L. Jackson",
    ironman:"Robert Downey Jr.",
    vision: "Paul Bettany",
    active:true,
    power:1500.1239041
}
    type Avengers = {
        nick: string;
        ironman: string;
        vision: string;
        active: boolean;
        power: number;
    }

    //avengers is an object, them you can catch the propeties by {} and its name, like the following example
    // const {power,nick,vision,active,ironman}= avengers;
    // console.log(power.toFixed(2),vision.toUpperCase())

    // const printAvenger= (avengers: Avengers)=>{
    //     console.log(avengers.vision )
    // }
    //also you can make a destructuring in the params of a method
    const printAvenger= ({vision,...resto}: Avengers)=>{
        console.log(vision )
        console.log(resto )

    }



    // printAvenger(avengers);

    const avengersarr= ["Cap","Iroman","Hulk"];

//  herer you need declare the variables as the position.
// for example iroman is taking the position 1 (array starts posision 0)
// so iroman is position 1.
// with destructuring you can do something like:

    const [, iroman , hulk]= avengersarr;

console.log({iroman,hulk});







})