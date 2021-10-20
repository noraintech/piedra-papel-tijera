let manitas = document.querySelectorAll(".imagen");
console.log(manitas)


manitas[0].addEventListener("click",selecionarManita);
manitas[1].addEventListener("click",selecionarManita);
manitas[2].addEventListener("click",selecionarManita);



function selecionarManita(event){
    console.log(event);
    let listaJugador = document.querySelectorAll(".lista-jugador");
    let manoSeleccionada = event.target;
    listaJugador[0].innerHTML = "";
    listaJugador[0].append(manoSeleccionada);
    let jugadaMaquina = random(3,5);
    let seleccionMaquina = manitas[jugadaMaquina];
    console.log(seleccionMaquina);
    listaJugador[1].innerHTML = "";
    listaJugador[1].append(seleccionMaquina);
    
}

function random(min, max) {
    return Math.floor((Math.random() * (max - min + 1)) + min);
}