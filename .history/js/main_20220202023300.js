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
            productGroup.forEach(item => {
                if (!item.classList.contains(filterId)) {
                    // item.closest('.slick-track').querySelectorAll('.slick-slide').forEach(slider => {
                    //     slider.classList.remove('slick-active');
                    // })
                    // item.closest('.slick-slide').classList.add('slick-active');
                    // item.closest('.slick-slide').classList.add('slick-current');
                    item.closest('.slick-track').style.transform = 'translate3d(-2300px', '0px', '0px)';
                    console.log(item.closest('.slick-track'))

                    // item.classList.add('group__item-product-hide');
                } else {
                    // item.classList.rem('group__item-product-hide');
                }
            })
        })
    }
})