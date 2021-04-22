let students = [
    {
        name: "Bob",
        age: 22,
        isMarried: true,
        scores: 85
    },
    {
        name: "Alex",
        age: 21,
        isMarried: true,
        scores: 89
    },
    {
        name: "Nick",
        age: 20,
        isMarried: false,
        scores: 120
    },{
        name: "John",
        age: 19,
        isMarried: false,
        scores: 100
    }
];

function addYear() {

}

// console.log(students.map(addYear))

// console.log(students.map(st => ({...st, age: st.age + 1})))

// function map(array, func) {
//     const newArr = []
//     for (let i = 0; i < array.length; i++) {
//         newArr[i]=func(array[i], i)
//     }
//     return newArr;
// }

function map(array, func) {
    const newArr = []
    // array.forEach(st => {
    //   newArr.push(func(st))
    // })

    array.forEach((st, i) => {
        newArr[i] = func(st)
    })

    return newArr;
}

console.log(map(students, st => ({...st, age: st.age + 1})))



function myMap(array, func ) {

}


