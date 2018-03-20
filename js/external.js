"use strict";
//part one of exercise
//console.log('Hello from external JavaScript');
//movies for rent
// alert("Welcome to my Website!");
// var userInput = prompt('What is your favorite color?');
// alert('The user entered: ' + userInput + " Awesome, I like the color purple!");



//part 2 of exercise

// You have rented some movies for your kids: The little mermaid (for 3 days),
// Brother Bear (for 5 days, they love it),
// and Hercules (1 day, you don't know yet if they're going to like it).
// If price for a movie per day is $3, how much will you have to pay?

alert("Welcome to the local video store");
var littleMermaid = Number (prompt( "How many day did you rent this movie?"));
var brotherBear= Number (prompt( "How many day did you rent this movie?"));
var hercules= Number (prompt( "How many day did you rent this movie?"));

var total = (littleMermaid+brotherBear+hercules)*3;
alert('Your total is ' + total);

// / Suppose you're working as a contractor for 3 companies: Google, Amazon and Facebook, they pay you a different rate per hour. ' +
// 'Google pays $400, Amazon $380, and Facebook $350. How much will you receive in payment for this week? ' +
// 'You worked 10 hours for Facebook, 6 hours for Google and 4 hours for Amazon.
alert("My Pay Status");
var googleRate= Number (prompt( "How much do you make an hour at Google?"));
var amazonRate= Number (prompt( "How much do you make an hour at Amazon?"));
var facebookRate= Number (prompt( "How much do you make an hour at Facebook?"));
var googleHours=Number (prompt( "How many hours did you work for Google this week?"));
var amazonHours=Number (prompt( "How many hours did you work for Amazon this week?"));
var facebookHours=Number (prompt( "How many hours did you work for Facebook this week?"));

var totalEarned= ((googleHours*googleRate)+(amazonHours*amazonRate)+(facebookHours*facebookRate));
alert("Weekly total " + totalEarned);


// A student can be enrolled to a class only if the class is not full and the class schedule does not conflict with her current schedule.
var classFull=prompt("Is the class full?")=="yes";
var conflict=prompt("Is there a conflict with your schedule?")=="yes";
console.log("classFull"+ classFull);
console.log("conflict"+ conflict);

var canEnroll=!classFull && !conflict;
alert("Able to enroll in class "+canEnroll);


//     // A product offer can be applied only if people buys more than 2 items, and the offer has not expired.
// // Premium members do not need to buy a specific amount of products.
var items=Number (prompt( "How many items did you purchase?"));
var validOffer=prompt("Is the offer still valid?")=="yes";
var premium= prompt("Are you a premium member?")=="yes";
console.log("validOffer"+ validOffer);
console.log("premium"+ premium);

var discount=(items > 2 && validOffer||premium);
alert("Offer applies " + discount);
