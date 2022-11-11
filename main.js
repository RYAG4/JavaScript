//document.write ("<p>¿Cual es tu nombre jugador?</p>")
$("dialogos").innerHTML = `<p>¿Cual es tu nombre jugador?</p>`


//const hablacion = document.querySelector(`#hablar`)
const desaparecido = document.querySelector("#desaparecido")
const btnR = document.querySelector("#btnResp")
const txtUser = document.querySelector(`#textoUsuario`);

btnR.addEventListener(`click`, formInicio)
desaparecido.addEventListener(`click`, conversar)
//hablacion.addEventListener(`click`, hablar)

let nombre = "";
function formInicio(e){
    console.log(txtUser.value)
    btnR.classList.add(`oculto`);
    desaparecido.classList.remove(`oculto`);
    console.log(`hola`)
    nombre = txtUser.value
    $("respuestas").innerHTML = `<p>me llamo ${nombre}</p>`
    $("dialogos").innerHTML = `<p>-Bienvenido a lo raro ${nombre}</p>`
    menu();

    e.preventDefault();
}

let miValorDeseado = "";

function conversar(e){
    console.log(txtUser.value);
    miValorDeseado = txtUser.value;
    //desaparecido.classList.add(`oculto`);
    //btnR.classList.add(`oculto`);
    //hablacion.classList.remove(`oculto`);


    e.preventDefault();
}

/*let hablando = "";
function hablar(e){
    console.log(txtUser.value)
    console.log(`hablar`)
    hablando = txtUser.value;
    e.preventDefault();
}*/





/*const form = document.querySelector(`form`);
let miValorDeseado = "";

form.addEventListener(`submit`, (evt) => {
	evt.preventDefault();
	let entrada = document.querySelector("input");
	miValorDeseado = entrada.value;
});*/



/*const form = document.querySelector(`form`);
let miValorDeseado = "";
form.addEventListener(`submit`, (evt) => {
    evt.preventDefault();
    let entrada = document.querySelector("input");
    miValorDeseado = entrada.value;
    console.log("Dijiste");
    console.log(entrada.value);
    //console.log(evt.target[0].value);
    /*if(entrada.value == "si") {
        console.log("halleluya");
    } else {
        console.log("no puedes hacer esto");
    }
    let nombre = entrada.value

    if (nombre == ""){
        console.error("ERROR");
    } else {
        $("respuestas").innerHTML = `<p>me llamo ${nombre}</p>`


        //console.log ("me llamo " + nombre);
        $("dialogos").innerHTML = `<p>-Bienvenido a lo raro ${nombre}</p>`

       // document.write ("<p>-Bienvenido a lo raro " + nombre + "</p>");
        menu();
    }
    
}); */




//let nombre = entrada.value
//console.log (nombre);
function huir(){
    $("dialogos").innerHTML = `<p>-VUELVE AQUIIIIII!!!!!</p><p>.......... . . .  .  .  .   .   .   .     .       .      .</p>`

    //document.write ("<p>-VUELVE AQUIIIIII!!!!!</p>");
    //document.write ("<p>.......... . . .  .  .  .   .   .   .     .       .      .</p>");
}

//Protagonista (apunte 2, 1)
let identidad = nombre;
const protagonista = {
    identidad: identidad,
    edad: 16,
    valor: 5
}
//class objetos (apunte 3)
class objeto {
    constructor (nombre, valorSentimental, descripcion) {
        this.nombre = nombre;
        this.valorSentimental = valorSentimental;
        this.descripcion = descripcion;
    }
}
//objetos
/*let lapiz = new objeto ("Lapiz", 2, "Un viejo lapiz que te ha acompañado por mucho tiempo")
let cuaderno = new objeto ("Cuaderno", 0, "Solo un cuaderno")
let paseEstudiantil = new objeto ("Pase estudiantil", 0, "Un pase necesario para ingresar a ciertos lugares de la escuela")
let llaves = new objeto ("Llaves", 1, "Las preciosas llaves de tu habitacion")*/


//Inventario (apunte 4)
//let mochila = ["Lapiz","Cuaderno","Pase de estuduante","Llaves"]





//ERROR = NO FUNCIONA NINGUNA DE LAS DOS OPCIONES (CONSULTAR PORQUE)

const mochi = document.querySelector ("#mochi")
mochi.addEventListener("click", function uwu(){for (let i=0; i<sessionStorage.length; i+=1){
    let clave =sessionStorage.key(i)
    $("inventario").innerHTML = `<p> ${clave} Valor sentimental: ${sessionStorage.getItem(clave)}</p>`
    console.log(clave + " Valor sentimental:" + sessionStorage.getItem(clave));
}});




//Inicio

