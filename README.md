Week 1 Code Challenge

Challenge 1: Chai Bora Ingredient Calculator ☕
Links to an external site.
This challenge involves creating a simple calculator to determine the basic ingredients needed to make a specific number of cups of Kenyan chai.

The Standard Recipe for 1 Cup of Chai:

Water: 200 ml
Milk: 50 ml
Tea Leaves (Majani): 1 tablespoon
Sugar (Sukari): 2 teaspoons (optional, but included for this challenge)
Your Task:

Write a JavaScript function named calculateChaiIngredients that:

1. Prompts the user to enter the number of chai cups they want to make (e.g., using prompt()). Remember to convert the input to a number.
2. Takes the numberOfCups (as a number) as an argument.
3. Calculates the required amount for each ingredient (water, milk, tea leaves, sugar) based on the numberOfCups.
4. Prints the results to the console in a clear, readable format.
   
Challenge 2: Boda Boda Ride Fare Estimator 🛵
Links to an external site.
This challenge is to create a simple program to estimate the fare for a boda boda ride.

Fare Calculation Rules:

Base Fare: KES 50 (applied to every ride).
Per Kilometer Charge: KES 15 for every kilometer traveled.
Your Task:

Write a JavaScript function named calculateBodaFare that:

1. Prompts the user to enter the distance of their trip in kilometers. Convert this input to a number.
2. Takes the distanceInKm (as a number) as an argument.
3. Calculates the total estimated fare using the formula: totalFare = baseFare + (distanceInKm * chargePerKm)
4. Prints the result to the console in a user-friendly format.

    Challenge 3: Simplified Mobile Money Transaction Fee Estimator 📱
Links to an external site.
This challenge is to create a simplified estimator for transaction fees.

Simplified Fee Structure:

The basic transaction fee is 1.5% of the transaction amount.
However, there's a minimum fee of KES 10. If 1.5% of the amount is less than KES 10, the fee charged is KES 10.
There's also a maximum fee of KES 70. If 1.5% of the amount is more than KES 70, the fee charged is KES 70.
Your Task:

Write a JavaScript function named estimateTransactionFee that:

1. Prompts the user to enter the amount of money they wish to send. Convert this input to a number.
2. Takes the amountToSend (as a number) as an argument.
3. Calculates the transaction fee based on the 1.5% rule, ensuring it adheres to the minimum (KES 10) and maximum (KES 70) fee limits.
4. Hint: You'll likely need conditional logic (if-else if-else) or Math.min() and Math.max().
5. Calculates the total amount that will be debited (amount to send + transaction fee).
6. Prints the results to the console.

Happy coding!
