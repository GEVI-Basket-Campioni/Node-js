var input = require("readline-sync");

//lista riempita
//var database = ["mirko","gabriele","pino"]; 

//lista vuota
var database = [];

function menu() {
    console.log("####MENU BELLO°°°°");
    console.log("1)Inserisci utente");
    console.log("2)Visualizza utenti");
    console.log("3)Cerca utente");
    console.log("4)Modifica utente");
    console.log("5)Cancella utente");
    console.log("6)Esci");
}

function inserisciUtente() {
    var id = input.question("Inserisci id: ");
    var nome = input.question("Inserisci nome: ");
    var cognome = input.question("Inserisci cognome: ");
    //"1;pino;mauro" utente nel formato .csv
    var utente = id + ";" + nome + ";" + cognome;
    database.push(utente);
    console.log("Inserimento avvenuto con successo!!!");
}

function visualizzaUtenti() {
    for (var i = 0; i < database.length; i++) {
        var utenteCorrente = database[i];
        //split mi da un array di campi
        var campiEstrapolati = utenteCorrente.split(";");
        id = campiEstrapolati[0];
        nome = campiEstrapolati[1];
        cognome = campiEstrapolati[2];
        console.log("####SCHEDA UTENTE°°°°");
        console.log("1)Id: " + id);
        console.log("2)Nome: " + nome);
        console.log("3)Cognome: " + cognome);
    }
}

function cercaUtente() {
    var id_ricerca = parseInt(input.question("Dammi id ricerca: "));
    for (var i = 0; i < database.length; i++) {
        var utenteCorrente = database[i];
        var campi = utenteCorrente.split(";");
        if (id_ricerca === parseInt(campi[0])) {
            console.log("####SCHEDA UTENTE°°°°");
            console.log("1)Id: " + campi[0]);
            console.log("2)Nome: " + campi[1]);
            console.log("3)Cognome: " + campi[2]);
            break;
        }
    }
}

function modificaUtente() {
    var id_ricerca = parseInt(input.question("Dammi id ricerca: "));
    for (var i = 0; i < database.length; i++) {
        var utenteCorrente = database[i];
        var campi = utenteCorrente.split(";");
        if (id_ricerca === parseInt(campi[0])) {
            console.log("####DATI CORRENTI DELL'UTENTE°°°°");
            console.log("1)Id: " + campi[0]);
            console.log("2)Nome: " + campi[1]);
            console.log("3)Cognome: " + campi[2]);
            var nome_nuovo = input.question("Inserisci il nome o premi enter per skippare: ");
            if(nome_nuovo==""){
                nome_nuovo=campi[1];
            }
            var cognome_nuovo = input.question("Inserisci il cognome o premi enter per skippare: ");
            if(cognome_nuovo==""){
                cognome_nuovo=campi[2];
            }
            var nuovo_utente =campi[0]+";"+nome_nuovo+";"+cognome_nuovo;
            database[i]=nuovo_utente;
            break;
        }
    }
}

function cancellaUtente() {
    var id_ricerca = parseInt(input.question("Dammi id ricerca: "));
    for (var i = 0; i < database.length; i++) {
        var utenteCorrente = database[i];
        var campi = utenteCorrente.split(";");
        if (id_ricerca === parseInt(campi[0])) {
            database.splice(i,1);
            break;
        }
    }
}



do {
    menu();
    var scelta = parseInt(input.question("Scegli una opzione: "));
    switch (scelta) {
        case 1:
            inserisciUtente();
            break;
        case 2:
            visualizzaUtenti();
            break;
        case 3:
            cercaUtente();
            break;
        case 4:
            modificaUtente();
            break;
        case 5:
            cancellaUtente();
            break;
        case 6:
            break;
        default:
            console.log("Scelta non valida!");
    }
} while (scelta != 6);
