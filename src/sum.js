function suma(a, b) {
  return a + b;
}

function capitalize(str){
  return (str[0].toUpperCase() + str.slice(1,));

}

function reverseString(str){
   return str.split("").reverse().join(""); 
}

let  calculator = {
  add(a,b){
   return a +b; 
  },
  subtract(a,b){
    return a - b;
  },
  divide(a,b){
    return a / b;
  },
  multiply(a,b){
    return a * b;
  }


}
function ceaserCipher(str, key){
for (let ch = 0; ch < str.length -1; ch++) {
  console.log(str.charCodeAt(ch));
  
  
}
}
ceaserCipher("juan", 1);
// let a = calculator.add(10,5);
// console.log(calculator.add(10, 5));
export {suma, capitalize, reverseString, calculator};