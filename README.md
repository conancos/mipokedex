// Los pokémon van desde:
    1ª Gen. =>      1 / 151 
    2ª Gen. =>    151 /
    3ª Gen. =>        /
    4ª Gen. =>        /
    5ª Gen. =>        /
    6ª Gen. =>        /
    7ª Gen. =>        /
    8ª Gen. =>        / 1025
    Especial=>  10001 / 10277
    
    Hasta el 1025. => hasta el 920 tienen animación. 1025 - 920 = 105 últimos no.
    

// gift_3 Hasta los 649 tienen animación desde:
 pokemon.sprites.versions.["generation-v"]["black-white"].animated.front_default;

// gift_3 Hasta los 920 llegan las animaciones desde:
 pokemon.sprites.other.showdown.front_default;

// A partir del 649 no tienen 2º GRITO.





- TO DO - LISTA POR HACER:
    [  ] VISTA ALEATORIA, al entrar en la POKÉDEX.
    [✅] BARRA SCROLL: Personalizada.
    [✅] CURSOR: default, para las nombres y los tipos en las cards.
    [✅] NOMBRE DE TIPOS(CARDS), traer los tipos del inglés pero ponerlos en español.
    [✅] LOADER: "Cargando..." la poqueBola.
    [  ] PAGINACIÓN: con la PokeBola para ir al Top (inicio).
    [  ] BARRA DE BÚSQUEDA: en nav parte derecha.
    [  ] LOGO CONANCOS.DEV: en nav parte izquierda.
    [  ] FOOTER: en body "make it with ❤🙌🤙 Hazte con todos!"
    [✅] MANEJO DE ERRORES: Para cuando no hay animación ó 2º grito.
    [✅] BOTONES: 1ª Generación, 2ª Gen. 3ª, 4ª, 5ª, 6ª, 7ª, 8ª, 9ª! y los 10001 al 10277
    [✅] SUBIR: a gitHub, y al servidor.
    [✅] EL RESPONSIVE, para TODOS los móviles, sin fallo.
    [  ] CLICK EN LOADER, cambia de color => azul/blanco => rojo/blonco.




    //
    let total = 0;
            pokemonArrayTipos.forEach(pokemon => {
                const tipos = pokemon.types.map(tipo => tipo.type.name);

                if (botonTargeret === "todos")
            })
            console.log(pokemonArray[0])
            loader.style.display = "none";
            