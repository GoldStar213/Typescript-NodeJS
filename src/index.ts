import { isPrimeNumber } from './prime';

const n = Math.floor(Math.random() * 1000);
if (isPrimeNumber(n)) {
  console.log(`The number ${n} is a prime number.`);
} else {
  console.log(`The number ${n} is not a prime number.`);
}
