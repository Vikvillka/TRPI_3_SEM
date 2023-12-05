// задание 1

let product = new Set();

function addProducts(p){
  product.add(p)
}

function deleteProducts(p){
  product.delete(p)
}

function hasProducts(p){
  return product.has(p)
}

function contProducts(){
  return product.size
}

addProducts("яблоко")
addProducts("банан")
addProducts("груша")
addProducts("апельсин")

deleteProducts("банан")

for (let value of product) console.log(value);

console.log("наличие тавара 'груша': ", hasProducts("груша"))

console.log (contProducts())

// задание 2

let students = new Set()

function addStudent(s){
  students.add(s)
}

function removeStudent(studentId) {
  students.forEach((student) => {
    if (student.studentId === studentId) {
      students.delete(student);
    }
  });
}

function filterStudentsByGroup(group) {
  let filteredStudents = new Set();
  students.forEach((student) => {
    if (student.group === group) {
      filteredStudents.add(student);
    }
  });
  return filteredStudents;
}

function sortStudentsById() {
  let sortedStudents = Array.from(students);
  sortedStudents.sort((a, b) => {
    return a.studentId - b.studentId;
  });
  return sortedStudents;
}

addStudent({ studentId: 1206, group: 'Группа 4', fullName: 'Казанцева Татьяна' });
addStudent({ studentId: 33, group: 'Группа 2', fullName: 'Грицкевич Стефания' });
addStudent({ studentId: 212, group: 'Группа 5', fullName: 'Черная Яна' });

console.log("Список студентов:");
for (let value of students) console.log(value);

removeStudent(212)

console.log("Список студентов после удаления:");
for (let value of students) console.log(value);

let filteredStudents = filterStudentsByGroup('Группа 2')
console.log("Список студентов из 2 группы:", filteredStudents);

let sortedStudents = sortStudentsById();
console.log("Отсортированный список студентов по номеру зачетки:", sortedStudents);

// задание 3

let products = new Map();

function addProduct(id, name, quantity, price) {
  products.set(id, { name, quantity, price });
}

function removeProductById(id) {
  products.delete(id);
}

function removeProductsByName(name) {
  products.forEach((product, id) => {
    if (product.name === name) {
      products.delete(id);
    }
  });
}

function updateProductQuantity(id, newQuantity) {
  if (products.has(id)) {
    let product = products.get(id);
    product.quantity = newQuantity;
    products.set(id, product);
  }
}

function updateProductPrice(id, newPrice) {
  if (products.has(id)) {
    let product = products.get(id);
    product.price = newPrice;
    products.set(id, product);
  }
}

function countProducts() {
  return products.size;
}

function calculateTotalCost() {
  let totalCost = 0;
  products.forEach((product) => {
    totalCost += product.quantity * product.price;
  });
  return totalCost;
}

addProduct(1, "Товар 1", 5, 10);
addProduct(2, "Товар 2", 3, 15);
addProduct(3, "Товар 3", 2, 20);
addProduct(4, "Товар 4", 1, 5);

console.log("Хранилище товаров:", products);

removeProductById(2);
console.log("Хранилище товаров после удаления товара по id:", products);

removeProductsByName("Товар 1");
console.log("Хранилище товаров после удаления товаров по названию:", products);

updateProductQuantity(3, 4);
console.log("Хранилище товаров после изменения количества товара:", products);

updateProductPrice(3, 1);
console.log("Хранилище товаров после изменения стоимости товара:", products);

let productCount = countProducts();
console.log("Количество позиций в списке:", productCount);

let totalCost = calculateTotalCost();
console.log("Сумма стоимости всех товаров:", totalCost);

// задание 4

let cache = new WeakMap();

function expensiveFunction(input) {
  if (cache.has(input)) {
    console.log("Взято из кэша");
    return cache.get(input);
  }

  const result = input.key * 2;
  cache.set(input, result);

  return result;
}

const input1 = {key: 5};
const input2 = {key: 10};

console.log(expensiveFunction(input1)); 
console.log(expensiveFunction(input1)); 

console.log(expensiveFunction(input2)); 
console.log(expensiveFunction(input2)); 