//  задание 1

function makeCounter() {
  let currentCount = 1;

  return function(){
    return currentCount++;
  };
}

let counter = makeCounter();
alert( counter() );
alert( counter() );
alert( counter() );

let counter2 = makeCounter();
alert( counter2() );

// let currentCount = 1;

// function makeCounter(){
//   return function(){
//     return currentCount++;
//   };
// }

// let counter1_1 = makeCounter();
// let counter2_1 = makeCounter();

// alert( counter1_1() );
// alert( counter1_1() );

// alert( counter2_1() );
// alert( counter2_1() );

// задание 2 

function volume(a){
  return function(b){
    return function(h){
      return a * b * h;
    }
  }
}

let result = volume(2);

console.log("Обьем 1 фигуры с ребром 2: "+ result(3)(4));
console.log("Обьем 2 фигуры с ребром 2: " + result(2)(1));
console.log("Обьем 3 фигуры с ребром 2: " + result(6)(5));

// задание 3

function* move() {
  let pointX = 0;
  let pointY = 0;

  while (true) {
    let action = yield { x: pointX, y: pointY };
    
    if (action === "left") {
      pointX -= 10;
    } else if (action === "right") {
      pointX += 10;
    } else if (action === "down") {
      pointY -= 10;
    } else if (action === "up") {
      pointY += 10;
    }
  }
}

let generator = move();

function getNextCoordinates() {
  const { x, y } = generator.next().value;
  console.log("Текущие координаты: X = " + x + ", Y = " + y);
}

getNextCoordinates(); 

let userInput = prompt("Введите команду (left, right, up, down):");

while (userInput !== null) {
  generator.next(userInput);
  getNextCoordinates();
  userInput = prompt("Введите команду (left, right, up, down):");
}

// задание 4

var a = 4;

for (let prop in window) {
    console.log(prop + ": " + window[prop]);
}

window.a = 10; 

console.log(a);