document.addEventListener('DOMContentLoaded', function () {
    let scrollpos = window.scrollY

    const header = document.querySelector(".main__header")

    //Сколько пикселей нужно проскролить, чтобы добавить класс. Можете изменить значение
    const scrollChange = 1

    //Функция, которая будет добавлять класс
    const add_class_on_scroll = () => header.classList.add("bg")

    //Отслеживаем событие "скролл"
    window.addEventListener('scroll', function () {
        scrollpos = window.scrollY;

        //Если прокрутили больше, чем мы указали в переменной scrollChange, то выполняется функция добавления класса
        if (scrollpos >= scrollChange) { add_class_on_scroll() }
    })
})

$(document).ready(function () {

})