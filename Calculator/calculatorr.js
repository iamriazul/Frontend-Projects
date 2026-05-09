const firstInput = document.querySelector('#firstInput');
const secondInput = document.querySelector('#secondInput');
const result = document.querySelector('#result');

document.querySelector('#addBtn').addEventListener('click', () => {
   const firstNumber = parseFloat(firstInput.value);
   const secondNumber = parseFloat(secondInput.value);

   result.textContent = firstNumber + secondNumber;
});
document.querySelector('#subBtn').addEventListener('click', () => {
   const firstNumber = parseFloat(firstInput.value);
   const secondNumber = parseFloat(secondInput.value);

   result.textContent = firstNumber - secondNumber;
});
document.querySelector('#multiplyBtn').addEventListener('click', () => {
   const firstNumber = parseFloat(firstInput.value);
   const secondNumber = parseFloat(secondInput.value);

   result.textContent = firstNumber * secondNumber;
});

document.querySelector('#divisionBtn').addEventListener('click', () => {
   const firstNumber = parseFloat(firstInput.value);
   const secondNumber = parseFloat(secondInput.value);
   if (secondNumber==0){
    result.textContent="Infinity";
   } else {
           result.textContent = firstNumber /secondNumber;
   }
});