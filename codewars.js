// let name = 'Sam Harris';
//
// function abbrevName(name) {
//     let abb = name.split(' ').map(i => i.charAt(0));
//     console.log(abb);
//     let arr = abb.join('. ').toUpperCase();
//     console.log(arr)
//
//
//
// }
//
//
// abbrevName(name);
//


//---------------------------------------

// let name = 'Ryan'
//
// function greet(name){
//     return (`Hello, ${name} how are you doing today?`)
// }
//
// console.log(greet(name))

//---------------------------------------



// const areaOrPerimeter = function(l , w) {
//     let b = 2 * (l + w);
//     let a = b.toFixed(0);
//     return a;
// };
// console.log(areaOrPerimeter(4.55, 4))

// console.log(areaOrPerimeter());



function generateRange(min, max, step) {
    const result = [];
    for (let i = min; i <= max; i += step) {
        result.push(i)
    }
    return result
}


console.log(generateRange(2, 10, 2));
