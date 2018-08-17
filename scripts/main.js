var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('Src');
    if(mySrc === 'images/WSGI.png') {
        myImage.setAttribute('src', 'images/Python.png');
    } else {
        myImage.setAttribute('src', 'images/WSGI.png');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    var myName = prompt('Please enter your name.');
    localStorage.setItem('name', myName)
    myHeading.textContent = 'WSGI简介, ' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
} else {
    var storedName = localStorage.getItem('name');
    myHeading.textContent = 'WSGI简介， ' + storedName;
}

myButton.onclick = function() {
    setUserName();
}