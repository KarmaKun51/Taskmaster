var nome;
var tipo;
var stato;
function aggiungiTask(){
    //recuperiamo i dati inseriti nella tabella
     nome = document.getElementById("nome").value;
     tipo = document.getElementById("tipo").value;
     stato = document.getElementById("stato").value;

    //resettiamo i campi del form
    document.getElementById("nome").value="";
    document.getElementById("tipo").value="";
    document.getElementById("stato").value = "";

    aggiornaTabella();
}

function aggiornaTabella(){
    //creiamo una nuova riga nella tabella
    var riga = document.createElement("tr");
    
    //creiamo le 3 colonne
    var colonnaNome = document.createElement("td");
    var colonnaTipo = document.createElement("td");
    var colonnaStato = document.createElement("td");

    //assegnamo i valori input alla riga della tabella
    colonnaNome.innerText = nome;
    colonnaTipo.innerText = tipo;
    colonnaStato.innerText = stato;

    riga.appendChild(colonnaNome);
    riga.appendChild(colonnaTipo);
    riga.appendChild(colonnaStato);

    //aggiungiamo la riga alla tabella
    var tabella= document.getElementById("tabella");
    tabella.appendChild(riga);
}