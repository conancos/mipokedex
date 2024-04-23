import { POKEMONS_DATA, loader, indicesAleatorios40, soloElementos1301, deInicio, Pokemon, POKEMONS_DATA_por_consola } from './main.js';
import { pinta_lista, $lista_pokemon } from './pinta_lista.js';
const URL_TYPE = "https://pokeapi.co/api/v2/type/";
import {obtenerImg, obtenerAnimacion, obtenerTipos} from "./poke-media.js";

export const btn_funciones = {

    crear40indices() {
        indicesAleatorios40.length = 0;

        while(indicesAleatorios40.length < 40) {
            let indiceAleatorio = Math.floor(Math.random() * soloElementos1301.length);
            if(!indicesAleatorios40.includes(indiceAleatorio)) {
                indicesAleatorios40.push(indiceAleatorio)
            };
            indicesAleatorios40.sort((a, b) => a - b);
        }
    },

    btn_aleatorio: function() {
        $lista_pokemon.innerHTML = "";
        indicesAleatorios40.length = 0;
        btn_funciones.crear40indices();
        deInicio();
    },
    
    btn_vistos: function() {
        $lista_pokemon.innerHTML = ""
        loader.style.display = "block";
        
        const pokemonsIds = Object.keys(POKEMONS_DATA);
        console.log(pokemonsIds.length);
        for (const pokemonId of pokemonsIds) {
            pinta_lista(pokemonId);
        };
    },

    btn_tipos: function(type) {
        console.log(type)
        $lista_pokemon.innerHTML = "";
        loader.style.display = "block";

        fetch(URL_TYPE + type).then(res => res.json()).then(data => {
            //console.log(data);

            let pokemonPromises = [];
            let allDataLoaded = false;

            data.pokemon.map(element => {
                pokemonPromises.push(fetch(element.pokemon.url).then(res => res.json()));
            })
            
            Promise.all(pokemonPromises)
            .then(data => {

                let total = 0; 

            data.forEach(pokemon => {
                const pokemonInstance = new Pokemon (
                    pokemon.id,
                    pokemon.name,
                    obtenerImg(pokemon),
                    pokemon.cries.latest,
                    pokemon.cries.legacy,
                    obtenerAnimacion(pokemon),
                    pokemon.stats[1].base_stat,
                    pokemon.stats[2].base_stat,
                    obtenerTipos(pokemon),
                    pokemon.height / 10 + "m",
                    pokemon.weight / 10 + "kg"
                );
                total++;                
                if(!POKEMONS_DATA[pokemonInstance.id]) {
                    POKEMONS_DATA[pokemonInstance.id] = pokemonInstance;
                }
                pinta_lista(pokemonInstance.id)
            });


            allDataLoaded = true;
            if (allDataLoaded) {
                console.log(`%cTotal: ${total}`, "background: #00a");
                loader.style.display = "none";
                
                POKEMONS_DATA_por_consola()
                
            } else {
                alert("No se han podido cargar los pokémon, Api fail.")
            };

            })
            .catch(error => console.error("Error al obtener datos de los Pokémon:", error));
        })
        .catch(error => console.error("Error al obtener lista de Pokémon:", error));
    },



    
//  Trabajando con variable local, todavía desactivado:
    btn_aleatorio_local: function() {
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

        console.log(`%c${aleatorios.length} ` + "Pokémon", "color:#0ff");

        $lista_pokemon.innerHTML = "";
        aleatorios.forEach((pokemonId) => pinta_lista(pokemonId));
    },


    
}