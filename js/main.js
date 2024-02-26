// Tipo de cambio API
let tc = 0


const apiUrl = `https://openexchangerates.org/api/latest.json?app_id=d59208583e4e45229018fe70d46b12e8`;
fetch(apiUrl)
  .then(response => response.json())
  .then(data => {
    const exchangeRate = data.rates.MXN;
    tc = exchangeRate
    document.getElementById('exchange-rate').innerText = `1 USD = ${exchangeRate} MXN`;
  })
  .catch(error => {
    console.error('Error fetching exchange rate:', error);
  });


/////// Saldo para comprar 

let count = 1;
let saldoAlert = 0;
let saldoInicial = 0;
let saldoCarrito = 0;
let pagar = 0;
let articulos = [];
class articulo {
    constructor(id,modelo,precio){
        this.id = id;
        this.modelo = modelo;
        this.precio = precio;
    }
 
}



let boton = document.getElementById("botonGuardar")
boton.addEventListener("click", function(){
    if(saldoInicial == 0)
    {
        let textSaldo = document.getElementById("saldoInicial")
        saldoAlert = textSaldo.value;
        saldoAlert = saldoAlert/tc
        let displaySaldo = document.getElementById("displaySaldo")

        Swal.fire({
            title: "Quieres agregar $" + saldoAlert + " USD a tu cuenta a un TC de " + tc,
            showDenyButton: true,
            showCancelButton: true,
            confirmButtonText: "Agregar",
            denyButtonText: `Cancelar`
          }).then((result) => {
            /* Read more about isConfirmed, isDenied below */
            if (result.isConfirmed) {
                saldoInicial = saldoAlert//textSaldo.value;
                saldoInicial = parseFloat(saldoAlert)//parseFloat(saldoInicial)
              Swal.fire("Se han agregado $" + saldoInicial + " a tu cuenta", "", "success");
              displaySaldo.innerText = "Tu saldo es de $" + saldoInicial;
            } else if (result.isDenied) {
              Swal.fire("No se agrego el dinero a tu cuenta", "", "info");
            }
          });
    }
    else{
        boton.innerText = "No puedes modificar tu saldo"
        Swal.fire({
            icon: "error",
            title: "Oops... No puedes modificar tu saldo inicial",
          });
    }
})


let comprar1 = document.getElementById("comprar1")
comprar1.addEventListener("click",function(){
if(saldoInicial >= 1500){

    Swal.fire({
        title: "Se ha agregado EC-1000T CTM a tu carrito de compras!",
        text: "$1500",
        icon: "success"
      });

    saldoCarrito = saldoCarrito + 1500
    saldoInicial = saldoInicial - 1500
    displaySaldo.innerText = "Tu saldo es de $" + saldoInicial;
    console.log(saldoCarrito)
    let nuevoart = new articulo(count.toString(),"EC-1000T CTM",1500)
    count++
    articulos.push(nuevoart);
    let saldoInsificiente = document.getElementById("saldoInsuficiente")
    saldoInsificiente.innerText = ""
}else{
    Swal.fire({
        icon: "error",
        title: "No tienes saldo suficiente",
      });
}
})


let comprar2 = document.getElementById("comprar2")
comprar2.addEventListener("click",function(){
if(saldoInicial >= 2200){


    Swal.fire({
        title: "Se ha agregado EC-1000T Evertune a tu carrito de compras!",
        text: "$2200",
        icon: "success"
      });

    saldoCarrito = saldoCarrito + 2200
    saldoInicial = saldoInicial - 2200
    displaySaldo.innerText = "Tu saldo es de $" + saldoInicial;
    console.log(saldoCarrito)
    let nuevoart = new articulo(count.toString(),"EC-1000T EVERTUNE",2200)
    count++
    articulos.push(nuevoart);
    let saldoInsificiente = document.getElementById("saldoInsuficiente")
    saldoInsificiente.innerText = ""
}else{
    Swal.fire({
        icon: "error",
        title: "No tienes saldo suficiente",
      });
}
})

