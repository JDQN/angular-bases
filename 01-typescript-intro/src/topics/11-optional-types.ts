export interface Passenger {
  name: string;
  children?: string[];
}

const passenger1: Passenger = {
  name: 'John',
}

const passenger2: Passenger = {
  name: 'Carlos',
  children: ['Sue', 'John Jr.']
}

const printChildren = (passenger: Passenger) => {
  const howManyChildren = passenger.children?.length || 0;
  console.log(howManyChildren);
}

printChildren(passenger1);
printChildren(passenger2);