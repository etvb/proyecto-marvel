//para el javascript
































































const urlApi = "http://fundamentos.academlo.com/api/v1/"
let headerCategory = document.getElementById("headerCategory");
// let homeCategories = document.getElementById("homeCategories");
let pagProducts = document.getElementById("contentProducts");
// let datos = "";
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
    let uuidProducto = document.location.href.split('?');
    const products = `http://fundamentos.academlo.com/api/v1/categories/${uuidProducto[1]}/products`;
    
    fetch(products)
        .then(response => {
            return response.json();
        })
        .then(products => {
            console.log(products);
            headerCategory.innerHTML = products.name;

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
            pagProducts.innerHTML = datos2;
        });
}

function dibujar(){
    let direccion = document.location.href.split('?')[1];
    // console.log(direccion);
    let variables = direccion.split('&');
    console.log(variables);
    //  Imagn.innerHTML = variables[0]
    headerProduct.innerHTML = unescape(variables[1]); 

}


// getDirectories();
// getCategory();
getProducts();
dibujar();


