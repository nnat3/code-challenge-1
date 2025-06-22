// introduce a function to calculate the transaction fee
function calculateTransactionFee(amountToSend) {
const feeRate = 0.015; // 1.5% transaction fee
const minimumFee = 10; // minimum fee in Ksh
const maximumFee = 70; // maximum fee in Ksh

// calculate the fee based on the amount to be sent
let calculatedFee = amountToSend * feeRate;

// ensure the fee is within the minimum and maximum limits
if (calculatedFee < minimumFee) {
    calculatedFee = minimumFee;
}
else if (calculatedFee > maximumFee) {
    calculatedFee = maximumFee;
}

// calc total amount to be debited
const totalAmountDebited = amountToSend + calculatedFee;

return {
      amountToSend,
        calculatedFee,
        totalAmountDebited
}
}

// Event listener for the form submission
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('fee-form');
    const resultDiv = document.getElementById('fee-result');

    form.addEventListener('submit', function(event) {
     event.preventDefault();
        const amountInput = document.getElementById('amount');
        const amountToSend = Number(amountInput.value);

        if (isNaN(amountToSend) || amountToSend <= 0) {
            resultDiv.textContent = 'Please enter a valid amount to send.';
            return;
        }

        const result = calculateTransactionFee(amountToSend);

        resultDiv.innerHTML = `
            <p>Amount to be sent: Ksh ${result.amountToSend.toFixed(2)}</p>
            <p>Transaction fee: Ksh ${result.calculatedFee.toFixed(2)}</p>
            <p>Total amount debited: Ksh ${result.totalAmountDebited.toFixed(2)}</p>
            <p>Sent Money Securely!</p>`;
    });
});
