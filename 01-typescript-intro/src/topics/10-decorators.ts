function classDecorators<T extends { new(...args: any[]): {} }>(
  constructor: T
) {
  return class extends constructor {
    newProperty = 'new property';
    hello = 'override';
  }
}


@classDecorators
class SueprClass {

  public myProperty: string = 'abc';


  print() {
    console.log('Hello World');
  }
}

console.log(SueprClass);
const myClass = new SueprClass();
console.log(myClass);