const myImage = document.querySelector("img");

myImage.addEventListener("click", () => {
  const mySrc = myImage.getAttribute("src");
  if (mySrc === "C://Users/Kiera/web-projects/test-site/scripts/main.js") {
    myImage.setAttribute(
      "src",
      "C:/Users/Kiera/web-projects/test-site/images/squinty_human.jpg",
    );
  } else {
    myImage.setAttribute(
      "src",
      "C:/Users/Kiera/web-projects/test-site/images/squinty_human.jpg",
    );
  }
});

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
  const myName = prompt("Please enter your name.");
  localStorage.setItem("name", myName);
  myHeading.textContent = `Welcome to reading my shit, ${myName}`;
}

if (!localStorage.getItem("name")) {
  setUserName();
} else {
  const storedName = localStorage.getItem("name");
  myHeading.textContent = `Welcome! Again! Read my shit, ${storedName}`;
}

myButton.addEventListener("click", () => {
  setUserName();
});

function setUserName() {
  const myName = prompt("Please enter your name.");
  if (!myName) {
    setUserName();
  } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Mozilla is cool, ${myName}`;
  }
}
