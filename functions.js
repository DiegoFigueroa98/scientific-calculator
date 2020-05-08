var display = document.getElementById("screen");
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
      display.value += button.textContent;
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
    eval(display.value) == SyntaxError ||
    eval(display.value) == ReferenceError ||
    eval(display.value) == TypeError
  ) {
    display.value == "Syntax Error";
  }
}

function equals() {
  if (display.value.indexOf("^") > -1) {
    var base = display.value.slice(0, display.value.indexOf("^"));
    var exponent = display.value.slice(display.value.indexOf("^") + 1);
    display.value = eval("Math.pow(" + base + "," + exponent + ")");
  } else {
    display.value = eval(display.value);
    checkLength();
    syntaxError();
  }
}

function clear() {
  display.value = "";
}

function backspace() {
  display.value = display.value.substring(0, display.value.length - 1);
}

function multiply() {
  display.value += "*";
}

function divide() {
  display.value += "/";
}

function plusMinus() {
  if (display.value.charAt(0) === "-") {
    display.value = display.value.slice(1);
  } else {
    display.value = "-" + display.value;
  }
}

function factorial() {
  var number = 1;
  if (display.value === 0) {
    display.value = "1";
  } else if (display.value < 0) {
    display.value = "undefined";
  } else {
    var number = 1;
    for (var i = display.value; i > 0; i--) {
      number *= i;
    }
    display.value = number;
  }
}

function pi() {
  display.value = display.value * Math.PI;
}

function square() {
  display.value = eval(display.value * display.value);
}

function squareRoot() {
  display.value = Math.sqrt(display.value);
}

function percent() {
  display.value = display.value / 100;
}

function sin() {
  display.value = Math.sin(display.value);
}

function asin() {
  display.value = Math.asin(display.value);
}

function cos() {
  display.value = Math.cos(display.value);
}

function acos() {
  display.value = Math.acos(display.value);
}

function tan() {
  display.value = Math.tan(display.value);
}

function atan() {
  display.value = Math.atan(display.value);
}

function log() {
  display.value = Math.log10(display.value);
}

function ln() {
  display.value = Math.log(display.value);
}

function exponent() {
  display.value += "^";
}

function exp() {
  display.value = Math.exp(display.value);
}

function radians() {
  display.value = display.value * (Math.PI / 180);
}

function degrees() {
  display.value = display.value * (180 / Math.PI);
}

function antilog() {
  display.value = Math.pow(10, display.value);
}

function inverse() {
  display.value = 1 / display.value;
}

function perMillion() {
  display.value = display.value / 1000000;
}
