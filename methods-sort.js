// buble sort

const array = [777, 23, 12, 34, 65, 77, 786, 45]
// по возрастанию сортируется только первое число
// for (let i = 0; i < array.length - 1; i++) {
//
//     if(array[i] > array[i + 1]) {
//         let temp = array[i + 1]
//         array[i + 1] = array[i]
//         array[i] = temp
//     }
// }

//---------------------
// по возрастанию сортируется все числа
for (let j = 0; j < array.length - 1; j++)
{
    for (let i = 0; i < array.length - 1 - j; i++) {

        if (array[i] > array[i + 1]) {
            [array[i], array[i + 1]] = [array[i + 1], array[i]]
            // let temp = array[i + 1]
            // array[i + 1] = array[i]
            // array[i] = temp
        }
    }
}



// sort

const names = ["кот", "Bob", "Alex", "bob", "Donald", "Ramzan", "2021", "Владимир"]
names.sort() // сортироука

names.sort().reverse() // обратная сортировка

const numbers = [100, 1, 1000, 110, 333, 9, -50, 66]

// sort -> compareFunc -> a
// a <= 0 - не переставляем
// a > 0 - переставляем

function comp(a, b) { // по возрастанию
    if (a <= b) {
        return -100
    } else {
        return 2
    }
}

const shortComp = (a, b) => b - a

// console.log(numbers.sort(shortComp))
// -----------------------------------------------------------------------------

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
        name: "alex",
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

// console.log(students.sort((a, b) => b.scores - a.scores))
// console.log(students.sort((a, b) => a.age - b.age).reverse)

console.log(students.sort((a, b) => a.name.toUpperCase() < b.name.toUpperCase() ? -1 : 1))



