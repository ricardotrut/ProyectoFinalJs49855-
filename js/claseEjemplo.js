let cajaP = document.getElementById("caja")

const utl = "https://pokeapi.co/api/v2/pokemon/?limit=3"

fetch(URL)
.then(response => response.json())
.then(data => {

    const pokemons = data.results;

    pokemons.forEach((pokemon)=> { 
        fetch(pokemon.URL)
        .then(response => response.json())
        .then((pokemeonData =>{

            const pokemeonElement = document.crreateElement("div")
            pokemeonElement.innerHTML = `
            <h2> ${pokemnData.name} </h2>
            <img src = "${pokemeonData.sprites.fornt_default}"
            `
            cajaP.appendChild(pokemeonElement)
        } 
        ))
    })

})
.catch()
