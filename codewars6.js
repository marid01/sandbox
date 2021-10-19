function stockList(listOfBooks, listOfCat) {
    debugger
    if (!listOfBooks.length || !listOfCat.length)
        return '';

    const booksByCategory = {};

    listOfBooks.forEach(el => {
        const [category, amount] = el.split(' ');
        const catCode = category[0];

        booksByCategory[catCode] = (booksByCategory[catCode] || 0) + Number(amount);
    });

    return listOfCat.map(el => {
        return `(${el} : ${booksByCategory[el] || 0})`
    }).join(' - ');
}


let listOfCat =  ["A", "B"]
let listOfBooks = ["ABAR 200", "CDXE 500", "BKWR 250", "BTSQ 890", "DRTY 600"]

console.log(stockList(listOfCat, listOfBooks))



