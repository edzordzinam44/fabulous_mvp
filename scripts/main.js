// const myHeading = document.querySelector("h1");
// myHeading.textContent = "Welcome to my Page!";


let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

myButton.onclick= () => {
    setUserName()
};

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
        setUserName()
    } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozillia is cool, ${myName}`;
  }

  if (!localStorage.getItem("name")) {
    setUserName()
  } else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Lets start the Journey, ${myName}!!`;
  }
}
