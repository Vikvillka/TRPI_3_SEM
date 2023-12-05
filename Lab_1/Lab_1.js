// задание 1
let a = 5;
console.log(typeof a);
let name = "Name";
let i = 0;
let double = 0.23;
let result = 1/0;
let answer = true;
let no = null;

// задание 2
let heightA = 21
let widthA = 45
let sizeB = 5

let areaA = heightA * widthA
let areaB = sizeB * sizeB

let numberOfSquares = Math.floor(areaA/areaB)
console.log("количество квадратов В = ", numberOfSquares)

// задание 3
let i1 = 2;
let a1 = ++i1;
let b1 = i1++;
console.log(a1 == b1)

// задание 4
console.log("Задание 4")
console.log("Котик" < "котик") //false
console.log("Котик" == "китик") //false
console.log("Кот" == "Котик")   //false
console.log("Привет" == "Пока") //false
console.log(73 == "53")         //false 
console.log(false == 0)         //true
console.log(54 == true)         //false
console.log(123 == false)       //false
console.log(true == "3")        //false 
console.log(3 == "5мм")         //false
console.log(8 == "-2")          //false
console.log(34 == "34")         //true
console.log(null == undefined)  //true

// задание 5
let teacherName = "Кудлацкая Марина Фёдоровна"
let choice = prompt('Введите имя/имя отчество/ФИО');

if(teacherName.includes(choice) || teacherName.toUpperCase().includes(choice)  ||   teacherName.toLowerCase().includes(choice))
{
    console.log("Верно")
}
else {
    console.log("Неправильно")
}

// задание 6
let examInput = prompt("Введите сколько экзаменов сдано:");
switch (examInput) {
  case '0':
    alert( 'Вы отчислены!' );
    break;
  case '1':
    alert( 'Вас ждут пересдачи!' );
    break;
  case '2':
    alert( 'Вас ждет пересдача!' );
    break;
  case '3':
    alert( 'Поздравляю, вы перевелись на новый курс!' );
    break;
  default:
    alert( 'Ошибка ввода данных' );
}

// const examInput = prompt("Введите сколько экзаменов сдано:");
// if (examInput == 3) {
//     alert("Поздравляю, вы перевелись на новый курс!");
// } 
// if (examInput < 3 && examInput > 0){
//     alert("Вас ждет пересдача!");
// } 
// if (examInput == 0) {
//     alert("Вы отчислены!");
// } 
// if(examInput!=1 || examInput!=2 || examInput!=3 ||examInput!=0){
//     alert("Ошибка ввода данных");
// }

// задание 7
console.log("Задание 7")
console.log(true + true) // 2
console.log(0 + "5")     // 05
console.log(8/Infinity)  // 0
console.log(9 * "\n9")   // 81
console.log(null - 1)    // -1   
console.log("5" - 2)     // 3
console.log("5px" - 3)   // NaN
console.log(true - 3)    // -2
console.log(7 || 0)      // 7

// задание 8
for (let i = 1; i <= 10; i++) {
    if (i % 2 === 0) {
      i += 2;
    } else {
      
      i = i.toString() + 'мм';
    }
    console.log(i);
}

// задание 9 
const daysOfWeekObj = {1: 'пн', 2: 'вт', 3: 'ср', 4: 'чт', 5: 'пт', 6: 'сб', 7: 'вс'};

const userInputObj = parseInt(prompt("Введите номер дня недели (1-7):"));

if (userInputObj >= 1 && userInputObj <= 7) {

    const day = daysOfWeekObj[userInputObj];
    alert(`Это день: ${day}`);
} else {
    alert("Неверный ввод. Введите число от 1 до 7.");
}

const daysOfWeekArr = ['пн','вт','ср','чт','пт','сб','вс'];

const userInputArr = parseInt(prompt("Введите номер дня недели (1-7):"));

if (userInputArr >= 1 && userInputArr <= 7) {
    const day = daysOfWeekArr[userInputArr - 1]; 
    alert(`Это день: ${day}`);
} else {
    alert("Неверный ввод. Введите число от 1 до 7.");
}

// задание 10
function func(param1 = "По умолчанию", param2, param3) {
    
    if (param3 === undefined) {
      param3 = prompt("Введите третий параметр:");
    }

    const result = `${param1}, ${param2}, ${param3}`;
  
    return result;
}
  
const defaultValue = "Значение1";
const secondValue = "Значение2";
const userValue = func(defaultValue, secondValue);
console.log(userValue);

// задание 11
// Function Declaration
function params(a,b) {
    if (a === b) {
      return 4 * a; 
    } else {
      return a * b;
    }
}
console.log(params(5,5));

// Function Expressio
const params_1 = function(a, b) {
    if (a === b) {
      return 4 * a;
    } else {
      return a * b;
    }
}
console.log(params_1(4,5));

const params_2 = (a, b) => {
    if (a === b) {
      return 4 * a;
    } else {
      return a * b;
    }
}
console.log(params_2(5,5));