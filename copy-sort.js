
let students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85,
    },
    {
        name: "Nick",
        age: 21,
        isMarried: true,
        scores: 89,
    },
    {
        name: "Alex",
        age: 20,
        isMarried: false,
        scores: 120,
    },
    {
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100,
    }
];

const user = {
    name: "Bob",
    age: 23,
    friends: ["Alex", "Nick", "John"]
}

// 1. Поверхностная копия объекта user
let copyUser = {...user};

console.log(user===copyUser) //false
console.log(user.friends===copyUser.friends) //true

// 2. Полная (глубокая) копия объекта user
let deepCopyUser = {...user, friends: [...user.friends]};

 // Проверка
console.log (user===copyUser) // false
console.log(user.friends===deepCopyUser.friends) //false

//3. Поверностная копия массива students
let copyStudents = [...students];

// Проверка
console.log(copyStudents === students) // false
console.log(copyStudents[1] === students[1]) // true

//4 Полная глубокая копия массива students (map)
let deepCopyStudents = students.map(st => ({...st}));

// Проверка
console.log(deepCopyStudents === students) // false
console.log(deepCopyStudents[1] === students[1]) // false

// Далее все преобразования выполняем не модифицируя исходный массив students
// Вывод результатов - в консоль

//5. Отсортируйте deepCopyStudents по алфавиту (sort)
//  function sortFn(a, b) {
//     switch (a.name > b.name) {
//         case true:
//             return 1
//         case false:
//             return -1
//         default:
//             return 0
//     }
//  }
let sortByName = deepCopyStudents.sort((a,b) => a.name > b.name ? 1 : -1);
console.log(sortByName)

// 5a. Отсортируйте deepCopyStudents по успеваемости( лучший идет первым) (sort)
let sortByScores = deepCopyStudents.sort((a, b) => b.scores - a.scores);
console.log(sortByScores);

