(() => {


    //you must be put type to parameters
    const fullName = (fristName: string, lastName: string): string => {


        return `${fristName} ${lastName}`;
    }
    //if you need a second type you can use | as the following example 
    const fullName2 = (fristName: string, lastName: (string| boolean)): string => {


        return `${fristName} ${lastName}`;
    }
  

    //the arguments here are mandatory
    const name = fullName("Tony", "Stark");
    const name2 = fullName2("Tony", true);

    console.log(name); 

})