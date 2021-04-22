// Событие -> event
// Обработчик -> обработчик (handler), слушатель (listener), подписчик(subscriber)
// Браузер Создает спецю объект, в котором собраны сведения о произошедшем событии (event, ev, e)
// Вызывает колбэк (обработчик)
// Объект (е) по умолчанию передается в обработчик


const sm = document.getElementById("small")
const md = document.getElementById("medium")
const bg = document.getElementById("big")

// sm.onclick = () => alert("yo!")
// sm.onclick = null

// const fn = () => alert("yo!")
// sm.onclick = fn
//
// console.dir(sm)

function onClickHandler(e) {
    console.dir(e);
}

sm.onclick = onClickHandler