// Después de obtener POKEMONS_DATA enseñamos 40 pokémons al azahar
import { POKEMONS_DATA } from './main.js';
import { pinta_lista } from './pinta_lista.js';


// botón aleatorio:
export function btn_aleatorio() {
    const aleatorios = [];
    const keys = Object.keys(POKEMONS_DATA);
    const totalPokemons = keys.length;
    
    while (aleatorios.length < 40){
        const indiceAleatorio = Math.floor(Math.random() * totalPokemons)
        const pokemonId = keys[indiceAleatorio]

        if (!aleatorios.includes(pokemonId)) {
            aleatorios.push(pokemonId)
         // comentamos ésta línea para ver si me gusta más o no, verlos sin orden: 
         // aleatorios.sort((a, b) => a - b);
        }
    }    
    console.log("%cArray aleatorios type: ", "color:#f4c", typeof aleatorios, aleatorios); // object
    console.log(typeof aleatorios === "array" && typeof aleatorios.length === "number"); // false
    console.log("longitud :", aleatorios.length); // longitud : 40
    console.log(typeof aleatorios === "array" && typeof aleatorios.length === "number"); // false
    console.log("%cArray.isArray() :", "color:#f4c", Array.isArray(aleatorios)); // true
    console.log(aleatorios.join(' '))

 // Llamamos a pinta_lista() por cada ID del pokemon que hay en aleatorios
    const $lista_pokemon = document.querySelector('#lista_pokemon');
    $lista_pokemon.innerHTML = "";
    aleatorios.forEach((pokemonId) => pinta_lista(pokemonId))
};