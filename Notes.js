function sumValues(someArray) {
    var total = 0;
    someArray.forEach(function (number) {
        total += number;
    });
  return total;
}

function concatStrings(someArray) {
    var ultimateString = "";
    someArray.forEach(function (str) {
        ultimateString  += str;
    });
    return ultimateString;
}

