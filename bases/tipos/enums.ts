(()=>{


    //the idea of enums is that you can have a sense semantic to set values
// enum AudioLeve{
//     min,     // here we have value 0
//     medium,  // here we have value 1
//     max,     // here we have value 2
// }


enum AudioLeve{
    min = 1,  
    medium,//=2  //it has the value 2 because the value before medium is 1. 
    max = 10,     
}


let currentAudio = AudioLeve.medium;


console.log(currentAudio);
})()