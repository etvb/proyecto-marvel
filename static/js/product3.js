const urlApi1 = 'http://fundamentos.academlo.com/api/v1/'
const uuidLibros = '5c82982e-b63e-4280-8287-4eba0e99716a'

function getDirectoriesWithCategorys() {
  const urlCategories = `${urlApi1}/directories/${uuidLibros}/categories`
  fetch(urlCategories)
    .then(directory => directory.json())
    .then(directory => {
      // console.log(directory)
      popCategories(directory.categories)
    })
}

function appendHTML(html, idContainer) {
  const categoriesContainer = document.getElementById(idContainer)
  categoriesContainer.innerHTML = html
}

function getProducts(products) {
  let html = ''
  for (let i = 0; i < 3; i++) {
    html += `
  <div class="card-deck pl-0 pr-0 divfeatures">
    <div class="card card-home col-3 flex-column d-flex pl-0 pr-0">
      <div class="contenedor-img">
        <a href="./product.html?${products[i].uuid}" class="card-img-top img" alt="imagen de la pag">
          <img src="${products[i].image}" class="card-img-top">
              </a>
            </div>
        <div class="card-body d-flex flex-column justify-content-between overflow-hidden">
          <a href="./product.html" class="text-decoration-none text-reset">
            <h4 class="card-title">${products[i].name}</h4>
          </a>
          <p class="card-text">${products[i].description}</p>
          <a href="https://flow.microsoft.com" target="_blank" button type="button" class="btn btn-outline-dark is-small d-block btn-sm-6 col-12">Visit site</a>
        </div>
      </div>
    </div>`
  }
  appendHTML(html, 'featured-products')
}


function getCategoryWithProducts() {
  const uuidFilosofia = 'f5cff243-9ae0-48da-899f-6ca95cc6a200'
  const urlCategory = `${urlApi1}categories/${uuidFilosofia}/products`
  fetch(urlCategory)
    .then(category => category.json())
    .then(category => {
      getProducts(category.products)
    })
}

getCategoryWithProducts()