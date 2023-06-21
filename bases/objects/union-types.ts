(()=>{

    type Hero = {
        name: string,
        age?: number,
        powers: number[],
        getNamne?: () => string
    }

    let myCustomVariable: string | number | Hero = "Superman"
console.log(typeof myCustomVariable)

myCustomVariable = 20;
console.log(typeof myCustomVariable)

myCustomVariable={
    name:"Bruce",
    powers:[0]
}
console.log(typeof myCustomVariable)

})()