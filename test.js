//Dichiarazione di una funzione
function contaDoWhile() {
    /*conta da 1 a 10 */
    var conta = 1;
    do {
        console.log(conta);
        conta++;
    } while (conta <= 10);
}

function contaWhile(){
    var conta = 1;
    while(conta<=10){
        console.log(conta);
        conta++;
    }
}

function contaFor(){
    for(var conta=1; conta<=10; conta++){
        console.log(conta);
    }
}

//dichiarare una funzione che verifica se uno username è 
//compreso tra 3 e 12 caratteri (3 e 12 compresi)
function checkUsername(){
    var username = "pippo2000";
    if(username.length>=3 && username.length<=12){
        console.log("Username valido!");
    }else{
        console.log("Username non rispetta numero caratteri!");
    }
}

//conta da 40 a 20 e stampa solo valori minori di 30 e maggiori di 35 
//(30 è incluso e 35 escluso)
//output atteso: 40 39 38 37 36 30 ..... 20

//Chiamata di una funzione
//contaDoWhile();
//contaWhile();
//checkUsername();

function ex3(){
    var nomi = [];
    nomi.push("ugo");
    nomi.push("gi");
    nomi.push("jsdgfjsdgjfgsdjgfsdjg");
    for(var i=0; i<nomi.length; i++){
        if(nomi[i].length<3 || nomi[i].length>12){
            nomi.splice(i,1);
            i--;
        }
    }
    for(var i=0; i<nomi.length; i++){
        console.log(nomi[i]);
    }
}

ex3();