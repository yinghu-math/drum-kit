const buttons = document.querySelectorAll('.drum')

var tom1 = new Audio('sounds/tom-1.mp3');
var tom2 = new Audio('sounds/tom-2.mp3');
var tom3 = new Audio('sounds/tom-3.mp3');
var tom4 = new Audio('sounds/tom-4.mp3');
var snare = new Audio('sounds/snare.mp3');
var crash = new Audio('sounds/crash.mp3');
var kickBass = new Audio('sounds/kick-bass.mp3');

document.addEventListener('keydown', function(event) {
  switch (event.code) {
    case 'KeyW':
      tom1.play();
      break;
    case 'KeyA':
      tom2.play();
      break;
    case 'KeyS':
      tom3.play();
      break;
    case 'KeyD':
      tom4.play();
      break;
    case 'KeyJ':
      snare.play();
      break;
    case 'KeyK':
      crash.play();
      break;
    case 'KeyL':
      kickBass.play();
      break;
   default:
      console.log(event.code);
  }
});


for (const button of buttons) {
  button.addEventListener("click", function(){
    // console.log(this); will give me the button that was triggered the function.
    let buttonText = this.innerHTML;
    switch (buttonText) {
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
        console.log(buttonText);
    }
  });
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
