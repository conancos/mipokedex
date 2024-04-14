// la api "https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0";

// Sacar la Imagen:
export function obtenerImg(pokemon) {
    let img;
    if(pokemon.sprites.other["official-artwork"].front_default !== null){
        img = pokemon.sprites.other["official-artwork"].front_default;
    } else if (pokemon.sprites.front_default !== null){
        img = pokemon.sprites.front_default;
    } else if (pokemon.sprites.front_shiny !== null){
        img = pokemon.sprites.front_shiny;
    } else {
        img = "./assets/Pikachu_HOME.webp";
    }
    return img
};

// Sacar la Animación:
export function obtenerAnimacion(pokemon) {
    let animacion;
    if(pokemon.sprites.other.showdown.front_default !== null){
        animacion = pokemon.sprites.other.showdown.front_default;
    } else if (pokemon.sprites.other.showdown.back_default !== null){
        animacion = pokemon.sprites.other.showdown.back_default;
    } else if (pokemon.sprites.versions["generation-v"]["black-white"].animated.front_default !== null){
        animacion = pokemon.sprites.versions["generation-v"]["black-white"].animated.front_default;
    } else if (pokemon.sprites.other["official-artwork"].front_shiny !== null){
        animacion = pokemon.sprites.other["official-artwork"].front_shiny;
    } else if (pokemon.sprites.front_shiny !== null){
        animacion = pokemon.sprites.front_shiny;
    } else {
        animacion = "./assets/Pikachu_HOME.webp"
    }
    return animacion
}

// Sacar el array de Tipos:
export function obtenerTipos(pokemon) {
    const tipos = pokemon.types.map(tipo => tipo.type.name);
    return tipos;
}