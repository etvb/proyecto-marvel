

    const urlApi = "http://fundamentos.academlo.com/api/v1/"
    function getCategory(){
        const uuid = "directories/5c82982e-b63e-4280-8287-4eba0e99716a/categories";
        const category ='${urlApi}${uuid}';
        fetch(category)
        .then(response=> {
            return response.json();
        })
        then(categories=>{
            console.log(categories)
            categories.categories.array.forEach((indice,index) => {
                if(index>8){
                    datos+=`
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
