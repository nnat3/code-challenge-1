// write code here
//define a function to calculate fare
function calculateBodaFare(distanceInKm) {
    //define base fare and fare per kilometer
    const baseFare = 50; // in Ksh
    const chargePerKm = 15; // in Ksh

    //calculate distance fare
    const distanceFare = distanceInKm * chargePerKm;

    //add base fare to distance fare to acquire total fare
    const totalFare = baseFare + distanceFare;

    //ask user for travel distance
    const userInput = prompt(`Unafika wapi mteja? Ingiza umbali wa safari yako kwa kilomita:`);

    //convert user input to a number
    const distanceInKm= Number(userInput);
}