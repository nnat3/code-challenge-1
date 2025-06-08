// Write code here
// function introduced
function calculateChaiIngredients(numberofcups) {
// Prompt user for number of cups
   const userPreference = prompt('Karibu! How many cups of Chai Bora would you like to make?', );
// Convert user input to a number
const numberofcups = Number(userPreference);
// Check if input is a valid number
if (isNaN(numberofcups) || numberofcups <= 0) {
    console.log('Please enter a valid number of cups.');
}
else {
    calculateChaiIngredients(numberofcups);
}

// list of ingredients per cup
const waterPerCup = 200; // in ml
const milkPerCup = 50; // in ml
const teaLeavesPerCup = 1; // in tablespoons
const sugarPerCup = 2; // in teaspoons

// calculate ingredients based on number of cups
const totalWater = waterPerCup * numberofcups;// in ml
const totalMilk = milkPerCup * numberofcups;//in ml
const totalTeaLeaves = teaLeavesPerCup * numberofcups;// in tablespoons
const totalSugar = sugarPerCup * numberofcups; // in teaspoons

// print input on console
console.log(`To make ${numberofcups} cups of Chai Bora, you will need:`);
console.log(`Water:${totalWater} ml of water`);
console.log(`Milk: ${totalMilk} ml of milk`);
console.log(`Tea Leaves: ${totalTeaLeaves} tablespoons of tea leaves`);
console.log(`Sugar: ${totalSugar} teaspoons of sugar`);

}