/*if (nombre == ""){
    console.error("ERROR");
} else {
    console.log ("me llamo " + nombre);
    document.write ("-Bienvenido a lo raro " + nombre);
    menu();
}*/

// const desaparecido = document.querySelector("#desaparecido")
//desaparecido.classList.remove(`oculto`)

//const btn = document.querySelector("#btn")
//btn.classList.add(`oculto`)


function menu (){
    $("pensamientos").innerHTML = `<p>Que deberia hacer?</p><p>1: Iniciar</p><p>2: No hacer nada</p><p>3: Escapar</p>`
    console.log("hola" + miValorDeseado)

    /*console.log ("1: Iniciar");
    console.log ("2: No hacer nada");
    console.log ("3: Escapar");*/

    //let op = prompt ("Que quieres hacer?");


    //CAMBIO DEL SWITCH POR IF
    if(miValorDeseado == "1"){
        console.log("comenzamos");
        juego();
    } if (miValorDeseado == "2"){
        $("respuestas").innerHTML = `<p>(No he echo nada por un rato... que aburrido)</p>`
        console.log ("No hacer nada");
        menu();
    } if (miValorDeseado == "3"){
        huir()
        $("respuestas").innerHTML = `<p>(Corri sin rumbo hasta morir de hambre)</p>`
        console.log("escapar");
    }


//SWITCH ORIGINAL

    /*switch (miValorDeseado){
        case "3":
            huir()
            $("respuestas").innerHTML = `<p>(Corri sin rumbo hasta morir de hambre)</p>`

            //console.error ("Corriste sin rumbo hasta morir de hambre");
            break;
        case "2":
            $("respuestas").innerHTML = `<p>(No he echo nada por un rato... que aburrido)</p>`

            //console.log ("No has echo nada por un rato... que aburrido");
            menu();
            break;
        case "1":
            juego()
            break;
        /*default:
            $("pensamientos").innerHTML = `<p>Por alguna razon no puedo hacerlo</p>`

            //console.warn ("No puedes hacer eso");
            menu();

    }*/
}


function juego (){
    $("respuestas").innerHTML = `<p>(Abri mis ojos lentamente por la luz)</p>`
    $("dialogos").innerHTML = `<p>Al fin despiertas!!</p>`
    $("respuestas").innerHTML += `<p>Quien anda ahi??</p>`


    //document.write ("<p>abres los ojos y ves un gato... no sabes porque pero te suena conocido</p>");
    //document.write ("<p>-Al fin despiertas " + nombre + "!!</p>");
    //console.log("Quien esta hablando?");
    
    //let accion = prompt("Quieres moverte?").toLowerCase();
    $("pensamientos").innerHTML = `<p>me muevo?</p>`
    if (miValorDeseado == "si"){
        $("respuestas").innerHTML = `<p>(Intente moverme pero cai al intentar pararme)</p>`

        //document.write ("<p>Has intentado mover tu cuerpo pero te enredaste con tu cola y caiste. Si, cola, has descubierto que tu cuerpo cambio y ahora tienes una extraña cola de gato</p>");
        
        //let respuesta;
        $("dialogos").innerHTML = `<p>Estas bien?</p>`

        //document.write ("<p>-Estas bien?</p>");
        Imagen = document.images[0].setAttribute(`src`, "Imagenes/f2cbd317-1992-43bb-a52c-29e8107bc321.jfif")
        Imagen = document.images[0].setAttribute(`width`, "100")

        do{
            //respuesta = prompt ("Veamos, si estas bien dime cuanto es 2 x 45");
            //console.log (respuesta);
            $("dialogos").innerHTML += `<p>Si realmente estas bien dime cuanto es 2 x 45</p>`

            if (miValorDeseado == "90"){
                $("dialogos").innerHTML = `<p>Parece que aun puedes pensar, que bueno</p><p>Descansa un poco, mas tarde te dire que paso</p>`
                $("respuestas").innerHTML = `<p>(Me volvi a recostar en la cama y cerre mis ojos esparando por saber como llegue a este lugar)</p><p>(Despierte en una habitacion a solas, a mi alrededor solo puedo ver un espejo, un armario y un escritorio)</p>`

                //document.write ("<p>-Parece que aun puedes pensar, que bueno</p>");
                //document.write ("<p>-descansa un poco, mas tarde te dire que paso</p>");
                //document.write ("<p>Te volviste a recostar en la cama y cerraste los ojos esparando por saber como llegaste a ese lugar</p>")
                //document.write ("<p>... Iniciando sistema ...</p>")
                //document.write ("<p>-Bienvenido " + nombre + "</p>")
                //document.write ("<p>Despiertas en una habitacion a solas, a tu alrededor solo puedes ver un espejo, el armario y el escritorio</p>")
           
                Imagen = document.images[0].setAttribute(`src`, "imagenes/OIP (1).jfif")
                Imagen = document.images[0].setAttribute(`width`, "40l")



                accion1();
            } /*else {P
                $("dialogos").innerHTML = `<p>Tu puedes intenta otra vez, ¿¿cuanto es 2 x 45??</p>`

                //document.write ("<p>-Tu puedes intenta otra vez</p>");
            }*/
        } while (miValorDeseado != "90");
        //} while (!(respuesta == "90"));
    } /*else {
        $("pensamientos").innerHTML = `<p>-Parece que no entendiste, empezare de nuevo</p>`

        //document.write ("<p>-Parece que no entendiste, empezare de nuevo</p>");
        juego();
    }*/
}

