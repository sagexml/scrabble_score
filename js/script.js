var input, score;
const letterValues = {
  'AEIOULNRST': 1,
  'DG': 2,
  'BCMP': 3,
  'FHVWY': 4,
  'K': 5,
  'JX': 8,
  'QZ': 10,
}

function init(){
    input = document.querySelector("#inputDisplay");
    score = document.querySelector("#score");
}

function showScore(){
    const word = input.value.trim();
    // call scrabbleScore function here 
    // e.g scrabbleScore('bingo')
    score.textContent = scrabbleScore(word)
}

function scrabbleScore(word) {
  return [...word.toUpperCase()].reduce(
    function(accumulator, currentLetter) {
      for (key of Object.keys(letterValues)) {
        const match = key.search(currentLetter) 
        if (match > -1) 
          return accumulator + letterValues[key]
      }
    }, 0)
}