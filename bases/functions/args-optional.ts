(() => {


    //with ? you say to typescript it can be optional   
    const fullName = (fristName: string, lastName?: string): string => {


        //here you say hey if lastName doesnt come, use that is beetween quotation marks
        return `${fristName} ${lastName  || "no last name"}`;
    }
 
    const name = fullName("Tony");

    console.log(name); 

})