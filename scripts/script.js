const changeColorButton = document.querySelector('#enter');
let currentColorPlace = document.getElementById('current-color');
let userColor = document.getElementById('user-color');

let body = document.body;
let defaultBGColor = '#2E5EAA';
body.style.background = defaultBGColor;

currentColorPlace.innerHTML = defaultBGColor;

// Idea on https://stackoverflow.com/questions/48484767/javascript-check-if-string-is-valid-css-color
function isColor(strColor) {
  const body = document.createElement('body');
  const style = body.style;
  style.color = strColor;
  return style.color != '';
}

function changeColor() {
  if (isColor(userColor.value)) {
    currentColorPlace.style.color = 'white';
    body.style.background = userColor.value;
    currentColorPlace.innerText = userColor.value;
  } 
  else {
    currentColorPlace.innerText = 'Please enter a valid color!';
    currentColorPlace.style.color = 'rgb(240, 56, 56)';
  }
}

changeColorButton.addEventListener('click', changeColor);

module.exports.isColor = isColor;