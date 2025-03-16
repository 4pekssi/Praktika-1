document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const sideMenu = document.querySelector('.os-rs-header-ul');

    menuToggle.addEventListener('click', function () {
        sideMenu.classList.toggle('active');
    });
});


document.querySelector('.gamb-ico').addEventListener('click', function() {
    this.classList.toggle('active');
    document.querySelector('.right-side-header-ul-li').classList.toggle('open');
})

