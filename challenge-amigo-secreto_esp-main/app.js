// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function ingresaramigos() {
    const valorUsuario = document.getElementById('amigo').value.trim();
    
    if (valorUsuario === '') {
        alert('El campo no puede estar vacío.');
        document.getElementById('amigo').value = ''; 
        return;
    }

    amigos.push(valorUsuario);
    document.getElementById('amigo').value = ''; 
    mostrarListaAmigos(); 
}

function mostrarListaAmigos() {
    const lista = document.getElementById('listaAmigos');
    lista.innerHTML = ''; // Limpia la lista existente

    for (let i = 0; i < amigos.length; i++) {
        const li = document.createElement('li');
        li.textContent = amigos[i];
        lista.appendChild(li); 
    }
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