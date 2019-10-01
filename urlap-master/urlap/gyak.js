"use strict";

function feldolgoz() {
    let veznev = document.forms["urlap"]["veznev"].value;
    let kernev = document.forms["urlap"]["kernev"].value;
    let kereszt = document.forms["urlap"]["kereszt"].value;
    let sokszoveg = document.forms["urlap"]["sokszoveg"].value;
    let kiir = ""; 

    /*for (let i > 0; i < kereszt.length; i++){
        kiir += 'A(z) $(i), név: $(kereszt[i]) ';
    }

    switch (kereszt) {
    case "ádám":
        kiir= "Ádám";
        break;
    case "kinga":
        kiir = "Kinga";
        break;
    case "viktor":
        kiir = "Viktor";
        break;
    default:
        kiir = "Ilyen allapot nincs";
        break;
    } */

    document.getElementById("rejto").style.visibility = "visible";
    document.getElementById("nev").innerHTML = sokszoveg;
}