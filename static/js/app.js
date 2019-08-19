//para el javascript
const urlApi = "http://fundamentos.academlo.com/api/v1/"

function getDirectories(){
    const dirs = `${urlApi}directories`
    fetch(dirs)
        .then(response => {
            return response.json()
        })
        .then(directories => {
            console.log(directories);
        })
}

getDirectories();