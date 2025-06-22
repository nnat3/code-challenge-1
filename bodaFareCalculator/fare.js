// write code here
//define a function to calculate fare
function outputDisplay(message) {
    // Display output in a div with id="output", or fallback to console
    const outputDiv = document.getElementById('output');
    if (outputDiv) {
        const p = document.createElement('p');
        p.textContent = message;
        outputDiv.appendChild(p);
    } else {
        console.log(message);
    }
}

function calculateBodaFare(distanceInKm) {
    const baseFare = 50; // in Ksh
    const chargePerKm = 15; // in Ksh

    const distanceFare = distanceInKm * chargePerKm;
    const totalFare = baseFare + distanceFare;

    outputDisplay(`Uko kwote? Io ni ${distanceInKm}km`);
    outputDisplay(`Ukikalia PikiPiki: Ksh ${baseFare}`);
    outputDisplay(`Mpaka uko: Ksh ${distanceFare}`);
    outputDisplay(`Total: Ksh ${totalFare}`);
}

function checkInput() {
    // Get value from input
    const inputTab = document.querySelector('input#distanceInput');
    const value = parseFloat(inputTab.value);
    // Clear previous output
    const outputDiv = document.getElementById('output');
    if (outputDiv) outputDiv.innerHTML = '';
    if (isNaN(value) || value <= 0) {
        alert('Tafadhali ingiza umbali halali wa safari yako kwa kilomita.');
    } else {
        calculateBodaFare(value);
    }
}

// Attach event listener to the button
document.addEventListener('DOMContentLoaded', function() {
    const fareCalculation = document.querySelector('button#calculateFare');
    if (fareCalculation) {
        fareCalculation.addEventListener('click', checkInput);
    }
});