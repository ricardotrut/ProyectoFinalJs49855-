/////// Saldo para comprar 

let count = 1;
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
        saldoInicial = textSaldo.value;
        saldoInicial = parseFloat(saldoInicial)
        console.log("El saldo Inicial es $" + saldoInicial)
        let displaySaldo = document.getElementById("displaySaldo")
        displaySaldo.innerText = "Tu saldo es de $" + saldoInicial;
    }
    else{
        boton.innerText = "No puedes modificar tu saldo"
    }
})


let comprar1 = document.getElementById("comprar1")
comprar1.addEventListener("click",function(){
if(saldoInicial >= 1500){
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
    let saldoInsificiente = document.getElementById("saldoInsuficiente")
    saldoInsificiente.innerText = "No tienes saldo suficiente"
}
})


let comprar2 = document.getElementById("comprar2")
comprar2.addEventListener("click",function(){
if(saldoInicial >= 2200){
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
    let saldoInsificiente = document.getElementById("saldoInsuficiente")
    saldoInsificiente.innerText = "No tienes saldo suficiente"
}
})

let comprar3 = document.getElementById("comprar3")
comprar3.addEventListener("click",function(){
if(saldoInicial >= 1800){
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
    let saldoInsificiente = document.getElementById("saldoInsuficiente")
    saldoInsificiente.innerText = "No tienes saldo suficiente"
}
})

let comprar4 = document.getElementById("comprar4")
comprar4.addEventListener("click",function(){
if(saldoInicial >= 1800){
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
    let saldoInsificiente = document.getElementById("saldoInsuficiente")
    saldoInsificiente.innerText = "No tienes saldo suficiente"
}
})

let comprar5 = document.getElementById("comprar5")
comprar5.addEventListener("click",function(){
if(saldoInicial >= 1100){
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
    let saldoInsificiente = document.getElementById("saldoInsuficiente")
    saldoInsificiente.innerText = "No tienes saldo suficiente"
}
})

let comprar6 = document.getElementById("comprar6")
comprar6.addEventListener("click",function(){
if(saldoInicial >= 1100){
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
    let saldoInsificiente = document.getElementById("saldoInsuficiente")
    saldoInsificiente.innerText = "No tienes saldo suficiente"
}
})


const articulosJason = JSON.stringify(articulos);