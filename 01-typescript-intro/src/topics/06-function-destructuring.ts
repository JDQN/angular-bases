export interface Product {
  description: string;
  price: number;
}

const phone: Product = {
  description: 'Samsung Galaxy S10',
  price: 699,
}

const tablet: Product = {
  description: 'iPad Pro',
  price: 799,
}

interface TaxCalculationOptions {
  tax: number;
  products: Product[];
}

//function taxCalculation(options: TaxCalculationOptions): [number, number] { opcion 01
//function taxCalculation({ tax, products }: TaxCalculationOptions): [number, number] {opcion 02
export function taxCalculation(opcions: TaxCalculationOptions): [number, number] {

  const { tax, products } = opcions;
  let total = 0;

  products.forEach(({ price }) => {
    total += price;
  });

  return [total, total * tax];

}

const shoppingCart = [phone, tablet];
const tax = 0.15;

const [total, totalTax] = taxCalculation({
  products: shoppingCart,
  tax: tax
});

console.log('Total', total);
console.log('Tax', totalTax);

export { }; 
