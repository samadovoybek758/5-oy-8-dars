function createCard(country) {
    return `
     <div id="card">
            <img src=${country.flag} width="200px" height="200px" alt="">
            <h3>${country.country}</h3>
            <p>${country.code}</p>
        </div>
    `
}

const  continer = document.getElementById("continer")
const loader = document.getElementById("loader")

document.addEventListener('DOMContentLoaded', function () {
    fetch("https://cars-pagination.onrender.com/all-countries/")
    .then(response =>  {
        if (response.status == 200) {
            return response.json()
        }
    } )
    .then(data =>{
        data.length && data.forEach(country => {
            let card = createCard(country)
            continer.innerHTML += card
        });
       
    })
    .catch(err=>{
        console.log(err);
    })
    .finally(function () {
        loader.remove()
    })
})