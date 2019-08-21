
const urlApi = "http://fundamentos.academlo.com/api/v1/"
let headerCategory = document.getElementById("headerCategory");
let pagProducts = document.getElementById("contentProducts");
let datos2="";
let tituloProduct="";

// let uuidProducto = document.location.href.split('?');
// console.log(uuidProducto);

// function getDirectories(){
//     const dirs = `${urlApi}directories`
//     fetch(dirs)
//         .then(response => {
//             return response.json()
//         })
//         .then(directories => {
//             // console.log(directories[0].name);
//             headerCategory.innerHTML = directories[4].name;
//             // return directories;
//         })
// }

// function getCategory(){
//     const uuid = "directories/5c82982e-b63e-4280-8287-4eba0e99716a/categories"
//     const category = `${urlApi}${uuid}`;

//     fetch(category)
//         .then(response=> {
//             return response.json();
//         })
//         .then(categories=>{
//             console.log(categories)
//             categories.categories.forEach((indice, index) => {
//                 if(index < 8){
//                 datos +=`
//                 <div class="cate">
//                 <div class="colorw">
//                   <p class="icon"><i class="fas fa-volume-down icon"></i></p>
//                   <p class="categoria">${indice.name}</p>
//                   <p class="listening">listening</p>
//                 </div>
//                 </div>`;
//                 }
//             })
//             homeCategories.innerHTML = datos;

//         });
// }

function getProducts(){
    let uuidProducto = document.location.href.split('?'); //obtenemos el uuid de categorias, esta la obtenemos del url despues de darle clic a una categoria. Ese uuid lo mandamos en el <a> que esta en el archivo catjavascript,js
    const products = `http://fundamentos.academlo.com/api/v1/categories/${uuidProducto[1]}/products`; //el uuid de categorias lo concatenamos en la ruta del api para obtener los productos de cada categorias
    
    fetch(products)
        .then(response => {
            return response.json();
        })
        .then(products => {
            // console.log(products);
            headerCategory.innerHTML = products.name; //titulo de la pag. que se muestra en HTML.
//Recorremos el arreglo de productos y lo almacenamos en la variable datos2.
//con esto le pasamos por la url las variables que ocupamos para crear la pag. del producto individual.
//<a href="index.html?${indice.image}&${indice.name}&${indice.description}&${indice.url}"></a>
            products.products.forEach(indice => {
                datos2 +=`
                <a href="index.html?${indice.image}&${indice.name}&${indice.description}&${indice.url}"> 
                <div class="card col-12 col-md-3 pl-0 pr-2 pr-md-0 ml-3 mb-3">
                    <div class="contenedor-img">
                        <img src="${indice.image}" class="card-img-top img" alt="imagen de la pag">
                    </div>
                    <div class="card-body">
                        <h4 class="card-title">${indice.name}</h4>
                        <p class="card-text">${indice.description}</p>
                        <a href="${indice.url}" target="_blanck>
                         <button type="button" class="btn btn-outline-dark btn-sm-6 col-12">visit site</button>
                        </a>
                    </div>
                </div>
                </a>`;
            });
            // console.log(datos2);
            pagProducts.innerHTML = datos2; //con esto hacemos que vea en el html los productos.
        });
}

//Pinta la pag. individual del producto
function dibujar(){
    let direccion = document.location.href.split('?')[1];//obtenemos las variables de la url y lo guardamos en la variable direccion.
    // console.log(direccion);
    let variables = direccion.split('&');//separamos las variables y as gaurdamos en variables, es un arreglo lo que obtenemos
    let imagen = variables[0];
   let headerProduct = unescape(variables[1]); 
    let descripcion = unescape(variables[2]);
    let url = variables[3];
    // console.log(variables);
    let data = `<div class="row justify-content-between"> 
    <div class="container col-6">
        <div class="row h-75 ">
            <h2 >${headerProduct}</h2>
            <p id="descripcion">${descripcion}</p>
        </div>
        <div class="row h-25 align-items-end justify-content-between">
            <a href="${url}" target="_blanck" class="">
                <button type="button" class="btn btn-outline-dark ">visit site</button>
            </a>
            <div class="">
                <span>Share</span>
                <a href="#"><span class="icon-facebook-with-circle h5 color"></span></a>
                <a href="#"><span class="icon-twitter-with-circle h5 color"></span></a>
             </div>
        </div>
        
    </div>
    <div class="col-6 contenedorFimg ">
        <img class="w-100" src="${imagen}" alt="">
    </div>
</div>`
    main.innerHTML = data;

}


// getDirectories();
// getCategory();
getProducts();
dibujar();


