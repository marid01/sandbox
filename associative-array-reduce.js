// Ассоциативный массив
//
// const tlID_1 = "34jf-76kg" // v1
// const tlID_2 = "17jf-67kg" // v1
//
// const todoLists= [
//     {
//         id: tlID_1,
//         title: "What to learn",
//         filter: "all",
//         tasks: [
//             {},
//             {},
//         ]
//     },
//
//     {
//         id: tlID_2,
//         title: "What to buy",
//         filter: "all",
//         tasks: [
//             {},
//             {},
//         ]
//     },
// ]
//
// const tasks = {
//     [tlID_1] : [
//         {name: "HTML", isDone: true},
//         {name: "Redux", isDone: false},
//     ],
//     [tlID_2] : [
//         {name: "CSS", isDone: true},
//         {name: "React", isDone: false},
//     ],
// }
//
// console.log(tasks)
// console.log(tasks[todoLists[0].id][1].name)
// console.log(tasks[tlID_1][1].name)


// reduce----------------------------------------------------------

// let numbers = [23, 45, 35, 78, 56, 98];
//
// console.log(numbers.reduce((acc, el) => acc + el, 0)) // 0+23, 23+45, 45+35 .....
// console.log(numbers.reduce((acc, el) => acc > el ? acc : el)) // 98

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

function findAlex(acc, el) {
    if (el.name === "Alex") {
        acc = el
    }
    return acc
}

console.log(students.reduce(findAlex, null))

function getBestStudent(acc, el) {
    if (el.scores >= 100) {
        acc.push(el)
    }
    return acc


}

console.log(students.reduce(getBestStudent, []))

function addScores(acc, el) {
    acc.push({...el, scores: el.scores + 10 })
    return acc
}
console.log(students.reduce(addScores, []))
