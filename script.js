// script.js

document.addEventListener("DOMContentLoaded", function () {
    const inputField = document.querySelector('input[type="text"]');
    const buttons = document.querySelectorAll('.btn');
    const btnDelete = document.querySelector('.btnDelete');
    const btnReset = document.querySelector('.btnReset');
    const btnEqual = document.querySelector('.btnEqual');

    // Handle button clicks
    buttons.forEach(button => {
        button.addEventListener('click', function () {
            inputField.value += this.textContent;
        });
    });

    // Handle delete button click
    btnDelete.addEventListener('click', function () {
        inputField.value = inputField.value.slice(0, -1);
    });

    // Handle reset button click
    btnReset.addEventListener('click', function () {
        inputField.value = '0';
    });

    // Handle equal button click
    btnEqual.addEventListener('click', function () {
        try {
            // Evaluate the expression
            inputField.value = eval(inputField.value);
        } catch (error) {
            inputField.value = 'Error';
        }
    });
});
