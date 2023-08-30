//Esto es una funcion normal o function declaration
function addNumbers(a: number, b: number) {
  return a + b;
}
const result: number = addNumbers(1, 2);
console.table(result);


//Esto es una funcion flecha o arrow function
const addNumberArrow = (a: number, b: number) => a + b;
const resultArrow: number = addNumberArrow(3, 3);
console.table(resultArrow);


function multiply(firstNumber: number, secondNumber?: number, base: number = 3): number {
  return firstNumber * base;
}
const resultMultiply: number = multiply(3);
console.table(resultMultiply);



export { }