const libros = [
    { titulo: "Los crímenes de la calle Morgue", autor: "Edgar Allan Poe", genero: "Misterio", año: 1841, calidad: "Tapa Dura", portada: "img/los crimenes de la calle morgue.jpg" },
    { titulo: "1984", autor: "George Orwell", genero: "Distopía", año: 1949, calidad: "Tapa Dura", portada: "img/1984.jpg" },
    { titulo: "El Hobbit", autor: "J.R.R. Tolkien", genero: "Fantasía", año: 1937, calidad: "Tapa Dura", portada: "img/El hobbit.jpg" },
    { titulo: "The Maze Runner", autor: "James Dashner", genero: "Ficción", año: 2009, calidad: "Tapa Blanda", portada:"img/the maze runner.jpg" },
    { titulo: "Orgullo y prejuicio", autor: "Jane Austen", genero: "Romance", año: 1813, calidad: "Tapa Dura", portada: "img/Orgullo y prejuicio.jpg" },
    { titulo: "El Resplandor", autor: "Stephen King", genero: "Terror", año: 1977, calidad: "Tapa Dura", portada: "img/EL RESPLANDOR .jpg" },
    { titulo: "La sombra del viento", autor: "Carlos Ruiz Zafón", genero: "Misterio", año: 2001, calidad: "Tapa Blanda", portada: "img/la sombra del viento.jpg" },
    { titulo: "El código Da Vinci", autor: "Dan Brown", genero: "Thriller", año: 2003, calidad: "Tapa Blanda", portada: "img/el codigo Da Vinci.jpg" },
    { titulo: "El señor de los anillos", autor: "J.R.R. Tolkien", genero: "Fantasía", año: 1954, calidad: "Tapa Blanda", portada: "img/el señor de los anillos.jpg" }
];

const contenedor = document.getElementById("contenedor");

function mostrarLibros(lista) {
    contenedor.innerHTML = "";

  //map
    lista.map(libro => {
        const div = document.createElement("div");
        div.classList.add("item");
        div.innerHTML = `
        <img src="${libro.portada}" alt="Portada de ${libro.titulo}" class="portada">
        <h3>${libro.titulo}</h3>
        <p><strong>Autor:</strong> ${libro.autor}</p>
        <p><strong>Género:</strong> ${libro.genero}</p>
        <p><strong>Año:</strong> ${libro.año}</p>
        <p><strong>Calidad:</strong> ${libro.calidad}</p>
        `;
        contenedor.appendChild(div);
});
}

mostrarLibros(libros);

document.getElementById("btnFiltrar").addEventListener("click", () => {
    //filter
    const librosFantasía = libros.filter(libro => libro.genero === "Fantasía");

    mostrarLibros(librosFantasía);
});

document.getElementById("btnBuscar").addEventListener("click", () => {
    //find
    const libroBuscado = libros.find(libro => libro.titulo === "1984");

contenedor.innerHTML = "";
    if(libroBuscado) {
    
        const div = document.createElement("div");
        div.classList.add("item");
        div.innerHTML = `
            <h3>${libroBuscado.titulo}</h3>
            <p><strong>Autor:</strong> ${libroBuscado.autor}</p>
            <p><strong>Género:</strong> ${libroBuscado.genero}</p>
            <p><strong>Año:</strong> ${libroBuscado.año}</p>
            <p><strong>Calidad:</strong> ${libroBuscado.calidad}</p>
            `;
    contenedor.appendChild(div);
    } else {

    contenedor.textContent = "Libro no encontrado.";
}
});

document.getElementById("btnMostrarTodos").addEventListener("click", () => {
    mostrarLibros(libros);
});
