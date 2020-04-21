"use strict"

let _nominativo;
let _sesso;
let _scuola;
let _cap;
let _lavoratore;
let _descr;

let cont = 0;
let nome = true;
let cap = true;

window.onload = function () {
    //inizializzazione dei puntatori
    _nominativo = document.getElementsByName("nominativo")[0];
    _sesso = document.getElementsByName("sesso");
    _scuola = document.getElementsByName("ateneo")[0];
    _cap = document.getElementsByName("cap")[0];
    _lavoratore = document.getElementsByName("lavoratore")[0];
    _descr = document.getElementById("descr");
}

function nom() {
    let nominativo = _nominativo.value;
    let i = 0;
    nome = true;

    while (i <= nominativo.length && nome) {
        if (_nominativo.value[i] >= 0 && _nominativo.value[i] <= 9)
            nome = false;
        i++;
    }
    if (nome == false) {
        alert("Il nominativo non deve contenere numeri");
        _nominativo.classList.add("red-borderBottom");
    }
    else {
        _nominativo.classList.remove("red-borderBottom");
    }
}

function numCap() {
    let cap = _cap.value;
    let i = 0;

    while (i <= cap.length && cap) {
        if (_cap.value[i] >= "a" && _cap.value[i] <= "z" || _cap.value[i] >= "A" && _cap.value[i] <= "Z" || cap.length != 5)
            cap = false;
        i++;
    }
    if (cap == false) {
        alert("Il cap non deve contenere lettere e deve essere lungo 5 numeri");
        _cap.classList.add("red-borderBottom");
    }
    else {
        _cap.classList.remove("red-borderBottom");
    }
    cap = true;
}

function Ateneo() {
    if (_scuola.value != "nessuno") {
        _scuola.classList.remove("red-border");
    }
    else
        _scuola.classList.remove("red-border");
}

function lavoro() {
    cont++;

    if (cont % 2 != 0)
        _descr.disabled = false;
    else
        _descr.disabled = true;
}

function validaForm() {
    //NOMINATIVO
    if (nome == false || _nominativo.value == "") {
        _nominativo.classList.add("red-borderBottom");
        return false;
    }
    else
        _nominativo.classList.remove("red-borderBottom");
    //SESSO
    if (_sesso[0].checked == false && _sesso[1].checked == false) {
        alert("Seleziona il sesso");
        return false;
    }
    //SCUOLA
    if (_scuola.value == "nessuno") {
        _scuola.classList.add("red-border");
        return false;
    }
    else
        _scuola.classList.remove("red-border");
    //CAP
    if (cap == false || _cap.value == "") {
        _cap.classList.add("red-borderBottom");
        return false;
    }
    else
        _cap.classList.remove("red-borderBottom");
}

function gestisciDesr() {
    _descr.disabled = true;
    cont = 0;
}