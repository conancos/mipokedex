import { POKEMONS_DATA, loader } from './main.js';
import { pinta_lista, $lista_pokemon } from './pinta_lista.js';


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
                // aleatorios.sort((a, b) => a - b); LUEGO LO PONDRÉ
            }
        }
        //=>info por consola
        console.log(`%c${aleatorios.length} ` + "Pokémon", "color:#0ff");

        $lista_pokemon.innerHTML = "";
        aleatorios.forEach((pokemonId) => pinta_lista(pokemonId))
        ;
    },


    btn_todos: function() {
        
        loader.style.display = "block";
        
        $lista_pokemon.innerHTML = ""
        const Terápagos = POKEMONS_DATA[1024]
        //console.log(Terápagos)
        pinta_lista(Terápagos.id)

        for (const pokemon of POKEMONS_DATA) {

            if(pokemon){
            let pokemonId = pokemon.id
            
            pinta_lista(pokemonId)
            }
        };
    },
    // + funciones

    
}