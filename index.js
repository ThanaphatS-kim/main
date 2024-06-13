// function add(a, b, c, d) {
//     return a + b + c + d;
//  }

//  function del(a, b, c, d) {
//     return a - b - c - d;
//  }

//  function mul(a, b, c, d) {
//     return a * b * c * d;
//  }

//  function mod(a, b, c, d) {
//     return a % b % c % d;
//  }

//  function div(a, b, c, d) {
//     return a / b / c / d;
//  }

//  function squa(a, b, c, d) {
//     return a ** b;
//  }

function cal() {
    let number = document.getElementById("number");
    let number2 = document.getElementById("number2");

    let result = document.getElementById("result");

    let sum = parseInt(number.value) + parseInt(number2.value);

    result.innerHTML = sum;

}
function del() {
    let number = document.getElementById("number");
    let number2 = document.getElementById("number2");

    let result = document.getElementById("result");

    let sum = parseInt(number.value) - parseInt(number2.value);

    result.innerHTML = sum;

}
function mul() {
    let number = document.getElementById("number");
    let number2 = document.getElementById("number2");

    let result = document.getElementById("result");

    let sum = parseInt(number.value) * parseInt(number2.value);

    result.innerHTML = sum;

}
function div() {
    let number = document.getElementById("number");
    let number2 = document.getElementById("number2");

    let result = document.getElementById("result");

    let sum = parseInt(number.value) / parseInt(number2.value);

    result.innerHTML = sum;

}
function fun(){  
    document.getElementById("myForm").reset();  
  }   
//  let sum = add(11, 5, 7, 10);
//  let sum2 = del(11, 5, 7, 10);
//  let sum3 = mul(11, 5, 7, 10);
//  let sum4 = mod(11, 5, 7, 10);
//  let sum5 = div(11, 5, 7, 10);
//  let sum6 = squa(11, 5, 7, 10);
//  console.log(sum);
//  console.log(sum2);
//  console.log(sum3);
//  console.log(sum4);
//  console.log(sum5);
//  console.log(sum6);
// document.write("<br><br> a + b + c + d = ", sum);
// document.write("<br> a - b - c - d = ", sum2);
// document.write("<br> a * b * c * d = ", sum3);
// document.write("<br> a % b % c % d = ", sum4);
// document.write("<br> a / b / c / d = ", sum5);
// document.write("<br> a ** b =", sum6);
// document.getElementById("p1").innerHTML = sum
