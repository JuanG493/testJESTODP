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
let result = "";
let copyKey = key;
for (let ch = 0; ch < str.length ;ch++) {
  let codeS = str.charCodeAt(ch);
  if(key > 26 ){
    copyKey = key % 26;
  }
  if(codeS >= 65 && codeS <= 90  || codeS >= 97 && codeS <= 122){
    result += String.fromCharCode(codeS + copyKey);
  }else{
    result += str[ch];
  }
}
return result;
}

function analyzeArray(arry){
 
 let avg = arry.reduce((a, b) => a + b, 0,) / arry.length;
  let minV= arry[0];
  let maxV = 0;
  for (let i = 0; i < arry.length; i++) {
    if(arry[i] > maxV){
      maxV = arry[i]
    }if(arry[i] < minV ){
      minV = arry[i]
    }
  }  
  return {avarage: avg, min : minV, max: maxV, length: arry.length}
}
export {suma, capitalize, reverseString, calculator, ceaserCipher, analyzeArray};