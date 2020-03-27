"use strict"

// puntatori
let _Num, _Operatore, _mainTxt, _Ris, _Canc;

// variabili
let n1, n2, operatore, ris;

window.onload = function inizializza() {
    _Num = document.getElementsByName("btnNum");
    _Operatore = document.getElementsByName("btnOperatore");
    _Canc = document.getElementById("btnReset");
    _Ris = document.getElementById("btnRis");
    _mainTxt = document.getElementById("txtDisplay");
    _Ris.disabled = true;
}

function num(num) {
    _mainTxt.value += num;
}

function op(p) {
    operatore = p;
    n1 = parseFloat(_mainTxt.value);
    _mainTxt.value = "";

    for (let i = 0; i < _Operatore.length; i++) {
        _Operatore[i].disabled = true;
    }
    _Ris.disabled = false;
}

function resetta() {
    n1 = undefined;
    operatore = undefined;
    _mainTxt.value = "";

    for (let i = 0; i < _Operatore.length; i++) {
        _Operatore[i].disabled = false;
    }
    _Ris.disabled = true;
}

function calcola() {
    n2 = parseFloat(_mainTxt.value);

    switch (operatore) {
        case "+":
            ris = n1 + n2;
            break;
        case "-":
            ris = n1 - n2;
            break;
        case "*":
            ris = n1 * n2;
            break;
        case "/":
            if (n2 != 0)
                ris = n1 / n2;
            else {
                resetta();
                ris = "Error";
            }
            break;
    }
    _mainTxt.value = ris;

    for (let i = 0; i < _Operatore.length; i++) {
        _Operatore[i].disabled = false;
    }
    _Ris.disabled = true;
}