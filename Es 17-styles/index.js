"use strict"
let _div, _txtDim, _img;
let Color, Bg, Border;
window.onload = function inizializza()
{
    let Body;
    _div = document.getElementById("titolo");
    _txtDim = document.getElementById("txtSize");
    _img = document.getElementById("imgBox");
    document.body.style.backgroundRepeat = "repeat-y";
    document.body.style.backgroundPosition = "center";
    Color = true;
    Bg = true;
    Border = true;
}
function Inverti()
{
    _div.style.backgroundColor = Color ? "Yellow" : "Blue";
    _div.style.color = !Color ? "Yellow" : "Blue";
    Color = !Color;
}
function Dimensione()
{
    let Dim = parseInt(_txtDim.value);
    if(Dim > 0)
        _div.style.fontSize = Dim + "pt";
    else
        alert("Inserire un numero maggiore di 0");
}
function CabiaSfondo()
{
    document.body.style.backgroundImage = Bg ? "url(\"img/bg.gif\")" : "none";
    document.body.style.backgroundColor = !Bg ? "dodgerblue" : "#eaeaea";
    Bg = !Bg;
}
function CambiaBordo()
{
    _div.style.borderStyle = Border ? "hidden" : "solid";
    Border = !Border;
}
function img(num)
{
    if(num != 0)
        _img.setAttribute("src", "img/img" + num + ".jpg");
    else
        _img.removeAttribute("src");
}
function GeneraNumero(min, max)
{
    return Math.floor((max - min + 1 ) * Math.random() + min);
}
