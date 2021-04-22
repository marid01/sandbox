// // Copy object and arrays
//
// const student = {
//     name: "Alex",
//     age: 23,
//     friends: ["Bob", "Nick"]
//
// }
//
// // const student = {} это инструкция по созданию нового объекта,  ЮЮ
//
// student.age = 24
//
// // 1. Константой является операция присванивания
// // 2. Если это объект (array & func), то в переменной хранится ссылка на этот объект
// // ("Адрес" этого объекта)
//
// const copyStudent = {...student} // полностью скопирует в новый объект Spread оператор, поверхностное коп
//
// console.log(copyStudent)
//
// console.log(student === copyStudent)
//
// student.friends.push("Ann")
//
// console.log(copyStudent) // Ann добавится в оба объект, так как произошло поверхностное копирование
//
// const copyStudent2 = {...student, friends: [...student.friends]}; //глубокое копирование
//
// function fn(num) {
//     const pow = Math.pow(num, 2)
//     const sqrt = Math.sqrt(num)
//     return [pow, sqrt]
// }
//
// console.log(fn(2));
//
// // const result = fn(2)
//
// // const tenPow = result[0]
// // const tenSqrt = result[1]
//
// // const[tenPow, tenSqrt] = result  //  Деструктуризирующее присваивание
//
// const[tenPow, tenSqrt] = fn(2)

// map ------------------------------------------------------------------------------------

const people = [
    { name: "Andrew Ivanow", age: 33 },
    { name: "Alexander Petrov", age: 24 },
    { name: "Dmitry Sidorov", age: 18 }
]

const dimychTransformator = (man) => {
    return {
        stack: ["css, html", "js", "tdd", "react"],
        firstName: man.name.split(" ")[0],
        lastName: man.name.split(" ")[1]
    }
}

const devs = [
    {
        stack: ["css, html", "js", "tdd", "react"],
        firstName: "Andrew", lastName: "Ivanov"
    },
    {
        stack: ["css, html", "js", "tdd", "react"],
        firstName: "Alexandr", lastName: "Petrov"
    },
    {
        stack: ["css, html", "js", "tdd", "react"],
        firstName: "Dmitry", lastName: "Sidorov"
    }

]
let d1 = dimychTransformator(people[0])
let d2 = dimychTransformator(people[1])
let d3 = dimychTransformator(people[2])




const dev2 = [
    // d1, d2, d3
    dimychTransformator(people[0]),
    dimychTransformator(people[1]),
    dimychTransformator(people[2])
]

console.log(dev2)

const devs3 = people.map(dimychTransformator)
const devs4 = people.map( man => ({
    stack: ["css, html", "js", "tdd", "react"],
    firstName: man.name.split(" ")[0],
    lastName: man.name.split(" ")[1]
}))

//--------------

const messages = people.map(man => `Hello ${man.name.split(" ")[0]} Welcome to IT-Incubator`)

console.log(messages)
