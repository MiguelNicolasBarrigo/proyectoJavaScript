

function vuelos() {
    alert("Bienvenido a MNB tu agencia de vuelos ideal, te llevamos de Córdoba a donde vos quieras");
    let ingreso = prompt("Ingresa tu nombre y apellido para saber el precio de los vuelos");

    let pasajes = prompt("Que vuelos desea elegir " + "" + ingreso + "" + "\n 1- Vuelos Nacionales \n 2-Vuelos Internacionales ");



    if (pasajes == 1) {
        let vuelosNacionales = prompt("A que aeropuerto desea viajar \n a) Buenos Aires \n b)Chubut \n c) Santa Fé \n d) Misiones \n e) Salir");

        while (vuelosNacionales !== "e") {
            switch (vuelosNacionales) {
                case "a":
                    alert("El vuelo con destino a Buenos Aires cuesta $15000 ida y vuelta");
                    break;
                case "b":
                    alert("El vuelo con destino a Chubut cuesta $25000 ida y vuelta");
                    break;
                case "c":
                    alert("El vuelo con destino a Santa Fé cuesta $10000 ida y vuelta");
                    break;
                case "d":
                    alert("El vuelo con destino a Misiones cuesta $18000 ida y vuelta");
                    break;

                default:
                    break;
            }
            vuelosNacionales = prompt("A que aeropuerto desea viajar \n a) Buenos Aires \n b)Chubut \n c) Santa Fé \n d) Misiones \n e) Salir");
        }

    } else if(pasajes == 2) {
        let vuelosInternacionales = prompt("A que aeropuerto desea viajar \n a) Brasil \n b)Uruguay \n c) Paraguay \n d) Chile \n e) Salir");
        while (vuelosInternacionales != "e") {
            switch (vuelosInternacionales) {
                case "a":
                    alert("El vuelo con destino a Brasil cuesta $40000 ida y vuelta");
                    break;
                case "b":
                    alert("El vuelo con destino a Uruguay cuesta $35000 ida y vuelta");
                    break;
                case "c":
                    alert("El vuelo con destino a Paraguay cuesta $32000 ida y vuelta");
                    break;
                case "d":
                    alert("El vuelo con destino a Chile cuesta $30000 ida y vuelta");
                    break;
                default:
                    break;
            }
            vuelosInternacionales = prompt("A que aeropuerto desea viajar \n a) Brasil \n b)Uruguay \n c) Paraguay \n d) Chile \n e) Salir");
        }
    }    



}
vuelos();

let comunicate = alert ("Si te interesaron nuestras tarifas de viajes o tenes alfuna consulta,  dejanos tus datos y nos comunicaremos con vos")

function comunicar () {
    let mensaje= prompt ("Si queres que nos comuniquemos preciona 1, de lo contrario 2");

    if (mensaje == "1") {
        prompt("Dejanos tu email y nos comunicaremos a la brevedad. Muchas gracias.")
        
    } else if ( mensaje == "2"){
        alert("Gracias por visitarnos")
    }
}

comunicar()















