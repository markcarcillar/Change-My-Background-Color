const expect = require('chai').expect;
require('./DOM');

describe('isColor function', () => {
  const isColor = require('../scripts/script').isColor;

  it('should return true in hexadecimal color', () => {
    expect(isColor('#fff')).to.true;
  });

  it('should return true in rgb color', () => {
    expect(isColor('rgb(255, 255, 255)')).to.true;
  });

  it('should return true in text color such as white', () => {
    expect(isColor('white')).to.true;
  });

  it('should return false on invalid color', () => {
    expect(isColor('blck')).to.false;
  });
});

describe('changeColor function', () => {
  let changeColorButton, currentColor, userColor;

  beforeEach(() => {
    changeColorButton = document.querySelector('#enter');
    currentColor = document.querySelector('#current-color');
    userColor = document.querySelector('#user-color');
  });

  afterEach(() => {
    userColor.value = 'rgb(46, 94, 170)';
    changeColorButton.click();
  });

  it('should change the body background color when user enter hexadecimal color', () => {
    userColor.value = '#fff';
    changeColorButton.click();

    expect(document.body.style.backgroundColor).to.equal('rgb(255, 255, 255)');
    expect(currentColor.innerText).to.equal('#fff');
  });

  it('should change the body background color when user enter rgb color', () => {
    userColor.value = 'rgb(251, 251, 251)';
    changeColorButton.click();

    expect(document.body.style.backgroundColor).to.equal('rgb(251, 251, 251)');
    expect(currentColor.innerText).to.equal('rgb(251, 251, 251)');
  });

  it('should change the body background color when user enter text color such as black', () => {
    userColor.value = 'black';
    changeColorButton.click();

    expect(document.body.style.backgroundColor).to.equal('black');
    expect(currentColor.innerText).to.equal('black');
  });

  it('should NOT change the body background color when user enter an invalid color and must raise an error text', () => {
    userColor.value = 'blck';
    changeColorButton.click();

    expect(document.body.style.backgroundColor).to.equal('rgb(46, 94, 170)');
    expect(currentColor.innerText).to.equal('Please enter a valid color!');
  });
});