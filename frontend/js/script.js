document.getElementById("Inicio").addEventListener("click", function() {
    document.getElementById("registroContainer").style.display = "none";
    document.getElementById("modal_contra").style.display = "none";
    document.getElementById("modal_inicio").style.display = "block";
    document.getElementById("container").classList.add("blur-background");
});

document.getElementById("olvide_contra").addEventListener("click", function(){
    document.getElementById("registroContainer").style.display = "none";
    document.getElementById("modal_inicio").style.display = "none";
    document.getElementById("modal_contra").style.display = "block";
    document.getElementById("container").classList.add("blur-background");

})

document.getElementById("Registrarse").addEventListener("click", function(){
    document.getElementById("modal_inicio").style.display = "none";
    document.getElementById("modal_contra").style.display = "none";
    document.getElementById("registroContainer").style.display = "block";
    document.getElementById("container").classList.add("blur-background");

})

document.querySelectorAll(".close-modal").forEach(function(element) {
    element.addEventListener("click", function() {
        document.getElementById("modal_inicio").style.display = "none";
        document.getElementById("modal_contra").style.display = "none";
        document.getElementById("registroContainer").style.display = "none";
        document.getElementById("container").classList.remove("blur-background");
    });
});


document.getElementById("boton_iniciar").addEventListener("click", function() {
    event.preventDefault();
    console.log('Sirve')
});



