function repeatStr (n, s) {
    let str = [];
    for ( let i = 0; i < n; i++) {

        str = str[i].push(s);

    }
    return str
}

console.log(repeatStr(6, "I"))