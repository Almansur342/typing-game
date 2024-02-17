document.addEventListener('keyup', function(event){
  playerPressed = event.key;
  if(playerPressed === 'Escape'){
    gameOver();
  }
  const currentAlphabetElement = document.getElementById('current-alphabet');
  const currentAlphabetText = currentAlphabetElement.innerText;
  const expectedAlphabet = currentAlphabetText.toLowerCase();
  if(playerPressed == expectedAlphabet){
    const newScore = scoreLife('current-score') + 1;
    document.getElementById('current-score').innerText = newScore;
    removeColor(expectedAlphabet);
    continueGame();
  }else{
   const newLife =  scoreLife('current-life') - 1;
   document.getElementById('current-life').innerText = newLife;
    if(newLife == 0){
      gameOver();
    }
  }
 })
 
 function play(){
  hideElement('home-screen');
  showElement('play-ground');
  document.getElementById('current-score').innerText = 0;
  document.getElementById('current-life').innerText = 5;
  continueGame()
  
}

function continueGame(){
  const alphabet = getRandomAlphabet();
  const currentAlphabet = document.getElementById('current-alphabet');
  currentAlphabet.innerText = alphabet;
  addColor(alphabet);
}

function gameOver(){
  hideElement('play-ground');
  showElement('final-score')
  const score = document.getElementById('current-score').innerText;
  document.getElementById('last-score').innerText = score;
  const currentAlphabet = document.getElementById('current-alphabet').innerText;
  removeColor(currentAlphabet);
}
 

