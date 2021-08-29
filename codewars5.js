
//
// function twoSort(s) {
//
//     return s.sort().shift().split('').map(a => a +  '***').join('').slice(0,-3)
//
// }
// console.log(twoSort(["bitcoin", "take", "over", "the", "world", "maybe", "who", "knows", "perhaps"]));


///////--------------------------------------

// function findMultiples(integer, limit) {
//
//     const arr = [];
//
//     for (let i = 1; i <= limit; i += 1) {
//
//         if (integer * i <= limit) {
//             arr.push(integer * i);
//         }
//     }
//     return arr;
// }
//
// console.log(findMultiples(5, 25));

///////--------------------------------------

// function ensureQuestion(s) {
//     let arr = s.split('');
//         if (arr[arr.length - 1] === '?' ) {
//             return arr.join('')
//         } else {
//             return  arr[arr.length - 1].push('?').join('')
//         }
// }
// console.log(ensureQuestion('abcd'));

let str = 'abcde';
let arr = str.split('')
// console.log(arr)
// console.log(arr[arr.length-1])
if (arr[arr.length - 1] !== '?') {
    debugger
    let arr1 = arr.push('?')
        console.log(arr1)

}
