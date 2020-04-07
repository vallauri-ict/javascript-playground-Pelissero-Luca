"use strict"

//dichiarazione dei puntatori
let _cognome;
let _nome;
let _matricola;
let _regione;
let _email;
let _telefono;

window.onload = function () {
    //inizializzazione dei puntatori
    _cognome = document.getElementsByName("cognome")[0];
    _nome = document.getElementsByName("nome")[0];
    _matricola = document.getElementsByName("matricola")[0];
    _regione = document.getElementsByName("regione")[0];
    _email = document.getElementsByName("email")[0];
    _telefono = document.getElementsByName("tel")[0];

}

function validaForm() {

    //controllo sul cognome
    if (_cognome.value == "") {
        _cognome.classList.add("red-borderBottom");
        return false;
    }
    else {
        _cognome.classList.remove("red-borderBottom");
    }
    //controllo sul nome
    if (_nome.value == "") {
        _nome.classList.add("red-borderBottom");
        return false;
    }
    else {
        _nome.classList.remove("red-borderBottom");
    }
    //controllo sulla matricola
    if (_matricola.value=="") {
        _matricola.classList.add("red-borderBottom");
        return false;
    }
    else{
        let matr=parseInt(_matricola.value);
        if (isNaN(matr)) {
            _matricola.classList.add("red-borderBottom");
            alert("La matricola deve essere un numero");
            return false;
        }
        else{
            _matricola.classList.remove("red-borderBottom");
        }
    }
    //controllo sulle regioni
    if (_regione.selectedIndex == "") {
        _regione.classList.add("red-border");
        return false;
    }
    else{
        _regione.classList.remove("red-border");
    }
    //controllo sull'email e numero di telefono
    if (_email.value == "" && _telefono.value == "") {
        _email.classList.add("red-borderBottom");
        _telefono.classList.add("red-borderBottom");
        alert("Inserire o il numero di telefono o l'email");
        return false;
    }
    else{
        _email.classList.remove("red-borderBottom");
        _telefono.classList.remove("red-borderBottom");
    }
}