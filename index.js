function cPrime() {
    const inputElement = document.getElementById('input');
    const res = document.getElementById('result');
    
    if (!inputElement || !res) {
        console.error("Required HTML elements not found");
        return;
    }
    
    const n = parseInt(inputElement.value, 10);
    if (!inputElement.value.trim() || isNaN(n) || n <= 1) {
        res.textContent = "Please enter a valid number greater than 1.";
        res.style.color = "red";
        return;
    }
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(n); i++) {
        if (n % i === 0) {
            isPrime = false;
            break;
        }
    }
    if (isPrime) {
        res.textContent = `${n} is a Prime Number.`;
        res.style.color = "green";
    } else {
        res.textContent = `${n} is a Non-Prime Number.`;
        res.style.color = "blue";
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const checkButton = document.getElementById('checkButton');
    if (checkButton) {
        checkButton.addEventListener('click', cPrime);
    }
});

document.getElementById('checkButton').addEventListener('click', function() {
    const numberInput = document.getElementById('numberInput').value;
    const resultDiv = document.getElementById('result');
    const errorDiv = document.getElementById('error');
    resultDiv.textContent = '';
    errorDiv.textContent = '';

    const num = parseInt(numberInput);
    if (isNaN(num) || num <= 1) {
        errorDiv.textContent = 'Please enter a valid number greater than 1.';
        return;
    }

    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }

    if (isPrime) {
        resultDiv.textContent = num + ' is a prime number.';
    } else {
        resultDiv.textContent = num + ' is not a prime number.';
    }
});

