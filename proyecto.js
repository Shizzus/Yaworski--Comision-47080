function ElegirUnTurno(){
    let entrada = prompt("elegir alguno de estos turnos ingresando el numero que desea: 1)Lunes 10hrs 2)Lunes 11hrs 3)Lunes 12hrs 4)lunes 15hrs 5)Martes 10Hrs 6)Miercoles 15hrs 7)Jueves 13Hrs  ");
let fecha =""
let mensaje =""
switch(parseInt(entrada)){
    case 1:
        fecha="Lunes 10hrs"
        break;
    case 2:
        fecha="Lunes 11hrs"
            break;
    case 3:
        fecha="Lunes 12hrs"
            break;
    case 4:
        fecha="lunes 15hrs"
            break;
    case 5:
        fecha="Martes 10Hrs"
            break;
    case 6:
        fecha="Miercoles 15hrs"
            break;
    case 7:
        fecha="Jueves 13Hrs"
            break;
    default:
        mensaje= "opcion no valida"
}

if (fecha){
    alert("Reservaste el "+fecha)
} else{alert (mensaje)};

}

ElegirUnTurno();

