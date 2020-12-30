(function(){function r(e,n,t){function o(i,f){if(!n[i]){if(!e[i]){var c="function"==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error("Cannot find module '"+i+"'");throw a.code="MODULE_NOT_FOUND",a}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){var n=e[i][1][r];return o(n||r)},p,p.exports,r,e,n,t)}return n[i].exports}for(var u="function"==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o}return r})()({1:[function(require,module,exports){
const changeColorButton = document.querySelector('#enter');
let currentColorPlace = document.getElementById('current-color');
let userColor = document.getElementById('user-color');

let body = document.body;
let defaultBGColor = '#2E5EAA';
body.style.background = defaultBGColor;

currentColorPlace.innerHTML = defaultBGColor;

// 👇👇👇👇👇👇👇👇👇👇
// Found on https://stackoverflow.com/questions/48484767/javascript-check-if-string-is-valid-css-color
function isColor(strColor) {
  const body = document.createElement('body');
  const style = body.style;
  style.color = strColor;
  return style.color != '';
}
//👆👆👆👆👆👆👆👆👆👆

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
},{}]},{},[1]);
