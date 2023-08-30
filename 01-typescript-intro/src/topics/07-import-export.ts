import { Product } from './06-function-destructuring';
import { taxCalculation } from './06-function-destructuring';

const shoppingCart: Product[] = [
  {
    description: 'Phone 1',
    price: 699,
  },
  {
    description: 'Phone 2',
    price: 799,
  }
];

const [total, totalTax] = taxCalculation({ products: shoppingCart, tax: 0.15 });

console.log('Total', total);
console.log('Tax', totalTax);