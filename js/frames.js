   
function frames(variable){
        document.getElementById("enframe").src="pages/home.html";
        document.getElementById("enframe").height="580";
    if (variable==1){
        document.getElementById("enframe").src="pages/home.html";
        document.getElementById("enframe").height="580";
    }
    else if (variable==2){
        document.getElementById("enframe").src="pages/programa.html";
        document.getElementById("enframe").height="580";
    }
    else if (variable==3){
        document.getElementById("enframe").src="pages/cursillos.html";
        document.getElementById("enframe").height="650";
    }
    else if (variable==4){
        document.getElementById("enframe").src="pages/charlas.html";
        document.getElementById("enframe").height="700";
    }   
    else if (variable==5){
        document.getElementById("enframe").src="pages/postulacion.html";
        document.getElementById("enframe").height="650";
    }
    else if (variable==6){
        document.getElementById("enframe").src="pages/patrocinadores.html";
        document.getElementById("enframe").height="580";
    }
    else if (variable==7){
        document.getElementById("enframe").src="pages/contacto.html";  
        document.getElementById("enframe").height="580";
    }
} 
