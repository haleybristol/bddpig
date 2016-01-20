
var toPigLatin = function(phrase) {
  var finalWord = 0;
  var wordArray = phrase.split(" ");

  for (i=0; i < wordArray.length; i++) {
    if (wordArray[i].charAt(0) === "a") {
      finalWord = wordArray[i] += "ay";
    } else if (wordArray[i].charAt(0) === "e") {
      finalWord = wordArray[i] +=  "ay";
    } else if (wordArray[i].charAt(0) === "i") {
      finalWord = wordArray[i] +=  "ay";
    } else if (wordArray[i].charAt(0) === "o") {
      finalWord = wordArray[i] +=  "ay";
    } else if (wordArray[i].charAt(0) === "u") {
      finalWord = wordArray[i] +=  "ay";
    } else {
      var firstLetter = wordArray[i].charAt(0);
      var restOfword = wordArray[i].slice(1);
      finalWord = restOfword + firstLetter + "ay";
    }
    console.log(finalWord);
  }
  // return(wordArray);
  // console.log(wordArray);
}
toPigLatin("out all dry every target any");