let comprar3 = document.getElementById("comprar3")
comprar3.addEventListener("click",function(){
if(saldoInicial >= 1800){

    Swal.fire({
        title: "Se ha agregado H-1000 a tu carrito de compras!",
        text: "$1800",
        icon: "success"
      });

    saldoCarrito = saldoCarrito + 1800
    saldoInicial = saldoInicial - 1800
    displaySaldo.innerText = "Tu saldo es de $" + saldoInicial;
    console.log(saldoCarrito)
    let nuevoart = new articulo(count.toString(),"H-1000",1800)
    count++
    articulos.push(nuevoart);
    let saldoInsificiente = document.getElementById("saldoInsuficiente")
    saldoInsificiente.innerText = ""
}else{
    Swal.fire({
        icon: "error",
        title: "No tienes saldo suficiente",
      });
}
})

let comprar4 = document.getElementById("comprar4")
comprar4.addEventListener("click",function(){
if(saldoInicial >= 1800){

    Swal.fire({
        title: "Se ha agregado B-Andromeda a tu carrito de compras!",
        text: "$1800",
        icon: "success"
      });

    saldoCarrito = saldoCarrito + 1800
    saldoInicial = saldoInicial - 1800
    displaySaldo.innerText = "Tu saldo es de $" + saldoInicial;
    console.log(saldoCarrito)
    let nuevoart = new articulo(count.toString(),"B-Andromeda",1800)
    count++
    articulos.push(nuevoart);
    let saldoInsificiente = document.getElementById("saldoInsuficiente")
    saldoInsificiente.innerText = ""
}else{
    Swal.fire({
        icon: "error",
        title: "No tienes saldo suficiente",
      });
}
})

let comprar5 = document.getElementById("comprar5")
comprar5.addEventListener("click",function(){
if(saldoInicial >= 1100){

    Swal.fire({
        title: "Se ha agregado SNAPPER CTM a tu carrito de compras!",
        text: "$1100",
        icon: "success"
      });

    saldoCarrito = saldoCarrito + 1100
    saldoInicial = saldoInicial - 1100
    displaySaldo.innerText = "Tu saldo es de $" + saldoInicial;
    console.log(saldoCarrito)
    let nuevoart = new articulo(count.toString(),"SNAPPER CTM",1100)
    count++
    articulos.push(nuevoart);
    let saldoInsificiente = document.getElementById("saldoInsuficiente")
    saldoInsificiente.innerText = ""
}else{
    Swal.fire({
        icon: "error",
        title: "No tienes saldo suficiente",
      });
}
})

let comprar6 = document.getElementById("comprar6")
comprar6.addEventListener("click",function(){
if(saldoInicial >= 1100){

    Swal.fire({
        title: "Se ha agregado P4DC a tu carrito de compras!",
        text: "$1100",
        icon: "success"
      });


    saldoCarrito = saldoCarrito + 1100
    saldoInicial = saldoInicial - 1100
    displaySaldo.innerText = "Tu saldo es de $" + saldoInicial;
    console.log(saldoCarrito)
    let nuevoart = new articulo(count.toString(),"P4DC",1100)
    count++
    articulos.push(nuevoart);
    let saldoInsificiente = document.getElementById("saldoInsuficiente")
    saldoInsificiente.innerText = ""
}else{
    Swal.fire({
        icon: "error",
        title: "No tienes saldo suficiente",
      });
}
})

let carrito = document.getElementById("carrito");

carrito.addEventListener("click", function() {
    
    let message = "<ul>"; 
    articulos.forEach(articulo => {
        message += `<li>ID: ${articulo.id}, Modelo: ${articulo.modelo}, Precio: $${articulo.precio}</li>`;
    });

    message += "</ul>";
    Swal.fire({
        title: "Shopping List",
        html: message,
        confirmButtonText: "Pagar $" + saldoCarrito
    });
});


const articulosJason = JSON.stringify(articulos);


