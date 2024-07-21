function trabajo(event) {
    event.preventDefault();

let nombre=document.getElementById("nombre").value;
alert(`ESTE ES EL CODIGO:  ${nombre}`)

let dope;

switch (drop) {
    case "fecha":
        dope="Fecha"
        break;
    
        case "lugar":
        dope="Lugar"
        break;

    default:
        alert("it is not place")
        break;


    }


    alert(`${dope}`);


}




