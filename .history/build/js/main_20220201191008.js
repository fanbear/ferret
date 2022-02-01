document.addEventListener('DOMContentLoaded', function () {
    const mainHeader = document.querySelector('.main__header');
    const body = document.querySelector('body');

    body.addEventListener('scroll', () => {
        let scrollTop = body.scrollHeight;
        console.log(scrollTop);
    })
    window.onwheel = (e) => console.log(e.clientX);

})