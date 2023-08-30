export class Person {

  //01- Aqui tengo los atributos y el constructor creados d ela forma tradicional 
  // public name: string;
  // private address: string;
  // constructor(name: string, address: string) {
  //   this.name = name;
  //   this.address = address;
  // }

  //02- Aqui tengo los atributos y el constructor creados de la forma corta todo 
  //dentro del constructor esta todo 
  constructor(public name: string, private address: string = 'No address') { }

}

//01-Forma tradicional de crear una clase que hereda de la clase persona 
// export class Hero extends Person {
//   constructor(
//     public alterEgo: string,
//     public age: number,
//     public realname: string) {
//     super(realname, 'No address');
//   }
// }

//02-Forma corta de crear una clase que hereda de la clase persona y la mas recomendada
export class Hero {

  constructor(
    public alterEgo: string,
    public age: number,
    public realname: string,
    public person: Person) { }

}

const personTony = new Person('Peter Parker', 'New York');
const iroman = new Hero('Tony Stark', 45, 'Tony', personTony);
console.log(iroman);