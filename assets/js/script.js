console.dir(document);

const myForm = document.getElementById(`Informazioni_viaggio`);
const input_name = document.querySelector(`name`);
const input_km = document.querySelector(`km_fare`);
const input_eta = document.querySelector(`fascia_eta`);

// 
myForm.addEventListener('submit', function (event) {

    //blocco comportamento di default
    event.preventDefault();

    // leggo i valori inseriti dall'utente
    const nome_utente = input_name.value;
    const km_da_fare = input_km.value;
    const eta_utente = input_eta.value;
});
