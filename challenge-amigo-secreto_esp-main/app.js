// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function ingresaramigos() {
    const valorUsuario = document.getElementById('amigo').value.trim();
    
    if (valorUsuario === '') {
        alert('El campo no puede estar vacío.');
        document.getElementById('amigo').value = ''; // Limpia el campo
        return;
    }

    amigos.push(valorUsuario);
    document.getElementById('amigo').value = ''; // Limpia el campo
    console.log(amigos); // Muestra el array en la consola (opcional)
}

function sortearAmigo() {
    if (amigos.length === 0) {
        alert('No hay amigos para sortear.');
        return;
    }

    const indexAleatorio = Math.floor(Math.random() * amigos.length);
    const amigoSorteado = amigos[indexAleatorio];
    document.getElementById('resultado').innerHTML = `Amigo Sorteado: ${amigoSorteado}`;
}