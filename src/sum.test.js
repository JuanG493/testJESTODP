import {capitalize, reverseString, calculator, ceaserCipher, analyzeArray} from "./sum.js";

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
  expect(ceaserCipher("monica",88).match(/wyxsmk/))
}) 

test("ceaser cipher: punctuation marks", () => {
  expect(ceaserCipher("Hello&World",50).match(/	Fcjjm&Umpjb/))
}) 

test("ceaser cipher: a-z", () => {
  expect(ceaserCipher("abcdefghijklmnopqrstuvwxyz", -10).match(/qrstuvwxyzabcdefghijklmnop/))
}) 

test('object assignment', () => {
  const data = analyzeArray([1,8,3,4,2,6])
  expect(data).toEqual({avarage:4, min:1, max: 8, length: 6});
})