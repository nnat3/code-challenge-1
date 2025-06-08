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

    //print on console
    console.log(`Uko kwote? Io ni ${distanceInKm}km`);
    console.log(`Ukikalia PikiPiki:Ksh ${baseFare}`);
    console.log(`Mpaka uko: Ksh ${distanceFare}`);
    console.log(`Total: Ksh ${totalFare}`);

     //ask user for travel distance
    const userInput = prompt(`Unafika wapi mteja? Ingiza umbali wa safari yako kwa kilomita:`);

    //convert user input to a number
    const distanceInKm= Number(userInput);

    //check if input is a valid number
    if (isNaN(distanceInKm) || distanceInKm <= 0) {
        console.log('Tafadhali ingiza umbali halali wa safari yako kwa kilomita.');
    } else {
        calculateBodaFare(distanceInKm);
    }
}