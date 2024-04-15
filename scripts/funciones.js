import { POKEMONS_DATA } from './main.js';
import { pinta_lista } from './pinta_lista.js';

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
        //=>Por consola
        console.log(`%c${aleatorios.length} ` + "Pokémon aleatorios", "color:#0ff");

        const $lista_pokemon = document.querySelector('#lista_pokemon');
        $lista_pokemon.innerHTML = "";
        aleatorios.forEach((pokemonId) => pinta_lista(pokemonId));
    },
    // + funciones

    
}