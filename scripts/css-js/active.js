const btnTipo = document.querySelectorAll('.btnTipo');
const btnLi = document.querySelectorAll('.tipos');

btnTipo.forEach(boton => {
    boton.addEventListener('click', (eve) => {
        btnLi.forEach(li => li.classList.remove('active'));
        eve.target.parentElement.classList.add("active");
    })
});