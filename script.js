const Input= document.querySelector('.userInput');
const btn=document.querySelector('.checkit');
const corrected=document.querySelector('.correctedText')

btn.addEventListener('click',() => {
  corrected.value = Input.value;
});

