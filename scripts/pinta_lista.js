import { POKEMONS_DATA, loader } from './main.js';
export const $lista_pokemon = document.getElementById('lista_pokemon');


export function pinta_lista(pokemonId) {

    loader.style.display = "block"; // Parece que no se ve, después del de la introducción.
    const pokemon = POKEMONS_DATA[pokemonId];
    if (!pokemon) {
        console.error('No se encontró ningún Pokémon con el ID ${pokemonId}')
        return
    };
    let {id, name, img, grito1, grito2, tipos, ataque, defensa, animacion, altura, peso } = pokemon
;
    
        // separamos los tipos
    let sacaLosTipos = tipos.map(tipo => {
        let tipoId = document.getElementById(`${tipo}`).innerHTML;
        return `<p class=${tipo}>${tipoId}</p>`
    })
    sacaLosTipos = sacaLosTipos.join('')
;

        //Crea y da clase y el contenido, falta el appendChild() cuando termine de pintarlo.
    const article = document.createElement("article");
    article.classList.add("container-card");
    //💥
    article.innerHTML = 
        `
        <header class="header-card">
            <h2>${name.toUpperCase()}</h2>
            <span># ${id.toString().padStart(5, 0)}</span>
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
                ${extraerTipos}
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

    loader.style.display = "none"; // Parece que no se ve, después del de la introducción.
    $lista_pokemon.appendChild(article);

    
    // :Over para la animación:
    const pokeImage = article.querySelector('.container-img img')

    pokeImage.addEventListener('mouseenter', (event) => {
        event.target.src = animacion;
        pokeImage.addEventListener('mouseleave', () => {
            event.target.src = img;
        })
    })
;

//Gritos de guerra en el juego.
    const botonGrito1 = article.querySelector('.grito1');
    const botonGrito2 = article.querySelector('.grito2');
    botonGrito1.addEventListener('click', () => {
        const audioGrito1 = new Audio();
        audioGrito1.src = botonGrito1.dataset.sound1;
        audioGrito1.load();
        audioGrito1.play();
    });

    botonGrito2.addEventListener('click', () => {
        const audioGrito2 = new Audio();
        if (grito2 == null) {
            botonGrito2.innerHTML = "No tiene";
            return;
        } else {
            audioGrito2.src = botonGrito2.dataset.sound2;
            audioGrito2.load();
            audioGrito2.play();
        }
    });
};