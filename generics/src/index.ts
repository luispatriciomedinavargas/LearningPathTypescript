import { getPokmeon } from "./generics/getPokemon";

getPokmeon(4)

//here you don´t need import the interface pokemon basecuase it comes from the response THAT it ALREADY HAS!
.then(pokemon=>console.log(pokemon.name))
.catch(error=>console.error(error))
.finally(()=>console.log("end of getPokemon"))