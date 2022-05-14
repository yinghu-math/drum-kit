const buttons = document.querySelectorAll('.drum')

/* for (let i = 0; i < buttons.length; i++) {
  const button = buttons[i];
  button.addEventListener('click', function () {
    alert(button.innerHTML+" button got clicked!")
  })
}
*/


function clicked(button){
  alert(button.innerHTML+" button got clicked!");
}


for (const button of buttons) {
  button.addEventListener("click", function(){clicked(button)});
}
