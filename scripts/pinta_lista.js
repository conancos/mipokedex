import { POKEMONS_DATA, $lista_pokemon } from './main.js';

export function pinta_lista(pokemonId) {
    /* const $lista_pokemon = document.querySelector('#lista_pokemon'); */
    
    const pokemon = POKEMONS_DATA[pokemonId];
    if (!pokemon) {
        console.error('No se encontró ningún Pokémon con el ID ${pokemonId}')
        return;
    }

    let {id, name, img, grito1, grito2, tipos, ataque, defensa, animacion, altura, peso } = pokemon;
        
    
    // Los tipos vienen en un arra de 1 o 2 elementos, tengo que pintarlos y separados.
    let sacaLosTipos = tipos.map(tipo => {
        let tipoId = document.getElementById(`${tipo}`).innerHTML;
        return `<p class=${tipo}>${tipoId}</p>`
    })
    
    sacaLosTipos = sacaLosTipos.join('');


    // 🔥 Y aquí 🎨 cada Pokémon 💥 ❗❗❗
    const article = document.createElement("article");
    article.classList.add("container-card");
    
    article.innerHTML = 
        `
        <header class="header-card">
            <h2>${name.toUpperCase()}</h2>
            <span># ${id}</span>
        </header>
        <section>
            <figure class="container-img">
                <img src="${img}" alt="Imagen de ${name}" loading="lazy"/>
            </figure>
            <div class="habilidades">
                <p class="habilidad"><strong>⚔</strong> ${ataque}</p>
                <p class="habilidad">${defensa} <strong>🛡</strong></p>
            </div>
            <div class="tipos">
                ${sacaLosTipos}
            </div>
        </section>
        <footer>
            <section class="grito-juego">
                <button class="grito1 grito" data-sound1="${grito1}" title="Grito o sonido de ataque en el juego">GRITO</button>
                <button class="grito2 grito" data-sound2="${grito2}" title="Grito o sonido de ataque en el juego">GRITO</button>
            </section>
            <section class="medidas">
                <span class="medida">${altura}</span> |
                <span class="medida">${peso}</span>
            </section>
        </footer>
    `;

    $lista_pokemon.appendChild(article);

    // :Over para la animación:
    //const containerImg = article.querySelector('.container-img')
    const pokeImage = article.querySelector('.container-img img')

    pokeImage.addEventListener('mouseenter', (event) => {
        event.target.src = animacion;
        pokeImage.addEventListener('mouseleave', () => {
            event.target.src = img;
        })
    })
};

// Toca ahora ir con el evento de escucha de los gritos. document.querySelector('.grito').onClick = grito = new Audio() y grito.play()