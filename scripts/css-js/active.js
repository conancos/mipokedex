const btnTipo = document.querySelectorAll('.btnTipo');
const btnLi = document.querySelectorAll('.tipos');

btnTipo.forEach(boton => {
    boton.addEventListener('click', (eve) => {
        // X consola \ Remuevo clase .active \ Y le hago objetivo al padre y le doy la clase.
        console.log("Botón activo", eve.target.innerText);
        btnLi.forEach(li => li.classList.remove('active'));
        eve.target.parentElement.classList.add("active");
    })
});