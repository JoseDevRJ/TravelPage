var nav = document.querySelector('nav');
window.addEventListener('scroll', function () {
    if (window.pageYOffset > 100) {
        nav.classList.add('bg-dark', 'shadow');
    } else {
        nav.classList.remove('bg-dark', 'shadow')
    }
})
$(".nav-link").on("click", function () {
    $('.navbar-collapse').collapse('hide');
});
$("body").on("click", () => {
    $('.navbar-collapse').collapse('hide');
})