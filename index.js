const buttons = document.querySelectorAll('.drum')

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

for (const button of buttons) {
  button.addEventListener("click", function(){
    // console.log(this); will give me the button that was triggered the function.
    let buttonText = this.innerHTML;
    switch (buttonText) {
      case 'w':
        let tom1 = new Audio('sounds/tom-1.mp3');
        tom1.play();
        break;
      case 'a':
        let tom2 = new Audio('sounds/tom-2.mp3');
        tom2.play();
        break;
      case 's':
        let tom3 = new Audio('sounds/tom-3.mp3');
        tom3.play();
        break;
      case 'd':
        let tom4 = new Audio('sounds/tom-4.mp3');
        tom4.play();
        break;
      case 'j':
        let snare = new Audio('sounds/snare.mp3');
        snare.play();
        break;
      case 'k':
        let crash = new Audio('sounds/crash.mp3');
        crash.play();
        break;
      case 'l':
        let kickBass = new Audio('sounds/kick-bass.mp3');
        kickBass.play();
        break;
     default: 
        console.log(buttonText);
    }
  });
}
