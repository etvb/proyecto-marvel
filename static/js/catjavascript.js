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


var urls = ["https://www.bigw.com.au/medias/sys_master/images/images/hdf/h89/11686281347102.jpg", 
"https://larepublica.pe/resizer/g0jF-jyJS6VkdGvvyho7r9o8MKE=/646x380/smart/arc-anglerfish-arc2-prod-gruporepublica.s3.amazonaws.com/public/P4LBKGMEEBDTHDYNFUXFHSSCSY.jpg", 
"https://www-cinemascomics-com.exactdn.com/wp-content/uploads/2019/05/spider-man-nuevo-universo-640x320.jpg?strip=all&lossy=1&ssl=1", 
"https://www-cinemascomics-com.exactdn.com/wp-content/uploads/2016/12/Spider-Man-Civil-War-2016-lo-mejor-e1484069518587.jpg?strip=all&lossy=1&w=640&ssl=1",
"https://www-cinemascomics-com.exactdn.com/wp-content/uploads/2019/08/wandavision-1-640x640.jpg?strip=all&lossy=1&ssl=1",
"https://upload.wikimedia.org/wikipedia/commons/thumb/0/04/MarvelLogo.svg/1200px-MarvelLogo.svg.png",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcToXakWhgSWOn0EuRsXvB0JM960uWCEj6-aQIzaevivEuSatmrVRg",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRuGt8ZS3SaHnVGZQM9R1S2QBv3Vr2MODfOqVyGKyiL3FI9IeBmMQ",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAMS6bHawSZHXgHcznuQnFPQqiwtr3prbV3FLf3Ge5K4hsmFHK",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcScYf0NAqoRKxmU5oXL-MmzQQxZGtGgZjV3R5opWh9vwGNV_BGZ",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSMfXk3vo0k861PpwTok3cr-FlOnOghWvKg-hzKAiBlS8GKCEEG",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_uUO5Y6fJm-BisBgfp_CgX7dNkxfzMEDDXSeOXJ-svSjdSKfxgw",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRoolo8HFPjMKYLKlYV34hfUbTxRzE-hCYo6QCQ_AA0VK1I9l5m1Q",
"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTVUIN9vTBpAZDXSNzlD4yc5KigdARwRV9_DYnIoRbf5fp3TQ8Tyw",
]


function fillCategories(categoria) {
    var tbody = document.getElementById('prueba');
    var data = '';
    categoria.forEach( (element, index) => { 
        var styles = `style= "background-image: url(${urls[index]}); background-size:cover; background-position:center"; background-repeat: repeat-x;`

        data += `<a class="cate" href="category.html?${element.uuid}" ${styles}>
        <div >
            <div class="colorw">
            
            <p class="icon"><i class="fas fa-volume-down icon"></i></p>
            <p class="categoria">${element.name}</p>
            <p class="listening">listening</p>
           
           </div>
        </div>
        </a>`

        //document.getElementById("bk"+index).style.background="https://www.bigw.com.au/medias/sys_master/images/images/hdf/h89/11686281347102.jpg"




        //     data += '<div class="cate">'+
    //     '<div class="colorw">'+
    //     '<p class="icon"><i class="fas fa-volume-down icon"></i></p>'+
    //     '<p class="categoria">'+element.name+'</p>'+
    //     '<p class="listening">listening</p>'+
    //   '</div>'+
    // '</div>'
    });
    tbody.innerHTML = data;

};








