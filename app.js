// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.
let amigos = [];

function agregarAmigo() {
    // Validamos que el campo no esté vacío
    if (document.getElementById("amigo").value.length > 0) {
        amigos.push(document.getElementById("amigo").value);
    } else {
        alert("Por favor, ingresa un nombre válido.");
    }
    document.getElementById("amigo").value = "";
    actualizarLista();
}

function actualizarLista() {
    let lista = document.getElementById("listaAmigos");
    lista.innerHTML = "";

    //usamos un ciclo for
    for (let i = 0; i < amigos.length; i++) {
        let li = document.createElement("li");
        li.textContent = amigos[i]; // Agregamos el nombre del amigo a la lista
        lista.appendChild(li); // Agregamos el elemento li a la lista
    }
    
}

function sortearAmigo() {
    if (amigos.length > 0) {
        let indice = Math.floor(Math.random() * amigos.length);
        let amigoSorteado = amigos[indice];
        document.getElementById("resultado").textContent = "El amigo secreto es: " + amigoSorteado;
    } else {
        document.getElementById("resultado").textContent = "No hay amigos para sortear.";
    }
}

function reiniciar() {
    amigos = [];
    actualizarLista();
    document.getElementById("resultado").textContent = "";
}