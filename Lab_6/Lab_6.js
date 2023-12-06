//  задание 1

const numbers = [1, 2, 3, 4, 5];
const [y] = numbers;

console.log(y);

// задание 2

const user = {
  name: 'Vika',
  age: 18
};

const admin = {
  admin: true,
  ...user
};

console.log(admin);

// задание 3 
let store = { 
  state: {
    profilePage:{
      posts: [
        {id: 1, message: 'Hi', likesCount: 12},
        {id: 2, message: 'By', likesCount: 1},
      ],
      newPostText: 'About me',
    },
    dialogsPage:{
      dialogs:[
        {id: 1, name:'Valera'},
        {id: 2, name:'Andrey'},
        {id: 3, name:'Sasha'},
        {id: 4, name:'Viktor'},
      ],
      messages: [
        {id: 1, message: 'hi'},
        {id: 2, message: 'hi hi'},
        {id: 3, message: 'hi hi hi'},
      ],
    },
    sidebar: [],
  },
}

const {
  state: {
    profilePage: { posts },
    dialogsPage: { dialogs, messages },
  },
} = store;

// Вывод значений likesCount из массива posts
posts.forEach((post) => {
  console.log(post.likesCount);
});

// Фильтрация массива dialogs – выбор пользователей с четными id
const filteredDialogs = dialogs.filter((dialog) => dialog.id % 2 === 0);
console.log(filteredDialogs);

// Замена всех сообщений в массиве messages на "Hello user" с использованием метода map
const updatedMessages = messages.map((message) => {
  return { id: message.id, message: "Hello user" };
});
console.log(updatedMessages);

// задание 4

let tasks = [
  {id: 1, title: "HTML", isDone: true},
  {id: 2, title: "JS", isDone: true},
  {id: 3, title: "ReactJs", isDone: false},
  {id: 4, title: "Rest API", isDone: false},
  {id: 5, title: "GraphQL", isDone: false},
]
const task = {id: 6, title: "CSS", isDone: false};

const updatedTasks = [...tasks, task];

console.log(updatedTasks);

// задание 5

function sumValues(a, b, c) {
  return a + b + c;
}

const array = [1, 2, 3];
const result = sumValues(...array);

console.log(result);