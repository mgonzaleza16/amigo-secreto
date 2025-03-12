// Array para almacenar los nombres de los amigos
let amigos = [];

/**
 * Agrega un nuevo amigo a la lista.
 * Obtiene el nombre del input, valida que no esté vacío ni duplicado,
 * lo agrega al array y actualiza la lista en la página.
 */
function agregarAmigo() {
  const inputAmigo = document.getElementById('amigo');
  const nombreAmigo = inputAmigo.value.trim();

  if (nombreAmigo === "") {
    alert("¡Por favor, ingresa un nombre!");
    return;
  }

  if (amigos.includes(nombreAmigo)) {
    alert("¡Este amigo ya está en la lista!");
    return;
  }

  amigos.push(nombreAmigo);
  inputAmigo.value = ""; // Limpiar el input después de agregar
  actualizarListaAmigos();
}

/**
 * Actualiza la lista de amigos en la página.
 * Recorre el array `amigos` y agrega cada nombre como un elemento <li>
 * dentro de la lista HTML con id 'listaAmigos'.
 */
function actualizarListaAmigos() {
  const lista = document.getElementById('listaAmigos');
  lista.innerHTML = ''; // Limpiar la lista antes de actualizar

  for (let i = 0; i < amigos.length; i++) {
    const li = document.createElement('li');
    li.textContent = amigos[i];
    lista.appendChild(li);
  }
}

/**
 * Sortea un amigo de la lista de forma aleatoria.
 * Valida que haya amigos en la lista antes de sortear.
 * Muestra el resultado en la página.
 */
function sortearAmigo() {
  if (amigos.length === 0) {
    alert("¡No hay amigos en la lista!");
    return;
  }

  const indiceAleatorio = Math.floor(Math.random() * amigos.length);
  const amigoSorteado = amigos[indiceAleatorio];

  const resultado = document.getElementById('resultado');
  resultado.innerHTML = `¡El amigo sorteado es: ${amigoSorteado}!`;
}