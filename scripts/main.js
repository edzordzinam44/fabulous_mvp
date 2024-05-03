// const myHeading = document.querySelector("h1");
// myHeading.textContent = "Welcome to my Page!";

const myImage = document.querySelector("img");
myImage.onclick = () => {
    const mySrc = myImage.getAttribute("src");
    if (mySrc === "logo/icon_tv.png") {
        myImage.setAttribute("src", "logo/icon_tv.png");
    } else {
        myImage.setAttribute("src", "logo/icon_tv.png")
    }
};

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
    myHeading.textContent = `You're so Cool, ${myName}!!`;
  }
}
