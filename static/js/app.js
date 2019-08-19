//para el javascript
































































const urlApi = "http://fundamentos.academlo.com/api/v1/"
let headerCategory = document.getElementById("headerCategory");
let homeCategories = document.getElementById("homeCategories");
let pagProducts = document.getElementById("contentProducts");
let datos = "";
let datos2="";

function getDirectories(){
    const dirs = `${urlApi}directories`
    fetch(dirs)
        .then(response => {
            return response.json()
        })
        .then(directories => {
            // console.log(directories[0].name);
            headerCategory.innerHTML = directories[4].name;
            // return directories;
        })
}

function getCategory(){
    const uuid = "directories/5c82982e-b63e-4280-8287-4eba0e99716a/categories"
    const category = `${urlApi}${uuid}`;

    fetch(category)
        .then(response=> {
            return response.json();
        })
        .then(categories=>{
            console.log(categories)
            categories.categories.forEach((indice, index) => {
                if(index < 8){
                datos +=`
                <div class="cate">
                <div class="colorw">
                  <p class="icon"><i class="fas fa-volume-down icon"></i></p>
                  <p class="categoria">${indice.name}</p>
                  <p class="listening">listening</p>
                </div>
                </div>`;
                }
            })
            homeCategories.innerHTML = datos;

        });
}

function getProducts(){
    const uuid = "directories/5c82982e-b63e-4280-8287-4eba0e99716a/categories" //cuando funcione los products borrame
    // const uuid = "directories/5c82982e-b63e-4280-8287-4eba0e99716a/categories/f5cff243-9ae0-48da-899f-6ca95cc6a200/products"
    const products = `${urlApi}${uuid}`;
    fetch(products)
        .then(response => {
            return response.json();
        })
        .then(products => {
            // console.log(products.categories);
            products.categories.forEach(indice => {
                datos2 +=`
                <div class="card col-12 col-sm-3 pl-0 pr-0 ml-3 mb-3">
                    <div class="contenedor-img">
                        <img src="/static/img/marvel.png" class="card-img-top img" alt="imagen de la pag">
                    </div>
                    <div class="card-body">
                        <h4 class="card-title">${indice.name}</h4>
                        <p class="card-text">${indice.created_at}</p>
                        <button type="button" class="btn btn-outline-dark btn-sm-6 col-12">visit site</button>
                    </div>
                </div>`;
            });
            console.log(datos2);
            pagProducts.innerHTML = datos2;
        });

}


getDirectories();
// getCategory();
getProducts();
