const prezzoKm = 0.21;
const scontoMinorenni = 0.2;
const scontoOver65 = 0.4;

const nameInput = document.getElementById("name");
const distanceInput = document.getElementById("distance");
const ageInput = document.getElementById("age");
const calculateButton = document.getElementById("calculate");

calculateButton.addEventListener("click",
    function () {
        const distanceTrip = distanceInput.value;
        const ageGroup = ageInput.value;
        console.log(document.getElementById("name").value);
        console.log(document.getElementById("distance").value);
        console.log(document.getElementById("age").value);
        if (ageGroup === "Maggiorenne") {
            let prezzoBiglietto = distanceTrip * prezzoKm;
            let risposta = `${prezzoBiglietto}€`;
            document.getElementById("ticket-price").innerHTML = risposta;
        } else if (ageGroup === "Minorenne") {
            let prezzoBiglietto = distanceTrip * prezzoKm * (1 - scontoMinorenni);
            let risposta = `${prezzoBiglietto}€`;
            document.getElementById("ticket-price").innerHTML = risposta;
        } else if (ageGroup === "Over-65") {
            let prezzoBiglietto = distanceTrip * prezzoKm * (1 - scontoOver65);
            let risposta = `${prezzoBiglietto}€`;
            document.getElementById("ticket-price").innerHTML = risposta;
        }
    }
)