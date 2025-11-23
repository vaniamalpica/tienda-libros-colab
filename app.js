const libros = [
    { id: 1, titulo: "El Principito", precio: 150 },
    { id: 2, titulo: "Cien Años de Soledad", precio: 220 },
    { id: 3, titulo: "Don Quijote de la Mancha", precio: 180 }
];

let carrito = [];
const listaCarrito = document.getElementById("lista-carrito");
const totalElemento = document.getElementById("total");
const btnVaciar = document.getElementById("btn-vaciar");
const formContacto = document.getElementById("form-contacto");
const mensajeEstado = document.getElementById("mensaje-estado");

document.querySelectorAll(".btn-agregar").forEach(boton => {
    boton.addEventListener("click", () => {
        const articulo = boton.closest(".libro");
        const id = parseInt(articulo.dataset.id, 10);
        const libro = libros.find(l => l.id === id);
        carrito.push(libro);
        renderCarrito();
    });
});

btnVaciar.addEventListener("click", () => {
    carrito = [];
    renderCarrito();
});

function renderCarrito() {
    listaCarrito.innerHTML = "";
    let total = 0;

    carrito.forEach((libro, index) => {
        total += libro.precio;
        const li = document.createElement("li");
        li.textContent = `${libro.titulo} - $${libro.precio}`;
        const btnEliminar = document.createElement("button");
        btnEliminar.textContent = "X";
        btnEliminar.style.backgroundColor = "#c0392b";
        btnEliminar.style.marginLeft = "0.5rem";

        btnEliminar.addEventListener("click", () => {
            carrito.splice(index, 1);
            renderCarrito();
        });

        li.appendChild(btnEliminar);
        listaCarrito.appendChild(li);
    });

    totalElemento.textContent = `Total: $${total}`;
}

formContacto.addEventListener("submit", (e) => {
    e.preventDefault();
    mensajeEstado.textContent = "¡Mensaje enviado correctamente!";
    mensajeEstado.style.color = "green";
    formContacto.reset();
});
