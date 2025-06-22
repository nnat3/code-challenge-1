// function introduced
function calculateChaiIngredients(numberofcups) {

// Constants for ingredients per cup
const waterPerCup = 200; // in ml
const milkPerCup = 50; // in ml
const teaLeavesPerCup = 1; // in tablespoons
const sugarPerCup = 2; // in teaspoons

return{
 totalWater : waterPerCup * numberofcups,// in ml
 totalMilk : milkPerCup * numberofcups,//in ml
 totalTeaLeaves : teaLeavesPerCup * numberofcups,// in tablespoons
 totalSugar : sugarPerCup * numberofcups, // in teaspoons
};
}

document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('chai-form');
    const resultDiv = document.getElementById('chai-result');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        const cups = Number(document.getElementById('cups').value);

        if (isNaN(cups) || cups <= 0) {
            resultDiv.textContent = 'Please enter a valid number of cups.';
            return;
        }

        const ingredients = calculateChaiIngredients(cups);
        resultDiv.innerHTML = `
            <p>To make <strong>${cups}</strong> cups of Chai Bora, you will need:</p>
            <ul>
                <li>Water: ${ingredients.totalWater} ml</li>
             <li>Milk: ${ingredients.totalMilk} ml</li>
                <li>Tea Leaves: ${ingredients.totalTeaLeaves} tablespoons</li>
                <li>Sugar: ${ingredients.totalSugar} teaspoons</li>
            </ul>
        `;
    });
});
