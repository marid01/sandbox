// let name = "David Mendieta"
// let name = "P Favuzzi"
let name = "Patrick Feenan"


function abbrevName(name){
let result = name.toUpperCase().split(" ");
let r = result[0].slice(0, 1) + ".";
let d = result[1].slice(0, 1);
let str = r + d;
    // return str;
    console.log(str)

}

abbrevName(name);