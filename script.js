let currentColorPlace = document.getElementById('current-color');
let userColor = document.getElementById('user-color');

let body = document.body;
let defaultBGColor = '#2E5EAA';
body.style.background = defaultBGColor;

currentColorPlace.innerHTML = defaultBGColor;

// 👇👇👇👇👇👇👇👇👇👇
// Found on https://stackoverflow.com/questions/48484767/javascript-check-if-string-is-valid-css-color
function isColor(strColor) {
  const s = new Option().style;
  s.color = strColor;
  return s.color !== '';
}
//👆👆👆👆👆👆👆👆👆👆

function changeColor() {
  if (isColor(userColor.value)) {
    currentColorPlace.style.color = 'white';
    body.style.background = userColor.value;
    currentColorPlace.innerHTML = userColor.value;
  } else {
    currentColorPlace.innerHTML = 'Please enter a valid color!';
    currentColorPlace.style.color = 'rgb(240, 56, 56)';
  };
}