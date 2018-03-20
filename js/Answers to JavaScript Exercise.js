1.

var littleMermaid = 3;
var brotherBear = 5;
var hercules = 1;
var pricePerDay = 3;

total = (littleMermaid*pricePerDay) + (brotherBear*pricePerDay) + (hercules*pricePerDay);

2.

var google = 400;
var amazon = 380;
var facebook = 350;

paycheck = (facebook*10) + (google*6) + (amazon*4);

3.

var full = false;
var conflict = false;

enrolled = !full && !conflict;

4.

var items = 3;

var boughtEnoughItems = items >  2;

var isOfferExpired = false;

var isPremiumMember = true;

 offerApplies = (boughtEnoughItems && !isOfferExpired) || (isPremiumMember && !isOfferExpired);

5.

var username = 'codeup';
var password = 'notastrongpassword';

var isPasswordLengthCorrect = password.length >= 5;

var passwordIncludesUsername = password.indexOf(username) !== -1;
var isUsernameLengthCorrect = username.length <=20;
var usernameHasSpaces = username.trim().length !== username.length;
var passwordHasSpaces = password.trim().length !== username.length;

validLogIn = isPasswordLengthCorrect && !passwordIncludesUsername && isUsernameLengthCorrect && !usernameHasSpaces && !passwordHasSpaces;