
var toPigLatin = function(phrase) {
var finalWord = 0;
var wordArray = phrase.split(" ");

for (i=0; i < wordArray.length; i++) {
  for (j = 0; j < wordArray[i].length; j++) {
    if (wordArray[i].charAt(j) === "a" || wordArray[i].charAt(j) === "e" || wordArray[i].charAt(j) === "i" || wordArray[i].charAt(j) === "o" || wordArray[i].charAt(j) === "u") {
      var firstLetters = wordArray[i].substring(0, j);
      var restOfword = wordArray[i].slice(j);
    }
    finalWord = restOfword + firstLetters + "ay";
    // } else {
    //   finalWord = wordArray[i] + "ay";
    // }
  }
  console.log(finalWord);
  }
}
toPigLatin("out all dry every chair target any");
