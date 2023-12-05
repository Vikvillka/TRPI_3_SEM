// задание 1
console.log("Задание 1:")

const basicOperation = (operation, value1, value2) =>{
  if (operation ==="+"){
    return value1 + value2;
  } else if(operation ==="-"){
    return value1 - value2;
  }else if(operation ==="*"){
    return value1 * value2;
  }else if(operation ==="/"){
    return value1 / value2;
  } else{
    return "неверный знак операции"
  }
}

let result = basicOperation("-","6","2");
let result1 = basicOperation("*","3","2");
let result2 = basicOperation("2","10","2");
console.log("Вычитание = " + result);
console.log("Умножение = " + result1);
console.log("Деление = " + result2);

// задание 2
console.log("Задание 2:")

const userInputN = parseInt(prompt("Введите n"));// перевод в инт

let func = function(n){
  let resultSum = 0;

  for(let i = 0; i <= n; i++){
    resultSum += Math.pow(i,3);
  }

  return resultSum
}
let finalResult = func(userInputN);
console.log("Сумма кубов = " + finalResult);

// задание 3
console.log("Задание 3:")

const numberArr = [1, 3, 5, 7, 9];
let resultAverage = average(numberArr);

function average (Arr){
  const arrLength = Arr.length
  let sum = 0;

  for(let i = 0; i < arrLength; i++){
    sum +=  Arr[i];
  }
  return averageResult = sum/arrLength;
}

console.log("Среднее арифметическое = " + resultAverage);

// задание 4
console.log("Задание: 4"); 

const str1 = "JavaScript";
const str2 = "JavaScr53и-ipt";
let resultString1 = reverseFunc(str1);
let resultString2 = reverseFunc(str2);

function reverseFunc (str){

  const reverseArr = str.split('').reverse();
  const filterArr = reverseArr.filter(char => /[a-zA-Z]/.test(char));
  const resultStr = filterArr.join('');

  return resultStr;
}

console.log (resultString1);
console.log (resultString2);

// задание 5
const strForRepeat = "hello"
const n = 5;
let resultOfRepeat = repeat(strForRepeat, n)

function repeat (str, n){
  return repeatStr = (str +" ").repeat(n);
}

console.log (resultOfRepeat);

// задание 6 
const arrStr1 = ["hello", "nice", "world"]
const arrStr2 = ["nice", "cup", "of", "tea"]
const arr3 = funcForStr(arrStr1, arrStr2);

function funcForStr(arr1, arr2){
  const arr3 = arr1.filter(item => !arr2.includes(item));
  return arr3;
} 
console.log (arr3);