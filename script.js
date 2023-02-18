// FOR API_KEY
const apiKey = process.env.API_KEY;


const checkButton = document.querySelector('.checkit');
const userInput = document.querySelector('#userInput');
const correctedText = document.querySelector('#correctedText');

checkButton.addEventListener('click', () => {
  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': apiKey,
      'X-RapidAPI-Host': 'jspell-checker.p.rapidapi.com'
    },
    body: JSON.stringify({
      language: "frFR",
      fieldvalues: userInput.value,
      config: {
        forceUpperCase: false,
        ignoreIrregularCaps: false,
        ignoreFirstCaps: false,
        ignoreNumbers: true,
        ignoreUpper: false,
        ignoreDouble: true,
        ignoreWordsWithNumbers: true
      }
    })
  };

  fetch('https://jspell-checker.p.rapidapi.com/check', options)
    .then(response => response.json())
    .then(response => {
      console.log(response);
      const correctedWords = response.elements[0].errors.map(error => error.suggestions[0] || error.word);
      correctedText.innerHTML = correctedWords.join(' ');
    })
    .catch(err => console.error(err));
});

/*const checkButton = document.querySelector('.checkit');
const userInput = document.querySelector('#userInput');
const correctedText = document.querySelector('#correctedText');

checkButton.addEventListener('click', () => {
  const options = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
      'X-RapidAPI-Key': 'apiKey',
      'X-RapidAPI-Host': 'jspell-checker.p.rapidapi.com'
    },
    body: JSON.stringify({
      language: "frFR",
      fieldvalues: userInput.value,
      config: {
        forceUpperCase: false,
        ignoreIrregularCaps: false,
        ignoreFirstCaps: false,
        ignoreNumbers: true,
        ignoreUpper: false,
        ignoreDouble: true,
        ignoreWordsWithNumbers: true
      }
    })
  };

  fetch('https://jspell-checker.p.rapidapi.com/check', options)
    .then(response => response.json())
    .then(response => {
      console.log(response);
      const correctedWords = response.elements[0].errors.map(error => error.suggestions[0] || error.word);
      const inputWords = userInput.value.split(' ');
      const correctedSentence = inputWords.map((word, index) => {
        const correctedWord = correctedWords[index];
        return correctedWord || word;
      }).join(' ');
      correctedText.innerHTML = correctedSentence;
    })
    .catch(err => console.error(err));
});*/