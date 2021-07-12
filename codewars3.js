//1. Функция принимает параметром целые положительные числа (неопределенное кол-во) и возврадает их сумму.

// export function sum(...nums: Array<number>) {
//     return nums.reduce((acc, el) => acc + el )
// }


/////////////////////////////////////////////////////////////////////////////////


// 2. Функция getTriangleType принимает три параметра:
// длины сторон треугольника
// Функция должна возвращать:
// - "01", если треугольник равнобедренный,
// - "10", если треугольник равносторонний,
// - "11", если треугольник обычный,
// - "00", если такого треугольника не существует

// export function getTriangleType (a: number,b: number,c: number): string {
//
//     if (a+b>c && b+c>a && c+a>b) {
//         if ( a === b && b === c) {
//             return "10"
//         } else if (a === b || b === c || c === a) {
//             return "01"
//         } else {
//             return "11"
//         }
//     } else {
//         return "00"
//     }
// }

//////////////////////////////////////////////////////////////////////

// 3. Функция getSum ирнимает параметром целое число и возвращает сумму цифр этого числа

//первый вариант

// export function getSum(number: number) {
//     return number
//         .toString()
//         .split("")
//         .reduce((acc, el) => acc + Number(el), 0)
//
// }

// второй вариант

// export function getSum(number: number) {
//     let sum = 0;
//     for (; number > 0; number = Math.trunc(number / 10)) {
//         sum += number % 10
//     }
//     return sum
// }

/// getSum(1234) - 10

///////////////////////////////////////////////////////////////////////

// 4. Функция принимает isEvenIndexSumGreater параметром массив чисел.
// Если сумма чисел с четным индексом больше суммы чисел с нечетными индексами, то функция возвращает true.
// В противном случае - false



//первый вариант
// export function isEvenIndexSumGreater(arr: Array<number>) {
//     let odd = 0
//     let even = 0
//     for (let i = 0; i < arr.length; i++) {
//         if (i % 2 === 0) {
//             even += arr[i]
//         } else {
//             odd += arr[i]
//         }
//     }
//     return even > odd
// }

//второй вариант

// export function isEvenIndexSumGreater(arr: Array<number>) {
//     let odd = 0
//     let even = 0
//     arr.reduce((acc, el, index) => index % 2 === 0 ? even += el : odd += el)
//     return even > odd
// }

// 5. Функция isSquareGreater принимает два параметра: плодащь круга и
// пладащь квадратаю Функция должна возвращать true если круг поместился в квадрате и false еси круг поместится в
// квадрате и false в противном случае.





