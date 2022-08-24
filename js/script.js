const prezzoKm = 0.21;
const scontoMinorenni = 0.2;
const scontoOver65 = 0.4;

const nameInput = document.getElementById("name");
const distanceInput = document.getElementById("distance");
const ageInput = document.getElementById("age");
const calculateButton = document.getElementById("calculate");

calculateButton.addEventListener("click",
    function () {
        const ageGroup = ageInput.value;
        console.log(document.getElementById("name").value);
        console.log(document.getElementById("distance").value);
        console.log(document.getElementById("age").value);

    }
)