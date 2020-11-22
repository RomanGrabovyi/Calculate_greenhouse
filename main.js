const squareInput = document.getElementById('square-input'),
    squareRange = document.getElementById('square-range'),
    typeOfPlastic = document.querySelectorAll('input[name="type"]'),
    //Стартова ціна теплиці
    basePricePerMeter = 280,
    totalPriceElement = document.getElementById('total-price');

// range+number
squareRange.addEventListener('input', () => {
    squareInput.value = squareRange.value;
});
squareInput.addEventListener('input', () => {
    squareRange.value = squareInput.value;
});

const inputs = document.querySelectorAll('input');

inputs.forEach((item) => {
    item.addEventListener('input', calculate);
});
calculate();

function calculate() {
    //Площа теплиці
    const square = parseInt(squareInput.value);
    //Товщина плівки
    let typePlasticCost;
    typeOfPlastic.forEach((item) => {
        if (item.checked) {
            typePlasticCost = parseFloat(item.value);
        }
    });
    
    const totalPrice = basePricePerMeter * square * typePlasticCost;
    totalPriceElement.innerText = totalPrice;

}