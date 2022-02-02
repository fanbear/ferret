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
    const btnMore = document.querySelector('.brand__product-more');

    //Показать еще
    function btnMoreShow() {
        const productListUpdate = document.querySelectorAll('.product__group-item .group__item-product-hide ');
        const filtreItemCount = productGroup.length - productListUpdate.length;

        if (filtreItemCount > 9) {
            btnMore.classList.add('brand__product-more__show');
        } else {
            btnMore.classList.remove('brand__product-more__show');
        }
    }
    function btnMoreHide() {
        // btnMore.classList.remove('brand__product-more__show');
        document.querySelector('.product__group-item').style.maxHeight = '100%';
    }

    if (btnMore) {

        btnMoreShow();
        function countProduct() {
            console.log(window.innerWidth);
            let count = window.innerWidth > 600 ? 3 : 1;
            return function () {
                count += 3;
                document.querySelector('.product__group-item').style.maxHeight = `calc(368px * ${count} + ${count * 30}px - 30px)`;
                return count;
            }
        }

        const MoreProducShow = countProduct();

        btnMore.addEventListener('click', function () {
            if (!productGroup.filter(item => item.classList.contains('group__item-product-hide'))) {
                btnMore.classList.remove('brand__product-more__show');
            } else {
                MoreProducShow();
            }
        })
    }

    if (brandsLink) {
        brandsLink.addEventListener('click', function (e) {
            e.preventDefault();
            const link = e.target.closest('.filter__item');
            const filterId = link.dataset.id;

            // Фильтр атрибутов
            const linkList = document.querySelectorAll('.filter__item ');
            linkList.forEach(function (item) {
                item.classList.remove('filter__item-active');
            })
            link.classList.add('filter__item-active')

            // Фильтр продуктов
            productGroup.forEach(function (item) {

                if (!item.classList.contains(filterId)) {
                    item.classList.add('group__item-product-hide');
                    item.classList.remove('group__item-product-show');
                } else {
                    item.classList.add('group__item-product-show');
                    item.classList.remove('group__item-product-hide');
                    btnMoreHide()
                    setTimeout(() => {
                        item.classList.remove('group__item-product-show');
                    }, 1000);
                }
            })
        })



    }


})