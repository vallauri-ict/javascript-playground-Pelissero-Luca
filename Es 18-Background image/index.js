"use strict";

let _imgBox;
let _imgRoll;
let _lst;
let _opts;

window.onload = function () {
    _imgBox = document.getElementById("imgBox");
    _imgRoll = document.getElementById("imgRoll");
    _imgBox.style.backgroundImage = "url('img/img1.jpg')";
    _imgRoll.style.backgroundImage = "url('img/img1.jpg')";
    _lst = document.getElementById("lstImmagini");
    _opts = document.getElementsByName("opt");
    setRadioButtonsClick();
}

function setRadioButtonsClick() {
    for (var i = 0; i < _opts.length; i++) {
        // _opts[i].setAttribute("onclick", "cambiaImmagine(" + _opts[i].value + ")");
        _opts[i].addEventListener("click", function () { cambiaImmagine(this.value) });
    }
}

function cambiaImmagine(num) {
    let imageNum = Number(num) + 1;
    console.log(imageNum);
    _imgBox.style.backgroundImage = "url('img/img" + imageNum + ".jpg')";
    _lst.value = num;
    _opts[num].checked = true;
}

function rollOn() {
    let imageNum = Math.floor(Math.random() * 3) + 2;
    _imgRoll.style.backgroundImage = "url('img/img" + imageNum + ".jpg')";
}

function rollOff() {
    _imgRoll.style.backgroundImage = "url('img/img1.jpg')";
}
