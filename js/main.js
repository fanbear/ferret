document.addEventListener('DOMContentLoaded', function () {

    const windowWidth = window.innerWidth;

    // Шапка сайта ---------------------------------------------------
    //----------------------------------------------------------------

    // ------- Мобильное меню сайта
    const mobileMenuBtnOpen = document.querySelector('.wrapper__actions-menu');
    const mobileMenuList = document.querySelector('.header__wrapper-menu__mobile');
    const mobileMenuBtnClose = document.querySelector('.menu__mobile-close');
    const secondMenu = document.querySelector('.secondary__head-wrapper');
    const secondMenuBtn = document.querySelector('.secondary__open-mobile');

    if (mobileMenuBtnOpen) {
        mobileMenuBtnOpen.addEventListener('click', function () {
            mobileMenuList.classList.toggle('menu__mobile-active')
        })
    }
    if (mobileMenuBtnClose) {
        mobileMenuBtnClose.addEventListener('click', function () {
            mobileMenuList.classList.toggle('menu__mobile-active')
        })
    }
    // ---------- Второстипенное меню в шаблоне продуктов и каталоге
    if (secondMenuBtn) {
        secondMenuBtn.addEventListener('click', function () {
            secondMenu.querySelector('ul').classList.toggle('open');
        })
    }

    // Добавление цвета в шапку при прокрутке ******
    // **********************************************
    const header = document.querySelector('.main__header');
    const aboutCompanyPage = document.querySelector('.about__head');
    const product = document.querySelector('#product');
    const news = document.querySelector('.news');
    const article = document.querySelector('.article');
    let scrollpos = window.scrollY;

    const add_class_on_scroll = () => {
        header.classList.add('scroll-active')
        header.classList.remove('scroll-deactive')
    }
    const remove_class_on_scrool = () => {
        header.classList.remove('scroll-active')
        header.classList.add('scroll-deactive')
    }
    if (aboutCompanyPage || product || news || article
        || windowWidth < 500) {

        add_class_on_scroll()

    } else {
        window.addEventListener('scroll', function () {
            let scrollpos = window.scrollY;
            if (scrollpos >= 1) {
                add_class_on_scroll()
            } else {
                remove_class_on_scrool()
            }
        })
    }


    // Фильтр брендов в шаблоне brands------------------------
    // -----------------------------------------
    const brandsLink = document.querySelector('.brand__product-filter');
    const productGroup = document.querySelectorAll('.product__group .group__item-product ');
    const btnMore = document.querySelector('.brand__product-more');
    const btnShowAllProduct = document.querySelector('.product__group-btn__all');

    // Показать все товары
    if (btnShowAllProduct) {
        btnShowAllProduct.addEventListener('click', function () {
            productGroup.forEach(function (item) {
                item.classList.add('group__item-product-show');
                item.classList.remove('group__item-product-hide');
                setTimeout(() => {
                    item.classList.remove('group__item-product-show');
                }, 1000);
            })
            btnMoreShow(0);
            document.querySelector('.product__group').style.maxHeight = `${(368 * 3) + (3 * 30 - 30)}px`;
            btnMore.textContent = 'Показать больше';
        })
    }
    //Обработка кнопки показать больше
    function btnMoreShow() {
        const productListUpdate = document.querySelectorAll('.product__group .group__item-product-hide ');
        const filtreItemCount = productGroup.length - productListUpdate.length;

        if (filtreItemCount > 9) {
            btnMore.classList.add('brand__product-more__show');
        } else {
            btnMore.classList.remove('brand__product-more__show');
        }
    }
    //Скрыть кнопку паказать больше
    function btnMoreHide() {
        btnMore.classList.remove('brand__product-more__show');
        document.querySelector('.product__group').style.maxHeight = '100%';
    }
    //Обратока показа товара за клик
    if (btnMore) {
        btnMoreShow();
        function countProduct() {
            let count = window.innerWidth > 600 ? 3 : 1;

            return function () {
                count += 3;
                console.log(count);
                document.querySelector('.product__group').style.maxHeight = `${(368 * count) + (count * 30 - 30)}px`;
                if (count == productGroup.length / 3) {
                    count = window.innerWidth > 600 ? 3 : 1;
                }
                return count;
            }
        }
        const MoreProducShow = countProduct();

        btnMore.addEventListener('click', function () {
            const width = parseInt(document.querySelector('.product__group').style.maxHeight);
            const s = productGroup.length / 3 * 362 + 30 * productGroup.length / 3 - 30;

            if (width >= s) {
                btnMore.textContent = 'Больше нет';
            } else {
                MoreProducShow();
            }
        })
    }
    // Сортировка товара по атрибутам
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


    // Страница продукта ---------------------
    //----------------------------------------
    const prodcutShare = document.querySelector('.product__share-btn');
    const productShareElem = document.querySelector('.product__share-elem');

    if (prodcutShare) {
        prodcutShare.addEventListener('click', function () {
            prodcutShare.classList.add('product__share-btn__hide');
            productShareElem.style.display = 'flex';

            setTimeout(function () {
                prodcutShare.style.display = 'none';
                productShareElem.classList.add('product__share-elem__show');
            }, 380)
        })
    }

    //Страница категорий ------------------------
    //-------------------------------------------
    const filterItem = document.querySelector('.category__filter-wrapper');

    if (filterItem) {
        filterItem.addEventListener('click', function (e) {
            const target = e.target.closest('.category__filter-item');

            target.classList.toggle('filter-item-opened');
        })
    }


    // Подвал сайта --------------------------------------------
    //----------------------------------------------------------
    const footerMenu = document.querySelector('.main__footer-menu');

    if (windowWidth && footerMenu) {
        footerMenu.addEventListener('click', function (e) {
            const target = e.target.closest('.footer__menu-item');

            target.classList.toggle('footer__menu-item__active');
        })
    }

    //Страница новостей ----------------------------------------
    //----------------------------------------------------------
    const newsWrapper = document.querySelector('.news__wrapper');
    const newsItemsHeight = document.querySelectorAll('.news__item');
    const newsShowMore = document.querySelector('.news__more');

    if (newsWrapper && windowWidth < 500) {
        let height = 1152;
        let maxHeight = 0;

        newsItemsHeight.forEach(function (item) {
            maxHeight += item.offsetHeight;
        })

        newsWrapper.style.height = height + 'px';

        newsShowMore.addEventListener('click', function () {
            height += 1152;

            if (height === 1152) {
                newsShowMore.textContent = '';
                newsShowMore.insertAdjacentHTML('afterbegin', 'больше новостей <span class="news__arrow news__arrow-down"></span>');
            }
            if (maxHeight > height) {
                newsWrapper.style.height = height + 'px';
            } else {
                newsWrapper.style.height = 'auto';
                height = 0;
                newsShowMore.textContent = '';
                newsShowMore.insertAdjacentHTML('afterbegin', 'cкрыть новости <span class="news__arrow news__arrow-up"></span>');;
            }

        })
    }
})