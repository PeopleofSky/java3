//clases de vuelo

class Vuelo{
    constructor(numeroDeVuelo, destino, precioAsiento )
    {
        this.numeroDeVuelo= numeroDeVuelo;
        this.destino=destino;
        this. precioAsiento=precioAsiento;
    
        this.generaraAsientos();
    }


    generaraAsientos(){

        this.asientos = [];
        for(let i = 0; i < 30; i++){

         const asiento = new Asiento(i, false);
         
        this.asientos.push(asiento);
        }
    }
}




class Asiento{
    constructor(id, ocupado){
        this.id = id;
        this.ocupado  = ocupado;
    }
}


function obtenerVuelo(numeroDeVuelo) {
    return ListaDeVuelos.find( (vuelo) => {
                return vuelo.numeroDeVuelo === numeroDeVuelo})
    
}

function hayAsientosDisponibles(vuelo, cantidadDeAsientos) {
    const asientosDisponibles = vuelo.asientos.filter( (asiento) => {
        return !asiento.ocupado;
    })

    return asientosDisponibles.length >= cantidadDeAsientos
    
}

 
//Iniciar programa

const ListaDeVuelos = [
new Vuelo("AS2024","California", 164),
new Vuelo("TX1800","Manhattan", 120),
new Vuelo("DE5456","Dember", 80)



];
console.log(ListaDeVuelos)

let vuelosAComprar = prompt("ingrese el numero de vuelo que quiere comprar, ingrese SALIR si desea cancelar programa")

while (vuelosAComprar != "SALIR") {
    const vuelo =obtenerVuelo(vuelosAComprar);
    if (vuelo !== undefined) {
        
        let cantidadDeAsientos =   parseInt (prompt("ingrese cantidad de asientos"))
        while (cantidadDeAsientos <= 0 || !hayAsientosDisponibles(vuelo, cantidadDeAsientos)) {
            cantidadDeAsientos =   parseInt (prompt("ingrese cantidad de asientos"))
        }

        console.log(cantidadDeAsientos)
        alert("Ha seleccionado el vuelo: " + vuelosAComprar + " + numero de asientos: " + cantidadDeAsientos)



    } else {
        alert("numero invalido")
        vuelosAComprar = prompt("ingrese el numero de vuelo que quiere comprar, ingrese SALIR si desea cancelar programa")
    }
    

    

    
    
}



