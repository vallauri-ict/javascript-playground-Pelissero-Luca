"use strict";

window.onload = function () {
    let _wrapper = document.getElementById("wrapper");
    let _btnStop = document.getElementById("btnStop");
    let _btnRestart = document.getElementById("btnRestart");


    let timer = setInterval(generaOggetti, 100);
    _btnRestart.disabled = true;

    _btnStop.addEventListener("click", function () {
        if (timer) clearInterval(timer);
        this.disabled = true;
        _btnRestart.disabled = false;
    });
    _btnRestart.addEventListener("click", function () {
        timer = setInterval(generaOggetti, 100);
        this.disabled = true;
        _btnStop.disabled = false;
    });

    function generaOggetti() {
        // crea un nuovo tag div in memoria ma non visibile all'interno della pagina
        let _div = document.createElement("div");

        //per leggere le impostazioni impostate staticamente sul file css
        let wrapperWidth = parseInt(getComputedStyle(_wrapper).width);
        let wrapperHeight = parseInt(getComputedStyle(_wrapper).height);

        //width e hight
        let w = generaNumero(1, 100);  //larghezza
        let h = generaNumero(1, 100);  //altezza
        _div.style.width = w;  //assegno width al div creato
        _div.style.height = h; //assegno heigh al div creato

        // colore di sfondo
        let red = generaNumero(0, 255);
        let green = generaNumero(0, 255);
        let blue = generaNumero(0, 255);
        _div.style.backgroundColor = "rgb(" + red + ", " + green + ", " + blue + ")";


        //posizione casuale all'interno di wrapper
        // let x = generaNumero(0, _wrapper.style.width);  //non leggono le impostazioni impostate staticamento dal file css
        let x = generaNumero(0, wrapperWidth);
        let y = generaNumero(0, wrapperHeight);
        _div.style.position = "absolute";
        _div.style.left = x;
        _div.style.top = y;

        //appendo il div al wrapper (lo visualizzo)
        _wrapper.appendChild(_div);

    }
}

function generaNumero(min, max) {
    let n = Math.floor((max - min + 1) * Math.random()) + min
    return n;
}