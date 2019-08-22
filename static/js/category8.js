

    const urlApi = "http://fundamentos.academlo.com/api/v1/";
    var datos = "";
    var homeCategories=document.getElementById("prueba");

    function getCategory(){
        const uuid = "directories/5c82982e-b63e-4280-8287-4eba0e99716a/categories";
        const category =`${urlApi}${uuid}`;
        fetch(category)
        .then(response=> {
            return response.json();
        })
        .then(categories=>{
            console.log(categories)
            categories.categories.forEach((indice,index) => {
                if(index<8){
                    datos+=`
                    <div class="cate col-2">
                    <div class="colorw">
                    <p class="icon"><i class="fas fa-volume-down icon"></i></p>
                    <p class="categoria">${indice.name}</p>
                    <p class="listening">listening</p>
                    </div>
                    </div>`;

                }
            })
            console.log(datos);
            homeCategories.innerHTML = datos;
        });
    }
getCategory();