(()=>{

    let avengers: number = 10;

    const villians: number = 20;


    if(avengers < villians){
        console.log("we´re in trouble")
    }else{
        console.log("we´re ok")
    }
    //that convert string to number.
    avengers = Number("55A");

    //in the out we will see avengers as NaN but also you need know that a Nan is a Number
    console.log({avengers})

})()