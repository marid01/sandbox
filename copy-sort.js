
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

//6. Сформируйте массив студентов, у которых 100 и более баллов (filter)
let bestStudents = deepCopyStudents.filter(st => st.scores >= 100);
console.log(bestStudents)

//6a. Получите массив ("вырежте") из трех лучших студентов из массива deepCopyStudents (splice)

let topStudents = deepCopyStudents.splice(0, 3);
console.log(topStudents)
console.log(deepCopyStudents)

//6a. Объедините массивы deepCopyStudents и topStudents так, чтобы сохранился порядок сортировки (spread-оператор)
let newDeepCopyStudents = [...topStudents, ...deepCopyStudents];
console.log(newDeepCopyStudents)

//7. Сформируйте массив холостых студентов (filter)
let studentsNames = newDeepCopyStudents.filter(st => !st.isMarried);
console.log(studentsNames)

//8. Сформируйте массив имен студентов (map)
let studentsNames = newDeepCopyStudents.map(st => st.name);
console.log(studentsNames)

//8a. Сформирйте строку из имен студентов, разделенных
// - запятой (join)
// - пробелом (join)
let nameWithSpace = studentsNames.join(', ');
console.log(nameWithSpace) // John, Alex, Bob
let namesWithComma = studentsNames.join();
console.log(namesWithComma) // John,Alex,Bob

//9. Добавьте всем студентам свойтво 'isStudent' со значением true (map)
let trueStudents = deepCopyStudents.map(st => ({...st, isStudent: true}));
console.log(trueStudents)

//10. Nick женился. Выполните соответствующие преобразование массива students (map)
let studentsWithMarriedNick = newDeepCopyStudents.map(st => st.name === "Nick" ? {...st, isMarried: true} : st);
console.log(studentsWithMarriedNick)

//11. Найдите студента по имени Ann (find)
let ann = newDeepCopyStudents.find(st => st.name === "Ann");
console.log(ann)

//12. Найдите студента с самым высоким баллом (reduce)
let bestStudent = newDeepCopyStudents.reduce((acc,st) => acc.scores > st.scores ? acc : st) ;
console.log(bestStudent)

//13. Найдите сумму баллов всех студентов (reduce)
let scoresSum = newDeepCopyStudents.reduce((acc, st) => acc + st.scores, 0);
console.log(scoresSum)

//14. Напишите функцию addFriends, которая принимает параметром массив students
// и добавляет к каждому студенту свойтво "friends",
// значением которого является массив имен всех остальных студентов из массива,
// за исключениенм собственного имени студента. Т.е в друзьях у Боба Боба быть не должно
const addFriends = (students) => {

}
console.log(addFriends(students));