import {obtenerImg, obtenerAnimacion, obtenerTipos} from "./poke-media.js";
import {btn_funciones} from "./funciones.js";
import { pinta_lista } from "./pinta_lista.js";
export const URL = "https://pokeapi.co/api/v2/pokemon/";
const POKEMONS_DATA = [];
export const loader = document.getElementById('loader');
const $nav_container = document.querySelector('#nav-container');
export let soloElementos1301 = (Array.from({length: 1025}, (_indice, elemento) => elemento + 1)).concat(Array.from({length: 10277 - 10001 + 1}, (_indice, elemento) => elemento + 10001));
export let indicesAleatorios40 = [];

export class Pokemon {
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


btn_funciones.crear40indices()

export function deInicio() {
    
    fetch(URL)
    .then(res => res.json())
    .then(data => {
        
        console.log("%cDATA: ", "font-weight: bold; text-shadow: 1px 1px 8px #0ff", data)
        loader.style.display = "block";

        let pokemonPromises = [];
        let allDataLoaded = false;

        for (let i = 0; i < indicesAleatorios40.length; i++) {
            pokemonPromises.push(fetch(URL + soloElementos1301[indicesAleatorios40[i]])
            .then(res => res.json()))
        }
        
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
};

deInicio();
export { POKEMONS_DATA };


// Llamada INFO:
export function POKEMONS_DATA_por_consola() {
    //console.log("%cpokemon 1024 - Terápagos " + "%c- limpio: ", "color:#ff0", "color:#9f9; text-shadow:0 0 8px #0f0", POKEMONS_DATA[1024]);
    //console.log("Is array? ", Array.isArray(POKEMONS_DATA));
    //console.log("%cPOKEMONS_DATA: ", "font-weight: bold; text-shadow: 1px 1px 8px #0f0", POKEMONS_DATA);
    console.log("%cPOKEMONS_DATA current Total: " + Object.values(POKEMONS_DATA).length, "background: #00a");
};


// Delegación de eventos:
$nav_container.addEventListener('click', (event) => {
    
    const typeId = event.target.id;
    const btn_type = `btn_${typeId}`;
    
        //aleatorio y vistos:
    if (event.target.tagName === "BUTTON" && event.target.classList.contains('action')){
        console.log("ID   :", typeId);
        btn_funciones[btn_type]();
    
        //type ID:
    } else if (event.target.tagName === "BUTTON" && event.target.classList.contains('type')){
        console.log("ID   :", typeId);
        btn_funciones.btn_tipos(typeId)
    
        //
    } else if (event.target.tagName === "BUTTON" && event.target.classList.contains('generations')){
        let gen = event.target.id
        btn_funciones.btn_generaciones(gen)
    
    
    } /* else if (event.target.tagName === "BUTTON"){
        console.log("Botón desactivado");
        alert("Función desactivada por mantenimiento.", event.target);
    } */
    
});


//if (event.target.tagName === "BUTTON" && !event.target.className.includes('type')){}
















