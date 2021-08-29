function sumTo(arg) {
    debugger
    if ( arg == 1) return arg;
    return (
        debugger
    arg + sumTo(arg - 1);
)
}
console.log(sumTo(4))