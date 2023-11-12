import {suma, capitalize, reverseString, calculator} from "./sum.js";
let a = 5;
let b = 10;

test('adds 1 + 2 to equal 3', () => {
  expect(suma(1, 2)).toBe(3);
});

test('capitalize  ', () =>{
  let str = "hello";
  expect(capitalize(str)).toMatch(/Hello/);
})

test('reverse string', ()=>{
  let str = "juan";
  expect(reverseString(str)).toMatch(/nauj/)
})

test("calculator add two numbers ", () =>{
  let c = calculator.divide(3,2);
  let d = calculator.multiply(3,2);
  
  expect(c).toBe(3 / 2)
  expect(d).toBe(3*2)

})
test("substract two numbers ", () =>{
  expect(calculator.subtract(7,3)).toBe(4);
});

test("divide two numbers ", () =>{
  expect(calculator.divide(a, b)).toBe(a / b);
});


test("multiply two numbers ", () =>{
  expect(calculator.multiply(a, b)).toBe(a * b);
});

test("ceaser cipher", () => {
  expect(ceaserCipher("juan", 1).toMatch(/kvbo/))
}) 