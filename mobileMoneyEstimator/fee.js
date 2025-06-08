// user input for amount of money to send
const userInput = prompt('Amount to be sent:(in Ksh):');

// convert user input to a number   
const amountToSend = Number(userInput);

// introduce a function to calculate the transaction fee
function calculateTransactionFee(amountToSend) {
const feeRate = 0.015; // 1.5% transaction fee
const minimumFee = 10; // minimum fee in Ksh
const maximumFee = 70; // maximum fee in Ksh

// calculate the fee based on the amount to be sent
let calculatedFee = amountToBeSent * feeRate;

// ensure the fee is within the minimum and maximum limits
if (calculatedFee < minimumFee) {
    calculatedFee = minimumFee;
}
else if (calculatedFee > maximumFee) {
    calculatedFee = maximumFee;
}

// calc total amount to be debited
const totalAmountDebited = amountToSend + calculatedFee;

// print the transaction details on console
console.log(`Amount to be sent: Ksh ${amountToSend}`);
console.log(`Transaction fee: Ksh ${calculatedFee}`);
console.log(`Total amount debited: Ksh ${totalAmountDebited}`);
console.log(`Sent Money Securely!`);
}
// check if input is a valid number
if (isNaN(amountToSend) || amountToSend <= 0) {
    console.log('Please enter a valid amount to send.');
}
else {
    calculateTransactionFee(amountToSend);
}