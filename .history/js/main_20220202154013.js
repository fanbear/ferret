document.addEventListener('DOMContentLoaded', function () {

    // Добавление цвета в шапку п ир прокрутке ******
    // **********************************************
    const header = document.querySelector('.main__header');
    let scrollpos = window.scrollY;
    const add_class_on_scroll = () => {
        header.classList.add('scroll-active')
        header.classList.remove('scroll-deactive')
    }
    const remove_class_on_scrool = () => {
        header.classList.remove('scroll-active')
        header.classList.add('scroll-deactive')
    }
    if (scrollpos >= 1) {
        add_class_on_scroll()
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
    const productGroup = document.querySelectorAll('.product__group-item .group__item-product ');

    if (brandsLink) {
        brandsLink.addEventListener('click', function (e) {
            e.preventDefault();
            const link = e.target.closest('.filter__item');
            const filterId = link.dataset.id;

            productGroup.forEach(function (item) {

                if (!item.classList.contains(filterId)) {
                    item.classList.add('group__item-product-hide');
                    item.classList.remove('group__item-product-show');
                } else {
                    item.classList.add('group__item-product-show');
                    item.classList.remove('group__item-product-hide');
                    setTimeout(() => {
                        item.classList.remove('group__item-product-show');
                    }, 100);
                }
            })
        })
    }
})