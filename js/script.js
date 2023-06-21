let celsius = document.getElementById("celsius");
let fahrenheit = document.getElementById("fahrenheit");
let result = document.getElementById("result")

celsius.oninput = () => {
    let output = (parseFloat(celsius.value) * 9) / 5 + 32;
    fahrenheit.value = parseFloat(output.toFixed(2));
    result.innerHTML = fahrenheit.value + "°F = (" + celsius.value + "°C x 9/5) + 32"
};

fahrenheit.oninput = () => {
    let output = ((parseFloat(fahrenheit.value) - 32) * 5) / 9;
    celsius.value = parseFloat(output.toFixed(2));
    result.innerHTML = celsius.value + "°C = (" + fahrenheit.value + "°F - 32) x 5/9"
};
