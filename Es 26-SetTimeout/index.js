"use strict";

window.onload = function () {
    let _img = document.getElementById("imgCarta");
    let _btnGioca = document.getElementById("btnGioca");
    let _lblSomma = document.getElementById("lblSomma");
    let _lblCarte = document.getElementById("lblCarte");
    let _lblRisultato = document.getElementById("lblRisultato");

    _btnGioca.addEventListener("click", gioca);
    _lblRisultato.style.visibility = "hidden";  //vado a nasconderlo

    let vet = [];

    function gioca() {
        if (_btnGioca.disabled == false) {
            _btnGioca.disabled = true;
            _lblSomma.innerHTML = "0";
            _lblCarte.innerHTML = "0";
            _lblRisultato.style.visibility = "hidden";
            // vet = [];
            // ciclo per ripulire il vettore: parto dal fondo
            for(let i=vet.length-1; i>=0; i--){
                vet.splice(i,1);
            }
        }

        let rnd;
        do {
            rnd = generaNumero(1, 10);
        } while (vet.includes(rnd));
        vet.push(rnd);

        _img.src = "img/bg_d" + rnd + ".gif";

        if (rnd > 7)
            rnd = 0.5

        _lblCarte.innerHTML = vet.length;
        _lblSomma.innerHTML = parseFloat(_lblSomma.innerHTML) + rnd;

        if (vet.length < 3)
            setTimeout(gioca, 1500);  // tra un secondo e mezzo mi fa ripartire gioca()
        else {
            if (parseFloat(_lblSomma.innerHTML) > 7.5)
                _lblRisultato.innerHTML = "HAI PERSO";
            else
                _lblRisultato.innerHTML = "HAI VINTO";
            _lblRisultato.style.visibility = "visible";
            _btnGioca.disabled = false;
        }

    }
}

function generaNumero(min, max) {
    let n = Math.floor((max - min + 1) * Math.random()) + min
    return n;
}