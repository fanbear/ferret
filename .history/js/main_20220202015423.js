document.addEventListener('DOMContentLoaded', function () {

    // Добавление цвета в шапку п ир прокрутке ******
    // **********************************************
    const header = document.querySelector('.main__header')
    const add_class_on_scroll = () => {
        header.classList.add('scroll-active')
        header.classList.remove('scroll-deactive')
    }
    const remove_class_on_scrool = () => {
        header.classList.remove('scroll-active')
        header.classList.add('scroll-deactive')
    }

    window.addEventListener('scroll', function () {
        let scrollpos = window.scrollY;

        if (scrollpos >= 1) {
            add_class_on_scroll()
        } else {
            remove_class_on_scrool()
        }
    })

    // Фильтр брендов
    const brandsLink = document.querySelector('.brand__product-filter');

    if (brandsLink) {
        brandsLink.addEventListener(function (e) {
            e.preventDefault();
            const link = e.target.closest('.filter__item');
            console.log(link);
        })
    }
})