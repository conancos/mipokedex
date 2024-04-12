import {obtenerImg, obtenerAnimacion, obtenerTipos} from "./poke-media.js";
import {btn_funciones} from "./funciones.js";

const URL = "https://pokeapi.co/api/v2/pokemon/";
const POKEMONS_DATA = {};
export const $lista_pokemon = document.getElementById('lista_pokemon');
const loader = document.getElementById('loader');
const $btn_tipo = document.querySelector('.btnTipo'); // Esto creo que lo tendré que quitar, porque lo haré con propagación, todos.
const $btn_container = document.querySelectorAll('.btn-container');
const $nav_container = document.querySelector('#nav-container');

// Clase constructora para los Pokémons:
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


/* let nMax = Infinity; */
// Fetching de datos a la Pokeapi y meto todas las promesas en el array pokemonPromises:

fetch(URL)
    .then(res => res.json())
    .then(data => {
        
        //--consola:
        console.log("%cDATA: ", "font-weight: bold; text-shadow: 1px 1px 8px #0ff", data)
        
        loader.style.display = "block";
        let pokemonPromises = [];
             
        // Realizamos las llamadas a la API para todos los pokémons:
        // Y más
        
            for (let i = 1; i <= 1025/* hacerlo "actualizable" */; i++) {
                pokemonPromises.push(fetch(URL + i).then(res => res.json()));
            };
            for (let j = 10001; j <= 10277/* hacerlo "actualizable" */; j++) {
                pokemonPromises.push(fetch(URL + j).then(res => res.json()));
            };

        
     // Procesamos todas las promesas de las llamadas a la API y se va llenando POKEMONS_DATA con cada pokémon por su ID de índice:    
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
            
            POKEMONS_DATA_por_consola()     // <== Llamada
            btn_funciones.btn_aleatorio()   // <== Llamada

        })
        .catch(error => console.error("Error al obtener datos de los Pokémon:", error));
    })
    .catch(error => console.error("Error al obtener lista de Pokémon:", error));

 // después de haberse llenado con los pokémons.
    export { POKEMONS_DATA };


 // Llamada para INFO > Pokemon de prueba Terápagos limpio, el tipo, el objeto PODEMONS_DATA lleno y limpio tb, y la cantidad.):
    function POKEMONS_DATA_por_consola() {
        console.log("%cpokemon 1024 - Terápagos " + "%c- limpio: ", "color:#ff0", "color:#9f9; text-shadow:0 0 8px #0f0", POKEMONS_DATA[1024]);
      //console.log(`POKEMONS_DATA type:`, typeof POKEMONS_DATA);
        console.log("%cPOKEMONS_DATA: ", "font-weight: bold; text-shadow: 1px 1px 8px #0f0", POKEMONS_DATA);
        console.log("%cTotal: " + Object.values(POKEMONS_DATA).length, "background: #00a");
    };
 // llamada al Botón < ALEATORIO > 🚀
/*     const aleatorio = document.querySelector('#aleatorio')
    aleatorio.addEventListener('click', () => {
        btn_aleatorio()
    }) */



 // Evento de escucha para todos los botones => $btn_tipo ❌, tengo que usar la propagación de eventos, con el contenedor padre.
 // para ahorrar recursos.
/* $btn_tipo.addEventListener('click', (event) => {

    //const type = event.target.id;
    console.log(event.target);
}); */


// Evento de escucha principal, utilizando evento de propagación para optimizar y ahorrar en recursos

/* $btn_container.forEach(btnGroup => {
    
    btnGroup.addEventListener('click', (event) => {
        if (event.target.tagName === "BUTTON") {
            console.log("event target: ", event.target.id)
        }
    })
}) */

$nav_container.addEventListener('click', (event) => {
    /* if (event.target.matches(".btnTipo")) {} matches es más lento */
    if (event.target.tagName === "BUTTON"){
        
        const type = event.target.id;
        console.log("Botón ID: ", type); //=> Por consola
        const nombre_funcion = `btn_${type}`;
        
        typeof btn_funciones[nombre_funcion] === 'function' ? btn_funciones[nombre_funcion]() : alert("Función del botón no encontrada", nombre_funcion);

        
        //Resto de if's con cada función
    }
})

let ToDo = "Vale, ahora tengo que crear el resto de funciones en btn_funciones de funciones.js y configurar los gritos"

/* function btn_aleatorio() {
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
} */

// Evento de escucha para los botones 'grito'

// Evento de escucha para cada btnTipo