import {translate} from './translate.js';

function translateText () {
  const inputText = document.getElementById("inputText").value;
  const language1 = document.getElementById("language1").value;
  const language2 = document.getElementById("language2").value;
  if (language1 === language2) {
    document.getElementById("translatedText").value = `Choose different language` 
    } else {
  document.getElementById("translatedText").value = translate(language1, language2, inputText)
  }
}

window.translateText = translateText;