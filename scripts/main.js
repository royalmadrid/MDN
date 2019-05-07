// var myHeading = document.querySelector('h1');
// myHeading.textContent = 'Hello World';

var myImage = document.querySelector('img');
myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if (mySrc === 'images/firefox-logo2.png') {
        myImage.setAttribute('src', 'https://raw.githubusercontent.com/roy-tian/mdn-examples/master/html/mozilla-is-cool-styled/images/firefox-icon.png');
    } else {
        myImage.setAttribute('src', 'images/firefox-logo2.png');
    }
}

function setHeading(name) {
    var myHeading = document.querySelector('h1');
    myHeading.textContent = 'Mozilla太酷了' + name; 
}

function setUserName() {
    var myName = prompt('请输入你的名字:')
    localStorage.setItem('name', myName);
    setHeading(myName);
}

var storedName = localStorage.getItem('name');
if (!storedName) {
    setUserName();
}  else {
    setHeading(storedName);
}

var myButton = document.querySelector('button');
myButton.onclick = setUserName;