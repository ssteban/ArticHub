document.getElementById("menu_boton").addEventListener("click", function(){
    let estilo=document.getElementById("menu").style.display;
    if (estilo=="none"){
        document.getElementById("menu").style.display="block";
    }else{
        document.getElementById("menu").style.display="none";
    }
})

