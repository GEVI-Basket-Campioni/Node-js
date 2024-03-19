var input = require("readline-sync");

//lista riempita
//var database = ["mirko","gabriele","pino"]; 

//lista vuota
var database = [];

function menu(){
    console.log("####MENU BELLO°°°°");
    console.log("1)Inserisci utente");
    console.log("2)Visualizza utenti");
}

//"1;pino;mauro"
function inserisciUtente(){
    var id = input.question("Inserisci id: ");
    var nome = input.question("Inserisci nome: ");
    var cognome = input.question("Inserisci cognome: ");
    var utente = id+";"+nome+";"+cognome;
    database.push(utente);
}

function visualizzaUtenti(){
    for(var indice=0; indice<database.length; indice++){
        console.log(database[indice]);
    }
}

function visualizzaUtentiBello(){
    for(var indice=0; indice<database.length; indice++){
        var utenteCorrente = database[indice];
        //split mi da un array di campi
        var campiEstrapolati = utenteCorrente.split(";");
        id = campiEstrapolati[0];
        nome = campiEstrapolati[1];
        cognome = campiEstrapolati[2];
        console.log("####SCHEDA UTENTE°°°°");
        console.log("1)Id: "+id);
        console.log("2)Nome: "+nome);
        console.log("3)Cognome: "+cognome);
    }
}

do{
    menu();
    var scelta = parseInt(input.question("Scegli una opzione: "));
    switch(scelta){
        case 1: 
            inserisciUtente();
            break;
        case 2:
            visualizzaUtentiBello();
            break;
    }
}while(scelta!=6);
