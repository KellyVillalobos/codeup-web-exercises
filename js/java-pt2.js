"use strict"

//my answer

var userInputTitle = prompt("What title did you rent");
var userInputDays = prompt("How many days did you rent this title");
var pricePerDay = 3;


var userInputTitle2 = prompt("What title did you rent");
var userInputDays2 = prompt("How many days did you rent this title");

var userInputTitle3 = prompt("What title did you rent");
var userInputDays3 = prompt("How many days did you rent this title");

var total = (userInputDays * pricePerDay) + (userInputDays2 * pricePerDay) + (userInputDays3 * pricePerDay);
alert("your total is " + total);

//his answers

var littleMermaidDays = prompt('How many days did we rent the little mermaid for?')
var brotherBearDays = prompt('How many days did we rent the little mermaid for?')
var herculesDays = prompt('How many days did we rent the little mermaid for?')

var pricePerDay = 3;

var totalDays =  littleMermaidDays + brotherBearDays + herculesDays;
var totalPrice =

//my answer

var googleDays = prompt("How many days did you work for google?");
console.log("user worked for google " + googleDays + " days");
var userInputAmount1 = prompt("How much did they pay you?");
console.log("user was paid " + " $" + userInputAmount1)


var amazonDays = prompt("How many days did you work for amazon");
console.log("user worked for amazon " + amazonDaysDays + " days");
var userInputAmount2 = prompt("How much did they pay you?");


var facebookDays = prompt("How many days did you work for facebook?");
console.log("user worked for google " + googleDays + " days");
var userInputAmount3 = prompt("How much did thy pay you?");

var total = (userInputAmount1 * googleDays) + (userInputAmount2 * amazonDays) + (userInputAmount3 * facebookDays);
alert("Your total wages are: " + total);

// his answer

var googleRate = parseInt(prompt('Hourly rate for google?'));
var amazonRate = parseInt(prompt('Hourly rate for google?'));
var facebookRate = parseInt(prompt('Hourly rate for google?'));

var googleHours = parseFloat(prompt('how many hours did you work for google?'));
var amazonHours = parseFloat(prompt('how many hours did you work for google?'));
var facebookHours = parseFloat(prompt('how many hours did you work for google?'));

var total = googleRate * googleHours;
total += amazonRate * amazonHours;
total += facebookRate * facebookHours;

//his answer

var classIsFull = prompt('Is the class full?') === 'yes';
var hasScheduleConflicts =prompt('do you have schedule conflicts?') === 'yes';

console.log('classIsFull: ' + classIsFull);
console.log("hasScheduleConflicts: " + hasScheduleConflicts);

var canEnroll = !classIsFull && !hasScheduleConflicts;
alert("able to enrol: " + canEnroll);

//his answer

var itemsBought = parseInt(prompt('how many items were bought?')) >=3;
var isOfferValid = prompt('isthe offer valid?') === 'yes';
var isPremiumMember = prompt('are you a premium member?') === 'yes';

var shouldApplyOffer = (itemsBought > 2 && isOfferValid) || isPremiumMember;

alert('Offer applies ' + shouldApplyOffer);