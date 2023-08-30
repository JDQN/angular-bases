export function whatsMyType<T>(argument: T): T {
  return argument
}

const amIString = whatsMyType<string>('Hola Mundo');
const amINyumber = whatsMyType<number>(100);
const amIArray = whatsMyType<number[]>([1, 2, 3, 4, 5]);

console.log(amIString.split(' '));
console.log(amINyumber.toFixed(2));
console.log(amIArray.join('-'));