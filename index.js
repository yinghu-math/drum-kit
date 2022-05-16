const buttons = document.querySelectorAll('.drum')

var tom1 = new Audio('sounds/tom-1.mp3');
var tom2 = new Audio('sounds/tom-2.mp3');
var tom3 = new Audio('sounds/tom-3.mp3');
var tom4 = new Audio('sounds/tom-4.mp3');
var snare = new Audio('sounds/snare.mp3');
var crash = new Audio('sounds/crash.mp3');
var kickBass = new Audio('sounds/kick-bass.mp3');

function playAudio(key) {
  switch (key) {
    case 'w':
      tom1.play();
      break;
    case 'a':
      tom2.play();
      break;
    case 's':
      tom3.play();
      break;
    case 'd':
      tom4.play();
      break;
    case 'j':
      snare.play();
      break;
    case 'k':
      crash.play();
      break;
    case 'l':
      kickBass.play();
      break;
   default:
      console.log(key);
  }
}

document.addEventListener('keydown', function() {playAudio(event.key)});

for (const button of buttons) {
  button.addEventListener("click", function(event){playAudio(this.innerHTML)});
}

/* other code templates */

/* for (let i = 0; i < buttons.length; i++) {
  const button = buttons[i];
  button.addEventListener('click', function () {
    alert(button.innerHTML+" button got clicked!")
  })
}
*/

/* function clicked(button){
  let crash = new Audio('sounds/crash.mp3');
  crash.play()
}

for (const button of buttons) {
  button.addEventListener("click", function(){clicked(button)});
} */
