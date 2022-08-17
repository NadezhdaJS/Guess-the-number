"use strict";
let mysticNumber = Math.trunc(Math.random() * 20 + 1);
let attemptNumber = 1;
let changeAttempt = function (attempt) {
  document.querySelector(".attempt-number").textContent = attempt;
};
let displayMessage = function (message) {
  document.querySelector("h1").innerHTML = message;
};
let changeColorH1 = function (colorH1) {
  document.querySelector("h1").style.color = colorH1;
};

let changeSizeH1 = function (sizeH1) {
  document.querySelector("h1").style.fontSize = sizeH1;
};

let changeBackgroundColor = function (backgroundColor) {
  document.querySelector(".app-guess-the-number").style.background =
    backgroundColor;
};

let changeBackgroundCheck = function (backgroundCheck) {
  document.querySelector(".check").style.background = backgroundCheck;
};

let changeBackgroundAgain = function (backgroundAgain) {
  document.querySelector(".again").style.background = backgroundAgain;
};
let changeShadowCheck = function (shadowCheck) {
  document.querySelector(".check").style.boxShadow = shadowCheck;
};

let changeShadowNumber = function (shadowNumber) {
  document.querySelector(".mystic-number").style.boxShadow = shadowNumber;
};

let changeShadowAgain = function (shadowAgain) {
  document.querySelector(".again").style.boxShadow = shadowAgain;
};

let changeMarginNumber = function (marginNumber) {
  document.querySelector(".mystic-number").style.marginTop = marginNumber;
};

let changePaddingH1 = function (paddingH1) {
  document.querySelector("h1").style.paddingTop = paddingH1;
};

let displayAttempt = function (attempt) {
  document.querySelector(".attempt-number").textContent = attempt;
};

document.querySelector(".check").addEventListener("click", function () {
  const yourNumber = Number(document.querySelector(".your-number").value);
  if (!yourNumber) {
    displayMessage("Not a number!");
    changeColorH1("#BC1A4B");
  } else if (yourNumber === mysticNumber) {
    document.querySelector(".mystic-number").textContent = mysticNumber;
    displayMessage("you won!");
    changeColorH1("#fff");
    changeSizeH1("64px");
    changeBackgroundColor(
      "linear-gradient(174.36deg, #892AFE 4.5%, #FF2366 46.86%, #F3C735 102.96%)"
    );
    changeBackgroundCheck(
      "linear-gradient(115.24deg, #E9886F 16.02%, #FDA481 83.98%)"
    );
    changeShadowCheck("10px 20px 20px #F4974D");
    changeShadowNumber("none");
    changeMarginNumber("80px");
    changePaddingH1("80px");
    changeBackgroundAgain(
      "linear-gradient(115.24deg, #A55CFF 16.02%, #BC77E2 83.98%)"
    );
    changeShadowAgain("10px 10px 10px #9220DB");
  } else if (yourNumber !== mysticNumber) {
    if (yourNumber >= 0) {
      changeAttempt(attemptNumber++);
      changeColorH1("#BC1A4B");
      changeMarginNumber("80px");
      changePaddingH1("80px");
      if (yourNumber > mysticNumber) {
        displayMessage("Too high!");
      } else {
        displayMessage("Too low!");
      }
    } else {
      displayMessage("Enter a positive number");
      changeColorH1("#BC1A4B");
    }
  }
});
document.querySelector(".again").addEventListener("click", function () {
  mysticNumber = Math.trunc(Math.random() * 20 + 1);
  document.querySelector(".mystic-number").textContent = "?";
  attemptNumber = 0;
  changeAttempt(attemptNumber++);
  displayMessage("Guess <br> the number!");
  changeColorH1("#fff");
  changeSizeH1("50px");
  changeBackgroundColor(
    "linear-gradient(180deg, #0040F4 0%, #9799FA 37.1%, #E7AFC8 64.21%, #FBD4B7 91.32%, #FBD4B7 91.32%)"
  );
  changeBackgroundCheck(
    "linear-gradient(115.24deg, #F6D3BA 16.02%, #FCDCB5 83.98%)"
  );
  changeShadowCheck("10px 20px 20px #FEBF9C");
  changeShadowNumber("10px 20px 20px rgba(205, 147, 182, 0.52)");
  changeMarginNumber("46px");
  changePaddingH1("46px");
  changeBackgroundAgain(
    "linear-gradient(115.24deg, #6786FB 16.02%, #476CF8 83.98%)"
  );
  changeShadowAgain("10px 10px 10px rgba(0, 64, 244, 0.49)");
});
