var name = prompt("Inserisci il tuo nome:");
var surname = prompt("Inserisci il tuo cognome:");
var color = prompt("Inserisci il tuo colore preferito:");
var risultato = name + surname + color;
document.getElementById("somma").innerHTML = "La tua Password è " + risultato + "40";
// STILE
document.getElementById('somma').style.backgroundColor = "#d21f1b";
document.getElementById('somma').style.color = "#aea04b";
document.getElementById("somma").style.display = "inline-block";
document.getElementById('somma').style.fontSize='80px'