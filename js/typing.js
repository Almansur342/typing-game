function hideElement(elementId){
 const element =  document.getElementById(elementId);
 element.classList.add('hidden');
}
function showElement(elementId){
  const element = document.getElementById(elementId);
  element.classList.remove('hidden');
}
function getRandomAlphabet(){
  const alphabet = 'abcdefghijklmnopqrstuvwxyz'
  const splitedAlphabet = alphabet.split('');
  const randomNumber = Math.round(Math.random()*25);
  const randomAlphabet = splitedAlphabet[randomNumber];
  return randomAlphabet;
}

function addColor(elementId){
 const element =  document.getElementById(elementId);
 element.classList.add('bg-orange-400');
}
function removeColor(elementId){
const element = document.getElementById(elementId);
 element.classList.remove('bg-orange-400');
}

function scoreLife(elementId){
  const element = document.getElementById(elementId);
  const elementText = element.innerText;
  const elementNumber = parseInt(elementText);
  return elementNumber;
}