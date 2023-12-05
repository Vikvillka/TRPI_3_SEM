// задание 1
const arr = [1, [1, 2, [3, 4]], [2, 4]];

function funcArray (arr){
  return arr.reduce((acc, current) => acc.concat(Array.isArray(current)? funcArray(current): current),[]);
}

const finalArray = funcArray(arr);
console.log(finalArray);

// задание 2
const arr_2 = [1, [1, 2, [1, [1, 1], 1], [3, 4]], [2, 4]];

const finalArrayFor2 = funcArray(arr_2);

const value = 0;
const sumElement = finalArrayFor2.reduce((acc, current) => acc + current);
console.log("Cумма элементов во вложенном массиве = " + sumElement);

// задание 3
const students = [
  {name: "Tanya", age: 14, groupId: 1},
  {name: "Polina", age: 18, groupId: 2},
  {name: "Yana", age: 30, groupId: 1},
  {name: "Vika", age: 18, groupId: 4},
  {name: "Stephania", age: 17, groupId: 5}];

function groupStudents(data){
  const studentData = {};

  data.forEach((student) => {
    const { name, age, groupId } = student;

    if (age > 17){
      if (!studentData[groupId]) {
        studentData[groupId] = [];
      }
      studentData[groupId].push({name, age});
    }
  });

  return studentData;
}

const groupedStudents = groupStudents(students);
console.log(groupedStudents);

// задание 4
function toASCII(str){
  let total1 = '';

  for (let i = 0; i < str.length; i++){
    const char = str.charAt(i);
    const asciiCode = char.charCodeAt(0);
    total1 += asciiCode.toString();
  }

  return total1;
}

const string = "Vika";
const total1 = toASCII(string);
console.log(total1);

const total2 = total1.split('').map(char => (char === '7'? '1': char)).join('');
console.log(total2);

const totalResult = total1 - total2;
console.log(totalResult);

// задание 5
function extend(...objects) {
  const result = {};

  objects.forEach(obj => {
    Object.assign(result, obj);
  });
  return result;
}
const obj1 = {a:1, c:2};
const obj2 = {c:3};
const obj3 = {d:4};

const result = extend(obj1, obj2, obj3);
console.log(result);

// задание 6
function createPiramid(numFloors) {
  const piramid = [];

  for (let i = 1; i <= numFloors; i++) {
    const spaces = ' '.repeat(numFloors - i);
    const stars = '*'.repeat(2 * i - 1);
    const floor = spaces + stars + spaces;
    piramid.push(floor);
  }

  return piramid;
}

const numFloors = 4; 
const piramid = createPiramid(numFloors);
piramid.forEach(floor => console.log(floor));

