console.dir(document);

const myForm = document.getElementById(`informazioni_viaggio`);
const input_name = document.querySelector(".name");
const input_km = document.querySelector(".km_fare");
const input_eta = document.querySelector(".fascia_eta");


// inserisco dati utente
myForm.addEventListener('submit', function (event) {

    //blocco comportamento di default
    event.preventDefault();

    // leggo i valori inseriti dall'utente
    const nome_utente = input_name.value;
    const km_da_fare = input_km.value;
    const eta_utente = input_eta.value;

    let ticket_cost = 0.21 * km_da_fare;

    if (eta_utente === "minorenne") {
        // sconto d'applicare agli under 18
        ticket_cost = ticket_cost - ticket_cost * 20 / 100
    } else if (eta_utente === "over65") {
        // sconto d'applicare agli over 65
        ticket_cost = ticket_cost - ticket_cost * 40 / 100
    } 

    console.log(`Nome passeggero: ${nome_utente}`);
    console.log(`Km da fare: ${km_da_fare}`);
    console.log(`Categoria età: ${eta_utente}`);
    console.log(`Prezzo del biglietto ${ticket_cost.toFixed(2)}`);
});


