import { POKEMONS_DATA } from './main.js';
import { pinta_lista } from './pinta_lista.js';


// botón aleatorio:



/*     function btn_aleatorio() {
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
        
        console.log(`%c${aleatorios.length} ` + "Pokémon", "color:#0ff");
        
        
        // Llamamos a pinta_lista() por cada ID del pokemon que hay en aleatorios
        const $lista_pokemon = document.querySelector('#lista_pokemon');
        $lista_pokemon.innerHTML = "";
        aleatorios.forEach((pokemonId) => pinta_lista(pokemonId))
    }; */


export const btn_funciones = {

    btn_aleatorio: function() {
        
        const aleatorios = [];
        const keys = Object.keys(POKEMONS_DATA);
        const totalPokemons = keys.length;

        while (aleatorios.length < 40) {
            const indiceAleatorio = Math.floor(Math.random() * totalPokemons)
            const pokemonId = keys[indiceAleatorio]

            if (!aleatorios.includes(pokemonId)) {
                aleatorios.push(pokemonId)
                // aleatorios.sort((a, b) => a - b);
            }
        }

        console.log(`%c${aleatorios.length} ` + "Pokémon", "color:#0ff");

        // Llamamos a pinta_lista() por cada ID en [aleatorios]
        const $lista_pokemon = document.querySelector('#lista_pokemon');
        $lista_pokemon.innerHTML = "";
        aleatorios.forEach((pokemonId) => pinta_lista(pokemonId));
    },


}