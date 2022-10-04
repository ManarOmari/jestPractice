const myFunctions = require('./sum');

test('return char number in string', () => {
  expect(myFunctions.stringLength('hello')).toBe(5);
});

test('return reverse String', () => {
    expect(myFunctions.reverseString('hello')).toBe('olleh');
  });
  describe( ' test calculator ', () => {
    test('return reverse String', () => {
        expect(myFunctions.calculator.add(1,2)).toBe(3);
        expect(myFunctions.calculator.add(10,20)).toBe(30);
        expect(myFunctions.calculator.add(100,200)).toBe(300);
      });
    test('return reverse String', () => {
        expect(myFunctions.calculator.sub(1,2)).toBe(-1);
        expect(myFunctions.calculator.sub(20,10)).toBe(10);
        expect(myFunctions.calculator.sub(100,200)).toBe(-100);
      });
    test('return reverse String', () => {
        expect(myFunctions.calculator.multiply(1,2)).toBe(2);
        expect(myFunctions.calculator.multiply(10,20)).toBe(200);
        expect(myFunctions.calculator.multiply(4,5)).toBe(20);
      });
    test('return reverse String', () => {
        expect(myFunctions.calculator.divide(1,2)).toBe(0.5);
        expect(myFunctions.calculator.divide(0,20)).toBe(0);
        expect(myFunctions.calculator.divide(100,0)).toBe(Infinity);
      });
  })

  test('return first char in UPPERCASE', () => {
    expect(myFunctions.capitalize('hello')).toBe('Hello');
  });