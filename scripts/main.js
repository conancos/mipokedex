import {obtenerImg, obtenerAnimacion, obtenerTipos} from "./poke-media.js";
import {btn_aleatorio} from "./aleatorio.js";

const URL = "https://pokeapi.co/api/v2/pokemon/";
const POKEMONS_DATA = {};
export const $lista_pokemon = document.getElementById('lista_pokemon');
const loader = document.getElementById('loader');
const $btn_tipo = document.querySelector('.btnTipo');

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
}


/* let nMax = Infinity; */
// Construye todos los pokemons en { POKEMONS_DATA }

fetch(URL)
    .then(res => res.json())
    .then(data => {
        
        //--consola:
        console.log("%cDATA: ", "font-weight: bold; text-shadow: 1px 1px 8px #0ff", data)
        
        loader.style.display = "block";
        let pokemonPromises = [];
             
        // Realizamos las llamadas a la API para todos los pokémons:
        // Y más
        
            for (let i = 1; i <= 1025; i++) {
                pokemonPromises.push(fetch(URL + i).then(res => res.json()));
            };
            for (let j = 10001; j <= 10277/* 10277 */; j++) {
                pokemonPromises.push(fetch(URL + j).then(res => res.json()));
            };

        
     // Procesamos todas las promesas de las llamadas a la API:    
        Promise.all(pokemonPromises)
        .then(pokemons => {
            let total = 0; 
            
            //---consola:
            console.log("%cpokemon 1024 - Terápagos " + "%c- desde la promesa: ", "color:#ff0", "color:#f99; text-shadow:0 0 8px #f00", pokemons[1023]);
            console.log("%cPROMESAS: ", "font-weight: bold; text-shadow: 1px 1px 8px #f00", pokemonPromises)
            
            pokemons.forEach(pokemon => {
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
            });
            //--->consola:
            console.log(`%cTotal: ${total}`, "background: #00a");
            
                
            loader.style.display = "none";
            
            POKEMONS_DATA_por_consola()
            btn_aleatorio()

        })
        .catch(error => console.error("Error al obtener datos de los Pokémon:", error));
    })
    .catch(error => console.error("Error al obtener lista de Pokémon:", error));

 
 // después de haberse llenado con los pokémons.
    export { POKEMONS_DATA };


 // Por consola:
    function POKEMONS_DATA_por_consola() {
        console.log("%cpokemon 1024 - Terápagos " + "%c- limpio: ", "color:# ff0", "color:#9f9; text-shadow:0 0 8px #0f0", POKEMONS_DATA[1024]);
        console.log(`POKEMONS_DATA type:`, typeof POKEMONS_DATA);
        console.log("%cPOKEMONS_DATA: ", "font-weight: bold; text-shadow: 1px 1px 8px #0f0", POKEMONS_DATA);
        console.log(Object.values(POKEMONS_DATA).length);
    };



 /* import { btn_aleatorio } from "../aleatorio"; */
 // llamada al Botón < ALEATORIO > 🚀
    const aleatorio = document.querySelector('#aleatorio')
    aleatorio.addEventListener('click', () => {
        btn_aleatorio()
    })



 // Evento de escucha para todos los botones => $btn_tipo
$btn_tipo.addEventListener('click', (event) => {

    //const type = event.target.id;
    console.log(event);
});








// Lo siguiente sería coger la imagen 🔰🟥.

// Mostrar 40 pokemons aleatorios la 1ª vez.

//=> 2ª función:    "pintar article con cada pokémon"

// eventos de escucha de los botones por tipo

//=> 3ª función:    "Opciones para las imágenes"


//=> 4ª función:    "El hover de las imágenes"