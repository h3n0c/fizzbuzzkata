import {contains, fizzBuzz, fizzBuzzList} from '../src/main';

describe('Fizz Buzz Kata', () => {
  it('should check if an number contains another', () => {
    expect(contains(5,3)).toBeFalsy();
    expect(contains(1,2)).toBeFalsy();
    expect(contains(53,3)).toBeTruthy();
    expect(contains(2,2)).toBeTruthy();
  });

  describe( 'Fizz Buzz', () => {
    it('should return a number', () => {
      expect(fizzBuzz(1)).toBe(1);
    });

    it('should return Fizz when num is divisible by 3 or contains 3', () => {
      expect(fizzBuzz(3)).toBe('Fizz');
      expect(fizzBuzz(13)).toBe('Fizz');
    });

    it('should return Buzz if num is divisible by 5 or contains 5', () => {
      expect(fizzBuzz(5)).toBe('Buzz');
      expect(fizzBuzz(52)).toBe('Buzz');
    });

    it('should return FizzBuzz if num is divisible by 3 and 5', () => {
      expect(fizzBuzz(15)).toBe('FizzBuzz');
    });
  });

  describe('Fizz Buzz List', () => {
    it('should return 1 2 Fizz', () => {
      expect(fizzBuzzList(3)).toBe('1 2 Fizz');
    });

    it('should return 1 2 Fizz 4 Buzz', () => {
      expect(fizzBuzzList(5)).toBe('1 2 Fizz 4 Buzz');
    });

    it('should return 1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz Fizz 14 FizzBuzz', () => {
      expect(fizzBuzzList(15)).toBe('1 2 Fizz 4 Buzz Fizz 7 8 Fizz Buzz 11 Fizz Fizz 14 FizzBuzz');

    });
  });
});
