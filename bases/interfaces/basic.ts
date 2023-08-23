(()=>{
    //like that is how you define a interface
    interface Hero {
        name: string,
        age?: number,
        powers: number[],
        getNamne?: () => string
    }
    //like that is how you use a interface.
    let flash: Hero = {
        name: "Barry Alen",
        age: 24,
        powers: [1,2]
    }

    let superman: Hero = {
        name: "Clark Kent",
        age: 60,
        powers: [1,3]
    }
 


})