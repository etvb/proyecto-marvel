const urlApi = 'http://fundamentos.academlo.com/api/v1/'

// const directoriesURL = urlApi + 'directories'
// fetch(directoriesURL)
//     .then(response => {
//         return response.json()
//     })
//     .then(directories => {
//         //updateDom(directories)
//         console.log(directories)
//     })
//     .catch(error => {
//         alert('tuvimos un error')
//         console.log(error)
//     })

//     function updateDom(directories) {
//         directories.forEach(element => {
//             console.log(element)
//         });
//     }




function getCategories (){
    const categoriesURL = `${urlApi}directories/5c82982e-b63e-4280-8287-4eba0e99716a/categories`
    fetch(categoriesURL)
    .then(response => {
        return response.json()
    })
    .then(categories => {
        console.log(categories)
fillCategories(categories.categories);

}

)
}
getCategories();


function fillCategories(categoria) {
    var tbody = document.getElementById('prueba');
    var data = '';
    categoria.forEach( element => { 
        data += `<a class="cate" href="category.html?${element.uuid}">
        <div >
            <div class="colorw">
            <p class="icon"><i class="fas fa-volume-down icon"></i></p>
            <p class="categoria">${element.name}</p>
            <p class="listening">listening</p>
           </div>
        </div>
        </a>`
        //     data += '<div class="cate">'+
    //     '<div class="colorw">'+
    //     '<p class="icon"><i class="fas fa-volume-down icon"></i></p>'+
    //     '<p class="categoria">'+element.name+'</p>'+
    //     '<p class="listening">listening</p>'+
    //   '</div>'+
    // '</div>'
    });
    tbody.innerHTML = data;
}


function prob (idid){
    console.log(idid);
    

}

// function pruebas(){
//     const categoriesURL = `${urlApi}directories/5c82982e-b63e-4280-8287-4eba0e99716a/categories`
//     fetch(categoriesURL)
//     .then(response => {
//         return response.json()
//     })
//     .then(categories => {


// }

// )
// }

