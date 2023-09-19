import axios from "axios";
import { Pokemon } from "../interfaces";



export const getPokmeon = async (pokemonID: number): Promise<Pokemon> => {


    //here the response from pokeapi, is NOT LIKE US interface calls Pokemon.
    //JUST YOU ARE giving as standar for you al your team because you will know 
    //that response/properties give you this api

    const {data} = await axios.get<Pokemon>(`https://pokeapi.co/api/v2/pokemon/${pokemonID}`)

    return data;
}

