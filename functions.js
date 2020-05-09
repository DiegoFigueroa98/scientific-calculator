var mainScreen = document.getElementById("main-screen");
var secondScreen = document.getElementById("second-screen");
var buttons = document.getElementsByClassName("button");

Array.prototype.forEach.call(buttons, function (button) {
  button.addEventListener("click", function () {
    if (
      button.textContent != "sqrt" &&
      button.textContent != "ln" &&
      button.textContent != "log" &&
      button.textContent != "tan" &&
      button.textContent != "atan" &&
      button.textContent != "x^2" &&
      button.textContent != "x^y" &&
      button.textContent != "e^x" &&
      button.textContent != "10^x" &&
      button.textContent != "cos" &&
      button.textContent != "acos" &&
      button.textContent != "+/-" &&
      button.textContent != "1/x" &&
      button.textContent != "=" &&
      button.textContent != "Borrar" &&
      button.textContent != "x" &&
      button.textContent != "÷" &&
      button.textContent != "%" &&
      button.textContent != "<=" &&
      button.textContent != "sin" &&
      button.textContent != "asin" &&
      button.textContent != "ppm" &&
      button.textContent != "x!" &&
      button.textContent != "Pi" &&
      button.textContent != "rad" &&
      button.textContent != "Deg"
    ) {
      secondScreen.value += button.textContent;
    } else if (button.textContent === "=") {
      equals();
    } else if (button.textContent === "Borrar") {
      clear();
    } else if (button.textContent === "x") {
      multiply();
    } else if (button.textContent === "÷") {
      divide();
    } else if (button.textContent === "+/-") {
      plusMinus();
    } else if (button.textContent === "<=") {
      backspace();
    } else if (button.textContent === "%") {
      percent();
    } else if (button.textContent === "Pi") {
      pi();
    } else if (button.textContent === "x^2") {
      square();
    } else if (button.textContent === "sqrt") {
      squareRoot();
    } else if (button.textContent === "sin") {
      sin();
    } else if (button.textContent === "asin") {
      asin();
    } else if (button.textContent === "cos") {
      cos();
    } else if (button.textContent === "acos") {
      acos();
    } else if (button.textContent === "tan") {
      tan();
    } else if (button.textContent === "atan") {
      atan();
    } else if (button.textContent === "log") {
      log();
    } else if (button.textContent === "ln") {
      ln();
    } else if (button.textContent === "x^y") {
      exponent();
    } else if (button.textContent === "x!") {
      factorial();
    } else if (button.textContent === "e^x") {
      exp();
    } else if (button.textContent === "rad") {
      radians();
    } else if (button.textContent === "Deg") {
      degrees();
    } else if (button.textContent === "10^x") {
      antilog();
    } else if (button.textContent === "ppm") {
      perMillion();
    } else if (button.textContent === "1/x") {
      inverse();
    }
  });
});

function syntaxError() {
  if (
    eval(secondScreen.value) == SyntaxError ||
    eval(secondScreen.value) == ReferenceError ||
    eval(secondScreen.value) == TypeError
  ) {
    secondScreen.value == "Syntax Error";
  }
}

function equals() {
  if (secondScreen.value.indexOf("^") > -1) {
    var base = secondScreen.value.slice(0, secondScreen.value.indexOf("^"));
    var exponent = secondScreen.value.slice(
      secondScreen.value.indexOf("^") + 1
    );
    secondScreen.value = eval("Math.pow(" + base + "," + exponent + ")");
    mainScreen.value = secondScreen.value;
  } else {
    secondScreen.value = eval(secondScreen.value);
    mainScreen.value = secondScreen.value;
    checkLength();
    syntaxError();
  }
}

function clear() {
  secondScreen.value = "";
  mainScreen.value = "";
}

function backspace() {
  secondScreen.value = secondScreen.value.substring(
    0,
    secondScreen.value.length - 1
  );
}

function multiply() {
  secondScreen.value += "*";
}

function divide() {
  secondScreen.value += "/";
}

function plusMinus() {
  if (secondScreen.value.charAt(0) === "-") {
    secondScreen.value = secondScreen.value.slice(1);
    mainScreen.value = secondScreen.value;
  } else {
    secondScreen.value = "-" + secondScreen.value;
    mainScreen.value = secondScreen.value;
  }
}

function factorial() {
  var number = 1;
  if (secondScreen.value === 0) {
    secondScreen.value = "1";
  } else if (secondScreen.value < 0) {
    secondScreen.value = "undefined";
  } else {
    var number = 1;
    for (var i = secondScreen.value; i > 0; i--) {
      number *= i;
    }
    secondScreen.value = number;
    mainScreen.value = secondScreen.value;
  }
}

function pi() {
  secondScreen.value = secondScreen.value * Math.PI;
  mainScreen.value = secondScreen.value;
}

function square() {
  secondScreen.value = eval(secondScreen.value * secondScreen.value);
  mainScreen.value = secondScreen.value;
}

function squareRoot() {
  secondScreen.value = Math.sqrt(secondScreen.value);
  mainScreen.value = secondScreen.value;
}

function percent() {
  secondScreen.value = secondScreen.value / 100;
  mainScreen.value = secondScreen.value;
}

function sin() {
  secondScreen.value = Math.sin(secondScreen.value * (Math.PI / 180));
  mainScreen.value = secondScreen.value;
}

function asin() {
  secondScreen.value = Math.asin(secondScreen.value);
  secondScreen.value *= (180 / Math.PI);
  mainScreen.value = secondScreen.value;
}

function cos() {
  secondScreen.value = Math.cos(secondScreen.value * (Math.PI / 180))
  mainScreen.value = secondScreen.value;
}

function acos() {
  secondScreen.value = Math.acos(secondScreen.value);
  secondScreen.value *= (180 / Math.PI);
  mainScreen.value = secondScreen.value;
}

function tan() {
  secondScreen.value = Math.tan(secondScreen.value * (Math.PI / 180));
  mainScreen.value = secondScreen.value;
}

function atan() {
  secondScreen.value = Math.atan(secondScreen.value);
  secondScreen.value *= (180 / Math.PI);
  mainScreen.value = secondScreen.value;
}

function log() {
  secondScreen.value = Math.log10(secondScreen.value);
  mainScreen.value = secondScreen.value;
}

function ln() {
  secondScreen.value = Math.log(secondScreen.value);
  mainScreen.value = secondScreen.value;
}

function exponent() {
  secondScreen.value += "^";
}

function exp() {
  secondScreen.value = Math.exp(secondScreen.value);
  mainScreen.value = secondScreen.value;
}

function radians() {
  secondScreen.value = secondScreen.value * (Math.PI / 180);
  mainScreen.value = secondScreen.value;
}

function degrees() {
  secondScreen.value = secondScreen.value * (Math.PI / 180);
  mainScreen.value = secondScreen.value;
}

function antilog() {
  secondScreen.value = Math.pow(10, secondScreen.value);
  mainScreen.value = secondScreen.value;
}

function inverse() {
  secondScreen.value = 1 / secondScreen.value;
  mainScreen.value = secondScreen.value;
}

function perMillion() {
  secondScreen.value = secondScreen.value / 1000000;
  mainScreen.value = secondScreen.value;
}
