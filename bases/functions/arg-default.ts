(() => {


    //with = in params you say that this param is optional in this case upper is false
    const fullName = (fristName: string, lastName?: string, upper: boolean = false): string => {
        if (upper) {

            return `${fristName} ${lastName || "no last name"}`.toUpperCase();
        }else{

            return `${fristName} ${lastName || "no last name"}`; 
        }

    }

    const name = fullName("Tony","Start",true );

    console.log(name);

})