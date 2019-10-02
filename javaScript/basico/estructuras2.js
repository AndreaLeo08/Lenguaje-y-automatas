var band = true;

do{

    let respuesta  = prompt("¿Cual es tu cima favorito?");
    switch (respuesta){
        case "lluvia":
            alert("Recuerda llevar un paraguas");
             break;
        case "sol":
            alert("Recuerda lleva ropa ligera");
            break;
        case "nublado":
            alert("Sal a pasear");
            break;
        default:
            band = false;
    }
} while (band);

alert("Adios...");