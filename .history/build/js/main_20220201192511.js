document.addEventListener('DOMContentLoaded', function () {
    const header = document.querySelector('.main__header')
    const add_class_on_scroll = () => header.classList.add('scroll-bg')
    const remove_class_on_scrool = () => header.classList.remove('scroll-bg')

    window.addEventListener('scroll', function () {
        let scrollpos = window.scrollY;

        if (scrollpos >= 1) {
            add_class_on_scroll()
        } else {
            remove_class_on_scrool()
        }
    })
})

$(document).ready(function () {

})