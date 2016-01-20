var toPigLatin = function(phrase) {
  var wordArray = phrase.split(" ");
  for (i=0; i < wordArray.length; i++) {
    if (wordArray[i].charAt(0) === "a" || wordArray[i].charAt(0) === "e" || wordArray[i].charAt(0) === "i" || wordArray[i].charAt(0) === "o" || wordArray[i].charAt(0) === "u") {
      var finalWord = wordArray[i] += "ay";
    } else {
      var firstLetter = wordArray[i].charAt(0);
      var restOfword = wordArray[i].slice(1);
      finalWord = restOfword + firstLetter + "ay";
    }
    console.log(finalWord);
  }
}
toPigLatin("out all dry every target any");
