(()=>{
    //never is byself a kind of value
    //is not undefine/null or void
    //is never means that your function can resolve as sucessfully
    //it can not have a handle when the function end
    const error= (message:string): never => {
        throw new Error (message);
    }

    error("something was bad. check it");
})()