import {obtenerImg, obtenerAnimacion, obtenerTipos} from "./poke-media.js";
import {btn_funciones} from "./funciones.js";
import { pinta_lista } from "./pinta_lista.js";
const URL = "https://pokeapi.co/api/v2/pokemon/";
const POKEMONS_DATA = {};
export const loader = document.getElementById('loader');
const $nav_container = document.querySelector('#nav-container');

class Pokemon {
    constructor(id, name, img, grito1, grito2, animacion, ataque, defensa, tipos, altura, peso) {
        this.id = id;
        this.name = name;
        this.img = img;
        this.grito1 = grito1;
        this.grito2 = grito2;
        this.animacion = animacion;
        this.ataque = ataque;
        this.defensa = defensa;
        this.tipos = tipos;
        this.altura = altura;
        this.peso = peso;
    }
};

// Array de 1301 elementos para sacar 40 id's aleatorios:
let elementosParte1 = Array.from({length: 1025}, (_indice, elemento) => elemento + 1);
let elementosParte2 = Array.from({length: 10277 - 10001 + 1}, (_indice, elemento) => elemento + 10001);
let elementos1301 = elementosParte1.concat(elementosParte2);

const elementosAleatorios40 = [];
while(elementosAleatorios40.length < 40) {
    const indiceAleatorio = Math.floor(Math.random() * elementos1301.length);
    if(!elementosAleatorios40.includes(indiceAleatorio)) {
        elementosAleatorios40.push(indiceAleatorio)
    }
}
const muestra40 = elementosAleatorios40.sort((a, b) => a - b);
console.log(`Muestra40 ${muestra40}`);
// final del "componente"

// Fetching de datos:

fetch(URL)
    .then(res => res.json())
    .then(data => {
        
        console.log("%cDATA: ", "font-weight: bold; text-shadow: 1px 1px 8px #0ff", data)
        loader.style.display = "block";

        let pokemonPromises = [];
        let allDataLoaded = false;
             
        for (let i = 0; i < muestra40.length; i++) {
            pokemonPromises.push(fetch(URL + elementos1301[muestra40[i]]).then(res => res.json()))
        }
        
        Promise.all(pokemonPromises)
        .then(DATA => {
            let total = 0; 
        
            console.log("%cpokemon 1024 - Terápagos " + "%c- desde la promesa: ", "color:#ff0", "color:#f99; text-shadow:0 0 8px #f00", DATA[1023]);
            console.log("%cPROMESAS: ", "font-weight: bold; text-shadow: 1px 1px 8px #f00", pokemonPromises)
            
            DATA.forEach(pokemon => {
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
                POKEMONS_DATA[pokemonInstance.id] = pokemonInstance;
                pinta_lista(pokemonInstance.id)
            });

            allDataLoaded = true;
            if (allDataLoaded) {
                console.log(`%cTotal: ${total}`, "background: #00a");
                loader.style.display = "none";
                
                POKEMONS_DATA_por_consola()
                //btn_funciones.btn_aleatorio(POKEMONS_DATA[pokemon.id])
            } else {
                alert("No se han podido cargar los pokémon, Api fail.")
            };
            
        })
        .catch(error => console.error("Error al obtener datos de los Pokémon:", error));
    })
    .catch(error => console.error("Error al obtener lista de Pokémon:", error));
export { POKEMONS_DATA };


// Llamada INFO:
function POKEMONS_DATA_por_consola() {
    console.log("%cpokemon 1024 - Terápagos " + "%c- limpio: ", "color:#ff0", "color:#9f9; text-shadow:0 0 8px #0f0", POKEMONS_DATA[1024]);
    console.log("Is array? ", Array.isArray(POKEMONS_DATA));
    console.log("%cPOKEMONS_DATA: ", "font-weight: bold; text-shadow: 1px 1px 8px #0f0", POKEMONS_DATA);
    console.log("%cTotal: " + Object.values(POKEMONS_DATA).length, "background: #00a");
};


    // Delegación de eventos:
$nav_container.addEventListener('click', (event) => {
    if (event.target.tagName === "BUTTON"){
        const type = event.target.id;
        console.log("Botón ID: ", type); //=> Por consola
        const pulsada = `btn_${type}`;
        
        typeof btn_funciones[pulsada] === 'function'
         ? btn_funciones[pulsada]()
          : alert("Función desactivada por mantenimiento.", pulsada);
    }
});