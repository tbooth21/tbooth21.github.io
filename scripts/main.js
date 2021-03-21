let myImage = document.querySelector('img');

myImage.onmouseover = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/mozilla-logo.png') {
      myImage.setAttribute('src','images/mozilla-logo2.png');
    } else {
      myImage.setAttribute('src','images/mozilla-logo.png');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
myButton.onclick = function() {
  setUserName();
}
function setUserName() {
  let myName = prompt('Please enter your name.');
  if(!myName) {
    setUserName();
  } else {
    localStorage.setItem('name', myName);
    myHeading.textContent = 'Welcome to Mozilla Firefox, ' + myName;
  }
}
if(!localStorage.getItem('name')) {
  setUserName();
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = 'Welcome to Mozilla Firefox, ' + storedName;
}