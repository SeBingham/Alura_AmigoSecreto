// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos =[];
function ingresaramigos (elemento,texto)
{
    let elementoHTML = document.querySelectorAll(elemento);
    elementoHTML.innerHTML = texto;
    return;
}
function limpiar (){
    document.querySelector('#valorUsuario').value = '';
}
