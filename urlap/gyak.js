"use strict";

function feldolgoz() {
    let veznev = document.forms["urlap"]["veznev"].value;
    let kernev = document.forms["urlap"]["kernev"].value;

    document.getElementById("rejto").style.visibility = "visible";
    document.getElementById("nev").innerHTML = veznev + " " + kernev;
}