document.addEventListener('DOMContentLoaded', function () {
    let scrollpos = window.scrollY
    console.log(scrollpos);
})

$(document).ready(function () {
    $('body').scrool(function () {
        console.log($)
    })
})