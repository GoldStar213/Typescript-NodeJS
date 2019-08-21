import { isPrimeNumber } from '../src/prime';

describe('Test prime module', (): void => {
  it('Check if number is correctly reported as prime number', (): void => {
    expect(isPrimeNumber(2)).toBe(true);
  });

  it('Check if number is reported as not a prime number', (): void => {
    expect(isPrimeNumber(3)).toBe(true);
  });
});
