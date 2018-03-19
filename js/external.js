"use strict"

//
//
// console.log("Hello from external JavaScript.");
//
// alert("Welcome to my website!");
//
// var userInput = prompt("What is your favorite color?");
//
// alert("Great! " + userInput + " is my favorite color too!");


var itemsBought = parseInt(prompt('how many items were bought?')) >=3;
var isOfferValid = prompt('is the offer valid?') === 'yes';
var isPremiumMember = prompt('are you a premium member?') === 'yes';

var shouldApplyOffer = (itemsBought > 2 && isOfferValid) || isPremiumMember;

alert('Offer applies ' + shouldApplyOffer);