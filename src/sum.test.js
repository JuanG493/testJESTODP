import {suma, capitalize, reverseString, calculator, ceaserCipher, analyzeArray} from "./sum.js";
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
  expect(ceaserCipher("monica",88).match(/wyxsmk/))
}) 

test("ceaser cipher: punctuation marks", () => {
  expect(ceaserCipher("Hello&World",50).match(/	Fcjjm&Umpjb/))
}) 

test("ceaser cipher: a-z", () => {
  expect(ceaserCipher("abcdefghijklmnopqrstuvwxyz", -10).match(/qrstuvwxyzabcdefghijklmnop/))
}) 

// test("analyzeArray", () =>{
//   expect(analyzeArray([1,8,3,4,2,6]).toEqual({avarage:4, min:1, max: 8, length: 6}))
// })

test('object assignment', () => {
  // const data = {one: 1};
  const data = analyzeArray([1,8,3,4,2,6])
  console.log(data);
  // data['two'] = 2;
  expect(data).toEqual({avarage:4, min:1, max: 8, length: 6});
})