(() => {

    //with the : {} you define as object and also can define property like
    let flash:{
         name:string,
        age?:number, //with ? in the property you say that it is optional
        powers:string[],
        getName?:()=>string 
    } = {
        name: "Barry Alen",
        age:24,
        powers:["super speed","travels times"]
    }
    // you can not define a new property. because typescript reconize it that isnot in the 
    //already defined object call flash
    // flash={
    //     name2:"Clrack Kent",
    // }


    let superman:{
        name:string,
        age?:number, 
        powers:string[],
        getName?:()=>string 
    } = {
        name: "Clark Kent",
        age:60,
        powers:["super speed","fly"]
    }







})() 