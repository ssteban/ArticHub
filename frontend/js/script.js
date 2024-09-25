//var ruta="http://127.0.0.1:8000"
var ruta="https://artichub.onrender.com";

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

//menu movil
document.getElementById("InicioM").addEventListener("click", function() {
    document.getElementById("registroContainer").style.display = "none";
    document.getElementById("modal_contra").style.display = "none";
    document.getElementById("modal_inicio").style.display = "block";
    document.getElementById("menu").style.display= "none"
    document.getElementById("container").classList.add("blur-background");
});

document.getElementById("olvide_contra").addEventListener("click", function(){
    document.getElementById("registroContainer").style.display = "none";
    document.getElementById("modal_inicio").style.display = "none";
    document.getElementById("modal_contra").style.display = "block";
    document.getElementById("menu").style.display= "none"
    document.getElementById("container").classList.add("blur-background");

})

document.getElementById("RegistrarseM").addEventListener("click", function(){
    document.getElementById("modal_inicio").style.display = "none";
    document.getElementById("modal_contra").style.display = "none";
    document.getElementById("registroContainer").style.display = "block";
    document.getElementById("menu").style.display= "none"
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

document.getElementById("menu_boton").addEventListener("click", function(){
    let estilo=document.getElementById("menu").style.display;
    if (estilo=="none"){
        document.getElementById("menu").style.display="block";
    }else{
        document.getElementById("menu").style.display="none";
    }
})
//fin menu movil



document.getElementById("boton_iniciar").addEventListener("click", function() {
    event.preventDefault();
    let usuario=document.getElementById('usuario').value;
    let contraseña=document.getElementById('contraseña').value;

    if(!usuario || !contraseña){
        alert("Por favor, completa todos los campos requeridos.")
        return
    }

    fetch(ruta+"/iniciar" ,{
        method:"POST",
        headers:{
            "Content-Type":"application/json"
        },
        body: JSON.stringify({
            usuario, contraseña
        })
    })
    .then(response=> response.json())
    .then(data =>{
        if(data.success){
            alert("Inicio exitoso")
        }else{
            alert(data.mensaje)
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Hubo un problema con el inicio de sesión.');
    });
});

document.getElementById("registrar").addEventListener("click", function() {
    event.preventDefault();
    let usuario=document.getElementById('nombre_usuario').value;
    let correo=document.getElementById('email').value;
    let nombre=document.getElementById('nombre_completo').value;
    let genero=document.querySelector('input[name="genero"]:checked');
    let fecha=document.getElementById('fecha').value;
    let pais=document.getElementById('pais').value;
    let contra=document.getElementById('pass').value;
    let concontra=document.getElementById('conpass').value;
    genero = genero ? genero.value : null;
    if (!usuario || !correo || !nombre || !genero || !fecha || !pais || !contra || !concontra) {
        alert("Por favor, completa todos los campos requeridos.");
        return;
    }
    if (contra!==concontra){
        alert("ambas contraseñas deben coincidir")
        return
    }
    fetch(ruta + '/registrar', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            usuario, correo, nombre, genero, fecha, pais, contra
        })
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert(data.mensaje)
            document.getElementById("registroContainer").style.display = "none"
            document.getElementById("modal_inicio").style.display = "block";
        } else {
            alert(data.mensaje)
        }
    })
    .catch(error => {
        console.error('Error:', error);
        alert('Hubo un problema con el registro del usuario.');
    });
});









