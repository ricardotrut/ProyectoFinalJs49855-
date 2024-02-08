let count = 1;

let button = document.getElementById("button");

button.addEventListener("click", function(){
    
        let email = document.getElementById("exampleFormControlInput1")
        let nombre = document.getElementById("exampleFormControlInput2")
        let apellido = document.getElementById("exampleFormControlInput3")
        let comentario = document.getElementById("exampleFormControlTextarea1")

        localStorage.setItem("id",count)
        localStorage.setItem("email",email.value)
        localStorage.setItem("nombre",nombre.value)
        localStorage.setItem("apellido",apellido.value)
        localStorage.setItem("comentario",comentario.value)

})