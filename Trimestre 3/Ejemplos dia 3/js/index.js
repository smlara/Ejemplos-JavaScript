window.onload = cargadatos;


 async function cargadatos() {

    await fetch('https://pokeapi.co/api/v2/pokemon/1/').then((response) => {
        return response.json()
    }).then((data) => {
        document.getElementById('nombre').innerHTML = `<b>${data.name}</b>`;
        document.getElementById('imagen').innerHTML = `<img src=${data.sprites.front_default}>`;


    }).catch((error) => {
        console.log(error)
    });

    document.getElementById('itemList').hidden = true;
}