/*let agarrar = prompt ("Que elemento quieres juntar?")
function juntarDejar (){
    if (agarrar == "1")
    document.write ("has juntado el objeto ")
}*/

function accion1 (){
    $("pensamientos").innerHTML = `<p>1:Arrimarte al espejo</p><p>2:Arrimarte al armario</p><p>3:Arrimarte al escritorio</p><p>4:Quedarte en la cama</p><p>5: Salir de la habitacion</p>`


    //console.log ("1: Arrimarte al espejo");
    //console.log ("2: Arrimarte al armario");
    //console.log ("3: Arrimarte al escritorio");
    //console.log ("4: Quedarte en la cama");
    //console.log ("5: Salir de la habitacion");

    //let op = prompt ("Que quieres hacer?");


    //CAMBIO DEL SWITCH POR IF
    $("respuestas").innerHTML += `<p>(Que deberia hacer ahora?)</p>`
    if(miValorDeseado == "1"){
        $("respuesta").innerHTML = `<p>(Me aserque al espejo)</p><p>(Veo algunas cosas a mi alrededor en el)</p><h3>(Edad ${protagonista["edad"]} </h3><h3>(Valor ${protagonista["valor"]})</h3>`
        accion1();
    } if(miValorDeseado == "2"){
        $("respuestas").innerHTML = `<p>(Me aserque al armario)</p>`
        $("respuestas").innerHTML += `<h3>(Deberia entrar?)</h3>`

        if (miValorDeseado == "si"){
            $("respuestas").innerHTML = `<h3>(Ahora estoy dentro del closet)</h3>`
        }
        accion1();

    } if(miValorDeseado == "3"){
        $("respuestas").innerHTML = `<p>(Me aserque al escritorio, en el puedo ver una computadora y una mochila con algunos utiles escolares)</p>`
        $("respuestas").innerHTML = `<p>(Deberia agarrar la mochila?)</p>`

        if (miValorDeseado == "si"){
            $("respuestas").innerHTML = `<p>(La agarre)</p>`

            sessionStorage.setItem("lapiz", JSON.stringify({nombre: "Lapiz", valorSentimantal: "2", descripcion: "Un viejo la piz que te ha acompañado por mucho tiempo"}))
            sessionStorage.setItem("cuaderno", JSON.stringify({nombre: "Cuaderno", valorSentimantal: "0", descripcion: "Solo un cuaderno"}))
            sessionStorage.setItem("pase", JSON.stringify({nombre: "Pase estudiantil", valorSentimantal: "1", descripcion: "Necesario para ingresar a las instalaciones escolares"}))
            sessionStorage.setItem("obj", JSON.stringify({nombre: "Llaves", valorSentimantal: "2", descripcion: "Las llaves de tu dormitorio"}))

        }
        accion1();
    } if(miValorDeseado == "4"){
        $("respuestas").innerHTML = `<p>(Me quede en la cama por un rato y me dormi otra vez...)</p>`
        accion1();
    } if(miValorDeseado == "5"){
        $("respuestas").innerHTML = `<p>(Sali de la habitacion)</p>`

        $("respuestas").innerHTML = `<p>(Deberia cerrar la puerta con llave?)</p>`

        if (miValorDeseado == "si"){
            let cerrar = JSON.parse(localStorage.getItem("Llaves"))
            console.log(cerrar)
            $("respuestas").innerHTML += `<p>(Cerre con llave y sali hacia la escuela)</p>`
        } 
    }





//SWITCH ORIGINAL
   /* switch (miValorDeseado){
        case "5":
            $("respuestas").innerHTML = `<p>(Sali de la habitacion)</p>`

            //console.log ("Sales de la habitacion");

            $("respuestas").innerHTML = `<p>(Deberia cerrar la puerta con llave?)</p>`

            //let salir = prompt ("Cerraras la puerta con llave?") .toLowerCase();
            if (miValorDeseado == "si"){
                //const existencia = mochila.some(item => item.llaves === "Llaves")
                let cerrar = JSON.parse(localStorage.getItem("Llaves"))
                console.log(cerrar)
                $("respuestas").innerHTML += `<p>(Cerre con llave y sali hacia la escuela)</p>`

                //document.write ("<p>Cerraste con llave y saliste hacia la escuela</p>");


            } /*else{
                $("pensamientos").innerHTML = `<p>-Posiblemente te roben</p>`

                //document.write ("<p>-Posiblemente te roben</p>")
            }
            if (miValorDeseado == "no"){

                $("respuestas").innerHTML = `<p>(Quizas debi haberlo echo)</p>`
            }
            break;
        case "4":
            $("respuestas").innerHTML = `<p>(Me quede en la cama por un rato y me dormi otra vez...)</p>`

            //console.log ("Te quedas en cama")
            //document.write ("<p>Te quedas en la cama por un rato y te duermes otra vez... Te salteas la escuela</p>");
            break;
        case "3":
            $("respuestas").innerHTML = `<p>(Me aserque al escritorio, en el puedo ver una computadora y una mochila con algunos utiles escolares)</p>`

            //console.log ("Te asercas al escritorio")
            //document.write ("<p>Te asercas al escritorio, en el puedes ver una computadora y una mochila con algunos utiles escolares</p>");

            //let agarrarMochila = prompt ("Quieres recoger la mochila") .toLowerCase();
            $("respuestas").innerHTML = `<p>(Deberia agarrar la mochila?)</p>`

            if (miValorDeseado == "si"){
                $("respuestas").innerHTML = `<p>(La agarre)</p>`

                //document.write ("<h3>Agarraste la mochila</h3>");
                sessionStorage.setItem("lapiz", JSON.stringify({nombre: "Lapiz", valorSentimantal: "2", descripcion: "Un viejo la piz que te ha acompañado por mucho tiempo"}))
                sessionStorage.setItem("cuaderno", JSON.stringify({nombre: "Cuaderno", valorSentimantal: "0", descripcion: "Solo un cuaderno"}))
                sessionStorage.setItem("pase", JSON.stringify({nombre: "Pase estudiantil", valorSentimantal: "1", descripcion: "Necesario para ingresar a las instalaciones escolares"}))
                sessionStorage.setItem("obj", JSON.stringify({nombre: "Llaves", valorSentimantal: "2", descripcion: "Las llaves de tu dormitorio"}))

            }
            accion1();
            break;
        case "2":
            $("respuestas").innerHTML = `<p>(Me aserque al armario)</p>`

            //console.log ("Te asercas al armario");

            //let eEg = prompt ("Quieres entrar en el?") .toLowerCase();
            $("respuestas").innerHTML += `<h3>(Deberia entrar?)</h3>`

            if (miValorDeseado == "si"){
                $("respuestas").innerHTML = `<h3>(Ahora estoy dentro del closet)</h3>`

                /*document.write ("<h3>Ahora estas dentro del closet</h3>");
                do{
                    //eEg = prompt ("Quieres salir?") .toLowerCase();
                    let closet = miValorDeseado == "seguro" ? "<h3>Has salido del closet</h3>":"<p>Tarde o temprano tendras que salir</p>"
                    //document.write(closet)
                    $("dialogos").innerHTML = `${closet}`

                    /*if (eEg == "si"){
                        document.write ("<h3>Has salido del closet</h3>");
                    } else {
                    alert("<p>No puedes permanecer alli por siempre</p>");                    
                    }
                } while (eEg != "si");
            }
            accion1();
            break;
        case "1":
            $("respuesta").innerHTML = `<p>(Me aserque al espejo)</p><p>(Veo algunas cosas a mi alrededor en el)</p><h3>(Edad ${protagonista["edad"]} </h3><h3>(Valor ${protagonista["valor"]})</h3>`

            //console.log ("Te asercas al espejo")
            //document.write ("<p>Te asercas al espejo y te ves a ti mismo</p>");
            Imagen = document.images[0].setAttribute(`src`, "Imagenes/Bocetos 2.jfif")
            Imagen = document.images[0].setAttribute(`width`, "100")
    
            //document.write ("<p>Puedes ver algunas cosas a tu alrededor, estas dicen:</p>")
            //document.write ("<h3>Nombre: " + protagonista["identidad"] + "</h3>");
            //document.write ("<h3>Edad " + protagonista["edad"] + "</h3>");
            //document.write ("<h3>Valor " + protagonista["valor"] + "</h3>");
            //protagonista.imagen = ""
            accion1();
            break;

        /*default:
            $("pensamientos").innerHTML = `<p>Por alguna razon no puedo hacer eso</p>`

            //console.warn ("No puedes hacer eso");
            accion1();

    }*/
}