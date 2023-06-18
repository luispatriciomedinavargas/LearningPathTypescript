(()=>{

    //there are 3 four to define strings

    const batman: string= "Batman";
    // console.log(batman.toUpperCase()) here i have help from TS


    // const batman: any= "Batman";
    // if you leave it as any you losse a lot of help of typescript because you cannot acces the properties by . 
    // here i don´t have help from TS
    const greenLanter: string="Green Lanter";

    const blackVulcan: string= `Heroe: Black Vulcan`;



    console.log(`Template literals`);
    console.log(`I'm  ${batman}, `);
    console.log(batman.toUpperCase());


    console.log(batman[10].toUpperCase() || "Batmant is not there");


    
})()