function mul() {
    let price = document.getElementById("number");

    let result = document.getElementById("result");

    let sum = parseFloat(price.value) * 0.23;

    result.innerHTML = sum.toFixed(2);
}

