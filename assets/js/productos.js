fetch('https://fakestoreemma.onrender.com/products')
    .then(res => res.json())
    .then(json => catalogo(json));


function catalogo(productos) {
    const catalogo = document.querySelector('#productos')
    console.log(productos)
    productos.forEach(producto => {
        catalogo.innerHTML += `
            <div class="card" style="width: 18rem;">
                <img src="${producto.image}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${producto.title}</h5>
                    <p class="card-text">${producto.description}</p>
                    <h6 class="card-text">${producto.price}</h6>
                    <a href="#" class="btn btn-outline-success">Añadir al carrito</a>
                </div>
            </div>`;
    });
}
